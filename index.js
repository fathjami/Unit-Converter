const input = document.getElementById('to-convert');
const convertBtn = document.getElementById('convert-btn');

let length = document.getElementById('length');
let volume = document.getElementById('volume');
let mass = document.getElementById('mass');

// Theme
const theme = document.querySelector('.theme');

// Dark mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // dark mode
    document.body.classList.add('dark');
    theme.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    // light mode
    document.body.classList.remove('dark');
    theme.innerHTML = '<i class="fas fa-moon"></i>';
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {

    if (event.matches) {
        document.body.classList.add('dark');
        theme.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.remove('dark');
        theme.innerHTML = '<i class="fas fa-moon"></i>';
    }

});

theme.addEventListener('click', function(e){
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')){
        e.target.classList.remove('fa-moon');
        e.target.classList.add('fa-sun');
    } else {
        e.target.classList.remove('fa-sun');
        e.target.classList.add('fa-moon');
    }
})

convertBtn.addEventListener('click', function(){
    num = Number(input.value);
    if(isNaN(num))
        return;
    else{

        //convetion
        let feetLength = num * 3.281;
        let metersLength = num / 3.281;
        
        let gallonsVolume = num * 0.264;
        let litersVolume = num / 0.264;

        let poundsMass = num * 2.204;
        let kilosMass = num / 2.204;

        length.textContent = `${num} meters = ${feetLength.toFixed(3)} feet | ${num} feet = ${metersLength.toFixed(3)} meters`;
        volume.textContent = `${num} leters = ${gallonsVolume.toFixed(3)} gallons | ${num} gallons = ${litersVolume.toFixed(3)} leter`;
        mass.textContent = `${num} kilos = ${poundsMass.toFixed(3)} pounds | ${num} pounds = ${kilosMass.toFixed(3)} kilos`;

    }
})
