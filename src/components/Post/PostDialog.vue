<template>
  <q-dialog v-model="showDialog">
    <q-card style="min-width: 350px">
      <q-form
        ref="formRef"
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-card-section>
          <div class="text-h6">{{ title }}</div>
        </q-card-section>
        <q-card-section>
          <q-input v-model="post.title" label="Título" :rules="titleRules" />
          <q-input
            v-model="post.content"
            label="Contenido"
            type="textarea"
            :rules="contentRules"
          />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            label="Cancelar"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
            v-close-popup
          />
          <q-btn :label="submitLabel" type="submit" color="primary" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useValidationRules } from 'src/composables/Utils/useValidationRules';
import { QForm } from 'quasar';

const props = defineProps({
  modelValue: Boolean,
  title: String,
  submitLabel: String,
  initialPost: Object,
});

const emit = defineEmits(['update:modelValue', 'submit']);

const formRef = ref(null);
const { titleRules, contentRules } = useValidationRules();

const showDialog = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

const post = ref({ ...props.initialPost });
watch(
  () => props.initialPost,
  (newValue) => {
    post.value = { ...newValue };
  },
  { deep: true }
);

const onSubmit = async () => {
  if (formRef.value) {
    const isValid = await formRef.value.validate();
    if (!isValid) {
      return;
    }
  }
  emit('submit', { ...post.value });
};

const onReset = () => {
  post.value = { ...props.initialPost };
  emit('update:modelValue', false);
};
</script>
