var md5 = require('blueimp-md5/js/md5');
var input = 'cxdnnyjw';
var idx = 0;
var password = '';
while (password.length < 8) {
    var hash = md5(input + idx);
    if (hash.slice(0, 5) == '00000') {
        password += hash[5];
    }
    idx += 1;
}
console.log(password);
