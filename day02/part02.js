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
        ['', '', 1, '', ''],
        ['', 2, 3, 4, ''],
        [5, 6, 7, 8, 9],
        ['', 'A', 'B', 'C', ''],
        ['', '', 'D', '', '']
    ];
    var y = 2, x = 0;
    instructions.forEach(function (instruction) {
        var x1 = x, y1 = y;
        var moves = instruction.split('');
        moves.forEach(function (move) {
            switch (move) {
                case 'U':
                    if (y1 - 1 >= 0 && keypad[y1 - 1][x1] == '')
                        y1 = y1;
                    else if (y1 - 1 <= 0)
                        y1 = 0;
                    else
                        y1 = y1 - 1;
                    break;
                case 'D':
                    if (y1 + 1 <= 4 && keypad[y1 + 1][x1] == '')
                        y1 = y1;
                    else if (y1 + 1 >= 4)
                        y1 = 4;
                    else
                        y1 = y1 + 1;
                    break;
                case 'L':
                    if (x1 - 1 >= 0 && keypad[y1][x1 - 1] == '')
                        x1 = x1;
                    else if (x1 - 1 <= 0)
                        x1 = 0;
                    else
                        x1 = x1 - 1;
                    break;
                case 'R':
                    if (x1 + 1 <= 4 && keypad[y1][x1 + 1] == '')
                        x1 = x1;
                    else if (x1 + 1 >= 4)
                        x1 = 4;
                    else
                        x1 = x1 + 1;
                    break;
            }
        });
        x = x1, y = y1;
        code += keypad[y1][x1];
    });
    return code;
};
