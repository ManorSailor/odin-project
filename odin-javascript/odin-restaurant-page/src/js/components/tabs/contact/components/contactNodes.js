import { addressContainerObj, addressObj, addressTitleObj, contactDetailsObj, contactDetailsWrapperObj, contactWrapperObj, descTextObj, emailObj, emailTitleObj, emallContainerObj, headerTextObj, textWrapperObj } from "./contactObjects";
import { makeElement } from "../../../../utilities/utils";

const contactWrapper = makeElement(contactWrapperObj);

// Text Container
const textWrapper = makeElement(textWrapperObj);

const headerText = makeElement(headerTextObj);
const descText = makeElement(descTextObj);

textWrapper.append(headerText, descText);

// Contact Details container
const contactDetailsWrapper = makeElement(contactDetailsWrapperObj);
const contactDetails = makeElement(contactDetailsObj);

const addressContainer = makeElement(addressContainerObj);
const addressTitle = makeElement(addressTitleObj);
const address = makeElement(addressObj);

const emailContainer = makeElement(emallContainerObj);
const emailTitle = makeElement(emailTitleObj);
const email = makeElement(emailObj);

addressContainer.append(addressTitle, address);
emailContainer.append(emailTitle, email);

contactDetailsWrapper.append(contactDetails, addressContainer, emailContainer);
contactWrapper.append(textWrapper, contactDetailsWrapper);

export {
    contactWrapper,
}