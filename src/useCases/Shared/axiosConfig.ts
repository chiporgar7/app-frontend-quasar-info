import { AxiosResponse, AxiosInstance } from 'axios';

export class BaseRepository {
  protected BASE_URL = 'https://func-ussc-dev-siarh-plantilla-plazas.azurewebsites.net/api';
  protected axios: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axios = axiosInstance;
    const URL_SERVER = process.env.API_MOVIMIENTO_KARDEX;
    if (URL_SERVER) this.BASE_URL = URL_SERVER;
  }

  set BaseURL(url: string) {
    this.BASE_URL = url;
  }

  get BaseURL() {
    return this.BASE_URL;
  }

  protected async request<T>(callback: () => Promise<AxiosResponse<T>>): Promise<T> {
    const response = await callback();
    return response.data;
  }
}
