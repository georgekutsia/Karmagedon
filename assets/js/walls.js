// class Walls {
//     constructor(ctx, x, y, w, h) {
//       this.ctx = ctx;
//       this.x = 50;
//       this.y = 50;
//       this.w = 90;
//       this.h = 90;
      
//     }
  
//     draw() {
//       this.ctx.fillRect(this.x, this.y, this.w, this.h)

      
//       //horizontales cortos
//       // this.ctx.fillRect(50, 50, 92, 12);
//       // this.ctx.fillRect(233, 50, 92, 12);
//       // this.ctx.fillRect(372, 50, 92, 12);
//       // this.ctx.fillRect(553, 50, 92, 12);
//       // this.ctx.fillRect(692, 50, 92, 12);
//       // this.ctx.fillRect(875, 50, 92, 12);
//       // this.ctx.fillRect(50, 326, 92, 12);
//       // this.ctx.fillRect(233, 326, 92, 12);
//       // this.ctx.fillRect(372, 326, 92, 12);
//       // this.ctx.fillRect(553, 326, 92, 12);
//       // this.ctx.fillRect(692, 326, 92, 12);
//       // this.ctx.fillRect(875, 326, 92, 12);

//       // // horizontales largos
//       // this.ctx.fillRect(50, 223, 276, 12);
//       // this.ctx.fillRect(372, 223, 276, 12);
//       // this.ctx.fillRect(692, 223, 276, 12);

//       // this.ctx.fillRect(50, 500, 276, 12);
//       // this.ctx.fillRect(372, 500, 276, 12);
//       // this.ctx.fillRect(692, 500, 276, 12);
//       // //verticales fila superior
//       // this.ctx.fillRect(50, 50, 12, 180);
//       // this.ctx.fillRect(315, 50, 12, 180);
//       // this.ctx.fillRect(372, 50, 12, 180);
//       // this.ctx.fillRect(638, 50, 12, 180);
//       // this.ctx.fillRect(691, 50, 12, 180);
//       // this.ctx.fillRect(957, 50, 12, 180);
//       // //verticales fila inferior
//       // this.ctx.fillRect(50, 330, 12, 180);
//       // this.ctx.fillRect(315, 330, 12, 180);
//       // this.ctx.fillRect(372, 330, 12, 180);
//       // this.ctx.fillRect(638, 330, 12, 180);
//       // this.ctx.fillRect(691, 330, 12, 180);
//       // this.ctx.fillRect(957, 330, 12, 180);

//     }
  
//     move() {}
  
//     collides(player) {
//       const colX = this.x <= player.x + player.w && this.x + this.w > player.x;
//       const colY = this.y + this.h > player.y && this.y < player.y + player.h;
//       return colX && colY;
//     }
//   }
  









//     // for (let i = 0; i < 62; i++) {
//     //     ctx.arc(21 + i * 16, 29, 4, 0, Math.PI * 2);
//     //     ctx.fillStyle="grey"
//     //     ctx.fill();
//     //     ctx.closePath()
//     //     ctx.arc(21 + i * 16, 527, 4, 0, Math.PI * 2);
//     //     ctx.fill();
//     //     ctx.closePath()
//     // }
//     // for (let i = 0; i < 60; i++) {
//     //     ctx.arc(37 + i * 16, 280, 4, 0, Math.PI * 2);
//     //     ctx.fill();
//     //     ctx.closePath()
  
//     // }
//     // for (let i = 0; i < 31; i++) {
//     //     ctx.arc(21, 29 + i * 16, 4, 0, Math.PI * 2);
//     //     ctx.fill();
//     //     ctx.closePath()
//     //     ctx.arc(997, 29 + i * 16, 4, 0, Math.PI * 2);
//     //     ctx.fill();
//     //     ctx.closePath()
//     // }
//     // for (let i = 0; i < 30; i++) {
//     //     ctx.arc(348, 47 + i * 16, 4, 0, Math.PI * 2);
//     //     ctx.fill();
//     //     ctx.closePath()
//     //     ctx.arc(670, 47 + i * 16, 4, 0, Math.PI * 2);
//     //     ctx.fill();
//     //     ctx.closePath()
//     // }
  
//     // let x = [155, 50, 325, 215]
//     // let y = [50, 230]
  
//     // function build(){
//     //     ctx.beginPath();
//     //     ctx.lineWidth= 10;
//     //     ctx.moveTo(x[0], y[0]);
//     //     ctx.lineTo(x[1], y[0])
//     //     ctx.lineTo(x[1], y[1])
//     //     ctx.lineTo(x[2],y[1])
//     //     ctx.lineTo(x[2], y[0])
//     //     ctx.lineTo(x[3], y[0])
//     //     ctx.moveTo(x[0], y[0])
//     //     ctx.stroke();
//     //     }
//     // build()
//     // x = x.map(numb => numb + 323)
//     // build()
//     // x = x.map(numb => numb + 323)
//     // build ()
//     // y = y.map(numb => numb + 278)
//     // build()
//     // x = x.map(numb => numb-323)
//     // build()
//     // x = x.map(numb =>numb-323)
//     // build ()
  
//     // function roundedRect(ctx, x, y, width, height, radius) {
//     //     ctx.beginPath();
//     //     ctx.moveTo(x, y + radius);
//     //     ctx.lineTo(x, y + height - radius);
//     //     ctx.arcTo(x, y + height, x + radius, y + height, radius);
//     //     ctx.lineTo(x + width - radius, y + height);
//     //     ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
//     //     ctx.lineTo(x + width, y + radius);
//     //     ctx.arcTo(x + width, y, x + width - radius, y, radius);
//     //     ctx.lineTo(x + radius, y);
//     //     ctx.arcTo(x, y, x, y + radius, radius);
//     //     ctx.stroke();
//     //   }
//     //       roundedRect(ctx, 12, 12, 150, 150, 15);
//     //       roundedRect(ctx, 19, 19, 150, 150, 9);
//     //       roundedRect(ctx, 53, 53, 49, 33, 10);
//     //       roundedRect(ctx, 53, 119, 49, 16, 6);
//     //       roundedRect(ctx, 135, 53, 49, 33, 10);
//     //       roundedRect(ctx, 135, 119, 25, 49, 10);
  
//     // class Enemy {
//     //     constructor(ctx) {
//     //       this.ctx = ctx;
//     //       this.x = this.ctx.canvas.width;
//     //       this.y = Math.random() * this.ctx.canvas.height;
//     //       this.w = 0.2 * this.ctx.canvas.width;
//     //       this.h = 0.2 * this.ctx.canvas.height;
//     //       this.vx = -5;
//     //     }
  
//     //     draw() {
//     //       const prevStyle = this.ctx.fillStyle;
//     //       this.ctx.fillStyle = "red";
//     //       this.ctx.fillRect(this.x, this.y, this.w, this.h);
//     //       this.ctx.fillStyle = prevStyle;
//     //     }
  
//     //     move() {
//     //       this.x += this.vx;
//     //     }
  
//     //     isVisible() {
//     //       return this.x + this.w > 0;
//     //     }
  
//     //     collides(player) {
//     //       const colX =
//     //         this.x <= player.x + player.w - 20 && this.x + this.w > player.x;
//     //       const colY = this.y + this.h > player.y && this.y < player.y + player.h;
  
//     //       return colX && colY;
//     //     }
//     //   }
  