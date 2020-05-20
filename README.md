# Chord

<p align="center">
    <img src="https://drive.google.com/uc?export=view&id=1_PxNua1RvSfrpwM0E-GF5tZLM51UpqV_" height="400" width="400">
</p>

Chord é um framework SPA (Single Page App) muito simples e versátil, capaz de criar aplicações modulares com muita rapidez. As páginas da aplicação são divididas em módulos permitindo assim uma maior facilidade de manutenção e organização dos projetos desenvolvidos. O Chord possui também a a funcionalidade de roteamento, que é capaz de criar a sensação de que o usuário esteja navegando entre as páginas (módulos) sem que a página seja realmente trocada no browser. 

O Chord foi desenvolvido com o intuito de colocar os conhecimentos do seu criador em prática (JavaScript, Webpack, Design Patterns, etc.) 

### Primeiros Passos
Para começar a utilizar o Chord, é necessário clonar o projeto ou fazer o download.

```
git clone https://github.com/rabello98/chord-app.git
```

Para ver em funcionamento basta rodar os comandos para instalar os pacotes 

```
npm install
```

E iniciar o servidor de desenvolvimento

```
npm run dev
```

E pronto! acesse a URL pelo browser que tudo está funcionando. O Servidor está configurado por padrão na porta 8000 mas você pode alterar para uma porta de sua preferência alterando a variável ```APP_DEV_SERVER_PORT``` no ```.env```.

### Importando módulos externos

O arquivo principal do Chord fica em ```/js/app.js```. Lá estão as configurações iniciais da aplicação e tudo que precisar ser carregado. Caso queria importar módulos externos, basta importar os módulos e registrar com o método ```initGlobalModules```.

```javascript
import moment from 'moment'

$chord.initGlobalModules({
    moment
})
```

### Criando suas primeiras páginas
No Chord as páginas são tratadas como módulos. Para criar um módulo, é necessário incluir dois arquivos, um na pasta ```/js``` e o outro na pasta ```/view```. No projeto de exemplo temos a área de produtos com alguns módulos de demonstração.

O exemplo a seguir mostra a estrutura necessária para criar a área de produtos.

```
-app
  -js
    -modules
      -products
        -index.js
        -edit.js
        -detail.js
```

```
-app
  -view
    -modules
      -products
        -indexView.html
        -editView.html
        -detailView.html
```

Para que a renderização seja feita corretamente, o módulo precisa seguir a seguinte estrutura:

```javascript
export default {
    component: {
        navigateToEdit () {
            $route.go({ name: 'products.edit', params: { product_id : '5341'} })
        },

        navigateToIndex () {
            $route.go({ name: 'products.index', params: { product_id : '5341'} })
        }
    }
}
```

Dentro do objeto ```component``` devem ser colocadas todas as funcionalidades do módulo.

Na view apenas coloque seu código html dentro de um div:

```html
<div class="product-detail">
    <h2>PS5 Detail</h2>
    <button onclick="navigateToEdit()" class="btn btn-dark">PS5 Edit</button>
    <button onclick="navigateToIndex()" class="btn btn-dark">Return to List</button>
</div>
```
### Roteamento
Para ver a sua página em funcionamento, é necessário registrá-la nas rotas da aplicação. Para áreas novas crie o arquivo para configurar as rotas em ```/app/routes/areaName.js```. No nosso caso vamos registrar as rotas em ```/app/routes/products.js```.

```javascript
import index from 'Js/modules/products/index'
import indexView from 'View/modules/products/indexView.html'

export const products = [
    {
        module: index,
        view: indexView,
        path: '/Products/Index',
        name: 'products.index'
    }
]
```

Criamos então uma const com o nome da área das rotas e registramos o js e o html dos módulos criados, path que será acessado no browser e um nome para a navegação.

Os diretórios ```JS, View e Style``` são resolvidos automaticamente pelo alias caso queira importar algum arquivo, como no exemplo acima.

Agora só falta registrar no arquivo principal de rotas em ```/js/routes/routes.js``.

```javascript
import { products } from './products'

export const routes = [
    ...products
]
```

#### Parametros

As rotas do Chord permitem passagem de parametros obrigatórios e não obrigatórios em suas rotas.

use ```:param``` para parâmetros obrigatórios e ```(:param)``` para parâmetros não obrigatórios.

```javascript
export const products = [
    {
        module: edit,
        view: editView,
        path: '/Products/Edit/(:product_id)',
        name: 'products.edit'
    },
    {
        module: detail,
        view: detailView,
        path: '/Products/Detail/:product_id',
        name: 'products.detail'
    }
]
```

#### History Mode

O Chord possui o modo history de navegação, que serve para remover a hashtag da url do browser. Para ativar o modo history vá até ```/app/js/app.js``` e na configuração inicial do Chord altere ```historyMode``` para true.

Mas não é só isso, pois com o history mode nosso servidor não sabe o que fazer quando tentamos acessar uma página da nossa aplicação ou até mesmo quando recarregamos a página. Isso acontece porque o Chord faz uma simulação de que as páginas estão sendo trocadas mas na verdade utilizamos uma página apenas para fazer tudo.

Como nossas páginas não existem realmente no servidor, devemos configurá-lo para retornar à página inicial sempre que uma página url não seja encontrada. 

No nosso servidor de desenvolvimento já temos isso disponível para configuração. Vá até o ```.env``` e altere a variável ```HISTORY_API_FALLBACK``` para true. Isso serve para dizer para o nosso servidor que todas as vezes que ele não encontrar uma página solicitada pela url, ele deve retornar para a ```index.html``` que o Chord se encarregará de tudo.

Caso vc esteja utilizando um outro servidor, é necessário configurá-lo para retornar para a index sempre que não encontrar alguma página. Temos a configuração para um servidor apache no exemplo a seguir:

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

Essa configuração deve ser feita dentro de um arquivo ```.htaccess```.

### Ciclo de vida
Cada módulo no Chord possui

### CSS

### Colocando em produção

### Observações
