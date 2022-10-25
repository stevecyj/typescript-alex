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
            return Math.pow(p.x - _this.x, 2) + Math.pow(p.y - _this.y, 2);
        };
        // this.x = x;
        // this.y = y;
    }
    return Point;
}());
var point = new Point(2, 3);
point.drawPoint();
