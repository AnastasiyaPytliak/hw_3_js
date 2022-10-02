let key = true
let documents = true
let pen = true
let apple = false
let orange = true


let shouldGoToWork

if (key && documents && pen && apple) {
    shouldGoToWork = "key, documents, pen, apple"
} else  {
    shouldGoToWork = "key, documents, pen, orange"
}

console.log(shouldGoToWork)

