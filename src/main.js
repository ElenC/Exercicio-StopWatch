let segunds = 0
let minutes = 0
let displaySegunds = 0
let displayMinutes = 0
let interval 
let situacao = "stop"
let tempo
function stopWatch(){
    segunds++
    if(segunds / 60 === 1){
        segunds = 0
        minutes ++
    }
    if(segunds < 10){
        displaySegunds = "0" + segunds
    }else{
        displaySegunds = segunds
    }
    if(minutes < 10){
        displayMinutes = "0" + minutes
    }else{
        displayMinutes = minutes
    }
    tempo = displayMinutes + ":" + displaySegunds
    document.getElementById('display').innerHTML =  tempo
}
document.getElementById('startstop').addEventListener('click', function(){
    if(situacao === "stop"){
        interval = window.setInterval(stopWatch, 1000)
        document.getElementById('startstop').innerHTML ="Stop"
        situacao ='start'
    }else{
        window.clearInterval(interval)
        document.getElementById('startstop').innerHTML = "Start"
        situacao ='stop'
    }
}) 
document.getElementById('zerarTime').addEventListener('click', function(){
    window.clearInterval(interval)
    segunds =0
    minutes=0
    document.getElementById('display').innerHTML = "00:00"
    document.getElementById('startstop').innerHTML = 'Start'
    document.getElementById('laps').innerHTML = ''
})
let i = 0
document.getElementById('lapTime').addEventListener('click', function(){
    let laps = document.getElementById('laps')
    i+=1
    laps.innerHTML +=`<p>${i} ${tempo}</p>`
})
