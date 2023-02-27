let colors = document.querySelectorAll('.color')
let mainDiv = document.querySelector('.main-div')
window.onload = () => {
    if ((window.localStorage.bgc) !== undefined) {
        mainDiv.style.backgroundColor =window.localStorage.bgc
    }
}
for (let i of colors){
    i.onclick = () => {
        let backgroundColor = getComputedStyle(i).getPropertyValue('background-color')
        mainDiv.style.backgroundColor =backgroundColor
        window.localStorage.setItem('bgc', backgroundColor)
    }
}