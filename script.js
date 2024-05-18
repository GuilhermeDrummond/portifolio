const imagens = ["assets/Projeto0.png", "assets/Projeto3.png", "assets/Projeto2.png", "assets/tela projeto.png"]; // Lista de URLs das imagens
let indiceAtual = 0; // Índice da imagem atual

const imgElement = document.getElementById("imagem");

document.getElementById("proximo").addEventListener("click", () => {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    imgElement.src = imagens[indiceAtual];
});

document.getElementById("anterior").addEventListener("click", () => {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    imgElement.src = imagens[indiceAtual];
});