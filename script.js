// Seleção dos elementos do DOM de forma limpa e profissional
const botaoAcao = document.getElementById("btn-acao");
const elementoMensagem = document.getElementById("texto-dinamico");

// Banco de dados de frases para deixar o clique dinâmico e interessante
const insightsTech = [
    "“O computador não é uma máquina inteligente que ajuda humanos burros; é uma máquina burra que ajuda humanos inteligentes.” — Ada Lovelace, a primeira programadora da história.",
    "“Se você não errar de vez em quando, é um sinal de que você não está fazendo nada de inovador.” — Woody Allen (Aplicado à cultura hacker e dev).",
    "A engenharia de software excelente não se trata apenas de construir o código, mas de entender o impacto social e a dignidade de quem vai utilizá-lo.",
    "“A tecnologia se torna perfeita quando desaparece e se integra de forma invisível à nossa rotina e aos nossos afetos.”",
    "O código mais limpo é aquele que expressa a intenção do desenvolvedor sem rodeios e facilita a manutenção coletiva."
];

// Contador para navegar pelas frases
let indiceAtual = 0;

// Criação da função obrigatória exigida pelo critério de avaliação
function alternarMensagem() {
    // Altera visivelmente o texto na página
    elementoMensagem.textContent = insightsTech[indiceAtual];
    
    // Altera ligeiramente a cor do texto no momento do clique para feedback visual refinado
    elementoMensagem.style.color = "#fff";
    
    // Atualiza o índice para a próxima frase
    indiceAtual = (indiceAtual + 1) % insightsTech.length;
    
    // Altera dinamicamente o texto do botão para engajar o usuário
    botaoAcao.textContent = "Gerar Próximo Insight";
}

// Vincula a função ao evento de clique do botão
botaoAcao.addEventListener("click", alternarMensagem);
