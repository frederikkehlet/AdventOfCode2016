import {readFile} from 'fs/promises'

readFile('input.txt').then(contents => {
    const line: string = contents.toString()
    const rooms = line.split('\r\n')
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    rooms.forEach(room => {
        let components = room.split('-')
        let shift = components[components.length - 1].match(/\d+/g)?.map(x => Number(x))[0] as number
        let names = components.slice(0,components.length - 1)

        let decryptedNames: string[] = []
        names.forEach(name => {
            let letters = name.split('')
            let decryptedLetters = ''
            letters.forEach(letter => {
                let idx = alphabet.indexOf(letter)
                idx = (idx + shift) % alphabet.length
                if (idx < 0) idx = idx + alphabet.length
                decryptedLetters += alphabet.at(idx)
            })
            decryptedNames.push(decryptedLetters)
        })
        let result = `Id: ${shift}: ${decryptedNames.join(' ')}`
        console.log(result)
    })
})