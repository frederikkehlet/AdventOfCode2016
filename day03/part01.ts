import {readFile} from 'fs/promises'

readFile('input.txt').then(contents => {
    const line: string = contents.toString()
    const numberString: string[] = line.split('\r\n')
    
    let possible = 0
    numberString.forEach(n => {
        let numbers = n.match(/\d+/g)?.map((x) => Number(x)) as number[] 
        
        if (numbers[0] + numbers[1] > numbers[2] && 
            numbers[0] + numbers[2] > numbers[1] &&
            numbers[1] + numbers[2] > numbers[0]
        ) possible += 1
    })
    console.log(possible)
})