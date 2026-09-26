// Async Function

async function greet() {
    return "Hello from async function!";
}

greet().then(message => {
    console.log(message);
});


// Async/Await

function getUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                name: "Hasan",
                age: 22
            });
        }, 1000);
    });
}

async function showUser() {
    let user = await getUser();

    console.log(user);
}

showUser();


// Error Handling with try/catch

async function fetchData() {
    try {
        let result = await getUser();

        console.log("User:", result);
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchData();