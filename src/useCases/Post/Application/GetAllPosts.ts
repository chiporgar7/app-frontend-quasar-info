import { PostInterface } from '../Domain/Post';

export default class GetAllPosts {
  constructor(private PostRepository: PostInterface) {}

  async handle(): Promise<any> {
    return await this.PostRepository.getPosts();
  }
}
