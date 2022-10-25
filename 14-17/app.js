/**
 * class
 * 一組緊密相關的函數、屬性集合
 */
var Point = /** @class */ (function () {
    // x: number;
    // y: number;
    function Point(x, y) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.drawPoint = function () {
            console.log('x: ', _this.x, ' y: ', _this.y);
        };
        this.getDistances = function (p) {
            return Math.pow(p.X - _this.x, 2) + Math.pow(p.getY() - _this.y, 2);
            return 0;
        };
        this.setY = function (value) {
            if (value < 0) {
                throw new Error('value must be greater than zero');
            }
            _this.y = value;
        };
        this.getY = function () {
            return _this.y;
        };
        // this.x = x;
        // this.y = y;
    }
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('value must be greater than zero');
            }
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var point = new Point(24, 50);
// point.setX(10);
// point.setX(-9);
// console.log(point.getX());
point.X = 10;
console.log(point.X);
// point.drawPoint();
// point.x = 30;
// point.y = 5;
// point.
