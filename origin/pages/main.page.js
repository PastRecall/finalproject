import { allure } from "allure-playwright";
import { BasePage } from "./base.page"; 

class MainPage extends BasePage{
    constructor(page) {
        super(page);
        this.showPerPageButton = this.page.getByRole('link', { name: '50' });
        this.addToCartButton = this.page.locator('#ec_add_to_cart_5');
        this.viewCartButton = this.page.getByRole('link', { name: 'View Cart' })
        this.productDetails = this.page.locator('#ec_product_image_effect_4481370').getByRole('link');
    }
    async selectItemsPerPage() {
        await allure.step("Выбрать количество элементов на странице", async () => {
        await this.showPerPageButton.click();
        });
    }
    async addItemsToCart() {
        await allure.step("Добавить товары в корзину", async () => {
        await this.addToCartButton.click();
        });
    }
    async proceedToCart() {
        await allure.step("Перейти в корзину", async () => {
        await this.viewCartButton.click();
        });
    }
    async showProductDetails() {
        await allure.step("Перейти в карточку товара", async () => {
        await this.productDetails.click();
        });
    }
}
export {MainPage}; 