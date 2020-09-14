// function printNumber(from, to) {
//     setTimeout(function start() {
//         console.log(from)
//         if (from < to) {
//             setTimeout(start, 1000)
//         }
//         from++
//     }, to)
// }

printNumber(2, 5)
function printNumber(from, to) {
   const start= setInterval(function () {
        if (from ===to) {
           clearInterval(start)
        }
        console.log(from)
        from++
    }, 1000)
}
printNumber(1,5)
