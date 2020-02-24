import { browser, by, element } from 'protractor';

export class AppPage {
    
    navigateToHomepage() {
        return browser.get('/');
    }
    
    getTitleHomepage() {
        return element(by.className("form__title")).getText();
    }

    cep =  element(by.id('cep'));
    btnBuscar = element(by.buttonText('Buscar'));

    getSelectedElement = () => browser.driver.switchTo().activeElement();

    wait = (ms: number) => {
      browser.sleep(ms);
    }

    successCep(){
      browser.ignoreSynchronization = true;
      var mapa = element(by.className('map--show'));
      return mapa;
    }

    navigateToNotFoundRoute() {
      return browser.get('/xyz');
    }

    getTitleNotFound(){
      return element(by.className("not-found__subtitle")).getText();
    }

}