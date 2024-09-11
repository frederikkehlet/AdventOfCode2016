"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promises_1 = require("fs/promises");
(0, promises_1.readFile)('input.txt').then(function (contents) {
    var content = contents.toString();
    var instructions = content.split("\r\n");
    var grid = createGrid(6, 50);
    instructions.forEach(function (instruction) {
        var command = instruction.split(' ')[0];
        if (command == 'rect') {
            var dimensions = instruction.split(' ')[1];
            var x = dimensions.split('x')[0];
            var y = dimensions.split('x')[1];
            populateGrid(grid, x, y);
        }
        else {
            var direction = instruction.split(' ')[1];
            var position = instruction.split(' ')[2].split('=')[1];
            var step = instruction.split(' ').slice(-1)[0];
            if (direction == 'column') {
                shiftColumn(grid, position, step);
            }
            else {
                shiftRow(grid, position, step);
            }
        }
    });
    console.log(countLitPixels(grid));
});
var createGrid = function (h, w) {
    var grid = new Array(h);
    for (var i = 0; i < h; i++) {
        grid[i] = new Array(w);
        for (var j = 0; j < w; j++) {
            grid[i][j] = '.';
        }
    }
    return grid;
};
var populateGrid = function (grid, x, y) {
    for (var i = 0; i < y; i++) {
        for (var j = 0; j < x; j++) {
            grid[i][j] = '#';
        }
    }
};
var shiftColumn = function (grid, position, step) {
    var currentCol = [];
    for (var i = 0; i < grid.length; i++) {
        currentCol.push(grid[i][position]);
    }
    var shift = step % currentCol.length;
    var shifted = currentCol.slice(-shift).concat(currentCol.slice(0, -shift));
    for (var i = 0; i < grid.length; i++) {
        grid[i][position] = shifted[i];
    }
};
var shiftRow = function (grid, position, step) {
    var currentRow = [];
    for (var i = 0; i < grid[0].length; i++) {
        currentRow.push(grid[position][i]);
    }
    var shift = step % currentRow.length;
    var shifted = currentRow.slice(-shift).concat(currentRow.slice(0, -shift));
    for (var i = 0; i < grid[0].length; i++) {
        grid[position][i] = shifted[i];
    }
};
var countLitPixels = function (grid) {
    var result = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == '#')
                result += 1;
        }
    }
    return result;
};
