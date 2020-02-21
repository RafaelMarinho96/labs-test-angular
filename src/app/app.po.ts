import { browser, by, element } from 'protractor';


export class AppPage {
    
    navigateToNotFoundRoute() {
        return browser.get('/');
    }
    
    getTitleNotFoundRoute() {
        return element(by.css("form__title p")).getText();
    }

    cep =  element(by.id('status'));

}