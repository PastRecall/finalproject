import { allure } from "allure-playwright";

class BasePage {
    constructor(page) {
        this.page = page; 
     }
    async open(url) {
        await allure.step("Открыть страницу", async () => {
        await this.page.goto(url);
        });
    }
}
export {BasePage}; 