export default class  Homepage{
    
    static async renderizarNaTela(listaDeProdutos){
        
        let vitrineDeProdutos = document.querySelector('#lista-produtos')

        listaDeProdutos.forEach(produto => {
            let boxDoProduto = document.createElement('div')
            div.classList.add('box_produto')

            let img = document.createElement('img')
            img.src = produto.imagem
            img.alt = produto.nome

            let nomeProduto = document.createElement('h2')
            nomeProduto.innerText = produto.nome

            let descricaoProduto = document.createElement('p')
            descricaoProduto.innerText = produto.descricao

            let categoria = document.createElement('p')
            categoria.innerText = produto.categoria

            let divDoPreco_BotaoCarrinho = document.createElement('div')
            let preco = document.createElement('h2')
            preco.innerText =`R$ ${produto.preco}`
            let botaoCarrinho = document.createElement('p')
            botaoCarrinho.classList.add('botaoCarrinho')
            divDoPreco_BotaoCarrinho.appendChild(preco)
            divDoPreco_BotaoCarrinho.appendChild(botaoCarrinho)

            boxDoProduto.appendChild(img)
            boxDoProduto.appendChild(nomeProduto)
            boxDoProduto.appendChild(descricaoProduto)
            boxDoProduto.appendChild(categoria)
            boxDoProduto.appendChild(divDoPreco_BotaoCarrinho)

            vitrineDeProdutos.appendChild(boxDoProduto)
        });
    }

}