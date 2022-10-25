interface IPoint {
  drawPoint: () => void;
  getDistances: (p: IPoint) => number;
  X: number;
  // getX: () => number;
  getY: () => number;
  // setX: (value: number) => void;
  setY: (value: number) => void;
}

export class Point implements IPoint {
  // x: number;
  // y: number;

  constructor(private x: number, private y: number) {
    // this.x = x;
    // this.y = y;
  }
  drawPoint = () => {
    console.log('x: ', this.x, ' y: ', this.y);
  };
  getDistances = (p: IPoint) => {
    return Math.pow(p.X - this.x, 2) + Math.pow(p.getY() - this.y, 2);
    return 0;
  };

  set X(value: number) {
    if (value < 0) {
      throw new Error('value must be greater than zero');
    }
    this.x = value;
  }

  get X() {
    return this.x;
  }

  setY = (value: number) => {
    if (value < 0) {
      throw new Error('value must be greater than zero');
    }
    this.y = value;
  };

  getY = () => {
    return this.y;
  };
}
