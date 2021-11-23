
// let numero = parseInt(prompt("inserisci"));

// let mult_3 = numero % 3;
// if (numero % 3 == 0) {
//     console.log ("è mult di 3");
// } else {
//     console.log ("non è mult di 3");
// }



const container = document.querySelector(".container");
for(let i = 1; i < 101; i++){
    const div = document.createElement('div');
    div.classList.add('box_div');
    container.append(div);
    div.innerHTML = i; 
    

    if (i % 3 == 0 && i % 5 == 0) {
        div.innerHTML ="frizzbuzz";
        div.style.backgroundColor ="pink"
    }
    else if(i % 3 == 0){
      div.innerHTML = "frizz";
      div.style.backgroundColor ="red";
    } else if (i % 5 == 0){
        div.innerHTML ="buzz";
        div.style.backgroundColor ="yellow"
    } 
    
        
        
}
