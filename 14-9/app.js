var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
    Color[Color["alpha"] = 3] = "alpha";
})(Color || (Color = {}));
var color = Color.blue;
console.log(color);
