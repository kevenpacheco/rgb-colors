window.addEventListener('load', start);

let rangeR = document.querySelector('#rangeR');
let rangeG = document.querySelector('#rangeG');
let rangeB = document.querySelector('#rangeB');

let colorValueR = document.querySelector('#colorValueR');
let colorValueG = document.querySelector('#colorValueG');
let colorValueB = document.querySelector('#colorValueB');

let colorBox = document.querySelector('.colorBox');

let divPrincipal = document.querySelector('.principal');

let copy = document.querySelector('footer');

function start() {   
    rangeR.addEventListener('input', changeValueColor);
    rangeG.addEventListener('input', changeValueColor);
    rangeB.addEventListener('input', changeValueColor);

    colorValueR.value = rangeR.value;
    colorValueG.value = rangeG.value;
    colorValueB.value = rangeB.value;

    function changeValueColor() {
        let r = colorValueR.value;
        let g = colorValueG.value;
        let b = colorValueB.value;
        
        // switch(event.target.id) {
        //     case 'rangeR':
        //         colorValueR.value = event.target.value;
        //         r = colorValueR.value;
        //         return colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        //     case 'rangeG':
        //         colorValueG.value = event.target.value;
        //         g = colorValueG.value;
        //         return colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        //     case 'rangeB':
        //         colorValueB.value = event.target.value;
        //         b = colorValueB.value;
        //         return colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        // }

        switch(event.target.id) {
            case 'rangeR':
                colorValueR.value = event.target.value;
                r = colorValueR.value;
                colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                divPrincipal.style.boxShadow = `5px 5px 40px rgb(${r}, ${g}, ${b})`;
                divPrincipal.style.border = `3px solid rgb(${r}, ${g}, ${b})`;
                copy.style.textShadow = `3px 1px 4px rgb(${r}, ${g}, ${b})`;
                break;
            case 'rangeG':
                colorValueG.value = event.target.value;
                g = colorValueG.value;
                colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                divPrincipal.style.boxShadow = `5px 5px 40px rgb(${r}, ${g}, ${b})`;
                divPrincipal.style.border = `3px solid rgb(${r}, ${g}, ${b})`;
                copy.style.textShadow = `3px 1px 4px rgb(${r}, ${g}, ${b})`;
                break;
            case 'rangeB':
                colorValueB.value = event.target.value;
                b = colorValueB.value;
                colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                divPrincipal.style.boxShadow = `5px 5px 40px rgb(${r}, ${g}, ${b})`;
                divPrincipal.style.border = `3px solid rgb(${r}, ${g}, ${b})`;
                copy.style.textShadow = `3px 1px 4px rgb(${r}, ${g}, ${b})`;
                break;
        }
    }
}