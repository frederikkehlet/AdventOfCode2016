var solve = function () {
    var MD5 = require("crypto-js/md5");
    var input = 'cxdnnyjw';
    var idx = 0;
    var password = '';
    while (password.length < 8) {
        var hash = MD5(input + idx).toString();
        if (hash.slice(0, 5) == '00000') {
            password += hash[5];
        }
        idx += 1;
    }
    console.log(password);
};
solve();
