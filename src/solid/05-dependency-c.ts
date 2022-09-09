import localPost from '../data/local-database.json';
import { Post } from './05-dependency-b';

export abstract class PostProvider {
  abstract getPost(): Promise<Post[]>
}

export class LocalDBService implements PostProvider {

  constructor() {}

  async getPost() {
      return [
          {
              'userId': 1,
              'id': 1,
              'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
              'body': 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
          },
          {
              'userId': 1,
              'id': 2,
              'title': 'qui est esse',
              'body': 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
          }]
  }

}

export class JsonDBService implements PostProvider {
  async getPost() {
    return localPost;
  }
}

export class WebAPIPostService implements PostProvider {
  async getPost() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const response = await fetch(url);
    return await response.json()
  }
}
