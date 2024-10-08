import { UserInterface } from '../Domain/User';

export default class LogoutUser {
  constructor(private UserRepository: UserInterface) {}

  async handle(): Promise<any> {
    return await this.UserRepository.logout();
  }
}
