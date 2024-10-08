import { computed, ref } from 'vue';

export function useValidationRules(initialMaxTitleLength = 200, initialMaxContentLength = 2300) {
  const maxTitleLength = ref(initialMaxTitleLength);
  const maxContentLength = ref(initialMaxContentLength);

  const titleRules = computed(() => [
    (val: string) => !!val || 'Title is required',
    (val: string) => val.length <= maxTitleLength.value || `Title must be ${maxTitleLength.value} characters or less`
  ]);

  const contentRules = computed(() => [
    (val: string) => !!val || 'Content is required',
    (val: string) => val.length <= maxContentLength.value || `Content must be ${maxContentLength.value} characters or less`
  ]);


  return {
    titleRules,
    contentRules,
  };
}
