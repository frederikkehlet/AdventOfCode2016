"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promises_1 = require("fs/promises");
(0, promises_1.readFile)('input.txt').then(function (contents) {
    var content = contents.toString().replace(/\s/g, '');
    var cursor = 0, output = '';
    while (cursor < content.length) {
        if (content[cursor] == '(') {
            var idx = content.indexOf(')', cursor);
            var dataMarker = content.substring(cursor + 1, idx);
            var lookAhead = Number(dataMarker.split('x')[0]);
            var repetitionCount = Number(dataMarker.split('x')[1]);
            var repeatPattern = content.substring(idx + 1, idx + 1 + lookAhead);
            for (var i = 0; i < repetitionCount; i++) {
                output += repeatPattern;
            }
            cursor = idx + 1 + lookAhead;
        }
        else {
            output += content[cursor];
            cursor += 1;
        }
    }
    console.log(output.length);
});
