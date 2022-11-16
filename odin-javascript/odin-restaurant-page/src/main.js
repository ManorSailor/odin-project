import './css/styles.css'
import navbar from './js/components/common/navbar';
import mainContainer from './js/components/common/mainContainer';
import home from './js/components/tabs/home/home';

navbar.init(tabHandler);
renderTab(home);

// Handles which tab to render
function tabHandler(activeTab) {
    if (activeTab === '#menu') {
        renderTab()
    } else if (activeTab === '#contact') {
        renderTab();
    } else if (activeTab === '#home') {
        renderTab(home);
    }
}

// Handles rendering of the passed tab
function renderTab(tab) {
    // Clear the mainContainer
    mainContainer.remove();
    
    // Generate the passed tab & get its nodes

    // Append each node to the main container
    mainContainer.append(...tab);

    // Reattach mainContainer to body
    mainContainer.attach()
}
