window.onload = function() {
let produtos = [
    {description: "Uva", price: 4.50},
    {description: "Goiaba", price: 3.20},
    {description: "Banana", price: 4.60},
    {description: "Maçã", price: 3.30},
    {description: "Laranja", price: 5.70},   
    {description: "Abacaxi", price: 7.00}
];

    let addProduto = [];
        const listaProd = document.querySelector("#lista-produtos");
        const totalComp = document.querySelector("#compra-cliente");
        const valorComp = document.querySelector("#valor-compra");  

(() => {
    produtos.forEach(produto => {
        let li = document.createElement("li");
        li.textContent = produto.description;
        li.dataset.price = produto.price;
        li.addEventListener('click', function() {
            if(addProduto.indexOf(this.textContent) != -1) {
                alert(`Você já tem ${this.textContent} na sua cesta!!`);
            }else {
                addProduto.push(this.textContent);

                let li2 = document.createElement("li");
                li2.textContent = this.textContent;
                totalComp.appendChild(li2);

                const total = Number(valorComp.value) + Number(this.dataset.price);
                valorComp.value = total.toFixed(2);
            };
            });
            listaProd.appendChild(li);
        });
    }
)();
};