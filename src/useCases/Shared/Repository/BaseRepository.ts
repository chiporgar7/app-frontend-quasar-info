import { AxiosResponse, AxiosInstance } from 'axios';

export class BaseRepository {
  protected BASE_URL = 'http://127.0.0.1:8000/api';
  protected axios: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axios = axiosInstance;
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
