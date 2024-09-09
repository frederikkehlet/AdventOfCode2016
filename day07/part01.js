"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var promises_1 = require("fs/promises");
(0, promises_1.readFile)('input.txt').then(function (contents) {
    var content = contents.toString();
    var lines = content.split("\r\n");
    var result = 0;
    lines.forEach(function (line) {
        var startIndices = [];
        var endIndicies = [];
        line.split('').forEach(function (c, i) {
            if (c == '[') {
                startIndices.push(i);
            }
            else if (c == ']') {
                endIndicies.push(i);
            }
        });
        var hypernetSequences = [];
        for (var i = 0; i < startIndices.length; i++) {
            hypernetSequences.push(line.substring(startIndices[i] + 1, endIndicies[i]));
        }
        var nonHypernetSequences = [];
        var indices = __spreadArray(__spreadArray([0], startIndices, true), endIndicies, true).sort(function (a, b) { return a - b; });
        var count = indices.length;
        var start = 2;
        nonHypernetSequences.push(line.substring(0, indices[1]));
        while (start <= count) {
            if (start == count) {
                nonHypernetSequences.push(line.substring(indices[start]));
                continue;
            }
            nonHypernetSequences.push(line.substring(indices[start] + 1, indices[start + 1]));
            start += 2;
        }
        var nonHypernetSequenceHasPair = false;
        nonHypernetSequences.forEach(function (seq) {
            if (nonHypernetSequenceHasPair) {
                return;
            }
            for (var i = 0; i < seq.length - 3; i++) {
                var sequence = seq.substring(i, i + 4);
                if (sequence[0] == sequence[3] && sequence[1] == sequence[2]
                    && sequence[0] != sequence[2] && sequence[1] != sequence[3]) {
                    nonHypernetSequenceHasPair = true;
                    break;
                }
            }
        });
        var hypernetSequenceHasPair = false;
        hypernetSequences.forEach(function (seq) {
            if (hypernetSequenceHasPair) {
                return;
            }
            for (var i = 0; i < seq.length - 3; i++) {
                var sequence = seq.substring(i, i + 4);
                if (sequence[0] == sequence[3] && sequence[1] == sequence[2]
                    && sequence[0] != sequence[2] && sequence[1] != sequence[3]) {
                    hypernetSequenceHasPair = true;
                    break;
                }
            }
        });
        if (nonHypernetSequenceHasPair && !hypernetSequenceHasPair) {
            result += 1;
        }
    });
    console.log(result);
});
