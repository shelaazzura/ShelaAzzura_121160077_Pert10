let P =[];
let C=[];
let t =[];
let r; //parameter model(laju pertemubuhan), materi kjelas: input user
let K; //parameter model(carrying capasity) , tugas: r dan K input user

//bisa juga jadi input\
let P0 = 20; //kondisi awal
let dt = 0.1;
let tMax = 10;

let grafik; //Chart JS

function setup() {
  createCanvas(400, 400);

  r= createInput("0.8"); //input default adalah 0.7
  r.position(20,450)
  let p= createP('Konstanta Pertumbuhan') //text biasa
  p.style('fontsize', '20px')
  p.position(20,400);
  
  K= createInput("0.5"); //input default adalah 0.7
  K.position(20,510)
  let k= createP('Carrying Capacity') //text biasa
  k.style('fontsize', '20px')
  k.position(20,468);
  
  //baris program untuk merespon input user
  solve(); //untuk inisiasi jalankan dahulu solve()
  r.changed(solve); //jika input berganti, jalankan fungsi solve
  K.changed(solve);
  
  grafik= new Chart(this, config);
  
}

function draw() {
  background(220);
  
  grafik.update();
}

function solve(){
  
  P[0]=P0;
  t[0]=0;
  let rs= float(r.value());
  let Kp= float(K.value());
  let iterNum= int(tMax/dt);
  
  for (i=0; i<iterNum; i++){
    P[i+1]=P[i] + dt *rs * P[i]*(1 - P[i]/Kp)
    t[i+1]= (i+1)*dt;
  }   
}