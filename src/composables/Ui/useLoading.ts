import { useQuasar } from 'quasar'

export function useLoading() {
  const $q = useQuasar()

  const show = (message = 'Cargando...') => {
    $q.loading.show({
      message,
    })
  }

  const hide = () => {
    $q.loading.hide()
  }
  return { show, hide }
}
