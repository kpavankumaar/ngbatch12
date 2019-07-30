let name_1 = "ravi";
console.log(name_1);
// function printOut(i){
//     setTimeout(function(){
//         console.log(i);
//     }, 1000)
// }
// for(var i = 0 ; i < 10 ; i = i + 1 ){
//    printOut(i);
// }
// function printOut(i){
//     setTimeout(function(){
//         console.log(i);
//     }, 1000)
// }
for(let i = 0 ; i < 10 ; i = i + 1 ){
    setTimeout(function(){
        console.log(i);
    }, 1000)
};
var divEl = document.getElementsByTagName('div')[0]
var data = ['ravi','krishna'];
divEl.onclick = run(data);
function run(data){
    return function(e){
        console.log("name:",data[0], e);
    }
    
}
const num = 10;
// num = 10;
console.log(num);
let obj = {
    name : "krishna"
}
obj.name = "radhekrishna";
// obj.name = 10;
const  arr = [10,20,30,""]
arr.push(40)
arr.push("ravi");
arr.unshift(0);
let poppedItem = arr.pop();
let shiftedItem = arr.shift();

const arr1 = [15,25,35,"",45]
arr1.splice(3,1,40);
var arr2 = arr1.slice(1,3);
let test_1 = () => {
    console.log('arrow function')
}
test_1();