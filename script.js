const produtos = [
    { nome: "Shampoo Hidratante", preco: 29.90, marca: "Natura", imagem: "img/shampoo hidratante natura.jpg" },
    { nome: "Perfume Intenso", preco: 89.90, marca: "O'Boticário", imagem: "img/intense boticário.png" },
    { nome: "Base Líquida", preco: 22.00, marca: "Avon", imagem: "img/base líquida avon.jpg" },
    { nome: "Lingerie Feminina - Vermelho", preco: 29.59, marca: "Demillus", imagem: "img/Lingerie vermelha demillus.png" },
    { nome: "Lingerie Feminina - Branco", preco: 62.00, marca: "Demillus", imagem: "img/Sutiã Sustentação Taça C DeMillus.png" },
    //{ nome: "Hidratante Corporal", preco: 39.90, marca: "Natura", imagem: "https://via.placeholder.com/220x180?text=Natura+Hidratante" },
    //{ nome: "Kit Presente", preco: 79.90, marca: "Diversos", imagem: "https://via.placeholder.com/220x180?text=Diversos+Kit" }
  ];

  let cart = [];
  let marcaSelecionada = 'Todos';

  function renderProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = '';

    produtos.forEach((produto, index) => {
      if (marcaSelecionada === 'Todos' || produto.marca === marcaSelecionada) {
        const existing = cart.find(item => item.nome === produto.nome);
        let productHTML = `
          <div class="product">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.marca}</p>`;

        if (existing) {
          const subtotal = (existing.quantidade * existing.preco).toFixed(2);
          productHTML += `
            <p>Preço unitário: R$ ${produto.preco.toFixed(2)}</p>
            <p>Total: R$ ${subtotal}</p>`;
        } else {
          productHTML += `
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button class="cart-btn" onclick="addToCart(${index})">Adicionar</button>`;
        }

        productHTML += `</div>`;
        productList.innerHTML += productHTML;
      }
    });
  }

  function filtrarMarca(marca) {
    marcaSelecionada = marca;
    renderProducts();
  }

  function addToCart(index) {
    const produto = produtos[index];
    const existing = cart.find(item => item.nome === produto.nome);
    if (existing) {
      existing.quantidade += 1;
    } else {
      cart.push({ nome: produto.nome, preco: produto.preco, quantidade: 1 });
    }
    updateCart();
    renderProducts();
  }

  function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const cartCount = document.getElementById("cartCount");
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, i) => {
      total += item.preco * item.quantidade;
      cartItems.innerHTML += `
        <div class="cart-item">
          ${item.nome} - R$ ${(item.preco * item.quantidade).toFixed(2)}
          <div>
            <input type="number" min="1" value="${item.quantidade}" onchange="changeQuantity(${i}, this.value)">
            <button onclick="removeItem(${i})">🗑</button>
          </div>
        </div>`;
    });
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantidade, 0);
  }

  function changeQuantity(index, value) {
    cart[index].quantidade = parseInt(value);
    updateCart();
    renderProducts();
  }

  function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
    renderProducts();
  }

  function limparCarrinho() {
    if (confirm("Deseja esvaziar o carrinho?")) {
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