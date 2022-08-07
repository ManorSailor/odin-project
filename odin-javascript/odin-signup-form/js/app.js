const password = document.getElementsByClassName('pass');
let obj = {};

[...password].forEach(pass => {
    pass.addEventListener('input', validatePassword);
});

function validatePassword(e) {
    obj[e.target.id] = e.target.value;
    
    if (obj["pass"] && obj["conf-pass"]) {
        const isSame = obj["pass"].includes(obj["conf-pass"]);

        if (isSame) {
            return;
        } else {
            console.log("Passwords don't match!");
        }
    }
}