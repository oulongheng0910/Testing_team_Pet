const number = [12,4,5,8]
const result = 0;
for (let i = 0 ; i< number.length ; i++){
    if(number[i]%2 === 0 ){
        result += number[i];
    }else{
        result = 0;
    }
}

console.log(result)