"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promises_1 = require("fs/promises");
(0, promises_1.readFile)('input.txt').then(function (contents) {
    var line = contents.toString();
    var numberString = line.split('\r\n');
    var possible = 0;
    numberString.forEach(function (n) {
        var _a;
        var numbers = (_a = n.match(/\d+/g)) === null || _a === void 0 ? void 0 : _a.map(function (x) { return Number(x); });
        if (numbers[0] + numbers[1] > numbers[2] &&
            numbers[0] + numbers[2] > numbers[1] &&
            numbers[1] + numbers[2] > numbers[0])
            possible += 1;
    });
    console.log(possible);
});
