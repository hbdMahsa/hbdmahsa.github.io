let balloons = [];
const totalBalloons = 28;
let created = true;
let drawed = true;

let burstBalloons = 0;
let winWidth = window.innerWidth;
let winHeight = window.innerHeight;
let text_top = 0.2 * winHeight;
const e = document.querySelector(".btn"),
    counter = document.querySelector(".counter"),
    darkroom = document.querySelector(".darkroom"),
    giftroom = document.querySelector(".giftroom"),
    hallway = document.querySelector(".hallway"),
    empty_room = document.querySelector(".empty-room"),
    flash = document.querySelector(".flash"),

    a = document.querySelectorAll(".bb-text"),
    n = document.querySelectorAll(".gift-text"),
    i = document.querySelectorAll(".hall-text"),
    d = document.querySelectorAll(".room-text"),
    btn_ref = document.querySelector(".btn-ref"),
    u = document.querySelectorAll(".frame"),
    scroll = document.querySelector(".scroll"),
    Text = document.querySelector(".text"),
    switch_aud = document.querySelector(".switch-aud"),
    f = document.querySelector(".blast-aud"),
    burst = document.querySelector(".burst-aud"),
    L = document.querySelector(".door-aud"),
    S = document.querySelector(".haunt-aud"),
    q = document.querySelector(".hbd-aud"),
    h = darkroom => {
        for (let giftroom = 0; giftroom < darkroom.length; giftroom++) setTimeout((() => {
            darkroom[giftroom].classList.add("read"), 
            giftroom === darkroom.length - 1 && (e.style.display = "inline-block")
        }), 4e3 * giftroom)
    },
    T = darkroom => {
        darkroom.classList.add("fade-in"), 
        darkroom.style.opacity = "0",
        e.style.display = "none", 
        btn_ref.style.display = "none"
    };

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
    }  

function setup() {
    var myCanvas = createCanvas(winWidth, winHeight);
    myCanvas.parent("room");
    
    if (balloons.length < totalBalloons) {
        for (let i = 0; i < totalBalloons; i++) {
            balloons.push(new Ballon());
        }
        created = true;
    }
};

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    for (let balloon of balloons) {
        balloon.move();
    }
  }

function draw() {
    for (let balloon of balloons) {
        balloon.show();
        balloon.checkEdge();
        if (balloon.mouseHover()) {
            resizeCanvas(windowWidth, windowHeight);
            balloons.splice(balloons.indexOf(balloon), 1);
            burstBalloons++;
            burst.play();
            counter.innerHTML = burstBalloons.toString();
            counter.style.display = "block";
            counter.style.fontSize = "6em";
            if (burstBalloons == 28) {
                    L.play(), 
                    T(empty_room), 
                    btn_ref.innerHTML = "Click the Gift", 
                    setTimeout((function () {
                        e.classList.add("gift"), 
                        e.classList.remove("door-in"), 
                        empty_room.style.display = "none", 
                        h(n)
                }), 2e3);
                
            
            }
        } 
    }
    drawed = true;
};

class Ballon {
    constructor() {
      this.r = random(30, 70);
      // create random position but not in center
      d.offsetTop;
      this.pos = createVector(random(20, width-20), random(20,height-20));
      while ((this.pos.x > width / 2 - 50 && this.pos.x < width / 2 + 50) || ((this.pos.y > text_top - 40 && this.pos.y < text_top + 30) && (this.pos.x > width / 2 - 200 && this.pos.x < width / 2 + 200))) {
        this.pos = createVector(random(20, width-20), random(20,height-20));
      }

      
      this.upStep = random(2, 4);
      this.red = random(100, 255);
      this.green = random(100, 255);
      this.blue = random(100, 255);
      this.lineLen = random(50, 100);
    }

    move() {
        this.pos = createVector(random(20, width-20), random(20,height-20));
    }
  
    show() {
      // line
      push();
      stroke(255);
      strokeWeight(2);
      line(this.pos.x, this.pos.y + this.r / 2 + 10, this.pos.x, this.pos.y + this.lineLen);
      pop();
  
      push();
      // balloon
      fill(this.red, this.green, this.blue, 170);
      noStroke();
      ellipse(this.pos.x, this.pos.y, this.r, this.r + 10);
      // balloon tie
      ellipse(this.pos.x, this.pos.y + this.r / 2 + 10, 10, 7);
      pop();
    }
    
  
    up() {
      this.pos.y -= this.upStep;
    }
  
    checkEdge() {
      if (this.pos.y < 0 + this.r / 2 + 5) {
        this.pos.y = 0 + this.r / 2 + 5;
      }
    }
    mouseHover() {
        if (this.pos.x + this.r / 2 > mouseX && this.pos.x - this.r / 2 < mouseX) {
          if (this.pos.y + this.r / 2 > mouseY && this.pos.y - this.r / 2 < mouseY) {
            this.pos = createVector(-200,-200);
            return true;
          }
        } else {
          return false;
        }
      }
  

  }


btn_ref.innerHTML = "Click the Light Bulb.", h(a), e.addEventListener("click", (
    function () {
    if (e.classList.contains("switch")) switch_aud.play(), 
    T(darkroom), 
    setTimeout((function () {
        //e.classList.add("door-in"), 
        e.classList.remove("switch"), 
        darkroom.style.display = "none", 
        h(d)
    }), 2e3),
    created = false,
    drawed = false,
    setup(),
    draw();
    if (e.classList.contains("gift")) {
        S.pause(), 
        f.play(), 
        giftroom.style.display = "none", 
        T(flash), 
        
        q.loop = !0,
        sleep(2500).then(() => {
            q.play();
        });
        const e = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--readTime")) + 5;
        u[1].style.display = "flex", 
        setTimeout((() => {
            u[1].classList.add("appear"), u[1].style.opacity = "1", Text.classList.add("move-up")
        }), 1500), setTimeout((() => {
            Text.style.transform = "translateY(-100%)", flash.style.display = "none"
        }), 5e3), setTimeout((() => {
            scroll.classList.add("fade-in"), scroll.style.opacity = "0"
        }), 1e3 * e), setTimeout((() => {
            u[1].style.display = "none", u[0].style.display = "flex", u[0].classList.add("appear"), u[0].style.opacity = "1",q.loop = 0
        }), 1e3 * (e + 3));
    }
}));





