//Escreva um programa que se inicie com //dois valores em duas variáveis //diferentes: o custo de um produto e //seu valor de venda. A partir dos //valores, calcule quanto de lucro //(valor de venda descontado o custo do //produto) a empresa terá ao vender mil //desses produtos.
//Atente que, sobre o custo do produto, //incide um imposto de 20%.
//Seu programa também deve emitir uma //mensagem de erro e encerrar caso algum //dos seus valores de entrada seja menor //que zero.

let custoProducto = 20;
let valorVenda = 50;

if (custoProducto > 0 && valorVenda > 0){
  let custoProductoTotal = ((20 * custoProducto) / 100) + custoProducto;
  let total = (valorVenda * 1000) - (custoProductoTotal * 1000);
  console.log(total);
}else{
  console.log('ERROR');
}

