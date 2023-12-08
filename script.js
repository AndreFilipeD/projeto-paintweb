var testVar = 0
var control = 0
var altern = true
var mouseAct = 0

var drawnSpace = window.document.querySelector("#drawnArea")
var cpx = drawnSpace.getContext("2d")

var x
var y
//--------------------     Variaveis     --------------

window.addEventListener('mousemove', (event) => {
    //coletando coordenadas X e Y do mouse
    x = event.clientX
    y = event.clientY
    
    //integrando coordenadas na tela
    window.document.querySelector("#mouseX").innerHTML="Mouse X: "+x
    window.document.querySelector("#mouseY").innerHTML="Mouse Y: "+y
})

function mouseActing(){// alterna true false baseado em mouse pressionado
    mouseAct = !mouseAct
    window.document.querySelector("#mouseActIs").innerHTML="pressed? "+(mouseAct === true ?"true" :"false");
}

window.addEventListener('mouseup', mouseActing)
window.addEventListener('mousedown', mouseActing)

function addDrawn(){
    //começa o desenho do final e inicia no final para ter delay
    if(mouseAct){// mouse pressionado? true or false
        cpx.lineTo(x,(y)-150);
        cpx.stroke()
        cpx.beginPath();
        cpx.moveTo(x, y-150);
    }else{
        cpx.beginPath();
        cpx.stroke();
    }
    //variavel frames teste
    testVar++
    //refresh
    window.document.querySelector("#valueTester").innerHTML="f: "+testVar
}

function trigger(is){//gatilho de ação de entrada do mouse
    if(is==='on'){//gatilho ativado
        control = is;
        timeloop = setInterval(addDrawn, 0);// numero é delay
    }else{//gatilho desativado
        control = 0;
        clearInterval(timeloop);
        cpx.beginPath();
        cpx.stroke();
    }
}