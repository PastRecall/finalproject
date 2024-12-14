import { BasePage } from "./base.page"; 

class ErrorPage extends BasePage{
    constructor(page) {
        super(page);
        this.errorText = this.page.locator('.academy-bug-overlay');
        this.errorModal= this.page.locator('#popmake-4406');
        this.errorInfo = this.page.locator('.academy-bug-info-overlay');
        this.errorURL = this.page.locator('.sq-main-title');
    }
}
export {ErrorPage}; 