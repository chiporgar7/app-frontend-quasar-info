import PostServices from 'src/useCases/Post/Application/PostServices';
import UserServices from 'src/useCases/User/Application/UserServices';


export function AppProvider(){
  return {
    Post : PostServices,
    User: UserServices
  }
}
