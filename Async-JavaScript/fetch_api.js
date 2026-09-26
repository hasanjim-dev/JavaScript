// Fetch API

async function getPost() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        let data = await response.json();

        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getPost();


// Fetch Multiple Posts

async function getPosts() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        let posts = await response.json();

        console.log(posts);
    } catch (error) {
        console.log("Error:", error);
    }
}

getPosts();