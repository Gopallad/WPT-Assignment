function normalFunction() {
    console.log("Normal function executed");
}

console.log("Start of program");

setTimeout(() => {
    console.log("setTimeout executed");
}, 1000);

const promise = new Promise((resolve, reject) => {
    console.log("Promise created");
    resolve();
});

promise.then(() => {
    console.log("Promise resolved");
});

normalFunction();

console.log("End of program");