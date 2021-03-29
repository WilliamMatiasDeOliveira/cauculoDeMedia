
var notas = [];
function nota(){
    var mat = document.querySelector('#mat').value;
    var port = document.querySelector('#port').value;
    var geo = document.querySelector('#geo').value;
    var hist = document.querySelector('#hist').value;
    var cienc = document.querySelector('#cienc').value;
    var ingles = document.querySelector('#ingles').value;
    var artes = document.querySelector('#artes').value;
    var eduFis = document.querySelector('#eduFis').value;
    

notas.push(Number(mat));
notas.push(Number(port));
notas.push(Number(geo));
notas.push(Number(hist));
notas.push(Number(cienc));
notas.push(Number(ingles));
notas.push(Number(artes));
notas.push(Number(eduFis));
 



var media = notas.reduce((acumulado, valorTotal, index, array) =>{
    acumulado += valorTotal
    if(index == array.length - 1){
        acumulado / array,length
        
    }
    return acumulado
},0)
document.querySelector('#exibir').innerHTML ='A sua Media é : '+ media
 
};

document.querySelector('#calcular').addEventListener('click',nota)
