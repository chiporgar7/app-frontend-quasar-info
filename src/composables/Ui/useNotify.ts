import { useQuasar } from 'quasar'

export function useNotify() {
  const $q = useQuasar()

  const success = (message: string) => {
    $q.notify({
      type: 'positive',
      message
    })
  }

  const error = (message: string) => {
    $q.notify({
      type: 'negative',
      message
    })
  }

  const warning = (message: string) => {
    $q.notify({
      type: 'warning',
      message
    })
  }

  const info = (message: string) => {
    $q.notify({
      type: 'info',
      message
    })
  }

  return { success, error, warning, info }
}
