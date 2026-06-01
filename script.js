/* THEME */
function showTheme(){ document.body.classList.toggle("dark"); }

/* NAV */
function showSection(id){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  const el = document.getElementById(id);
  if(el) el.classList.add('active');
}

/* PARTICLES */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];
for(let i=0;i<80;i++){ particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height, r:Math.random()*2.5 }); }
function draw(){ ctx.clearRect(0,0,canvas.width,canvas.height); ctx.fillStyle="rgba(46,204,113,0.5)"; particles.forEach(p=>{ ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill(); p.y+=0.4; if(p.y>canvas.height){ p.y=0; p.x=Math.random()*canvas.width; } }); requestAnimationFrame(draw); }
draw();

/* QUIZ */
const quizData=[
  {q:"O que o Agrinho promove?", a:["Tecnologia de guerra","Educação e sustentabilidade","Jogos"], correct:1},
  {q:"O Agrinho conecta:", a:["Cidade e campo","Mar e céu","Somente cidades"], correct:0}
];
let qIndex=0;
function startQuiz(){ showQuestion(); }
function showQuestion(){
  const q=quizData[qIndex];
  document.getElementById("question").innerText=q.q;
  const ans=document.getElementById("answers"); ans.innerHTML="";
  q.a.forEach((text,i)=>{
    const btn=document.createElement("button");
    btn.innerText=text;
    btn.onclick=()=>{ 
      if(i===q.correct){ alert("✔ Correto!"); saveQuiz(); } 
      else { alert("❌ Tente novamente"); } 
      qIndex=(qIndex+1)%quizData.length; 
      showQuestion(); 
    };
    ans.appendChild(btn);
  });
  document.getElementById("quizScore").innerText="Pontuação: "+(localStorage.getItem("quizScore")||0);
}
function saveQuiz(){ let s=localStorage.getItem("quizScore")||0; s++; localStorage.setItem("quizScore",s); document.getElementById("quizScore").innerText="Pontuação: "+s; }

/* CHART */
new Chart(document.getElementById("chart"),{
  type:"bar",
  data:{
    labels:["Educação","Sustentabilidade","Campo","Cidade"],
    datasets:[{label:"Impacto",data:[90,95,85,88],backgroundColor:"#27ae60"}]
  }
});

/* JOGO */
const gameCanvas=document.getElementById("gameCanvas");
const gctx=gameCanvas.getContext("2d");
let gameScore=0, items=[], player={x:280,y:260,width:40,height:10}, gameInterval;

function startGame(){
  gameScore=0;
  items=[];
  document.getElementById("gameScore").innerText="Pontuação: 0";
  gameInterval=setInterval(updateGame,20);
  window.addEventListener("keydown",movePlayer);
}

function movePlayer(e){
  if(e.key==="ArrowLeft" && player.x>0) player.x-=10;
  if(e.key==="ArrowRight" && player.x<560) player.x+=10;
}

function updateGame(){
  gctx.clearRect(0,0,600,300);
  gctx.fillStyle="#27ae60";
  gctx.fillRect
