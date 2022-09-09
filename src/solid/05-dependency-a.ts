import { PostService } from './05-dependency-b';
import { JsonDBService, LocalDBService, WebAPIPostService } from './05-dependency-c';


// Main
(async () => {
  // const provider = new JsonDBService();
  // const provider = new LocalDBService();
  const provider = new WebAPIPostService();

  const postService = new PostService(provider);

  const posts = await postService.getPosts();

  console.log({ posts })


})();
