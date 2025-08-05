let lights = document.querySelectorAll('.light');
console.log(lights);

let currentLight = 0;

//initializing 1st light
lights[currentLight].classList.add('active')
setInterval(()=>{
    changeLight()
},2000)

const changeLight = ()=>{
    lights[currentLight].classList.remove('active');
    currentLight++

    if(currentLight >= lights.length){
        currentLight = 0;
    }
    lights[currentLight].classList.add('active');
}