import { UserInterface } from '../Domain/User';

export default class RegisterUser {
  constructor(private UserRepository: UserInterface) {}

  async handle(name: string, email: string, password: string): Promise<any> {
    return await this.UserRepository.register(name, email, password);
  }
}
