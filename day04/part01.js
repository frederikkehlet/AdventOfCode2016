"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promises_1 = require("fs/promises");
(0, promises_1.readFile)('input.txt').then(function (contents) {
    var line = contents.toString();
    var rooms = line.split('\r\n');
    var sum = 0;
    rooms.forEach(function (room) {
        var _a, _b;
        var components = room.split('-');
        var sectorId = (_a = components[components.length - 1].match(/\d+/g)) === null || _a === void 0 ? void 0 : _a.map(function (x) { return Number(x); })[0];
        var checkSum = (_b = components[components.length - 1].match(/\D+/)) === null || _b === void 0 ? void 0 : _b.map(function (x) { return x.slice(1, x.length - 1); })[0];
        var names = components.slice(0, components.length - 1);
        var letterCount = {};
        names.forEach(function (name) {
            var letters = name.split('');
            letters.forEach(function (letter) {
                if (letterCount[letter] != undefined)
                    letterCount[letter] += 1;
                else
                    letterCount[letter] = 1;
            });
        });
        var sortable = [];
        for (var letter in letterCount) {
            sortable.push([letter, letterCount[letter]]);
        }
        // sort alphabetically and then by letter count
        var sortedEntries = sortable.sort(function (a, b) {
            if (a[0] < b[0])
                return -1;
            if (a[0] > b[0])
                return 1;
            return 0;
        }).sort(function (a, b) { return b[1] - a[1]; });
        var decryptedName = sortedEntries.map(function (e) { return e[0]; }).slice(0, 5).join('');
        if (checkSum == decryptedName) {
            sum += sectorId;
        }
    });
    console.log(sum);
});
