import { allure } from "allure-playwright";
import { BasePage } from "./base.page"; 

class CartPage extends BasePage{
    constructor(page) {
        super(page);
        this.deleteProductButton = this.page.locator('.ec_cartitem_delete');
        this.addProductButton = this.page.getByRole('button', { name: '+' });
        this.updateButton = this.page.getByText('UPDATE');
        this.backToShopButton = this.page.getByRole('link', { name: 'RETURN TO STOR      E' });
        this.selectCurrency = this.page.locator('#ec_currency_conversion');
        this.grandTotal = this.page.locator('#ec_cart_total');
    }
    async deleteCartItem() {
        await allure.step("Удалить товар из корзины", async () => {
        await this.deleteProductButton.click();
        });
    }
    async incrementCartItem(clicks) {
        await allure.step("Увеличить и обновить кол-во товара в корзине", async () => {
            for (let i = 0; i < clicks; i++) {
                await this.addProductButton.click();
                }
            await this.updateButton.click(); 
        });
    }
    async returnToMainPage() {
        await allure.step("Вернуться на главную страницу", async () => {
        await this.backToShopButton.click();
        });
    }
    async changeCurrency() {
        await allure.step("Изменить валюту", async () => {
        await this.selectCurrency.selectOption('JPY');
        });
    }
   async getTotalAmount() {
        await allure.step("Проверить общую стоимость товара", async () => {
        await this.grandTotal.click();
        });
    }
}
export {CartPage}; 

