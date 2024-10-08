import { UserInterface } from '../Domain/User';
import { BaseRepository } from 'src/useCases/Shared/Repository/BaseRepository';

export class UserRepository extends BaseRepository implements UserInterface {
  login(email: string, password: string): Promise<any> {
    return this.request(() => this.axios.post(`${this.BASE_URL}/login`, {
      email, password
    }));
  }

  register(name: string, email: string, password: string): Promise<any> {
    return this.request(() => this.axios.post(`${this.BASE_URL}/register`, {
      name, email, password
    }));
  }

  logout(): Promise<any> {
    return this.request(() => this.axios.post(`${this.BASE_URL}/logout`));
  }

  getCurrentUser(): Promise<any> {
    return this.request(() => this.axios.get(`${this.BASE_URL}/user`));
  }



}
