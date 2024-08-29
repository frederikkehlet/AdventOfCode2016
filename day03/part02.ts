import {readFile} from 'fs/promises'

readFile('input.txt').then(contents => {
    const line: string = contents.toString()
    const numberString: string[] = line.split('\r\n')
    const arr: number[][] = []
    

    numberString.forEach(n => {
        let numbers = n.match(/\d+/g)?.map((x) => Number(x)) as number[] 
        arr.push(numbers)
    })

    let step = 0
    let possible = 0
    
    let cols: number[][] = []
    
    while (step < arr.length) {
        let col: number[] = []

        col.push(arr[step + 0][0])
        col.push(arr[step + 1][0])
        col.push(arr[step + 2][0])
        cols.push(col)
 
        col = []
        col.push(arr[step + 0][1])
        col.push(arr[step + 1][1])
        col.push(arr[step + 2][1])

        cols.push(col)

        col = []
        col.push(arr[step + 0][2])
        col.push(arr[step + 1][2])
        col.push(arr[step + 2][2])
        cols.push(col)
       
        step += 3
    }

    cols.forEach(col => {
        if (col[0] + col[1] > col[2] && 
            col[0] + col[2] > col[1] &&
            col[1] + col[2] > col[0]
        ) possible += 1
    })

    console.log(possible)
})