// //n is the number of index of the array till we want to print
// //our series
// let n = [0, 1];
// function fibonacciGenerator(n){
//     //let n = [];
//     for(let i = 0; i < 6; i++){
//         //n[1] = 1;
//         n[i] = n[i-1] + n[i-2];
//         n.slice(n[i]);
//         return n;
//     }
// }
// const output = fibonacciGenerator(6);
// console.log(output);
function fibonacciGenerator(n){
    let output = [];
    if(n === 1){
        output = [0];
    }
    else if(n === 2){
        output = [0, 1];
    }
    else{
        output = [0, 1];
        for(let i = 2; i < n; i++){
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;
}
const result = fibonacciGenerator(8);
console.log(result);