/**
 * Capitalizes the first letter of the passed string
 * @param {string} str 
 * @returns {string}
 */
export default function capitalize(str) {
    if (typeof str !== 'string') return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}