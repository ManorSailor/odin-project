/* ========= Objects State Controller ========= */
/* Handles updating classes on DOM objects */

export const stateController = (() => {
    // Private Methods
    // Following fn returns a new slightly modified fn according to the passed method
    function makeController(method) {
        return function (elements = [], classList = []) {
            if (!Array.isArray(elements)) {
                elements = [elements];
            }
            if (!Array.isArray(classList)) {
                classList = [classList];
            }
            elements.forEach(element => {
                classList.forEach(cls => element.classList[method](cls));
            });
        }
    }

    // Public APIs
    const setState    = makeController('add');
    const removeState = makeController('remove');
    const toggleState = makeController('toggle');

    return { setState, removeState, toggleState };
})();