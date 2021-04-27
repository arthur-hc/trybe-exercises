// Acionar um contador que mostra o número de clicks
let nClicks = 0
const clicks = () => {
    nClicks += 1
    document.getElementById('contador').innerText = nClicks
}

document.getElementById('xablau').addEventListener('click', clicks)