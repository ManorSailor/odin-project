// Retrieve data from input fields when the form is submitted
export function parseData(formFields) {
    // Use the spread syntax & convert formFields into an array
    formFields = [...formFields];

    // Pop off the last element, we don't need it. If ever required, use the submitter property of SubmitEventAPI
    formFields.pop();

    // Call array reducer method on it, populate & return a new array of parsedData
    return formFields.reduce((parsedData, field) => {
        if (field.type === 'checkbox') {
            parsedData.push(field.checked);
        } else {
            parsedData.push(field.value);
        }
        return parsedData;
    }, []);
}