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
  
  

  
 
 
 
 
 
 
 
 
 
 
  //{ nome: "Hidratante Corporal", preco: 39.90, marca: "O'Boticário", imagem: "https://via.placeholder.com/220x180?text=Natura+Hidratante" },
  //{ nome: "Kit Presente", preco: 79.90, marca: "Diversos", imagem: "https://via.placeholder.com/220x180?text=Diversos+Kit" }
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