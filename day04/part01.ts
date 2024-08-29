import {readFile} from 'fs/promises'

readFile('input.txt').then(contents => {
    const line: string = contents.toString()
    const rooms = line.split('\r\n')

    let sum = 0
    rooms.forEach(room => {
        let components = room.split('-')
        let sectorId = components[components.length - 1].match(/\d+/g)?.map(x => Number(x))[0] as number
        let checkSum = components[components.length - 1].match(/\D+/)?.map(x => x.slice(1,x.length-1))[0]
        
        let names = components.slice(0,components.length - 1)
        let letterCount = {}

        names.forEach(name => {
            let letters = name.split('')
            letters.forEach(letter => {
                if (letterCount[letter] != undefined) letterCount[letter] += 1
                else letterCount[letter] = 1
            })
        })

        let sortable: any[] = []
        for (let letter in letterCount) {
            sortable.push([letter, letterCount[letter]])
        }
        
        // sort alphabetically and then by letter count
        let sortedEntries = sortable.sort((a,b) => {
            if (a[0] < b[0]) return -1
            if (a[0] > b[0]) return 1
            return 0
        }).sort((a,b) => b[1] - a[1])

        let decryptedName = sortedEntries.map(e => e[0]).slice(0,5).join('')
        if (checkSum == decryptedName) {
            sum += sectorId
        }
    })

    console.log(sum)
})