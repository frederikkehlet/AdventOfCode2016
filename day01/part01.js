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
    var currentDirection = cardinal.N;
    var x = 0;
    var y = 0;
    commands.forEach(function (command) {
        var direction = command[0];
        var length = Number(command.slice(1));
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
    });
    return Math.abs((0 - y) + (0 - x));
};
