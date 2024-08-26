import {readFile} from 'fs/promises'

enum cardinal {
    N,
    E,
    S,
    W
}

readFile('input.txt').then(contents => {
    const line: string = contents.toString()
    const commands: string[] = line.split(', ')
    let result = solve(commands)
    console.log(result)
})


const solve = (commands: string[]) : number => {
    let currentDirection: number = cardinal.N
    let x: number = 0;
    let y: number = 0;
    
    commands.forEach(command => {
        let direction: string = command[0]
        let length: number = Number(command.slice(1))
        
        switch (currentDirection) {
            case cardinal.N:
                if (direction == 'R') {
                    x = x + length
                    currentDirection = cardinal.E
                    break
                }
                if (direction == 'L') {
                    x = x - length
                    currentDirection = cardinal.W
                    break
                }
            case cardinal.E:
                if (direction == 'R') {
                    y = y - length 
                    currentDirection = cardinal.S
                    break
                }
                if (direction == 'L') {
                    y = y + length
                    currentDirection = cardinal.N
                    break
                }
            case cardinal.S:
                if (direction == 'R') {
                    x = x - length
                    currentDirection = cardinal.W
                    break
                }
                if (direction == 'L') {
                    x = x + length
                    currentDirection = cardinal.E
                    break
                }
            case cardinal.W:
                if (direction == 'R') {
                    y = y + length
                    currentDirection = cardinal.N
                    break
                }
                if (direction == 'L') {
                    y = y - length
                    currentDirection = cardinal.S
                    break
                }
        }
    })

    return Math.abs((0 - y) + (0 - x))
}

