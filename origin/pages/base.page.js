import { allure } from "allure-playwright";

class BasePage {
    constructor(page) {
        this.page = page;
        this.url = process.env.UI_URL;
     }
    async open() {
        await allure.step("Открыть страницу", async () => {
        await this.page.goto(this.url);
        });
    }
}
export {BasePage}; 