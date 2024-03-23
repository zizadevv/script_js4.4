




  function random(min = 1,max = 100){
    return Math.floor(Math.random() * (max + 1-min) + min)
}

function randomSymb(min = 1, max = 4) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }

  for(let i = 0; i<3; i++){
    let num1 = random()
    let num2 = random()
    let symb = randomSymb();
    // let pr = +prompt(num1 + ' + ' + num2 +' =')
    // let answer = (num1 +num2) == pr ? 'молодец👍🏻' : 'ошибка'
    // alert(num1 + ' + ' + num2 + ' = ' + (num1 + num2) + ' ваш ответ' + pr +'. ' + answer)

if(symb === 1){
        let pr = +prompt(num1 + ' + ' + num2 +' =')
        let answer = (num1 +num2) == pr ? 'молодец👍🏻' : 'ошибка❌'
        alert(num1 + ' + ' + num2 + ' = ' + (num1 + num2) + ' ваш ответ' + pr +'. ' + answer)
}else if(symb === 2){
    let pr = +prompt(num1 + ' - ' + num2 +' =')
    let answer = (num1 - num2) == pr ? 'молодец👍🏻' : 'ошибка❌'
    alert(num1 + ' - ' + num2 + ' = ' + (num1 - num2) + ' ваш ответ' + pr +'. ' + answer)
}else if(symb === 3){
    let pr = +prompt(num1 + ' / ' + num2 +' =')
    let answer = (num1 / num2) == pr ? 'молодец👍🏻' : 'ошибка❌'
    alert(num1 + ' / ' + num2 + ' = ' + (num1 / num2) + ' ваш ответ' + pr +'. ' + answer)  
}else if(symb === 4){
    let pr = +prompt(num1 + ' * ' + num2 +' =')
    let answer = (num1 * num2) == pr ? 'молодец👍🏻' : 'ошибка❌'
    alert(num1 + ' * ' + num2 + ' = ' + (num1 * num2) + ' ваш ответ' + pr +'. ' + answer)
}

}















// function random(min = 1,max = 100){
//     return Math.floor(Math.random() * (max + 1-min) + min)
// }


// for(let i = 0; i<3; i++){
//     let num1 = random()
//     let num2 = random()
//     let pr = +prompt(num1 + ' + ' + num2 +' =')
//     let answer = (num1 +num2) == pr ? 'молодец👍🏻' : 'ошибка'
//     alert(num1 + ' + ' + num2 + ' = ' + (num1 + num2) + ' ваш ответ' + pr +'. ' + answer)


// }














