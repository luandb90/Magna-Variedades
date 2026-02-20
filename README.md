Magna Variedades 🛍️

Este é um projeto de E-commerce Single Page desenvolvido para a loja Magna Variedades, localizada em Vitória da Conquista-BA. 
A aplicação permite que os usuários visualizem produtos de marcas como Natura, O'Boticário e Avon, gerenciem um carrinho de compras e finalizem o pedido diretamente via WhatsApp.

🚀 Funcionalidades:

Listagem Dinâmica: Os produtos são renderizados dinamicamente a partir de um banco de dados em JavaScript.
° Filtros Inteligentes:

- Filtro por categorias/marcas (Natura, O'Boticário, Avon, Diversos).
- Barra de pesquisa em tempo real por nome do produto.

Gestão de Estoque: O sistema controla a quantidade disponível; se o estoque chegar a zero, o produto é marcado como "Esgotado".
° Carrinho de Compras:

- Adição e remoção de itens.
- Ajuste de quantidade dentro do carrinho com validação de estoque.
- Cálculo automático de subtotal e total geral.

Integração com WhatsApp: Finalização da compra gerando uma mensagem pré-formatada com o nome do cliente e a lista de itens desejados.

Design Responsivo: Adaptado para visualização em dispositivos móveis e desktops.

🛠️ Tecnologias Utilizadas:

- HTML5: Estruturação semântica do projeto.
- CSS: Estilização personalizada, uso de Flexbox e CSS Grid para o layout responsivo.
- JavaScript (Vanilla): Manipulação do DOM, lógica do carrinho de compras, filtros de busca e integração com a API do WhatsApp.

📂 Estrutura do Projeto:

├── img/                #Imagens dos produtos e logotipos

├── index.html          #Estrutura principal da página

├── style.css           #Estilização e responsividade

└── script.js           #Lógica de funcionamento e banco de dados de produtos

⚙️ Como executar o projeto:

1 - Clone este repositório: gh repo clone luandb90/Magna-Variedades

2 - Navegue até a pasta do projeto.

3 - Abra o arquivo index.html em qualquer navegador moderno.

📝 Exemplo de Mensagem de Compra:

Ao clicar em "Finalizar via WhatsApp", o sistema gera um link que abre a conversa com o seguinte formato:

"Olá, meu nome é [Nome do Cliente]. Gostaria de comprar:
1x Kaiak Tradicional 100 ml - Masculino - R$ 148.90
2x Creme Para o Corpo Tododia Macadâmia 400ml - R$ 145.80
Total: R$ 294.70".
