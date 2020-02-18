import { browser, by, element } from 'protractor';


export class AppPage {
    
    navigateToNotFoundRoute() {
        return browser.get('/teste');
    }
    
    getTitleNotFoundRoute() {
        return element(by.css('not-found__subtitle p')).getText();
    }
}