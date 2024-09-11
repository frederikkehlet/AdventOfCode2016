import {readFile} from 'fs/promises'

readFile('input.txt').then(contents => {
    const content: string = contents.toString().replace(/\s/g, '')
    let cursor = 0, output = ''

    while (cursor < content.length) {
        if (content[cursor] == '(') {
            let idx = content.indexOf(')', cursor)
            let dataMarker = content.substring(cursor+1, idx)
            let lookAhead: number = Number(dataMarker.split('x')[0])
            let repetitionCount: number = Number(dataMarker.split('x')[1])
            let repeatPattern = content.substring(idx+1, idx+1+lookAhead)

            for (let i = 0; i < repetitionCount; i++) {
                output += repeatPattern
            }
            
            cursor = idx+1+lookAhead
        } else {
            output += content[cursor]
            cursor += 1
        }
    }

    console.log(output.length)
})