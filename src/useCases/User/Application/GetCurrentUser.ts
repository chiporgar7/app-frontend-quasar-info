import { UserInterface } from '../Domain/User';

export default class GetCurrentUser {
  constructor(private UserRepository: UserInterface) {}

  async handle(): Promise<any> {
    return await this.UserRepository.getCurrentUser();
  }
}
