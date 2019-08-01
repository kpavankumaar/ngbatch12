function interConnect(data:number, b:number){
    console.log(typeof data);
    data = "nameDetails"
    console.log(typeof data)
}

interConnect("content", 10);
interConnect(10,"20");

let dataInfo:string[] =  ["Ravi","Krishna",10];
let details:[string,string] = ["","",""];
let name_2:string;
name_2 = 10;
console.log("name",name_2);
let testFn:()=>string;
testFn = 10;
testFn = ()=>{
    return "10";
    
}

let obj_1:{name:string, age:number}
obj_1 = {
    name: "krishna",
    age: 20
}
let arr_1:Array<number | string> = [10,"test", 8,"tt"];

arr_1.push(20);

let test_fn1:() => Array<string>

test_fn1= () =>{
    console.log("Ravi");
    return ["testdata"]
}

function name_5<T>(data:T):<T>()=>T

let fnDef = (a) => a*2;
console.log(fnDef(10))