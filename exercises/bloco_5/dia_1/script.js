
function alterarFundo (){
    let batata = document.querySelectorAll('.emergency-tasks')[0];
     batata.style.backgroundColor = 'orange'

}
  
alterarFundo()


function alterarFundo2 (){
    let batata2 = document.querySelectorAll('.no-emergency-tasks')[0]
        batata2.style.backgroundColor = 'yellow'
    
    }
    alterarFundo2()


  

function alterarFundoH3() {
    let fundos = document.querySelectorAll('.emergency-tasks h3');
    let fundos2 = document.querySelectorAll('.no-emergency-tasks h3');

    for(let index = 0; index <= fundos.length - 1; index += 1){
        fundos[index].style.backgroundColor = 'purple';
    }

    for(let index2 = 0; index2 <= fundos2.length - 1; index2 += 1){
        fundos2[index2].style.backgroundColor = 'green';
    }
} 

alterarFundoH3()

