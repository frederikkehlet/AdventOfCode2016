import {readFile} from 'fs/promises'

readFile('input.txt').then(contents => {
    const content: string = contents.toString()   
    const instructions = content.split("\r\n")

    let grid = createGrid(6,50)
    instructions.forEach(instruction => {
        let command = instruction.split(' ')[0]
        if (command == 'rect')  {
            let dimensions = instruction.split(' ')[1]
            let x = dimensions.split('x')[0]
            let y = dimensions.split('x')[1]
            populateGrid(grid,x,y)
        } else {
            let direction = instruction.split(' ')[1]
            let position = instruction.split(' ')[2].split('=')[1]
            let step = instruction.split(' ').slice(-1)[0]

            if (direction == 'column') {
                shiftColumn(grid, position, step)
            } else {
                shiftRow(grid, position, step)
            }
        } 
    })
    console.table(grid) // <-- for part 2, make the font small enough for the entire table to fit the console
    console.log(countLitPixels(grid)) // <-- for part 1
})

const createGrid = (h,w) : Array<string> => {
    let grid = new Array(h)
    for (let i = 0; i < h; i++) {
        grid[i] = new Array(w)
        for (let j = 0; j < w; j++) {
            grid[i][j] = ' '
        }
    }
    return grid
}

const populateGrid = (grid, x,y) => {
    for (let i = 0; i < y; i++) {
        for (let j = 0; j < x; j++) {
            grid[i][j] = '#'
        }
    }
}

const shiftColumn = (grid, position, step) => {
    let currentCol: string[] = []

    for (let i = 0; i < grid.length; i++) {
        currentCol.push(grid[i][position])
    }

    let shift = step % currentCol.length
    let shifted = currentCol.slice(-shift).concat(currentCol.slice(0, -shift));

    for (let i = 0; i < grid.length; i++) {
        grid[i][position] = shifted[i]
    }
}

const shiftRow = (grid, position, step) => {
    let currentRow: string[] = []

    for (let i = 0; i < grid[0].length; i++) {
        currentRow.push(grid[position][i])
    }

    let shift = step % currentRow.length
    let shifted = currentRow.slice(-shift).concat(currentRow.slice(0, -shift));

    for (let i = 0; i < grid[0].length; i++) {
        grid[position][i] = shifted[i]
    }
}

const countLitPixels = (grid): number => {
    let result = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == '#') result += 1
        }
    }
    return result
}