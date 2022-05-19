export default class  Homepage{
    
    static async renderizarNaTela(listaDeProdutos){
        
        listaDeProdutos = await listaDeProdutos

        let vitrineDeProdutos = document.querySelector('.lista_produtos')
        vitrineDeProdutos.innerHTML = ""
        listaDeProdutos.forEach(produto => {
            let caixaDoProduto = document.createElement('li')
            caixaDoProduto.classList.add('caixa_produto')

            let img = document.createElement('img')
            img.classList.add("img_produto")
            img.src = `${produto.imagem}`
            img.alt = `${produto.nome}`

            let divDetalhesDoProduto = document.createElement('div')
            divDetalhesDoProduto.classList.add("detalhes_produto")

            let nomeProduto = document.createElement('h3')
            nomeProduto.innerText = produto.nome

            let descricaoProduto = document.createElement('p')
            descricaoProduto.innerText = produto.descricao

            let categoria = document.createElement('p')
            categoria.innerText = produto.categoria

            let divPrecoBtn = document.createElement('div')
            divPrecoBtn.classList.add("valores_produto")
            let preco = document.createElement('span')
            preco.innerText =`R$ ${produto.preco}`
            let divBtnComprar = document.createElement('div')
            divBtnComprar.classList.add("btn_add")
            let botaoCarrinho = document.createElement('img')
            botaoCarrinho.classList.add("icone_add")
            botaoCarrinho.src = "./src/assets/Text.png"
            botaoCarrinho.alt="Botar no carrinho"
            botaoCarrinho.dataset.id = produto.id
            divBtnComprar.appendChild(botaoCarrinho)

            caixaDoProduto.appendChild(img)
            divDetalhesDoProduto.appendChild(nomeProduto)
            divDetalhesDoProduto.appendChild(descricaoProduto)
            divDetalhesDoProduto.appendChild(categoria)
            divPrecoBtn.appendChild(preco)
            divPrecoBtn.appendChild(divBtnComprar)
            divDetalhesDoProduto.appendChild(divPrecoBtn)
            caixaDoProduto.appendChild(divDetalhesDoProduto)

            vitrineDeProdutos.appendChild(caixaDoProduto)
        });
    }

    static async filtrarPanificadora(listaDeProdutos){

        listaDeProdutos = await listaDeProdutos
        const listaPanificadora = listaDeProdutos.filter((produto) => {
            return produto.categoria === "Panificadora";
        });
        
        this.renderizarNaTela(listaPanificadora)
    }

    static async filtrarFrutas(listaDeProdutos){

        listaDeProdutos = await listaDeProdutos
        const listaFrutas = listaDeProdutos.filter((produto) => {
            return produto.categoria === "Frutas";
        });
        
        this.renderizarNaTela(listaFrutas)
    }

    static async filtrarBebidas(listaDeProdutos){

        listaDeProdutos = await listaDeProdutos
        const listaBebidas = listaDeProdutos.filter((produto) => {
            return produto.categoria === "Bebidas";
        });
        
        this.renderizarNaTela(listaBebidas)
    }

    static async filtrarPesquisa(input, listaDeProdutos){
        input = input.toLowerCase()
        listaDeProdutos = await listaDeProdutos

        const listaFiltrada = listaDeProdutos.filter((produto) => {
            return produto.nome.toLowerCase().includes(input);
        });
        console.log(listaFiltrada)
        this.renderizarNaTela(listaFiltrada)
    }

}