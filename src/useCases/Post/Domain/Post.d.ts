


export interface PostInterface {

  createPost(title:string, content:string) : Promise<any>
  getPosts() : Promise<any>
  deletedPost(id:string) : Promise<any>
  updatePost(id:string, title:string, content:string) : Promise<any>
}
