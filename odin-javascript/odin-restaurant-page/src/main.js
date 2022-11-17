import './css/styles.css'
import navbar from './js/components/common/navbar';
import mainContainer from './js/components/common/mainContainer';
import home from './js/components/tabs/home/home';
import menu from './js/components/tabs/menu/menu';

navbar.init(tabHandler);
renderTab(home);

// Handles which tab to render
function tabHandler(activeTab) {
    if (activeTab === '#menu') {
        renderTab(menu);
    } else if (activeTab === '#contact') {
        renderTab();    
    } else if (activeTab === '#home') {
        renderTab(home);
    }
}

// Handles rendering of the passed tab
function renderTab(tab) {
    // Clear the contents of mainContainer
    mainContainer.clear();

    // Append each node to the main container
    mainContainer.append(...tab);
}
