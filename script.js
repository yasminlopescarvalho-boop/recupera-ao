const perguntas = [
{
    pergunta: "Qual prática agrícola ajuda a preservar o solo reduzindo a erosão?",
    opcoes: [
        "Queimada controlada",
        "Plantio direto",
        "Uso intenso de fertilizantes",
        "Monocultura"
    ],
    resposta: 1
},
{
    pergunta: "Qual tecnologia permite aplicar fertilizantes apenas onde são necessários?",
    opcoes: [
        "Agricultura de precisão",
        "Irrigação manual",
        "Colheita artesanal",
        "Queimadas"
    ],
    resposta: 0
},
{
    pergunta: "O que significa sustentabilidade no agro?",
    opcoes: [
        "Produzir apenas para exportação",
        "Produzir respeitando o meio ambiente, a economia e a sociedade",
        "Usar apenas máquinas",
        "Eliminar toda vegetação"
    ],
    resposta: 1
},
{
    pergunta: "Qual recurso natural é essencial para a produção agrícola e precisa ser preservado?",
    opcoes: [
        "Petróleo",
        "Água",
        "Carvão",
        "Gás natural"
    ],
    resposta: 1
},
{
    pergunta: "Uma vantagem da integração lavoura-pecuária-floresta é:",
    opcoes: [
        "Redução da biodiversidade",
        "Melhoria do solo e aumento da produtividade",
        "Maior desmatamento",
        "Maior desperdício de água"
    ],
    resposta: 1
},
{
    pergunta: "Qual atitude contribui para diminuir o desperdício de alimentos?",
    opcoes: [
        "Comprar além do necessário",
        "Aproveitar integralmente os alimentos",
        "Descartar frutas pequenas",
        "Não armazenar corretamente"
    ],
    resposta: 1
},
{
    pergunta: "O futuro sustentável do agro depende principalmente de:",
    opcoes: [
        "Tecnologia e preservação ambiental",
        "Desmatamento",
        "Maior consumo de água",
        "Uso indiscriminado de defensivos"
    ],
    resposta: 0
}
];

let atual = 0;
let pontos = 0;
let tentativa = 0;

function comecar() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    mostrarPergunta();
}

function mostrarPergunta() {
    document.getElementById("tentativa").innerHTML = "";

    const p = perguntas[atual];

    document.getElementById("pergunta").innerHTML =
        `${atual + 1}/7 - ${p.pergunta}`;

    const opcoes = document.getElementById("opcoes");
    opcoes.innerHTML = "";

    p.opcoes.forEach((texto, indice) => {
        const btn = document.createElement("button");
        btn.className = "opcao";
        btn.innerHTML = texto;
        btn.onclick = () => verificar(indice);
        opcoes.appendChild(btn);
    });
}

function verificar(escolha) {

    if (escolha === perguntas[atual].resposta) {
        pontos++;
        proxima();
    } else {

        if (tentativa === 0) {
            tentativa++;
            document.getElementById("tentativa").innerHTML =
                "Resposta incorreta. Você tem mais uma tentativa.";
        } else {
            tentativa = 0;
            proxima();
        }

    }
}

function proxima() {

    tentativa = 0;
    atual++;

    if (atual < perguntas.length) {
        mostrarPergunta();
    } else {
        fim();
    }

}

function fim() {

    document.getElementById("quiz").style.display = "none";
    document.getElementById("certificado").style.display = "block";

    document.getElementById("resultado").innerHTML =
        `Você acertou <strong>${pontos} de ${perguntas.length}</strong> perguntas.`;

    document.getElementById("nota").innerHTML =
        `Desempenho: ${Math.round((pontos / perguntas.length) * 100)}%`;

}
