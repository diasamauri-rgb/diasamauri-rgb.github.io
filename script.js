function setUmidade(valor) {
  document.getElementById("umidade").innerText = valor;

  if (valor < 40) {
    document.getElementById("acao").innerText =
      "🚨 Solo seco → Irrigação ATIVADA";
    document.getElementById("acao").style.color = "#22c55e";
  } else {
    document.getElementById("acao").innerText =
      "💧 Solo úmido → Irrigação DESLIGADA";
    document.getElementById("acao").style.color = "#38bdf8";
  }
}
