import { step } from "allure-js-commons";

class ApiService {

  async getPosts(request, URL) {
    return step("Отправление запроса на получение списка постов", async () => {
      let response = await request.get(`${URL}/posts`);
    return response; 
    });
  }

  async getPostById(request, URL, id) {
    return step("Отправление запроса на получение поста по идентификкатору", async () => {
    let response = await request.get(`${URL}/posts/${id}`);
    return response; 
    });
  }

  async createPost(request, URL, data) {
    return step("Отправление запроса на создание нового поста", async () => {
    let response = await request.post(`${URL}/posts`, {
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
      data: data,
  });
    return response; 
    });
  }
 
  async updatePost(request, URL, id, data) {
    return step("Отправление запроса на обновление поста по идентификатору", async () => {
    let response = await request.put(`${URL}/posts/${id}`, {
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
      data: data,
  });
    return response; 
    });
  }

  async deletePost(request, URL, id) {
    return step("Отправление запроса на удаление поста по идентификатору", async () => {
    let response = await request.delete(`${URL}/posts/${id}`);
    return response; 
    });
  }
}
export {ApiService};