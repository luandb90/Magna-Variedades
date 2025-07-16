const produtos = [
  // Natura
  //Kaiak -Feminino
  { nome: "Kaiak Tradicional 100 ml - Feminino", preco: 148.90, marca: "Natura", estoque: 6, imagem: "img/Natura Kaiak Feminino.jpg" },
  { nome: "Kaiak Aventura 100 ml - Feminino", preco: 148.90, marca: "Natura", estoque: 1, imagem: "img/Kaiak aventura Feminino.jpg" },
  { nome: "Miniatura Kaiak Aventura 25 ml - Ferminino", preco: 49.90, marca: "Natura", estoque: 1, imagem: "img/Kaiak aventura 25 ml Ferminino.jpg" },
  //Kaiak - Masculino
  { nome: "Kaiak Tradicional 100 ml - Masculino", preco: 148.90, marca: "Natura", estoque: 5, imagem: "img/Kaiak tradicional.jpg" },
  { nome: "Miniatura Kaiak Tradicional 25 ml - Masculino", preco: 49.90, marca: "Natura", estoque: 2, imagem: "img/Kaiak 25 ml.jpg" },
  { nome: "Kaiak Pulso  100 ml - Masculino", preco: 148.90, marca: "Natura", estoque: 5, imagem: "img/Kaiak pulso.jpg" },
  { nome: "Kaiak Aventura  100 ml - Masculino", preco: 148.90, marca: "Natura", estoque: 4, imagem: "img/Kaiak aventura.jpg" },
  { nome: "Kaiak Urbe 100 ml - Masculino", preco: 148.90, marca: "Natura", estoque: 6, imagem: "img/Kaiak urbe.jpg" },
  { nome: "Kaiak O2 100 ml - Masculino", preco: 148.90, marca: "Natura", estoque: 4, imagem: "img/Kaiak  o2.jpg" },
  { nome: "Kaiak Oceano 100 ml - Masculino", preco: 148.90, marca: "Natura", estoque: 1, imagem: "img/Kaiak oceano.jpg" },
  { nome: "Kaiak Aero 100 ml - Masculino", preco: 148.90, marca: "Natura", estoque: 1, imagem: "img/Kaiak aero.jpg" },
  { nome: "Kaiak Vital 100 ml - Masculino", preco: 148.90, marca: "Natura", estoque: 2, imagem: "img/Kaiak vital.jpg" },
  { nome: "Kaiak Extremo 100 ml - Masculino", preco: 148.90, marca: "Natura", estoque: 4, imagem: "img/Kaiak extremo.jpg" },
  { nome: "Kaiak Sonar 100 ml - Masculino", preco: 148.90, marca: "Natura", estoque: 5, imagem: "img/Kaiak sonar.jpg" },
  //Lunar - Feminino
  { nome: "Luna Tradicional 75 ml - Feminino", preco: 146.90, marca: "Natura", estoque: 7, imagem: "img/Luna tradicional.jpg" },
  { nome: "Luna Radiante 75 ml - Feminino", preco: 146.90, marca: "Natura", estoque: 2, imagem: "img/Luna radiante.jpg" },
  { nome: "Luna Confiante 75 ml - Feminino", preco: 146.90, marca: "Natura", estoque: 1, imagem: "img/Luna confiante.jpg" },
  { nome: "Luna Coragem 75 ml - Feminino", preco: 146.90, marca: "Natura", estoque: 2, imagem: "img/Luna coragem.webp" },
  { nome: "Luna Absoluta 75 ml - Feminino", preco: 146.90, marca: "Natura", estoque: 4, imagem: "img/Luna absoluta.jpg " },
  { nome: "Luna Rose 75 ml - Feminino", preco: 146.90, marca: "Natura", estoque: 1, imagem: "img/Luna Rose.jpg " },
  { nome: "Luna Força 75 ml - Feminino", preco: 146.90, marca: "Natura", estoque: 1, imagem: "img/Luna Força.webp " },
  { nome: "Luna Viva 75 ml - Feminino", preco: 146.90, marca: "Natura", estoque: 1, imagem: "img/Luna Viva.jpg " },
  { nome: "Luna Fascinante 75 ml - Feminino", preco: 146.90, marca: "Natura", estoque: 1, imagem: "img/Luna Fascinante.jpg " },
  { nome: "Luna Liberdade 75 ml - Feminino", preco: 146.90, marca: "Natura", estoque: 3, imagem: "img/Luna Liberdade.jpg " },
  { nome: "Luna Intenso 50 ml - Feminino", preco: 167.90, marca: "Natura", estoque: 2, imagem: "img/Luna Intenso.jpg " },
  { nome: "Luna Ilumina 50 ml - Feminino", preco: 167.90, marca: "Natura", estoque: 1, imagem: "img/Luna Ilumina.jpg " },
  //Essencial - Masculino
  { nome: "Essencial Tradicional Deo Parfum 100 ml - Masculino", preco: 223.00, marca: "Natura", estoque: 10, imagem: "img/Essencial Deo parfum.webp" },
  { nome: "Essencial Intenso Deo Parfum 100 ml - Masculino", preco: 223.00, marca: "Natura", estoque: 1, imagem: "img/Essencial Intenso Deo Parfum.JPG" },
  { nome: "Essencial Exclusivo Deo Parfum 100 ml - Masculino", preco: 223.00, marca: "Natura", estoque: 3, imagem: "img/Essencial Exclusivo.JPG" },
  { nome: "Essencial Oud Deo Parfum 100 ml - Masculino", preco: 223.00, marca: "Natura", estoque: 1, imagem: "img/Essencial Oud.JPG" },
  { nome: "Essencial Essencial Palo Santo Deo Parfum 100 ml - Masculino", preco: 223.00, marca: "Natura", estoque: 1, imagem: "img/Essencial Palo Santo.JPG" },
  { nome: "Essencial Supreme Deo Parfum 100 ml - Masculino", preco: 223.00, marca: "Natura", estoque: 1, imagem: "img/Essencial Supreme.JPG" },
  //Essencial - Feminino
  { nome: "Essencial Tradicional Deo Parfum 100 ml - Feminino", preco: 223.00, marca: "Natura", estoque: 1, imagem: "img/Essencial Feminino.JPG" },
  { nome: "Essencial Oud Pimenta Deo Parfum 100 ml - Feminino", preco: 223.00, marca: "Natura", estoque: 1, imagem: "img/Essencial oud pimenta.JPG" },
  { nome: "Essencial Exclusivo Floral 100 ml - Feminino", preco: 223.00, marca: "Natura", estoque: 3, imagem: "img/Essencial Exclusivo Floral.JPG" },
  { nome: "Essencial Exclusivo 100 ml - Feminino", preco: 223.00, marca: "Natura", estoque: 6, imagem: "img/Essencial Exclusivo Feminino.JPG" },
  { nome: "Essencial Ato 100 ml - Feminino", preco: 159.90, marca: "Natura", estoque: 3, imagem: "img/Essencial Ato.JPG" },
  //Biografia - Maasculino
  { nome: "Biografia Tradicional 100 ml - Masculino", preco: 159.90, marca: "Natura", estoque: 1, imagem: "img/Biografia.JPG" },
  { nome: "Miniatura Biografia Tradicional 25 ml - Masculino", preco: 59.90, marca: "Natura", estoque: 1, imagem: "img/Biografia.webp" },
  { nome: "Biografia Encontros 100 ml - Masculino", preco: 159.90, marca: "Natura", estoque: 4, imagem: "img/Biografia Encontros.JPG" },
  //Biografia - Feminino
  { nome: "Biografia Tradicional 100 ml - Feminino", preco: 159.90, marca: "Natura", estoque: 3, imagem: "img/Biografia Feminino.JPG" },
  { nome: "Miniatura Biografia Tradicional 25 ml - Feminino", preco: 59.90, marca: "Natura", estoque: 2, imagem: "img/Miniatura Biografia Tradicional.webp" },
  { nome: "Biografia Encontros 100 ml - Feminino", preco: 159.90, marca: "Natura", estoque: 1, imagem: "img/Biografia EncontrosF.JPG" },
  //Humor - Feminino
  { nome: "Meu Primeiro Humor 75 ml - Feminino", preco: 123.90, marca: "Natura", estoque: 5, imagem: "img/Meu Primeiro Humor.webp" },
  { nome: "Humor Próprio 75 ml - Feminino", preco: 123.90, marca: "Natura", estoque: 11, imagem: "img/Humor Próprio.JPG" },
  { nome: "Humor Galáxia 75 ml - Feminino", preco: 123.90, marca: "Natura", estoque: 1, imagem: "img/Humor Galáxia.JPG" },
  //Humor - Masculino
  { nome: "Humor a Dois 75 ml - Masculino", preco: 123.90, marca: "Natura", estoque: 11, imagem: "img/Humor a Dois.JPG" },
  { nome: "Miniatura Humor A Dois 25ml - Masculino", preco: 49.90, marca: "Natura", estoque: 1, imagem: "img/Miniatura Humor A Dois.AVIF" },
  { nome: "Paz e Humor 75 ml - Masculino", preco: 123.90, marca: "Natura", estoque: 3, imagem: "img/Paz e Humor.JPG" },
  { nome: "Humor a Rigor 75 ml - Masculino", preco: 123.90, marca: "Natura", estoque: 1, imagem: "img/Humor a Rigor.JPG" },
  { nome: "Miniatura Humor a Rigor 25 ml - Masculino", preco: 49.90, marca: "Natura", estoque: 2, imagem: "img/MiniaturaHUMOR.JPG" },
  //Hidratante Natura
  { nome: "Creme Para o Corpo Tododia Macadâmia 400ml", preco: 72.90, marca: "Natura", estoque: 17, imagem: "img/Tododia Macadâmia.jpg" },
  { nome: "Creme Para o Corpo Tododia Algodão 400ml", preco: 72.90, marca: "Natura", estoque: 13, imagem: "img/Algodão.jpg" },
  { nome: "Creme Para o Corpo Tododia Ameixa e Flor de Baunilha 400ml", preco: 72.90, marca: "Natura", estoque: 12, imagem: "img/Ameixa e Flor de Baunilha.jpg" },
  { nome: "Creme Para o Corpo Tododia Noz Pecã e Cacau 400ml", preco: 72.90, marca: "Natura", estoque: 9, imagem: "img/Noz Pecã e Cacau.jpg" },
  { nome: "Creme Para o Corpo Tododia Cereja e Avelã 400ml", preco: 72.90, marca: "Natura", estoque: 14, imagem: "img/Cereja e Avelã.jpg" },
  { nome: "Creme Para o Corpo Tododia Cereja Negra e Praliné 400ml", preco: 72.90, marca: "Natura", estoque: 5, imagem: "img/Cereja Negra e Praliné.jpg" },
  { nome: "Creme Para o Corpo Tododia Framboesa e Pimenta Rosa 400ml", preco: 72.90, marca: "Natura", estoque: 5, imagem: "img/Framboesa e Pimenta Rosa.jpg" },
  { nome: "Creme Para o Corpo Tododia Amora Vermelha e Jabuticaba 400ml", preco: 72.90, marca: "Natura", estoque: 5, imagem: "img/Amora Vermelha e Jabuticaba.jpg" },
  { nome: "Creme Para o Corpo Tododia Chá de Camomila e Lavanda 400ml", preco: 72.90, marca: "Natura", estoque: 4, imagem: "img/Todanoite.jpg" },
  { nome: "Creme Para o Corpo Tododia Manga Rosa E Água De Coco 400ml", preco: 72.90, marca: "Natura", estoque: 3, imagem: "img/Manga Rosa E Água De Coco.webp" },
  { nome: "Creme Para o Corpo Tododia Flor De Pera E Melissa 400ml", preco: 72.90, marca: "Natura", estoque: 2, imagem: "img/Flor De Pera E Melissa.webp" },
  { nome: "Creme Para o Corpo Tododia Flor de Maçã 400ml", preco: 72.90, marca: "Natura", estoque: 3, imagem: "img/Flor de Maçã.jpg" },
  { nome: "Creme Para o Corpo Tododia Romã e Flor de Amora 400ml", preco: 72.90, marca: "Natura", estoque: 1, imagem: "img/Romã e Flor de Amora.jpg" },
  { nome: "Creme Para o Corpo Tododia Jambo Rosa e Flor de Caju 400ml", preco: 72.90, marca: "Natura", estoque: 1, imagem: "img/Jambo Rosa e Flor de Caju.jpg" },
  { nome: "Creme Para o Corpo Tododia Frambosa e Pimenta Vermelha 400ml", preco: 72.90, marca: "Natura", estoque: 1, imagem: "img/Frambosa e Pimenta Vermelha.webp" },
  { nome: "Creme Para o Corpo Tododia Flor de Gengibre e Tangerina 400ml", preco: 72.90, marca: "Natura", estoque: 1, imagem: "img/Flor de Gengibre e Tangerina.jpg" },
  //Oboticario - Feminino
  { nome: "Egeo Choc Desodorante Colônia 90ml", preco: 154.90, marca: "O'Boticário", estoque: 1, imagem: "img/Egeo choc.webp" },
  { nome: "Egeo Red Desodorante Colônia 90ml", preco: 154.90, marca: "O'Boticário", estoque: 1, imagem: "img/Egeo red.webp" },
  { nome: "Glamour Myriad Desodorante Colônia 75ml", preco: 174.90, marca: "O'Boticário", estoque: 1, imagem: "img/Glamour myriad.webp" },
  { nome: "Floratta Red Desodorante Colônia 75ml", preco: 149.90, marca: "O'Boticário", estoque: 1, imagem: "img/Florata red.webp" },
  { nome: "Floratta Red Passion Eau De Parfum 75ml", preco: 199.90, marca: "O'Boticário", estoque: 2, imagem: "img/Florata  red passion.webp" },
  { nome: "Floratta Blue Desodorante Colônia 75ml", preco: 149.90, marca: "O'Boticário", estoque: 1, imagem: "img/Florata blue.webp" },
  { nome: "Floratta Gold Desodorante Colônia 75ml", preco: 149.90, marca: "O'Boticário", estoque: 1, imagem: "img/Floratta Gold.webp" },
  { nome: "Splash Desodorante Colônia Lily 200ml", preco: 114.90, marca: "O'Boticário", estoque: 1, imagem: "img/Lily body splash.webp" },
  { nome: "Refil Glamour Secret Black Desodorante Colônia 75ml", preco: 129.90, marca: "O'Boticário", estoque: 1, imagem: "img/Glamour secretes black refil.webp" },
  { nome: "Coffee Addictive Oriental Frutal Desodorante Colônia 100ml", preco: 199.90, marca: "O'Boticário", estoque: 2, imagem: "img/Coffee addictive.webp" },
  //Oboticario - Masculino
  { nome: "Malbec Icon Desodorante Colônia 100ml", preco: 209.90, marca: "O'Boticário", estoque: 1, imagem: "img/Malbec Icon.webp" },
  { nome: "Malbec Desodorante Colônia 100ml", preco: 199.90, marca: "O'Boticário", estoque: 3, imagem: "img/Malbec tradicional.webp" },
  { nome: "Malbec Gold Desodorante Colônia 100ml", preco: 239.90, marca: "O'Boticário", estoque: 1, imagem: "img/Malbec Gold.webp" },
  { nome: "Malbec Magnetic Desodorante Colônia 100ml", preco: 239.90, marca: "O'Boticário", estoque: 1, imagem: "img/Malbec  magnetic.webp" },
  { nome: "Malbec Black Desodorante Colônia 100ml", preco: 249.90, marca: "O'Boticário", estoque: 1, imagem: "img/Malbec Black.webp" },
  { nome: "Portinari Desodorante Colônia 100ml", preco: 179.90, marca: "O'Boticário", estoque: 1, imagem: "img/Portinari.webp" },
  { nome: "Arbo Intenso Desodorante Colônia 100ml", preco: 159.90, marca: "O'Boticário", estoque: 1, imagem: "img/Arbo Intenso.webp" },
  { nome: "Arbo Desodorante Colônia 100ml", preco: 159.90, marca: "O'Boticário", estoque: 1, imagem: "img/Arbo.webp" },
  { nome: "Refil Arbo Desodorante Colônia 100ml", preco: 99.90, marca: "O'Boticário", estoque: 1, imagem: "img/Refil Arbo.webp" },
  { nome: "Quasar Vision Desodorante Colônia 100ml", preco: 159.90, marca: "O'Boticário", estoque: 1, imagem: "img/Quasar Vision.webp" },
  { nome: "Quasar Classic Desodorante Colônia 100ml", preco: 159.90, marca: "O'Boticário", estoque: 2, imagem: "img/Quasar Classic.webp" },
  { nome: "Uomini Desodorante Colônia 100ml", preco: 189.90, marca: "O'Boticário", estoque: 1, imagem: "img/Uomini.webp" },

  //{ nome: "Hidratante Corporal", preco: 39.90, marca: "O'Boticário", imagem: "https://via.placeholder.com/220x180?text=Natura+Hidratante" },
  { nome: "Bolsa Xaviera preto", preco: 79.90, marca: "Diversos",estoque: 1, imagem: "img/Bolsa1.jpg" },
  { nome: "Bolsa Xaviera Azul", preco: 79.90, marca: "Diversos",estoque: 1, imagem: "img/Bolsa2.jpg" },
  { nome: "Bolsa Xaviera marrom", preco: 79.90, marca: "Diversos",estoque: 1, imagem: "img/Bolsa3.jpg" },
  { nome: "Bolsa Xaviera preto", preco: 79.90, marca: "Diversos",estoque: 1, imagem: "img/Bolsa4.jpg" },
  { nome: "Bolsa Xaviera preto", preco: 79.90, marca: "Diversos",estoque: 1, imagem: "img/Bolsa5.jpg" },
  { nome: "Bolsa Xaviera marrom", preco: 79.90, marca: "Diversos",estoque: 1, imagem: "img/Bolsa6.jpg" },
  { nome: "Bolsa Xaviera rosa", preco: 79.90, marca: "Diversos",estoque: 1, imagem: "img/Bolsa7.jpg" },
];

let cart = [];
let marcaSelecionada = 'Todos';

function renderProducts() {
  const productList = document.getElementById("productList");
  const searchInput = document.getElementById("searchInput");
  const termoBusca = searchInput ? searchInput.value.toLowerCase() : "";

  productList.innerHTML = '';

  produtos.forEach((produto, index) => {
    if ((marcaSelecionada === 'Todos' || produto.marca === marcaSelecionada) &&
      produto.nome.toLowerCase().includes(termoBusca)) {

      const existing = cart.find(item => item.nome === produto.nome);
      let productHTML = `
        <div class="product">
          <img src="${produto.imagem}" alt="${produto.nome}">
          <div class="product-content">
            <h3>${produto.nome}</h3>
            <p>${produto.marca}</p>`;

      if (existing) {
        const subtotal = (existing.quantidade * existing.preco).toFixed(2);
        productHTML += `
            <p>Preço unitário: R$ ${produto.preco.toFixed(2)}</p>
            <p>Total: R$ ${subtotal}</p>`;
      } else if (produto.estoque > 0) {
        productHTML += `
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <p>Estoque: ${produto.estoque}</p>
            <button class="cart-btn" onclick="addToCart(${index})">Adicionar</button>`;
      } else {
        productHTML += `<p><strong style="color:red;">Produto Esgotado</strong></p>`;
      }

      productHTML += `
          </div>
        </div>`;
      productList.innerHTML += productHTML;
    }
  });
}

function filtrarProdutos() {
  renderProducts();
}

function filtrarMarca(marca) {
  marcaSelecionada = marca;
  renderProducts();
}

function addToCart(index) {
  const produto = produtos[index];
  if (produto.estoque > 0) {
    const existing = cart.find(item => item.nome === produto.nome);
    produto.estoque -= 1;

    if (existing) {
      existing.quantidade += 1;
    } else {
      cart.push({ nome: produto.nome, preco: produto.preco, quantidade: 1 });
    }

    updateCart();
    renderProducts();
  } else {
    alert("Produto sem estoque!");
  }
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const cartCount = document.getElementById("cartCount");
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach((item, i) => {
    total += item.preco * item.quantidade;
    const produto = produtos.find(p => p.nome === item.nome);

    cartItems.innerHTML += `
      <div class="cart-item">
        ${item.nome} - R$ ${(item.preco * item.quantidade).toFixed(2)}
        <div class="quantity-buttons">
          <button onclick="changeQuantity(${i}, ${item.quantidade - 1})">-</button>
          <span>${item.quantidade}</span>
          <button onclick="changeQuantity(${i}, ${item.quantidade + 1})">+</button>
          <button onclick="removeItem(${i})">🗑</button>
        </div>
      </div>`;
  });
  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantidade, 0);
}

function changeQuantity(index, novaQtd) {
  const produto = produtos.find(p => p.nome === cart[index].nome);
  const diferenca = novaQtd - cart[index].quantidade;

  if (novaQtd < 1) {
    alert("Quantidade mínima é 1");
    return;
  }

  if (diferenca > produto.estoque) {
    alert("Estoque insuficiente!");
    return;
  }

  produto.estoque -= diferenca;
  cart[index].quantidade = novaQtd;
  updateCart();
  renderProducts();
}

function removeItem(index) {
  const produto = produtos.find(p => p.nome === cart[index].nome);
  produto.estoque += cart[index].quantidade;
  cart.splice(index, 1);
  updateCart();
  renderProducts();
}

function limparCarrinho() {
  if (confirm("Deseja esvaziar o carrinho?")) {
    cart.forEach(item => {
      const produto = produtos.find(p => p.nome === item.nome);
      produto.estoque += item.quantidade;
    });
    cart = [];
    updateCart();
    renderProducts();
  }
}

function finalizarCompra() {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
  }
  const nome = prompt("Informe seu nome:");
  if (!nome) return;
  let mensagem = `Olá, meu nome é ${nome}. Gostaria de comprar:%0A`;
  cart.forEach(item => {
    mensagem += `${item.quantidade}x ${item.nome} - R$ ${(item.preco * item.quantidade).toFixed(2)}%0A`;
  });
  const total = cart.reduce((sum, item) => sum + item.preco * item.quantidade, 0);
  mensagem += `Total: R$ ${total.toFixed(2)}`;
  const numero = "5511944574807";
  window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("open");
}

renderProducts();