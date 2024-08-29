const solvePart2 = () => {
    let MD5 = require("crypto-js/md5");
    let input = 'cxdnnyjw'
    let idx = 0
    let password: string[] = ['','','','','','','','']
    let lettersAdded: number = 0
    
    while (lettersAdded < 8) {
        let hash = MD5(input+idx).toString()
        
        if (hash.slice(0,5) == '00000') {
            let position = Number(hash[5])
            if (position >= 8 || password[position] != '') {
                idx += 1
                continue
            }
            password[position] = hash[6]
            lettersAdded += 1
        }
    
        idx += 1
    }
    
    let result = password.join('')
    console.log(result)
}

solvePart2()

