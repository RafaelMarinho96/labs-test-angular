import {} from 'jasmine';
import { AppPage } from './app.po';

describe('workspace-project app', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    //teste a ser executado
    it('Navega para a pagina inicial', () => {
        page.navigateToHomepage();
        expect<any>(page.getTitleHomepage()).toEqual('Consultar');
        
    });

    it('Preenche o formulario', () => {
      let cep = '09240-210';
      page.cep.sendKeys(cep);

      expect(page.cep.getAttribute('value')).toEqual(cep);
    })

    it('Clica em Buscar CEP', () => {
      page.btnBuscar.click();
      page.wait(3000);
    })

    it('CEP consultado com sucesso', () => {
      expect(page.successCep().isPresent()).toBe(true);
    })

    it('Navega para um pagina inexistente', () => {
      page.navigateToNotFoundRoute();
      expect<any>(page.getTitleNotFound()).toEqual('Pagina não Encontrada');
    })
})
