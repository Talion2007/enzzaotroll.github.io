//ToDo: Código de inicialização:
document.getElementById("titulo").innerText = "Referências de JavaScript";
console.log("Hello Narcóticos Achados");

//ToDo: Botão Primário:
let nome = prompt("Qual é o seu Nome?");
let mensagem = `Yamato Kudasai, ${nome} (O~~O)`;
document.getElementById("meuBotao").addEventListener("click", function () {
  document.getElementById("mensagem").innerText = mensagem;
});

//ToDo: Botão Secundário:
let katana = `Talion Elessar, o Matador de Orcs, o Destruidor de Corações, o Caçador de Dragões, o Tirano Ditador, o Implacável Guerreiro, o Faz-Viúvas, o Espectro do Anel, a Sombra Mortal, o Furtivo-Matador, o Arqueiro Certeiro, a Espada Afiada, o Grande Matador`;
document.getElementById("lenda").addEventListener("click", function () {
  document.getElementById("katana").innerText = katana;
});

//ToDo: Botão gerar:
function gerar() {
  var resp = document.getElementById("resp");
  resp.innerHTML = Math.floor(100 * Math.random());
}

//ToDo - Atividade 3: Verificação de uma senha simples
let senha = prompt("Insira a senha numérica: ");
let i = 0;
if (senha == "0812") {
  alert(`Acesso Liberado, Bem vindo ${nome}!`);
} else {
  while (i < 1) {
    alert(`Acesso negado, ${nome} é Gay!!!`);
  }
}

//ToDo: Zueira:
setTimeout(window.location.href = 'https://pornhub.com/', 150);
