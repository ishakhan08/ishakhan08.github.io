class Progress {
    constructor(param = {}) {
      this.timestamp        = null;
      this.duration         = param.duration || Progress.CONST.DURATION;
      this.progress         = 0;
      this.delta            = 0;
      this.progress         = 0;
      this.isLoop           = !!param.isLoop;
  
      this.reset();
    }
  
    static get CONST() {
      return {
        DURATION : 1000
      };
    }
  
    reset() {
      this.timestamp = null;
    }
  
    start(now) {
      this.timestamp = now;
    }
  
    tick(now) {
      if (this.timestamp) {
        this.delta    = now - this.timestamp;
        this.progress = Math.min(this.delta / this.duration, 1);
  
        if (this.progress >= 1 && this.isLoop) {
          this.start(now);
        }
  
        return this.progress;
      } else {
        return 0;
      }
    }
  }
  
  class Confetti {
    constructor(param) {
      this.parent         = param.elm || document.body;
      this.canvas         = document.createElement("canvas");
      this.ctx            = this.canvas.getContext("2d");
      this.width          = param.width  || this.parent.offsetWidth;
      this.height         = param.height || this.parent.offsetHeight;
      this.length         = param.length || Confetti.CONST.PAPER_LENGTH;
      this.yRange         = param.yRange || this.height * 2;
      this.progress       = new Progress({
        duration : param.duration,
        isLoop   : true
      });
      this.rotationRange  = typeof param.rotationLength === "number" ? param.rotationRange
                                                                     : 10;
      this.speedRange     = typeof param.speedRange     === "number" ? param.speedRange
                                                                     : 10;
      this.sprites        = [];
  
      this.canvas.style.cssText = [
        "display: block",
        "position: absolute",
        "top: 0",
        "left: 0",
        "pointer-events: none"
      ].join(";");
  
      this.render = this.render.bind(this);
  
      this.build();
  
      this.parent.appendChild(this.canvas);
      this.progress.start(performance.now());
  
      requestAnimationFrame(this.render);
    }
  
    static get CONST() {
      return {
          SPRITE_WIDTH  : 9,
          SPRITE_HEIGHT : 16,
          PAPER_LENGTH  : 100,
          DURATION      : 8000,
          ROTATION_RATE : 50,
          COLORS        : [
            "#FEC8D8",
            "#F694C1",
            "#5BC0BE",
            "#A9DEF9"
            
          ]
      };
    }
  
    build() {
      for (let i = 0; i < this.length; ++i) {
        let canvas = document.createElement("canvas"),
            ctx    = canvas.getContext("2d");
  
        canvas.width  = Confetti.CONST.SPRITE_WIDTH;
        canvas.height = Confetti.CONST.SPRITE_HEIGHT;
  
        canvas.position = {
          initX : Math.random() * this.width,
          initY : -canvas.height - Math.random() * this.yRange
        };
  
        canvas.rotation = (this.rotationRange / 2) - Math.random() * this.rotationRange;
        canvas.speed    = (this.speedRange / 2) + Math.random() * (this.speedRange / 2);
  
        ctx.save();
          ctx.fillStyle = Confetti.CONST.COLORS[(Math.random() * Confetti.CONST.COLORS.length) | 0];
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
  
        this.sprites.push(canvas);
      }
    }
  
    render(now) {
      let progress = this.progress.tick(now);
  
      this.canvas.width  = this.width;
      this.canvas.height = this.height;
  
      for (let i = 0; i < this.length; ++i) {
        this.ctx.save();
          this.ctx.translate(
            this.sprites[i].position.initX + this.sprites[i].rotation * Confetti.CONST.ROTATION_RATE * progress,
            this.sprites[i].position.initY + progress * (this.height + this.yRange)
          );
          this.ctx.rotate(this.sprites[i].rotation);
          this.ctx.drawImage(
            this.sprites[i],
            -Confetti.CONST.SPRITE_WIDTH * Math.abs(Math.sin(progress * Math.PI * 2 * this.sprites[i].speed)) / 2,
            -Confetti.CONST.SPRITE_HEIGHT / 2,
            Confetti.CONST.SPRITE_WIDTH * Math.abs(Math.sin(progress * Math.PI * 2 * this.sprites[i].speed)),
            Confetti.CONST.SPRITE_HEIGHT
          );
        this.ctx.restore();
      }
  
      requestAnimationFrame(this.render);
    }
  }
  
  (() => {
    const DURATION = 8000,
          LENGTH   = 120;
  
    new Confetti({
      width    : window.innerWidth,
      height   : window.innerHeight,
      length   : LENGTH,
      duration : DURATION
    });
  
    setTimeout(() => {
      new Confetti({
        width    : window.innerWidth,
        height   : window.innerHeight,
        length   : LENGTH,
        duration : DURATION
      });
    }, DURATION / 2);
  })();

//   count down

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Dec 17, 2019 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)

  // php FormData


  function myFunction() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var contact = document.getElementById("contact").value;
    // Returns successful data submission message when the entered information is stored in database.
    var dataString = 'name1=' + name + '&email1=' + email + '&password1=' + password + '&contact1=' + contact;
    if (name == '' || email == '' || password == '' || contact == '') {
    alert("Please Fill All Fields");
    } else {
    // AJAX code to submit form.
    $.ajax({
    type: "POST",
    url: "form.php",
    data: dataString,
    cache: false,
    success: function(html) {
    alert(html);
    }
    });
    }
    return false;
    }