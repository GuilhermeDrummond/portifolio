const imagens = ["assets/gif2.gif", "assets/gif1.gif", "assets/Projeto0.png"]; // Lista de URLs das imagens
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