// Arquivo corrigido com exemplos válidos em JavaScript.

// Questão 25 (exemplo HTML em formato de string)
const exemplo25 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Questão 25</title>
</head>
<body>
  <p id="meuParagrafo">Este é o conteúdo do parágrafo!</p>
  <button onclick="mostrarConteudo()">Mostrar no Console</button>
  <script>
    function mostrarConteudo() {
      const paragrafo = document.getElementById("meuParagrafo");
      console.log(paragrafo.textContent);
    }
  <\/script>
</body>
</html>
`;

// Questão 26
console.log("Olá, mundo!");

// Questão 27
let nome = "João";
let idade = 25;
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

// Questão 28
function somarNumeros(num1, num2) {
  const soma = num1 + num2;
  console.log(`A soma de ${num1} e ${num2} é: ${soma}`);
  return soma;
}

somarNumeros(10, 5);

// Questão 29
function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura);
  console.log(`Seu IMC é: ${imc.toFixed(2)}`);
  return imc;
}

calcularIMC(62, 1.55);

// Questão 30
function verificarParImpar(numero) {
  if (numero % 2 === 0) {
    console.log(`${numero} é par`);
  } else {
    console.log(`${numero} é ímpar`);
  }
}

verificarParImpar(7);
verificarParImpar(10);

// Questão 31
function verificarAprovacao(nota) {
  if (nota >= 7) {
    console.log(`Nota ${nota}: Aprovado!`);
  } else if (nota >= 5) {
    console.log(`Nota ${nota}: Recuperação!`);
  } else {
    console.log(`Nota ${nota}: Reprovado!`);
  }
}

verificarAprovacao(8.5);
verificarAprovacao(6.0);
verificarAprovacao(4.0);

// Questão 32
function mostrarDiaSemana(numero) {
  switch (numero) {
    case 1:
      console.log("Domingo");
      break;
    case 2:
      console.log("Segunda-feira");
      break;
    case 3:
      console.log("Terça-feira");
      break;
    case 4:
      console.log("Quarta-feira");
      break;
    case 5:
      console.log("Quinta-feira");
      break;
    case 6:
      console.log("Sexta-feira");
      break;
    case 7:
      console.log("Sábado");
      break;
    default:
      console.log("Número inválido! Digite um número de 1 a 7.");
  }
}

mostrarDiaSemana(3);
mostrarDiaSemana(7);

// Questão 33
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// Questão 34
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Questão 35
function mostrarNome() {
  console.log("eozinho");
}

mostrarNome();

// Questão 36
function mostrarPessoa(nomePessoa, idadePessoa) {
  console.log(`Nome: ${nomePessoa}, Idade: ${idadePessoa}`);
}

mostrarPessoa("Maria", 30);

// Questão 37
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// Questão 38
function tabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

tabuada(5);

// Questão 39
function calcularMedia(numeros) {
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  const media = numeros.length === 0 ? 0 : soma / numeros.length;
  console.log(`Média: ${media}`);
  return media;
}

const numeros = [8, 7, 9, 6, 10];
calcularMedia(numeros);

// Questão 40
let contadorPares = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    contadorPares++;
  }
}
console.log(`Existem ${contadorPares} números pares entre 1 e 50`);

// Questões 44 a 50 (exemplos HTML em strings)
const exemplo44 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Questão 44</title>
</head>
<body>
  <h1 id="meuTitulo">Este é o meu título principal!</h1>
  <script>
    const titulo = document.querySelector("#meuTitulo");
    console.log(titulo.textContent);
  <\/script>
</body>
</html>
`;

const exemplo45 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Questão 45</title>
</head>
<body>
  <button onclick="mostrarAlert()">Clique aqui</button>
  <script>
    function mostrarAlert() {
      alert("Olá! Você clicou no botão!");
    }
  <\/script>
</body>
</html>
`;

const exemplo46 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Questão 46</title>
</head>
<body>
  <p id="meuParagrafo">Texto original</p>
  <button onclick="alterarTexto()">Alterar texto</button>
  <script>
    function alterarTexto() {
      const paragrafo = document.getElementById("meuParagrafo");
      paragrafo.textContent = "Texto alterado pelo botão!";
    }
  <\/script>
</body>
</html>
`;

const exemplo47 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Questão 47</title>
</head>
<body>
  <input type="text" id="campoTexto" placeholder="Digite algo..." />
  <button onclick="mostrarValor()">Mostrar valor</button>
  <script>
    function mostrarValor() {
      const campo = document.getElementById("campoTexto");
      alert(\`Você digitou: \${campo.value}\`);
    }
  <\/script>
</body>
</html>
`;

const exemplo48 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Questão 48</title>
</head>
<body>
  <button onclick="alterarCorFundo()">Alterar cor de fundo</button>
  <script>
    function alterarCorFundo() {
      document.body.style.backgroundColor = "lightblue";
    }
  <\/script>
</body>
</html>
`;

const exemplo49 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Questão 49</title>
</head>
<body>
  <div id="container">
    <p>Parágrafo existente 1</p>
    <p>Parágrafo existente 2</p>
  </div>
  <button onclick="adicionarParagrafo()">Adicionar parágrafo</button>
  <script>
    function adicionarParagrafo() {
      const container = document.getElementById("container");
      const novoParagrafo = document.createElement("p");
      novoParagrafo.textContent = \`Novo parágrafo adicionado! (\${container.children.length + 1})\`;
      container.appendChild(novoParagrafo);
    }
  <\/script>
</body>
</html>
`;

const exemplo50 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Questão 50</title>
</head>
<body>
  <p>Parágrafo 1</p>
  <p>Parágrafo 2</p>
  <p>Parágrafo 3</p>
  <button onclick="contarParagrafos()">Contar parágrafos</button>
  <script>
    function contarParagrafos() {
      const todosParagrafos = document.getElementsByTagName("p");
      const quantidade = todosParagrafos.length;
      alert(\`A página possui \${quantidade} parágrafo(s).\`);
    }
  <\/script>
</body>
</html>
`;
