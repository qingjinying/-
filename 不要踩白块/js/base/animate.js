import Database from './database.js' 

export default class Animate {
  constructor() {
   this.canvas = wx.createCanvas()
   this.ctx = this.canvas.getContext('2d')

   this.speed = 1
   this.database = new Database()
  }
  //开启动画循环
  circulation(){
    requestAnimationFrame(this.loop.bind(this))
  } 
  loop(){
    //根据database渲染画布
    for (let i = 0; i < this.database.rect.length; i++) {
      for (let j = 0; j < this.database.lineNum; j++) {
        let x = j * this.database.side
        let y = i * this.database.side +  this.database.firstY
        if (this.database.rect[i][j]) {
          this.drawRect(x, y, true)
        } else {
          this.drawRect(x, y, false)
        }
      }
    }
    //调用database更新数据，每帧更新一次
    this.database.upData(this.speed)
    requestAnimationFrame(this.loop.bind(this))
  }  
  drawRect(x,y,flo){
    if(flo){
      this.ctx.fillStyle = "grey"
    } else {
      this.ctx.fillStyle = "red"
    }
    
    this.ctx.fillRect(x, y, this.database.side, this.database.side)
  }

}