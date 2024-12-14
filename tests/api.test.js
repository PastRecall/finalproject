import { AppApi } from "../origin/services/app.api";
import { PostBuilder } from "../origin/builders/builder.api";
import { test, expect } from "@playwright/test";
import { allure } from "allure-playwright";

let postBuilder = new PostBuilder();
let appApi = new AppApi();

test.describe('API Tests Jsonplaceholder', () => {
    let URL = 'https://jsonplaceholder.typicode.com';
    let id;

    test('Получение списка постов @API', async ({ request }) => {
        await allure.owner("Akhatova");
        await allure.tags("API");
        const response = await appApi.apiService.getPosts(request, URL);
        const body = await response.json();
        id = body[0].id;
        await allure.step('Проверка, что длина массива постов больше 0', () => {
        expect(body.length).toBeGreaterThan(0);});
        await allure.step('Проверка, что статус ответа равен 200', () => {
        expect(response.status()).toBe(200);});
        await allure.step('Проверка, что ответ является массивом', () => {
        expect(Array.isArray(body)).toBe(true);});
        await allure.step('Проверка структуры постов в ответе', () => {
        expect(body).toEqual(expect.arrayContaining([
        expect.objectContaining({userId: expect.any(Number), id: expect.any(Number), title: expect.any(String), body: expect.any(String),}),]),);
        });
    });

    test('Получение конкретного поста @API', async ({ request }) => {
        await allure.owner("Akhatova");
        await allure.tags("API");
        const response = await appApi.apiService.getPostById(request, URL, id);
        const body = await response.json();
        await allure.step('Проверка, что статус ответа равен 200', () => {
        expect(response.status()).toBe(200);});
        await allure.step('Проверка структуры поста в ответе', () => {
        expect(body).toEqual(
        expect.objectContaining({userId: expect.any(Number), id: id, title: expect.any(String), body: expect.any(String),}),);
        });
    });

    test('Создание нового поста @API', async ({ request }) => {
        await allure.owner("Akhatova");
        await allure.tags("API");
        const data = postBuilder.build();
        const response = await appApi.apiService.createPost(request, URL, data);
        const body = await response.json();
        await allure.step('Проверка, что статус ответа равен 201', () => {
        expect(response.status()).toBe(201);});
        await allure.step('Проверка структуры созданного поста в ответе', () => {
        expect(body).toEqual(expect.objectContaining({title: data.title, body: data.body, userId: data.userId, id: expect.any(Number),}),);
        });
    });

    test('Обновление поста @API', async ({ request }) => {
        await allure.owner("Akhatova");
        await allure.tags("API");
        const data = postBuilder.build();
        const response = await appApi.apiService.updatePost(request, URL, id, data);
        const body = await response.json();
        await allure.step('Проверка, что статус ответа равен 200', () => {
        expect(response.status()).toBe(200);});
        await allure.step('Проверка структуры обновленного поста в ответе', () => {
        expect(body).toEqual(expect.objectContaining({title: data.title, body: data.body, userId: data.userId, id: id,}),);
        });
    });

    test('Удаление поста @API', async ({ request }) => {
        await allure.owner("Akhatova");
        await allure.tags("API");
        const response = await appApi.apiService.deletePost(request, URL, id);
        await allure.step('Проверка, что статус ответа равен 200', () => {
        expect(response.status()).toBe(200);
        });
    });
});