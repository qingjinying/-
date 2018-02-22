import Database from './base/database.js' 
import Animate from './base/animate.js' 
export default class Main{
  constructor(){
    this.database = new Database()
    this.animate = new Animate()
    this.animate.circulation()
    this.bindTouch()
  }
  //Touch
  /* 绑定touch  */
  bindTouch() {
    wx.onTouchStart((e) => {
      let y =e.touches[0].clientY - this.database.side - this.database.firstY
      y = y < 0 ? 0 : Math.ceil(y / this.database.side)
      let x = Number.parseInt(e.touches[0].clientX / this.database.side)
      if (this.database.rect[y][x]){
        this.database.rect[y][x] = false
      }else{
        console.log('游戏结束')
      }
      
    })
  }
}