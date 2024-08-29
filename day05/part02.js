var solvePart2 = function () {
    var MD5 = require("crypto-js/md5");
    var input = 'cxdnnyjw';
    var idx = 0;
    var password = ['', '', '', '', '', '', '', ''];
    var lettersAdded = 0;
    while (lettersAdded < 8) {
        var hash = MD5(input + idx).toString();
        if (hash.slice(0, 5) == '00000') {
            var position = Number(hash[5]);
            if (position >= 8 || password[position] != '') {
                idx += 1;
                continue;
            }
            password[position] = hash[6];
            lettersAdded += 1;
        }
        idx += 1;
    }
    var result = password.join('');
    console.log(result);
};
solvePart2();
