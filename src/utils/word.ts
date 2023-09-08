export default function (array: string[]) {
    if (array.length === 1) {
        return array
    }

    if (array.length === 2) {
        const result = array.map((item) => item + " and ")
        const reversed = result.reverse()
        const replaced =  reversed[0].replace(" and ", '')
        reversed[0] = replaced
        
        return reversed.reverse()
    }

    if (array.length > 2) {
        const result = array.map((item) => item + " , ")
        const reversed = result.reverse()
        reversed[1].replace(" , ", " and ")
        reversed[0].replace(" , ", "")
        return reversed.reverse()
    }
}