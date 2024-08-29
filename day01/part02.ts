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
    let visited_coordinates: number[][] = []

    let currentDirection: number = cardinal.N
    let x: number = 0;
    let y: number = 0;
    let result: number = -1;
    
    commands.forEach(command => {
        if (result != -1) return result
        
        let direction: string = command[0]
        let length: number = Number(command.slice(1))
        
        let currentPos = [x,y]

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
        const [x1,y1] = currentPos
        const [x2,y2] = [x,y]

        if (x1 === x2) {
            // y coordinate range
            for (let y = Math.min(y1, y2) + 1; y < Math.max(y1, y2); y++) {      
                if (isInList([x1,y], visited_coordinates)) {
                    console.log(`${[x1,y]} Is already in list`)
                    result = Math.abs((0 - y) + (0 - x1))
                    break
                }           
                visited_coordinates.push([x1, y]);
            }
        }
        else if (y1 === y2) {
            // x coordinate ranges
            for (let x = Math.min(x1, x2) + 1; x < Math.max(x1, x2); x++) {
                if (isInList([x,y1],visited_coordinates)) {
                    console.log(`${[x,y1]} Is already in list`)
                    result = Math.abs((0 - y1) + (0 - x))
                    break
                }
                visited_coordinates.push([x, y1]);
            }
        }
    })

    return result
}

const isInList = (coordinate, list) => {
    return list.some(coord => coord[0] === coordinate[0] && coord[1] === coordinate[1])
}