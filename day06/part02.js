"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promises_1 = require("fs/promises");
(0, promises_1.readFile)('input.txt').then(function (contents) {
    var line = contents.toString();
    var lines = line.split('\r\n');
    var grid = [];
    lines.forEach(function (line) {
        var letters = line.split('');
        grid.push(letters);
    });
    var columns = [];
    var rows = grid.length;
    var cols = grid[0].length;
    for (var col = 0; col < cols; col++) {
        var lettersByColumn = [];
        for (var row = 0; row < rows; row++) {
            lettersByColumn.push(grid[row][col]);
        }
        columns.push(lettersByColumn);
    }
    var answer = '';
    columns.forEach(function (column) {
        var letterCount = {};
        column.forEach(function (letter) {
            if (letterCount[letter] != undefined) {
                letterCount[letter] += 1;
            }
            else {
                letterCount[letter] = 1;
            }
        });
        var sortable = Object.keys(letterCount).map(function (key) { return [key, letterCount[key]]; });
        sortable.sort(function (a, b) { return a[1] - b[1]; });
        answer += sortable[0][0];
    });
    console.log(answer);
});
