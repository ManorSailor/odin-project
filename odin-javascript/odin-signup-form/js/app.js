// Global Elements
const confPassLabel = document.querySelector('label[for="conf-pass"]');
const confPassInfo = document.getElementById('pass-info');
const passwordFields = document.getElementsByClassName('pass');

// Global Variables
let obj = {};

// For each password field, listen for input in them
[...passwordFields].forEach(field => field.addEventListener('input', validatePassword));

// Function which validates the password
// Using an object allows us to keep both passwords in the same place & we don't need separate variables for them
function validatePassword(e) {
    // Store the password in an object with key being the id of input field 
    // /* Eg: obj[pass] = 'asdd' */
    obj[e.target.id] = e.target.value; 
    
    // Ensure both passwords exist before checking if they are the same
    if (obj["pass"] && obj["conf-pass"]) {
        // Make sure passwords exactly match with each other, we check both twice because includes method
        // doesn't exactly check for a match i.e, 'aaaaa'.includes('aaa'); returns true. We don't want this.
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