let password = 'mahsa123';
let i = 1
while(i <= 3){
    const user = prompt('Enter your password :')
    if(user == password){
        alert('succes ... ');
        break;

    }else{
        const massage = prompt('Try again  ${3-i}')
        alert('Try again ...');
    }
    i++;

}
