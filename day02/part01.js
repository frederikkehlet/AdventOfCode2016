"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promises_1 = require("fs/promises");
(0, promises_1.readFile)('input.txt').then(function (contents) {
    var line = contents.toString();
    var instructions = line.split('\r\n');
    var result = solve(instructions);
    console.log(result);
});
var solve = function (instructions) {
    var code = '';
    var keypad = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    var y = 1, x = 1;
    instructions.forEach(function (instruction) {
        var x1 = x, y1 = y;
        var moves = instruction.split('');
        moves.forEach(function (move) {
            switch (move) {
                case 'U':
                    y1 = y1 - 1 <= 0 ? 0 : y1 - 1;
                    break;
                case 'D':
                    y1 = y1 + 1 >= 2 ? 2 : y1 + 1;
                    break;
                case 'L':
                    x1 = x1 - 1 <= 0 ? 0 : x1 - 1;
                    break;
                case 'R':
                    x1 = x1 + 1 >= 2 ? 2 : x1 + 1;
            }
        });
        x = x1, y = y1;
        code += keypad[y1][x1];
    });
    return Number(code);
};
