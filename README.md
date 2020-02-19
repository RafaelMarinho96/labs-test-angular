# Desafio FrontEnd - Luiza Labs
Criar uma interface web para consulta de endereço a partir do CEP, baseada no wireframe apresentado no link abaixo.

**Link:** https://drive.google.com/file/d/17pBOR0BqJh37PxrJpYN8cIBvRCdVbG0n/view?usp=sharing

#### Sobre a Aplicação
A aplicação foi desenvolvida utilizando o framework Angular 6 e as APIs, ViaCEP e Google Geolocation.

O wireframe foi dividido em 3 componentes principais.

- **Header**
- **Busca**
- **Mapa**

#### Rotas da Aplicação
A aplicação contem apenas a rota raiz **"/"**, os demais endereços **"/xyz"** serão tratados como rotas desconhecidas.


#### Estrutura de Diretórios
- **Modules** - Todos os modulos de funcionalidade da aplicação, por exemplo os componentes de busca e mapa.
- **Core** - Serviços singleton, componentes universais e outros recursos, por exemplo header, footer, services, directives.
- **Shared** - componentes compartilhados da aplicação, por exemplo toast component, progress bar.

#### Estrutura SCSS
Para os estilos da aplicação a seguinte estrutura foi adotada.
- **Base** - Arquivos comuns para toda a aplicação, por exemplo arquivos de layout e configurações (variables, mixins...).
- **Modules** - Arquivos de componentes, por exemplo buttons, inputs, etc.

> Para a nomeação de classes css foi adotada o padrão BEM CSS.
> **Referencia:** [http://getbem.com/introduction/](http://getbem.com/introduction/)

#### Funcionamento da Aplicação
- A aplicação inicia com o componente **mapa** oculto, o mesmo somente será exibido após a inserção do CEP.
- O usuário precisa inserir o CEP para realizar a consulta, neste momento algumas validações são aplicadas:
	
	- Valida se o campo possui 8 caracteres numéricos.
	- Valida se o campo esta vazio.
	-  Bloqueia a entrada de letras e caracteres especiais. 
- Após a inserção do CEP o usuário deverá clicar sobre o botão consultar. 
- Se não houver erros de validação o componente busca enviara o CEP para o serviço **via-cep.service.ts** que realizará a requisição JSONP para ViaCEP Api.
- O retorno do ViaCEP será direcionado para o componente de busca que ira tratar  2 tipos de erros:

	- Serviço indisponível (Caso haja alguma falha na requisição) - Neste caso será exibido na tela **toast** componente com a informação *"Serviço Indisponível"*
	- CEP não encontrado - Caso a resposta do ViaCEP sejá um `erro: true` será exibido na tela **toast** componente com a informação *"O CEP informado é invalido"*.
- Caso não haja erros o componente de busca irá emitir o json para o serviço **consulta-cep.service.ts** 
- O serviço **consulta-cep.service.ts** é compartilhado entre os componentes, ele irá emitir o json rebido para os componentes que estão *"inscritos"* para receber sua resposta.
- O componente **mapa** está inscrito na resposta do serviço **consulta-cep.service.ts** e irá receber a notificação da emissão do json.
- Após receber o json ele irá inserir as informações do endereço na tela e realizar uma nova requisição para o serviço **geocode.service.ts**.
- O serviço **geocode.service.ts** será o responsável obter a latitude e longitude do CEP informado.
- Após receber estas informações o mesmo irá direcionar estes dados para o componente de mapa, que por sua vez utiliza o pacote **agm-map** para apresentar o google maps na tela.
