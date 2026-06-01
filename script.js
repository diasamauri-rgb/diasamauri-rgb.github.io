/* INTRO */
function startSite(){
  document.getElementById("intro").style.display="none";
  document.getElementById("site").style.display="block";
}

/* THEME */
function toggleTheme(){document.body.classList.toggle("dark");}

/* NAV */
function showSection(id){
  document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* PARTICLES */
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth; canvas.height=window.innerHeight;
let particles=[];
for(let i=0;i<60;i++){particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2});}
function anim(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="rgba(46,204,113,0.5)";
  particles.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();p.y+=0.5;if(p.y>canvas.height){p.y=0;p.x=Math.random()*canvas.width;}});
  requestAnimationFrame(anim);
}
anim();

/* QUIZ */
const quiz=[
  {q:"O agro produz o quê?",a:["Alimentos","Carros","Internet"],c:0},
  {q:"Campo e cidade são:",a:["Ligados","Separados","Inimigos"],c:0},
  {q:"Tecnologia no campo serve para:",a:["Ajudar produção","Atrapalhar","Nada"],c:0}
];
let i=0; let points=0;
function startQuiz(){show();}
function show(){
  const q=quiz[i]; document.getElementById("qtext").innerText=q.q;
  const box=document.getElementById("answers"); box.innerHTML="";
  q.a.forEach((t,index)=>{
    const b=document.createElement("button"); b.innerText=t;
    b.onclick=()=>{
      if(index===q.c){points++;}
      i=(i+1)%quiz.length;
      document.getElementById("score").innerText="Pontos: "+points;
      show();
    };
    box.appendChild(b);
  });
}

/* CHART */
new Chart(document.getElementById("chart"),{
  type:"bar",
  data:{
    labels:["Educação","Campo","Cidade","Sustentabilidade"],
    datasets:[{label:"Impacto",data:[95,90,88,97],backgroundColor:"#27ae60"}]
  }
});

/* GAME NÍVEL 3 COM FASES E RANKING */
const g=document.getElementById("gameCanvas"); const gtx=g.getContext("2d");
let player={x:280,y:260,w:40}, items=[], score=0, level=1, loop;
const rankList=document.getElementById("rankList");

function startGame(){
  loop=setInterval(update,20); window.addEventListener("keydown",move);
}

function resetGame(){
  clearInterval(loop); score=0; items=[]; level=1;
  document.getElementById("gameScore").innerText=0;
  document.getElementById("level").innerText=1;
}

function move(e){
  if(e.key==="ArrowLeft") player.x-=10;
  if(e.key==="ArrowRight") player.x+=10;
}

function update(){
  gtx.clearRect(0,0,600,300);
  gtx.fillStyle="green"; gtx.fillRect(player.x,player.y,player.w,10);

  if(Math.random()<0.03+level*0.01){items.push({x:Math.random()*580,y:0});}

  items.forEach((it,i)=>{
    it.y+=2+level*0.5;
    gtx.fillRect(it.x,it.y,10,10);
    if(it.y>player.y && it.x>player.x && it.x<player.x+40){
      score++; items.splice(i,1);
      if(score%10===0){level++; document.getElementById("level").innerText=level;}
      document.getElementById("gameScore").innerText=score;
      saveRanking(score);
    }
  });
}

/* RANKING LOCAL */
function saveRanking(s){
  let r=JSON.parse(localStorage.getItem("ranking")||"[]");
  r.push(s);
  r.sort((
