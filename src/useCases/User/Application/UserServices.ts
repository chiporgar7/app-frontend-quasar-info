import instanceAxios from 'src/useCases/Shared/axiosConfig';

import { UserRepository } from '../Infrastructure/UserRepository';
import LoginUser from './LoginUser';
import RegisterUser from './RegisterUser';
import LogoutUser from './LogoutUser';
import GetCurrentUser from './GetCurrentUser';

const instanceRepo = new UserRepository(instanceAxios);


const UserServices = {
  login: new LoginUser(instanceRepo),
  register: new RegisterUser(instanceRepo),
  logout: new LogoutUser(instanceRepo),
  getCurrentUser: new GetCurrentUser(instanceRepo)
}


export default UserServices
