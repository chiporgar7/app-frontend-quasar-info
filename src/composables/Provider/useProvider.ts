import { getCurrentInstance } from 'vue';
import { getGlobalProvider } from 'src/boot/repositories';

export function useProvider() {
  const app = getCurrentInstance();
  if (app) {
    return app.appContext.config.globalProperties.$provider;
  }
  return getGlobalProvider();
}
