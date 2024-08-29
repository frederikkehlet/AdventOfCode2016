const solve = () => {
    let MD5 = require("crypto-js/md5");
    let input = 'cxdnnyjw'
    let idx = 0
    let password = ''
    
    while (password.length < 8) {
        let hash = MD5(input+idx).toString()
        
        if (hash.slice(0,5) == '00000') {
            password += hash[5]
        }
    
        idx += 1
    }
    
    console.log(password)
}

solve()

