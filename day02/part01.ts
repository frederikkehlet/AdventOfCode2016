import {readFile} from 'fs/promises'

readFile('input.txt').then(contents => {
    const line: string = contents.toString()
    const instructions: string[] = line.split('\r\n')
    let result = solve(instructions)
    console.log(result)
})

const solve = (instructions): number => {
    let code = ''

    let keypad = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]

    let y = 1, x = 1

    instructions.forEach(instruction => {
        let x1 = x, y1 = y
        let moves = instruction.split('')
        
        moves.forEach(move => {
            switch (move) {
                case 'U':
                    y1 = y1 - 1 <= 0 ? 0 : y1 - 1
                    break
                case 'D':
                    y1 = y1 + 1 >= 2 ? 2 : y1 + 1
                    break
                case 'L':
                    x1 = x1 - 1 <= 0 ? 0 : x1 - 1
                    break
                case 'R':
                    x1 = x1 + 1 >= 2 ? 2 : x1 + 1
            }
        })
        x = x1, y = y1
        code += keypad[y1][x1]      
    })

    return Number(code)
}
