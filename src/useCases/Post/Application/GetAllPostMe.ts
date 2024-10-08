import { PostInterface } from '../Domain/Post';

export default class GetMyPosts {
  constructor(private PostRepository: PostInterface) {}

  async handle(): Promise<any> {
    return await this.PostRepository.getMyPosts();
  }
}
