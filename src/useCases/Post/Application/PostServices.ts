import instanceAxios from 'src/useCases/Shared/axiosConfig';
import { PostRepository } from '../Infrastructure/PostRepository';
import CreatePost from './CreatePost';
import UpdatePost from './UpdatePost';
import GetAllPosts from './GetAllPosts';
import DeletePost from './DeletePost';
import GetMyPosts from './GetAllPostMe';
import ExportPosts from './ExportPosts';

const instanceRepo = new PostRepository(instanceAxios);

const PostServices = {
  create : new CreatePost(instanceRepo),
  update : new UpdatePost(instanceRepo),
  get: new GetAllPosts(instanceRepo),
  delete: new DeletePost(instanceRepo),
  getMyPosts : new GetMyPosts(instanceRepo),
  exportPosts: new ExportPosts(instanceRepo)
}

export default PostServices;
