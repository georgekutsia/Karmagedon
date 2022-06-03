class Time{
    constructor(ctx){
        this.ctx = ctx;
        this.i=0;
    }  

    move() {
    setInterval(function () {
        console.log("time")
      this.i++;
      var hours = Math.floor((this.i % (60 * 60 * 24)) / (60 * 60));
      var minutes = Math.floor((this.i % (60 * 60)) / 60);
      var seconds = Math.floor(this.i % 60);

      document.getElementById("demo").innerText =
       hours + "h:" + minutes + "m:" + seconds + " s ";
    }, 10);
  }
}


