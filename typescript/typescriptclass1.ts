let test_Fn = (a,b) => {
    console.log(this);
}
test_Fn(10,20);


let obj = {
    work: () => {
        console.log(this);
        let testFn = () => {
            console.log(this);
        }
        testFn();
    },
    rest: function(){
        console.log(this);
        var testName = () =>{
            console.log(this);
        }
        testName();

    }
}
var obj1 = {
    name:"krishna"
}
obj.work.call(obj1);
obj.rest.call(obj1);