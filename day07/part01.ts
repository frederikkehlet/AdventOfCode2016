import {readFile} from 'fs/promises'

readFile('input.txt').then(contents => {
    const content: string = contents.toString()   
    const lines = content.split("\r\n")

    let result: number = 0
    lines.forEach(line => {
        const startIndices: number[] = []
        const endIndicies: number[] = []

        line.split('').forEach((c,i) => {
            if (c == '[') {
                startIndices.push(i)
            }
            else if (c == ']') {
                endIndicies.push(i)
            }
        })

        let hypernetSequences: string[] = []
        
        for (let i = 0; i < startIndices.length; i++) {
            hypernetSequences.push(line.substring(startIndices[i]+1,endIndicies[i]))
        }

        let nonHypernetSequences: string[] = []
        let indices = [0, ...startIndices, ...endIndicies].sort((a,b) => a-b)

        let count = indices.length
        let start = 2

        nonHypernetSequences.push(line.substring(0,indices[1]))
        
        while (start <= count) {
            if (start == count) {
                nonHypernetSequences.push(line.substring(indices[start]))
                continue
            }
            
            nonHypernetSequences.push(line.substring(indices[start]+1,indices[start+1]))
            start += 2
        }
        
        let nonHypernetSequenceHasPair: boolean = false
        
        nonHypernetSequences.forEach(seq => {
            if (nonHypernetSequenceHasPair) {
                return
            }

            for (let i = 0; i < seq.length - 3; i++) {
                let sequence = seq.substring(i, i + 4)
                
                if (sequence[0] == sequence[3] && sequence[1] == sequence[2]
                && sequence[0] != sequence[2] && sequence[1] != sequence[3]) {
                    nonHypernetSequenceHasPair = true
                    break
                }
            }
        })

        
        let hypernetSequenceHasPair: boolean = false

        hypernetSequences.forEach(seq => {
            if (hypernetSequenceHasPair) {
                return
            }

            for (let i = 0; i < seq.length - 3; i++) {
                let sequence = seq.substring(i, i + 4)
                
                if (sequence[0] == sequence[3] && sequence[1] == sequence[2]
                    && sequence[0] != sequence[2] && sequence[1] != sequence[3]) {
                    hypernetSequenceHasPair = true
                    break
                }
            }
        })

        if (nonHypernetSequenceHasPair && !hypernetSequenceHasPair) {
            result += 1
        }

    })

    console.log(result)
})