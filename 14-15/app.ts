let drawPoint = (point: Point) => {
  console.log({ x: point.x, y: point.y });
};
drawPoint({ x: 105, y: 24 });
drawPoint({ x: 'abc', y: 'def' });

interface Point {
  x: number;
  y: number;
}
