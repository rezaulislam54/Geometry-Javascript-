// tringle Area 
function geteInputAreaValu(){
   const base = geteInputValu('triangleBase');
   const height = geteInputValu('triangleHeight');
   const area = 0.5*base*height;
    setAreaValu('tranglevaluset', area);

    // input  field clear krar jnno 
    
     // document.getElementById('rectanglebase').value = '';
    // document.getElementById('rectangleheight').value = '';
}

// Rectangle Area
function geteRectangleArea(){
    const base = geteInputValu('rectanglebase');
    const height = geteInputValu('rectangleheight');
    const area = base * height;
    setAreaValu('rectanglevaluset', area);
}

//  Parallelogram Area
function geteParallelogramArea(){
    const base = geteInputValu('ParallelogramArea');
    const height = geteInputValu('Parallelogramheight');
    const Area = base * height;
    setAreaValu('Parallelogramdisplay', Area);
}

// Rhombus Area 

function geteRombosAreaValu(){
   const b = geteInputValu('parallelogrambase');
   const h = geteInputValu('parallelogramheight');
   const a = 0.5 * b * h;
    setAreaValu('rhombusdisplay', a);
}

// Pentagon Area Calculation

function getePentagonArea(){
    const base = geteInputValu('pentagonbase');
    const height = geteInputValu('pentagonheight');
    const a = 0.5 * base * height;
    setAreaValu('pentagondisplay', a);
}

// Ellipse Area Calculation
function geteEllipseArea(){
    const base = geteInputValu('ellipsebase');
    const height = geteInputValu('ellipseheight');
    const a = 0.5 * base * height;
    setAreaValu('ellipsedisplay', a);
}

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
