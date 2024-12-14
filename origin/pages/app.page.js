import { MainPage, ErrorPage, ProductPage, CartPage} from "../pages/index";

class App {
    constructor(page) {
        this.page = page;
        this.mainPage = new MainPage(page);
        this.errorPage = new ErrorPage(page);
        this.productPage = new ProductPage(page); 
        this.cartPage = new CartPage(page); 
    }
}
export {App};