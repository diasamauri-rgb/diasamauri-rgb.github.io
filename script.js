
// ===== ENTRAR NO SITE =====
document.getElementById("enterBtn").addEventListener("click", () => {

  const music = document.getElementById("music");

  // tenta tocar música (pode ser bloqueado no navegador, mas funciona ao clicar)
  music.play().catch(()=>{});

  document.getElementById("intro").style.display = "none";
  document.getElementById("site").style.display = "block";

});

// ===== QUIZ =====

const quiz = [
  {
    q: "O agro produz principalmente:",
    a: ["Alimentos", "Carros", "Celulares"],
    c: 0
  },
  {
    q: "Campo e cidade são:",
    a: ["Conectados", "Separados", "Inimigos"],
    c: 0
  },
  {
    q: "A tecnologia no campo ajuda a:",
    a: ["Aumentar produção", "Diminuir alimentos", "Nada"],
    c: 0
  }
];

let i = 0;
let points = 0;

function startQuiz(){
  i = 0;
  points = 0;
  show();
}

function show(){

  if(i >= quiz.length){
    document.getElementById("qtext").innerText = "Quiz finalizado!";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("score").innerText = "Pontuação: " + points;
    return;
  }

  const q = quiz[i];
  document.getElementById("qtext").innerText = q.q;

  const box = document.getElementById("answers");
  box.innerHTML = "";

  q.a.forEach((text, index) => {

    const btn = document.createElement("button");
    btn.innerText = text;

    btn.onclick = () => {
      if(index === q.c){
        points++;
        alert("✔ Correto!");
      } else {
        alert("❌ Errado!");
      }

      i++;
      show();
    };

    box.appendChild(btn);

  });

  document.getElementById("score").innerText =
    "Pontos: " + points;

}
