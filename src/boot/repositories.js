import { AppProvider } from 'src/useCases/Shared/Provider/AppProvider';

//Esto es para que funcione dentro de una tienda de PINIA esta configuración
let globalProvider = null;

export function getGlobalProvider() {
  if (!globalProvider) {
    throw new Error('Global provider has not been set.');
  }
  return globalProvider;
}

export default ({ app }) => {
  const provider = AppProvider();
  app.config.globalProperties.$provider = provider;
  globalProvider = provider;
};
