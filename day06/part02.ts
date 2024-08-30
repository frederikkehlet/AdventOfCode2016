import {readFile} from 'fs/promises'

readFile('input.txt').then(contents => {
    const line: string = contents.toString()
    const lines = line.split('\r\n')
   
    let grid: any = []
    lines.forEach(line => {
        let letters = line.split('')
        grid.push(letters)
    })

    let columns: any = []
    const rows = grid.length;
    const cols = grid[0].length;

    for (let col = 0; col < cols; col++) {
        let lettersByColumn: any = []
        for (let row = 0; row < rows; row++) {
            lettersByColumn.push(grid[row][col])
        }
        columns.push(lettersByColumn)
    }

    let answer = ''
    columns.forEach(column => {
        let letterCount = {}
        column.forEach(letter => {
            if (letterCount[letter] != undefined) {
                letterCount[letter] += 1
            } else {
                letterCount[letter] = 1
            }
        })
        let sortable = Object.keys(letterCount).map(key => {return [key,letterCount[key]]})
        sortable.sort((a,b) => a[1] - b[1])
        answer += sortable[0][0]
    })
    console.log(answer)
})