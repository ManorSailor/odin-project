import './css/styles.css'
import navbar from './js/components/common/navbar';
import mainContainer from './js/components/common/mainContainer';
import home from './js/components/tabs/home/home';
import menu from './js/components/tabs/menu/menu';
import contact from './js/components/tabs/contact/contact';
import { makeRenderer } from './js/utilities/utils';

const renderTab = makeRenderer(mainContainer);

navbar.init(tabHandler);
renderTab(home);

// Handles which tab to render
function tabHandler(activeTab) {
    if (activeTab === '#menu') {
        renderTab(menu);
    } else if (activeTab === '#contact') {
        renderTab(contact);
    } else if (activeTab === '#home') {
        renderTab(home);
    }
}
