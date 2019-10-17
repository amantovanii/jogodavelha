letra = "X";
 
function joga(celula){
    celulaclicada = document.getElementById(celula).innerHTML;
   if (celulaclicada == "X" || celulaclicada == "O"){
       alert("Este quadrado já foi escolhido, meu consagrado!"); //janela de aviso
   }else{
        document.getElementById(celula).innerHTML = letra;
        if (letra == "X"){
            letra = "O";
        }else{
            letra = "X";
        }
   }
}
 
function verifica(){
   c11 = document.getElementById('q11').innerHTML;
   c12 = document.getElementById('q12').innerHTML;
   c13 = document.getElementById('q13').innerHTML;
   c21 = document.getElementById('q21').innerHTML;
   c22 = document.getElementById('q22').innerHTML;
   c23 = document.getElementById('q23').innerHTML;
   c31 = document.getElementById('q31').innerHTML;
   c32 = document.getElementById('q32').innerHTML;
   c33 = document.getElementById('q33').innerHTML;
   if (((c11 != '') && (c12 != '') && (c13 != '') && (c11 == c12) && (c12 == c13)) || ((c11 != '') && (c22 != '') 
   && (c33 != '') && (c11 == c22) && (c22 == c33)) || ((c11 != '') && (c21 != '') && (c31 != '') && (c11 == c21) 
   && (c21 == c31)) || ((c21 != '') && (c22 != '') && (c23 != '') && (c21 == c22) && (c22 == c23)) || ((c31 != '') 
   && (c32 != '') && (c33 != '') && (c31 == c32) && (c32 == c33)) || ((c12 != '') && (c22 != '') && (c32 != '') && (c12 == c22) 
   && (c22 == c32)) || ((c13 != '') && (c23 != '') && (c33 != '') && (c13 == c23) && (c23 == c33)) || ((c31 != '') && (c22 != '') 
   && (c13 != '') && (c31 == c22) && (c22 == c13))){
       alert('Você ganhou, meu nobre jogador!'); //janela de aviso
      novo();
   }
}
 
function novo(){
    for (i=1; i<4; i++){
       for (j=1; j<4; j++){
          nomecelula = 'q' + i + j
           document.getElementById(nomecelula).innerHTML = '';
      
      }
   }
}
 
 