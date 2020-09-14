function clock() {
    setInterval(()=>{
        const date = new Date();
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()
        console.log(hours + ":" + minutes + ":" + seconds)
    },1000)
    setInterval( ()=>{
        console.clear();
    },1500)

}
clock()
