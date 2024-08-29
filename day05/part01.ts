const md5 = require('blueimp-md5/js/md5')

let input = 'cxdnnyjw'
let idx = 0
let password = ''

while (password.length < 8) {
    let hash = md5(input+idx)
    
    if (hash.slice(0,5) == '00000') {
        password += hash[5]
    }

    idx += 1
}

console.log(password)

