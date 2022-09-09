import { LocalDBService, PostProvider } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private postProvider: PostProvider) {}

    async getPosts() {
        const jsonDB = new LocalDBService();
        this.posts = await this.postProvider.getPost();

        return this.posts;
    }
}
