const produtos = [
    { nome: "Shampoo Hidratante", preco: 29.90, marca: "Natura",estoque: 10, imagem: "img/shampoo hidratante natura.jpg" },
    { nome: "Perfume Intenso", preco: 89.90, marca: "O'Boticário",estoque: 2, imagem: "img/intense boticário.png" },
    { nome: "Base Líquida", preco: 22.00, marca: "Avon", estoque: 10, imagem: "img/base líquida avon.jpg" },
    { nome: "Lingerie Feminina - Vermelho", preco: 29.59, marca: "Demillus", estoque: 10, imagem: "img/Lingerie vermelha demillus.png" },
    { nome: "Lingerie Feminina - Branco", preco: 62.00, marca: "Demillus", estoque: 10, imagem: "img/Sutiã Sustentação Taça C DeMillus.png" },
    { nome: "Shampoo Hidratante", preco: 29.90, marca: "Natura",estoque: 10, imagem: "img/shampoo hidratante natura.jpg" },
    { nome: "Perfume Intenso", preco: 89.90, marca: "O'Boticário",estoque: 2, imagem: "img/intense boticário.png" },
    { nome: "Base Líquida", preco: 22.00, marca: "Avon", estoque: 10, imagem: "img/base líquida avon.jpg" },
    { nome: "Lingerie Feminina - Vermelho", preco: 29.59, marca: "Demillus", estoque: 10, imagem: "img/Lingerie vermelha demillus.png" },
    { nome: "Lingerie Feminina - Branco", preco: 62.00, marca: "Demillus", estoque: 10, imagem: "img/Sutiã Sustentação Taça C DeMillus.png" },
    { nome: "Shampoo Hidratante", preco: 29.90, marca: "Natura",estoque: 10, imagem: "img/shampoo hidratante natura.jpg" },
    { nome: "Perfume Intenso", preco: 89.90, marca: "O'Boticário",estoque: 2, imagem: "img/intense boticário.png" },
    { nome: "Base Líquida", preco: 22.00, marca: "Avon", estoque: 10, imagem: "img/base líquida avon.jpg" },
    { nome: "Lingerie Feminina - Vermelho", preco: 29.59, marca: "Demillus", estoque: 10, imagem: "img/Lingerie vermelha demillus.png" },
    { nome: "Lingerie Feminina - Branco", preco: 62.00, marca: "Demillus", estoque: 10, imagem: "img/Sutiã Sustentação Taça C DeMillus.png" },
    { nome: "Shampoo Hidratante", preco: 29.90, marca: "Natura",estoque: 10, imagem: "img/shampoo hidratante natura.jpg" },
    { nome: "Perfume Intenso", preco: 89.90, marca: "O'Boticário",estoque: 2, imagem: "img/intense boticário.png" },
    { nome: "Base Líquida", preco: 22.00, marca: "Avon", estoque: 10, imagem: "img/base líquida avon.jpg" },
    { nome: "Lingerie Feminina - Vermelho", preco: 29.59, marca: "Demillus", estoque: 10, imagem: "img/Lingerie vermelha demillus.png" },
    { nome: "Lingerie Feminina - Branco", preco: 62.00, marca: "Demillus", estoque: 10, imagem: "img/Sutiã Sustentação Taça C DeMillus.png" },

    //{ nome: "Hidratante Corporal", preco: 39.90, marca: "Natura", imagem: "https://via.placeholder.com/220x180?text=Natura+Hidratante" },
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