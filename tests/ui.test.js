import { test, expect } from '@playwright/test';
import { allure } from "allure-playwright";
import { App } from '../origin/pages/index';
import { CommentBuilder } from '../origin/builders/builder.ui';

const url = 'https://academybugs.com/find-bugs/';
let app;
let comment;

test.describe('UI Tests Academybug', () => {
    test.beforeEach(async ({ page }) => {
        app = new App(page);
        await app.mainPage.open(url);
    });

    test('Ошибка отображения количества товара на главной странице @BUG', async () => { 
        await allure.owner("Akhatova");
        await allure.tags("BUG UI");
        await app.mainPage.selectItemsPerPage();
        await allure.step("Сообщение о критической ошибке", async () => {
        await expect(app.errorPage.errorText).toContainText('You found a crash bug, examine the page for');
        await allure.step("Открытие окна с подробной информацией об ошибке", async () => {
        await expect(app.errorPage.errorModal).toBeVisible();}); 
        }); 
    });

    test('Ошибка увеличения количества товаров в корзине @BUG', async () => { 
        await allure.owner("Akhatova");
        await allure.tags("BUG UI");
        await app.mainPage.addItemsToCart();
        await app.mainPage.proceedToCart();
        await app.cartPage.incrementCartItem(3);
        await allure.step("Открытие окна с подробной информацией об ошибке", async () => {
        await expect(app.errorPage.errorModal).toBeVisible();
        }); 
    }); 

    test('Ошибка возврата на главную страницу при удалении товара из козины @BUG', async () => { 
        await allure.owner("Akhatova");
        await allure.tags("BUG UI");
        await app.mainPage.addItemsToCart();
        await app.mainPage.proceedToCart();
        await app.cartPage.deleteCartItem();
        await app.cartPage.returnToMainPage();
        await allure.step("Открытие окна с подробной информацией об ошибке", async () => {
        await expect(app.errorPage.errorModal).toBeVisible();
        }); 
    }); 

    test('Ошибка смены валюты @BUG', async () => { 
        await allure.owner("Akhatova");
        await allure.tags("BUG UI");
        await app.mainPage.addItemsToCart();
        await app.mainPage.proceedToCart();
        await app.cartPage.incrementCartItem(1);
        await app.cartPage.changeCurrency();
        await allure.step("Сообщение о критической ошибке", async () => {
        await expect(app.errorPage.errorInfo).toContainText('You found a crash bug, examine the page for');
        }); 
    }); 

    test('Ошибка подсчета общей стоимости товара в корзине @BUG', async () => { 
        await allure.owner("Akhatova");
        await allure.tags("BUG UI");
        await app.mainPage.addItemsToCart();
        await app.mainPage.proceedToCart();
        await app.cartPage.incrementCartItem(1);
        await app.cartPage.getTotalAmount(); 
        await allure.step("Открытие окна с подробной информацией об ошибке", async () => {
        await expect(app.errorPage.errorModal).toBeVisible();
        }); 
    }); 

    test('Ошибка публикации комментария к товару @BUG', async () => { 
        await allure.owner("Akhatova");
        await allure.tags("BUG UI");
        comment = new CommentBuilder().addEmail().addName().addComment().addWebsite().generate();
        await app.mainPage.showProductDetails();
        await app.productPage.addComment(comment.userComment, comment.userName, comment.userEmail, comment.userWebsite);
        await allure.step("Открытие окна с подробной информацией об ошибке", async () => {
        await expect(app.errorPage.errorModal).toBeVisible();
        }); 
    }); 

    test('Ошибка перехода на страницу производителя товара @BUG', async () => { 
        await allure.owner("Akhatova");
        await allure.tags("BUG UI");
        await app.mainPage.showProductDetails();
        await app.productPage.openManufacturer();
        await allure.step("Сообщение о несуществующей странице", async () => {
        await expect(app.errorPage.errorURL).toContainText('404 Error');
        }); 
    });

    test('Ошибка фильтрации товаров по ценовому диапазону @BUG', async () => { 
        await allure.owner("Akhatova");
        await allure.tags("BUG UI");
        await app.mainPage.showProductDetails();
        await app.productPage.filterByPrice();
        await allure.step("Открытие окна с подробной информацией об ошибке", async () => {
        await expect(app.errorPage.errorModal).toBeVisible();
        }); 
    });
});