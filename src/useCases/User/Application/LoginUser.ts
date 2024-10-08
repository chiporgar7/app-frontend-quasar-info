import { UserInterface } from '../Domain/User';

export default class LoginUser {
  constructor(private UserRepository: UserInterface) {}

  async handle(email: string, password: string): Promise<any> {
    return await this.UserRepository.login(email, password);
  }
}
