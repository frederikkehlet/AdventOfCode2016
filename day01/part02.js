"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promises_1 = require("fs/promises");
var cardinal;
(function (cardinal) {
    cardinal[cardinal["N"] = 0] = "N";
    cardinal[cardinal["E"] = 1] = "E";
    cardinal[cardinal["S"] = 2] = "S";
    cardinal[cardinal["W"] = 3] = "W";
})(cardinal || (cardinal = {}));
(0, promises_1.readFile)('input.txt').then(function (contents) {
    var line = contents.toString();
    var commands = line.split(', ');
    var result = solve(commands);
    console.log(result);
});
var solve = function (commands) {
    var visited_coordinates = [];
    var currentDirection = cardinal.N;
    var x = 0;
    var y = 0;
    var result = -1;
    commands.forEach(function (command) {
        if (result != -1)
            return result;
        var direction = command[0];
        var length = Number(command.slice(1));
        var currentPos = [x, y];
        switch (currentDirection) {
            case cardinal.N:
                if (direction == 'R') {
                    x = x + length;
                    currentDirection = cardinal.E;
                    break;
                }
                if (direction == 'L') {
                    x = x - length;
                    currentDirection = cardinal.W;
                    break;
                }
            case cardinal.E:
                if (direction == 'R') {
                    y = y - length;
                    currentDirection = cardinal.S;
                    break;
                }
                if (direction == 'L') {
                    y = y + length;
                    currentDirection = cardinal.N;
                    break;
                }
            case cardinal.S:
                if (direction == 'R') {
                    x = x - length;
                    currentDirection = cardinal.W;
                    break;
                }
                if (direction == 'L') {
                    x = x + length;
                    currentDirection = cardinal.E;
                    break;
                }
            case cardinal.W:
                if (direction == 'R') {
                    y = y + length;
                    currentDirection = cardinal.N;
                    break;
                }
                if (direction == 'L') {
                    y = y - length;
                    currentDirection = cardinal.S;
                    break;
                }
        }
        var x1 = currentPos[0], y1 = currentPos[1];
        var _a = [x, y], x2 = _a[0], y2 = _a[1];
        if (x1 === x2) {
            // y coordinate range
            for (var y_1 = Math.min(y1, y2) + 1; y_1 < Math.max(y1, y2); y_1++) {
                if (isInList([x1, y_1], visited_coordinates)) {
                    console.log("".concat([x1, y_1], " Is already in list"));
                    result = Math.abs((0 - y_1) + (0 - x1));
                    break;
                }
                visited_coordinates.push([x1, y_1]);
            }
        }
        else if (y1 === y2) {
            // x coordinate ranges
            for (var x_1 = Math.min(x1, x2) + 1; x_1 < Math.max(x1, x2); x_1++) {
                if (isInList([x_1, y1], visited_coordinates)) {
                    console.log("".concat([x_1, y1], " Is already in list"));
                    result = Math.abs((0 - y1) + (0 - x_1));
                    break;
                }
                visited_coordinates.push([x_1, y1]);
            }
        }
    });
    return result;
};
var isInList = function (coordinate, list) {
    return list.some(function (coord) { return coord[0] === coordinate[0] && coord[1] === coordinate[1]; });
};
