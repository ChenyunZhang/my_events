function searchChallenge(str) {
    const dict = {}
    for (let word of str.split(" ")) {
        let hash = {}, mark = false, max = 0
        for (let i of word.toLowerCase()) {
            if (hash[i]) {
                hash[i] += 1
                mark = true
                max = Math.max(max, hash[i])
            } else {
                hash[i] = 1
            }
        }
        if (mark) {
            dict[word] = max
        }
    }
    if (Object.keys(dict).length === 0) return -1
    final_max = Math.max(...Object.values(dict))
    for(let i in dict){
        if(dict[i]===final_max){
            return i
        }
    }
}

const exp1 = "Hello Apple pie"
// hello
const exp2 = "No words"
// -1
console.log(searchChallenge(exp2));