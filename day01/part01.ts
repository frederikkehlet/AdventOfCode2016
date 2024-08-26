import {readFile, writeFile} from 'fs/promises'

readFile('input.txt').then(contents => {
    const line: string = contents.toString()
    const commands: string[] = line.split(', ')
    console.log(commands)
})


const solve = (commands: string[]) : Number => {
    return -1;
}