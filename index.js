// tringle Area 
function geteInputAreaValu(){
   const base = geteInputValu('triangleBase');
   const height = geteInputValu('triangleHeight');
   const area = 0.5*base*height;
    setAreaValu('tranglevaluset', area);
}

// Rectangle Area
function geteRectangleArea(){
    const base = geteInputValu('rectanglebase');
    const height = geteInputValu('rectangleheight');
    const area = base * height;
    setAreaValu('rectanglevaluset', area);
}

// 

// common Function

function geteInputValu(pramiterId){
    const inputText = document.getElementById(pramiterId);
    const inputValu = inputText.value;
    const mainInputValu = parseFloat(inputValu);
    return mainInputValu;
}

// Common Set Valu Function
function setAreaValu (pramiterId, innerText){
    const setValu = document.getElementById(pramiterId);
    setValu.innerText = innerText;
}
