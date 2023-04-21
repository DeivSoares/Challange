var div = document.querySelector("div");
var button = document.querySelector("button");

function criaElemento() {
    //Crio o Node para Criar o Elemento
    const node = document.createElement("p");
    
    //Crio o TextNode que será o texto dentro do elemento criado
    const textnode = document.createTextNode("Testee");
    
    //Declado Node>textnode
    node.appendChild(textnode);
    
    //Declado o elemento pai que receberá o elemento filho.
    div.appendChild(node);
}

button.addEventListener("click", criaElemento);