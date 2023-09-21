// code your solution here
function superbowlWin(array) {
    let result = undefined
    for(let item of array) {
        if(item.result === "W") {
            return item.year
        }
    }
}
