/**
 * class
 * 一組緊密相關的函數、屬性集合
 */

interface IPoint {
  x: number;
  y: number;
  drawPoint: () => void;
  getDistances: (p: IPoint) => number;
}

class Point implements IPoint {
  // x: number;
  // y: number;

  constructor(public x: number, public y: number) {
    // this.x = x;
    // this.y = y;
  }
  drawPoint = () => {
    console.log('x: ', this.x, ' y: ', this.y);
  };
  getDistances = (p: IPoint) => {
    return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2);
  };
}

const point = new Point(2, 3);
point.drawPoint();
