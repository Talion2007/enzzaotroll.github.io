//ToDo: Código de inicialização:
let nome = prompt("Qual é o seu Nome?");
document.getElementById("titulo").innerText = "Anti-Gay";
console.log("Hello Narcóticos Achados");

//ToDo: Botão gerar:
function gerar() {
  setTimeout(window.location.href = 'https://www.splcenter.org/fighting-hate/extremist-files/ideology/anti-lgbtq', 0);
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
