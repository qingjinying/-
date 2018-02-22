//每行方块的数量
const LINE_NUM = 4
//方块的边长
const RECT_SIDE = Number.parseInt(wx.getSystemInfoSync().screenWidth / LINE_NUM)
//屏幕的高度
const SCREEN_HEIGHT = wx.getSystemInfoSync().screenHeight

let instance
export default class Database {
  constructor() {
    if (instance)
      return instance
    
    instance = this 

    //一行方块为一个元素的数组
    this.rect = []
    //rect最上方元素的横坐标
    this.firstY = - RECT_SIDE
    //方块的边长
    this.side = RECT_SIDE
    this.lineNum = LINE_NUM

    this.rectInit()
  }

  //从-RECT_SIDE开始初始化填充rect，直到最后一个元素超出屏幕
  rectInit(){
    this.rect.push(this.createRect())
    if (this.rect.length * RECT_SIDE + this.firstY < SCREEN_HEIGHT ){
      this.rectInit()
    }
  }
  createRect(){
    let rectArr = [false,false,false,false]
    rectArr[Number.parseInt(Math.random() * LINE_NUM)] = true
    return rectArr
  }

  //更新数据
  upData(speed){
    this.firstY += speed
    //当首元素全部进入屏幕后，将尾元素重新初始化后放到头部
    if (this.firstY >= 0){
       let re = this.rect.pop()
       re = [false, false, false, false]
       re[Number.parseInt(Math.random() * LINE_NUM)] = true
       this.rect.unshift(re)

       this.firstY = - RECT_SIDE
    }
  }
     
  
}