import { step } from "allure-js-commons";

class ApiService {
  constructor() {
    this.URL = process.env.API_URL;
 }
  async getPosts(request) {
    return step("Отправление запроса на получение списка постов", async () => {
      let response = await request.get(`${this.URL}/posts`);
    return response; 
    });
  }

  async getPostById(request, id) {
    return step("Отправление запроса на получение поста по идентификкатору", async () => {
    let response = await request.get(`${this.URL}/posts/${id}`);
    return response; 
    });
  }

  async createPost(request, data) {
    return step("Отправление запроса на создание нового поста", async () => {
    let response = await request.post(`${this.URL}/posts`, {
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
      data: data,
  });
    return response; 
    });
  }
 
  async updatePost(request, id, data) {
    return step("Отправление запроса на обновление поста по идентификатору", async () => {
    let response = await request.put(`${this.URL}/posts/${id}`, {
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
      data: data,
  });
    return response; 
    });
  }

  async deletePost(request, id) {
    return step("Отправление запроса на удаление поста по идентификатору", async () => {
    let response = await request.delete(`${this.URL}/posts/${id}`);
    return response; 
    });
  }
}
export {ApiService};