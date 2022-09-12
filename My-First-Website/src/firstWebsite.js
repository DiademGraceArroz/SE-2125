const postLoad = () => {
    console.log("Hello World!");

    const loginButton = document.querySelector("#login-btn");
    loginButton.onclick = () => {
        const userName = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;

        if (!userName || userName.length < 3) {
            console.log("Please input username.");
            return;
        } else if (userName.length < 3) {
            console.log("Username should have more than (3) characters.");
            return;
        };

        if (!password) {
            console.log("Please input password.");
            return;
        } else if (password.length < 3) {
            console.log("Password should have more than (3) characters.");
            return;
        };

        if (userName == "admin" && password == "root" || password == "1234") {
            console.log("redirect");
            // redirect to the home.html
            location.href = "src/home.html";
        } else {
            console.log("Access denied.");
        };

        console.log("You're logged in!", userName, password);
    };
};
window.onload = postLoad;