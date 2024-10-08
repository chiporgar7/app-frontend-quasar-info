<template>
  <div class="col-12">
    <q-btn
      color="primary"
      label="Exportar publicaciones"
      @click="exportPosts"
    />
  </div>
</template>

<script setup>
import { useNotify } from 'src/composables/Ui/useNotify';
import { useLoading } from 'src/composables/Ui/useLoading';
import { useProvider } from 'src/composables/Provider/useProvider';

const provider = useProvider();
const notify = useNotify();
const loading = useLoading();
const simulateDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const exportPosts = async () => {
  try {
    loading.show('Espere un momento...');
    await simulateDelay(3000);
    const blob = await provider.Post.exportPosts.handle();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'publicaciones_exportadas.xlsx';
    link.click();
    window.URL.revokeObjectURL(url);
    notify.success('Publicaciones exportadas exitosamente');
  } catch (error) {
    notify.error('Error al exportar publicaciones');
  } finally {
    loading.hide();
  }
};
</script>
