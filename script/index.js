let resul = document.getElementById('resul')
aux=1

const sete = ()=>{
let sete = document.getElementById('sete')
resul.innerHTML = resul.innerHTML + sete.innerHTML;  


    
}
const oito = ()=>{
let oito = document.getElementById('oito');
resul.innerHTML = resul.innerHTML + oito.innerHTML;  
    
}
const nove = ()=>{
    let nove = document.getElementById('nove');
    resul.innerHTML = resul.innerHTML + nove.innerHTML;  
    
}
const um = ()=>{
    let um = document.getElementById('um');
    resul.innerHTML = resul.innerHTML + um.innerHTML;  
    
}
const dois = ()=>{
    let dois = document.getElementById('dois');
    resul.innerHTML = resul.innerHTML + dois.innerHTML;  
    
}
const tres = ()=>{
    let tres = document.getElementById('tres');
    resul.innerHTML = resul.innerHTML + tres.innerHTML;  
    
}
const quatro = ()=>{
    let quatro = document.getElementById('quatro');
    resul.innerHTML = resul.innerHTML + quatro.innerHTML;  
    
}

const cinco = ()=>{
    let cinco = document.getElementById('cinco');
    resul.innerHTML = resul.innerHTML + cinco.innerHTML;  
    
}
const seis = ()=>{
    let seis = document.getElementById('seis');
    resul.innerHTML = resul.innerHTML + seis.innerHTML;  
}
const zero = ()=>{
    let zero = document.getElementById('zero');
    resul.innerHTML = resul.innerHTML + zero.innerHTML;  
    
}
const float = ()=>{
    let float = document.getElementById('float');
    resul.innerHTML = resul.innerHTML + float.innerHTML;  
}

function soma(){resul.innerHTML += '+'}

function div(){resul.innerHTML += '-'}

function sub(){resul.innerHTML += '/'}


function limpar(){resul.innerHTML=""}

function igual(){
   resul.innerHTML = eval(resul.innerHTML)

}