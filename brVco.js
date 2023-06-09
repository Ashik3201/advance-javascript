// const num = [ 1,22,33,44,5,6,7,8];
// for(let i = 0; i < num.length; i++){
//     const element = num[i];
//     if(element> 3){
//         break;
//     }
//     console.log(element);
// }

const arr = [1,-1,2,-3,5,-5];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(element <0){
        continue;
        
    }
    console.log(element);
}