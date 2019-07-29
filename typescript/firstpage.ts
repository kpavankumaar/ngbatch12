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
num = 10;
console.log(num);