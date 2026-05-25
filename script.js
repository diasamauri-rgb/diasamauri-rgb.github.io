let umidade = 0;
let chuva = false;

function setUmidade(valor) {
  chuva = false;
  umidade = valor;
  atualizarSistema();
}

function ativarChuva() {
  chuva = true;
  umidade = 90;
  atualizarSistema();
}

function atualizarSistema() {
  document.getElementById("umidade").innerText = umidade;

  let acao = document.getElementById("acao");

  let irrigacaoTradicional = 80; // sempre irriga muito
  let irrigacaoInteligente = 0;

  if (chuva) {
    acao.innerText = "🌧️ Chuva detectada: irrigação bloqueada";
    irrigacaoInteligente = 10;
  } else if (umidade < 40) {
    acao.innerText = "🚰 Solo seco: irrigação ativada";
    irrigacaoInteligente = 80;
  } else {
    acao.innerText = "✅ Solo úmido: irrigação desativada";
    irrigacaoInteligente = 20;
  }

  // anima barras
  document.getElementById("tradicional").style.width = irrigacaoTradicional + "%";
  document.getElementById("inteligente").style.width = irrigacaoInteligente + "%";
}

// inicialização
document.getElementById("tradicional").style.width = "80%";
document.getElementById("inteligente").style.width = "0%";
