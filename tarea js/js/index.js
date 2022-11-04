function buscapalabra(){
    var string1=document.getElementById("string1").value;
    var string2=document.getElementById("string2").value;
    var aux="";
    var encontrado=false;
    console.log(string1);
    console.log(string2);
    for(let i=0;i<string1.length;i++){
        for(let j=0;string2.length;j++){
            if(string2[j]==string1[i]){
                aux=aux+string2[j];
                encontrado=true;
                break;
            }
        }
        if(encontrado){
            encontrado=false;
        }else{
            document.getElementById("result").value="No se pudo encontrar la primera palabra en la segunda";
            break;
        }

    }
   console.log(aux);
    if(encontrado){
        if(aux==string1){
            document.getElementById("result").value=aux;
        }else{
            document.getElementById("result").value="No se pudo encontrar la primera palabra en la segunda";
        }
    }

}