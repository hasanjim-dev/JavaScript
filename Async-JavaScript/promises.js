// Creating a Promise

let myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Operation completed successfully!");
    } else {
        reject("Operation failed!");
    }
});


// Handling Promise

myPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });


// Promise with setTimeout

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received!");
        }, 2000);
    });
}

getData()
    .then(data => {
        console.log(data);
    });