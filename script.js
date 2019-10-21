let game = {
    interval: null,
    ball: null,
    init: function(){
        let me = this;
        let start = document.getElementById(`start`);
        start.addEventListener(`click`, function(){
            me.start();
        });
        me.ball = document.querySelector(`.ball`);
        me.ball.addEventListener(`click`, function(){
            me.end();
        });
    },

    start: function(){
        me = this,
        me.ball.style.background = `aqua`
        me.interval = setInterval(function(){
            let left = Math.round(Math.random() * 95);
            let top = Math.round(Math.random() * 95);
            me.ball.style.left = left + `%`;
            me.ball.style.top = top + `%`;
        }, 500)
   },

   end: function(){
       this.ball.style.background = `red`
        clearInterval(this.interval);
        alert(`You Win`)
   },
}
game.init();