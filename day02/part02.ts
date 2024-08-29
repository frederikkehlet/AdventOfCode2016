import {readFile} from 'fs/promises'

readFile('input.txt').then(contents => {
    const line: string = contents.toString()
    const instructions: string[] = line.split('\r\n')
    let result = solve(instructions)
    console.log(result)
})

const solve = (instructions): string => {
    let code = ''

    let keypad = [
        ['','',1,'',''],
        ['',2,3,4,''],
        [5,6,7,8,9],
        ['','A','B','C',''],
        ['','','D','','']
    ]

    let y = 2, x = 0


    instructions.forEach(instruction => {
        let x1: number = x, y1:number = y
        let moves = instruction.split('')

        moves.forEach(move => {
            switch (move) {
                case 'U':
                    if (y1 - 1 >= 0 && keypad[y1 - 1][x1] == '') y1 = y1
                    else if (y1 - 1 <= 0) y1 = 0
                    else y1 = y1 - 1
                    break
                case 'D':
                    if (y1 + 1 <= 4 && keypad[y1 + 1][x1] == '') y1 = y1
                    else if (y1 + 1 >= 4) y1 = 4
                    else y1 = y1 + 1
                    break
                case 'L':
                    if (x1 - 1 >= 0 && keypad[y1][x1 - 1] == '') x1 = x1 
                    else if (x1 - 1 <= 0) x1 = 0
                    else x1 = x1 - 1
                    break
                case 'R':
                    if (x1 + 1 <= 4 && keypad[y1][x1 + 1] == '') x1 = x1
                    else if (x1 + 1 >= 4) x1 = 4
                    else x1 = x1 + 1
                    break
            }
        })
        x = x1, y = y1
        code += keypad[y1][x1]      
    })

    return code
}
