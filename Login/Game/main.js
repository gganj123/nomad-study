var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

let img2 = new Image();
img2.src = 'dino.png';

var dino = {
    x:10,
    y:200,
    width:30,
    height:35,
    draw() {
        ctx.fillStyle = "rgba(255, 0, 0, 0)";
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(img2, this.x, this.y)     
    }
}


// let img1 = new Image();
// img1.src = 'cactus.png';
var img1 = new Image();
img1.src = 'cactus.png'


class Cactus {
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 30;
        this.height = 20;
    }
    draw() {
        ctx.fillStyle = "rgba(255, 0, 0, 0)";
        ctx.fillRect(this.x , this.y , this.width, this.height);
        ctx.drawImage(img1, this.x, this.y)
        // ctx.drawImge(img1, this.x, this.y)
    }
}

var timer = 0;
var cactus여러개 = [];
var jumptimer = 0;
var animationGame;

function 프레임마다실행할거() {
    animationGame = requestAnimationFrame(프레임마다실행할거);
    timer++;


ctx.clearRect(0,0, canvas.width, canvas.height);

if(timer % 300 === 0){
    var cactus = new Cactus();
    cactus여러개.push(cactus);
}

cactus여러개.forEach((a, i, o)=>{
    if( a.x < 0){
        o.splice(i, 1)
    }
    a.x--;

    충돌하냐(dino, a);

    a.draw();
})

if(jumping == true){
    dino.y-=1 ;
    jumptimer++;
}
if(jumping == false){
    if(dino.y < 200){
        dino.y+=1;
    }
}
if(jumptimer > 100){
    jumping = false;
    jumptimer = 0;
}
dino.draw();
}
프레임마다실행할거();

//충돌확인

function 충돌하냐(dino, cactus) {
    var x축차이 = cactus.x - (dino.x + dino.width);
    var y축차이 = cactus.y - (dino.y + dino.height); 
    if(x축차이 <0 && y축차이 <0){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        cancelAnimationFrame(animationGame);
    }
}

var jumping = false;
document.addEventListener('keydown',function(e){
    if(e.code ==='Space'){
        jumping = true;
    }
})