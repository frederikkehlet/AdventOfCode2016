"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promises_1 = require("fs/promises");
(0, promises_1.readFile)('input.txt').then(function (contents) {
    var line = contents.toString();
    var rooms = line.split('\r\n');
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    rooms.forEach(function (room) {
        var _a;
        var components = room.split('-');
        var shift = (_a = components[components.length - 1].match(/\d+/g)) === null || _a === void 0 ? void 0 : _a.map(function (x) { return Number(x); })[0];
        var names = components.slice(0, components.length - 1);
        var decryptedNames = [];
        names.forEach(function (name) {
            var letters = name.split('');
            var decryptedLetters = '';
            letters.forEach(function (letter) {
                var idx = alphabet.indexOf(letter);
                idx = (idx + shift) % alphabet.length;
                if (idx < 0)
                    idx = idx + alphabet.length;
                decryptedLetters += alphabet.at(idx);
            });
            decryptedNames.push(decryptedLetters);
        });
        var result = "Id: ".concat(shift, ": ").concat(decryptedNames.join(' '));
        console.log(result);
    });
});
