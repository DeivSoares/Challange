let textarea = document.querySelector("textarea");
let button = document.querySelectorAll("button");
let aside = document.querySelector("aside");

button[0].onclick = function () {
  let texto = textarea.value;

  var saidaCripto = texto.replace(/[aeiou]/g, function (match) {
    switch (match) {
      case "a":
        return "ai";
      case "e":
        return "enter";
      case "i":
        return "imes";
      case "o":
        return "ober";
      case "u":
        return "ufat";
    }
  });

  aside.innerHTML = `
  <div>
  <h1>Seu texto criptografado</h1>
  <textarea id="output" readonly>${saidaCripto}</textarea>
  <button onclick="copy()">Copiar</button>
  </div>`;
};

button[1].onclick = function () {
    let texto = textarea.value;

    var saidaCripto = texto.replace(/ai|enter|imes|ober|ufat/g, function(match) {
        switch(match) {
          case 'ai':
            return 'a';
          case 'enter':
            return 'e';
          case 'imes':
            return 'i';
          case 'ober':
            return 'o';
          case 'ufat':
            return 'u';
          default:
            return match;
        }
    });

    aside.innerHTML = `
    <div>
    <h1>Seu texto descriptografado</h1>
    <textarea id="output" readonly>${saidaCripto}</textarea>
    <button onclick="copy()">Copiar</button>
    </div>`;
};

function copy(){
    var textCopy = document.getElementById('output');
    navigator.clipboard.writeText(textCopy.value).then(function() {
        alert("Texto copiado para área de transferência");
    }, function() {
        alert("Não foi possível copiar o texto");
    });
}