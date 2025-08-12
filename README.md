# Projeto: Amigo Secreto

### Descrição
Este projeto é uma aplicação web simples desenvolvida em HTML, CSS e JavaScript para realizar um sorteio de "Amigo Secreto". Os usuários podem adicionar nomes de amigos em uma lista através de um campo de texto e um botão "Adicionar". Os nomes adicionados são exibidos em uma lista visível na página. Ao clicar no botão "Sortear Amigo", um nome é selecionado aleatoriamente da lista e exibido como resultado.

O objetivo principal é praticar lógica de programação, manipulação do DOM (Document Object Model) e eventos em JavaScript, além de estilização básica com CSS. A aplicação é responsiva e possui uma interface amigável, com validações para entradas inválidas e verificações para evitar sorteios em listas vazias.

### Funcionalidades
- **Adicionar Nomes**: Insira o nome de um amigo no campo de texto e clique em "Adicionar" para incluí-lo na lista. O campo é limpo automaticamente após a adição.
- **Validação de Entrada**: Se o campo de texto estiver vazio, um alerta é exibido solicitando um nome válido.
- **Visualizar Lista**: Os nomes adicionados aparecem em uma lista não ordenada (`<ul>`) abaixo do campo de entrada, atualizada dinamicamente.
- **Sorteio Aleatório**: Clique em "Sortear Amigo" para selecionar um nome aleatoriamente da lista. O resultado é exibido na página. Se a lista estiver vazia, um alerta é mostrado.
- **Estilização**: A aplicação usa variáveis CSS para cores, fontes do Google Fonts (Inter e Merriweather) e layouts flexbox para centralização e responsividade.

### Tecnologias Utilizadas
- **HTML5**: Estrutura da página, incluindo inputs, botões e elementos de lista.
- **CSS3**: Estilização com variáveis, flexbox, sombras e hover effects. Inclui importação de fontes externas.
- **JavaScript (ES6+)**: Lógica de programação, manipulação do DOM, eventos (addEventListener e onclick), arrays e funções matemáticas para randomização.

### Estrutura de Arquivos
- **index.html**: Arquivo principal com a estrutura HTML da aplicação.
- **style.css**: Arquivo de estilos CSS, definindo cores, fontes, layouts e efeitos visuais.
- **app.js**: Arquivo JavaScript contendo a lógica da aplicação, incluindo o array de amigos, funções de adição, atualização da lista e sorteio.
- **amigo-secreto.png** e **play_circle_outline.png**: Imagens usadas no banner e no botão de sorteio (assumidas como disponíveis no diretório do projeto).

### Como Executar o Projeto
1. **Requisitos**: Nenhum framework ou biblioteca externa é necessário além de um navegador web moderno (como Chrome, Firefox ou Edge).
2. **Passos**:
   - Clone ou baixe o repositório para o seu computador.
   - Abra o arquivo `index.html` em um navegador web.
   - Adicione nomes de amigos usando o campo de texto e o botão "Adicionar".
   - Clique em "Sortear Amigo" para ver o resultado.
3. **Ambiente de Desenvolvimento**: Para editar o código, use um editor como VS Code. Não é necessário servidor local, pois é uma aplicação estática.

### Explicação do Código
#### JavaScript (app.js)
- **Variável Global**: `let amigos = [];` – Array para armazenar os nomes dos amigos.
- **Função `atualizarLista()`**: Limpa a lista HTML existente e percorre o array `amigos` para criar e adicionar elementos `<li>` dinamicamente usando `document.createElement`.
- **Função `adicionarAmigo()`**: Captura o valor do input com `id="input-name"`, valida se não está vazio (exibindo alerta se necessário), adiciona ao array com `push()`, limpa o input e chama `atualizarLista()`.
- **Função `sortear()`**: Verifica se o array não está vazio (exibindo alerta se necessário), gera um índice aleatório com `Math.random()` e `Math.floor()`, seleciona o nome e atualiza o elemento de resultado com `innerHTML`.
- **Eventos**: Usa `onclick` no HTML para chamar `adicionarAmigo()` e `sortear()`, com `addEventListener` como backup para o botão "Sortear".

#### HTML (index.html)
- Estrutura dividida em banner (com título e imagem) e seção de input (com campo de texto, botões, lista e resultado).
- IDs e classes para seleção no CSS e JS (ex.: `#input-name`, `#lista-amigos`, `#resultado`).

#### CSS (style.css)
- Variáveis em `:root` para cores reutilizáveis.
- Layout flexbox para centralização e responsividade.
- Estilos para botões com hover, inputs com bordas arredondadas e sombras para profundidade.

### Limitações e Melhorias Possíveis
- **Limitações**: Não persiste dados (a lista é resetada ao recarregar a página). Não remove nomes da lista. Sorteio simples (não garante unicidade em múltiplos sorteios).
- **Melhorias**:
  - Adicionar botão para remover nomes da lista.
  - Implementar persistência com LocalStorage.
  - Suporte a múltiplos sorteios sem repetição (para um verdadeiro "Amigo Secreto" com pares).
  - Acessibilidade: Adicionar ARIA labels e suporte a teclado.
  - Testes: Incluir unit tests com Jest para as funções.
