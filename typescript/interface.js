function interConnect(data, b) {
    console.log(typeof data);
    data = "nameDetails";
    console.log(typeof data);
}
interConnect("content", 10);
interConnect(10, "20");
let dataInfo = ["Ravi", "Krishna", 10];
let details = ["", "", ""];
let name_2;
name_2 = 10;
console.log("name", name_2);
let testFn;
testFn = 10;
testFn = () => {
    return "10";
};
let obj_1;
obj_1 = {
    name: "krishna",
    age: 20
};
let arr_1 = [10, "test", 8, "tt"];
arr_1.push(20);
let test_fn1;
test_fn1 = () => {
    console.log("Ravi");
    return ["testdata"];
};
let fnDef = (a) => a * 2;
console.log(fnDef(10));
