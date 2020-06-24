// helloWorld function
// function helloWorld() {
//     return "Hello, World!";
// }
// sayHello function
function sayHello(input){
    // if (input === undefined) {
    //     return "Hello, World!";
    if (input === true || input === false || input === undefined){
        return "Hello, World!";
    // } else if (input === false){
    //     return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
    // if (input==="Alex") {
    //     return "Hello, Alex!";
    // } else if (input==="Pat") {
    //     return "Hello, Pat!";
    // } else {
    //     return "Hello, Jane!";
    // }
}
function isFive(){
    return true;
}

function isEven(i){
    return i % 2 === 0;
}

function isVowel(x){
    if (x==='a'||x==='e'||x==='i'||x==='o'||x==='u'||x==='A'||x==='E'||x==='I'||x==='O'||x==='U') {
        return true;
    } else {
        return false;
    }
}