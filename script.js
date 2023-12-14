// variaveis de organização de ações
var testVar = 0;var control = 0;var altern = true;var mouseAct = 0;

//Coletando canvas
var drawnSpace = window.document.querySelector("#drawnArea");
var cpx = drawnSpace.getContext("2d");

//Mouse X, Y e Scroll X, Y
var x;var y;var scroX=0; var scroY=0;

//controle de ferramentas
var largPen = 1

//--------------------     Variaveis     --------------------

window.addEventListener('mousemove', (event) => {
    //coletando coordenadas X e Y do mouse
    x = event.clientX;
    y = event.clientY;
    
    //integrando coordenadas na tela
    window.document.querySelector("#mouseX").innerHTML="Mouse X: "+x+" | ";
    window.document.querySelector("#mouseY").innerHTML="| Mouse Y: "+y+" | ";
})

window.addEventListener('scroll', ()=>{
    scroX = this.scrollX;
    scroY = this.scrollY;

    window.document.querySelector("#scX").innerHTML="| scroll X:"+scroX+" |"
    window.document.querySelector("#scY").innerHTML="| scroll Y:"+scroY+" |"
})

function mAct(){
    window.document.querySelector("#mouseActIs").innerHTML="| pressed? "+(mouseAct === true ?"true" :"false")+" | ";
}

// Detecta mouse pressionado ou solto
window.addEventListener('mouseup', ()=>{mouseAct=false;mAct()});
window.addEventListener('mousedown', ()=>{mouseAct=true;mAct()});

function addDrawn(){
    updatePen()
    //começa o desenho do final e inicia no final para ter delay
    if(mouseAct){// mouse pressionado? true or false
        
        cpx.lineTo(x+scroX,y-(150-scroY));
        cpx.stroke()

        cpx.beginPath();
        cpx.arc(x+scroX, y-(150-scroY), (largPen)/2.2, 0, 2 * Math.PI);
        cpx.fill();

        cpx.beginPath();
        cpx.moveTo(x+scroX, y-(150-scroY));

        
        
        
    }else{
        cpx.beginPath();
        cpx.stroke();
    }
    //variavel frames teste
    testVar++
    //refresh
    window.document.querySelector("#valueTester").innerHTML="| refresh: "+testVar+" ||"
}
function updatePen(){
    window.document.querySelector(".pen").style=`left:${x-6+scroX}px;top:${y-(41-scroY)}px;`
}
function trigger(is){//gatilho de ação de entrada do mouse
    if(is==='on'){//gatilho ativado
        control = is;
        timeloop = setInterval(addDrawn, 0);// numero é delay
        window.document.querySelector(".pen").style=`display:block;left:${x-6+scroX}px;top:${y-(41-scroY)}px;`
    }else{//gatilho desativado
        window.document.querySelector(".pen").style=`display:none;left:${x-6+scroX}px;top:${y-(41-scroY)}px;`
        control = 0;
        clearInterval(timeloop);
        cpx.beginPath();
        cpx.stroke();
    }
}
//-------------------------------------------------------------
function largpenChange(){
    
    if(largPen > 10){
        largPen = 1
    }else{
        largPen++
    }
    cpx.lineWidth = largPen
    cpx.lineHeight = largPen
    window.document.querySelector(".penDot").style=`padding: ${largPen}px;background-color: black;border-radius: 1000px;`
}