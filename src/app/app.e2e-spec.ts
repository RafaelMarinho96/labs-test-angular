import {} from 'jasmine';
import { AppPage } from './app.po';

describe('workspace-project app', () => {
    let pagina: AppPage;

    beforeEach(() => {
        pagina = new AppPage();
    });

    //teste a ser executado
    it('Must navigate to Not found route', () => {
        pagina.navigateToNotFoundRoute();
        expect(pagina.getTitleNotFoundRoute()).toEqual('Pagina não Encontrada');
    });
})