const confPassLabel = document.querySelector('label[for="conf-pass"]');
const confPassInfo = document.getElementById('pass-info');
const passwordFields = document.getElementsByClassName('pass');
let obj = {};

[...passwordFields].forEach(field => field.addEventListener('input', validatePassword));

function validatePassword(e) {
    obj[e.target.id] = e.target.value;
    
    if (obj["pass"] && obj["conf-pass"]) {
        const isSame = obj["pass"].includes(obj["conf-pass"]) && obj["conf-pass"].includes(obj["pass"]);

        if (isSame) {
            confPassLabel.classList.remove('error');
            confPassInfo.textContent = '';
            return;
        } else {
            confPassLabel.classList.add('error');
            confPassInfo.textContent = '* Passwords do not match!';
        }
    }
}