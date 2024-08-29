"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promises_1 = require("fs/promises");
(0, promises_1.readFile)('input.txt').then(function (contents) {
    var line = contents.toString();
    var numberString = line.split('\r\n');
    var arr = [];
    numberString.forEach(function (n) {
        var _a;
        var numbers = (_a = n.match(/\d+/g)) === null || _a === void 0 ? void 0 : _a.map(function (x) { return Number(x); });
        arr.push(numbers);
    });
    var step = 0;
    var possible = 0;
    var cols = [];
    while (step < arr.length) {
        var col = [];
        col.push(arr[step + 0][0]);
        col.push(arr[step + 1][0]);
        col.push(arr[step + 2][0]);
        cols.push(col);
        col = [];
        col.push(arr[step + 0][1]);
        col.push(arr[step + 1][1]);
        col.push(arr[step + 2][1]);
        cols.push(col);
        col = [];
        col.push(arr[step + 0][2]);
        col.push(arr[step + 1][2]);
        col.push(arr[step + 2][2]);
        cols.push(col);
        step += 3;
    }
    cols.forEach(function (col) {
        if (col[0] + col[1] > col[2] &&
            col[0] + col[2] > col[1] &&
            col[1] + col[2] > col[0])
            possible += 1;
    });
    console.log(possible);
});
