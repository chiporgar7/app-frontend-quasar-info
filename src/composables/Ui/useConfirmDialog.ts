import { useQuasar } from 'quasar';

export function useConfirmDialog() {
  const $q = useQuasar();

  const confirm = (options: {
    title: string;
    message: string;
    okLabel?: string;
    cancelLabel?: string;
  }) => {
    return new Promise((resolve) => {
      $q.dialog({
        title: options.title,
        message: options.message,
        ok: options.okLabel || 'Aceptar',
        cancel: options.cancelLabel || 'Cancelar',
        persistent: true
      }).onOk(() => {
        resolve(true);
      }).onCancel(() => {
        resolve(false);
      });
    });
  };

  return {
    confirm
  };
}
