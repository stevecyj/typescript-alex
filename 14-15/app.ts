let drawPoint = (point: Point) => {
  console.log({ x: point.x, y: point.y });
};
drawPoint({ x: 105, y: 24 });
drawPoint({ x: 'abc', y: 'def' });
drawPoint({ weather: '乾燥', temperature: '5oC' });

interface Point {
  x: number;
  y: number;
}

let getDistance = (a: Point, b: Point) => {
  //
};
