import { makeElement } from "../../../../utilities/utils";
import { homeWrapperObj, bgImgObj, heroContainerObj, heroPreTitleObj, heroTaglineObj, heroTitleObj, overlayObj, aboutContainerObj, aboutTextContainerObj, aboutOurStoryObj, aboutIntroObj, aboutTextContentObj, heroWrapperObj, aboutImgContainerObj, aboutImgOneObj, aboutImgTwoObj } from "./homeObjects";

const homeWrapper = makeElement(homeWrapperObj);
const heroWrapper = makeElement(heroWrapperObj);

const mainImg = makeElement(bgImgObj);
const overlay = makeElement(overlayObj);

const heroContainer = makeElement(heroContainerObj);
const heroTagline = makeElement(heroTaglineObj);
const heroPreTitle = makeElement(heroPreTitleObj);
const heroTitle = makeElement(heroTitleObj);

heroWrapper.append(mainImg, overlay, heroContainer, heroTagline, heroPreTitle, heroTitle);

// About me
const aboutContainer = makeElement(aboutContainerObj);

const aboutTextContainer = makeElement(aboutTextContainerObj);
const aboutImgContainer  = makeElement(aboutImgContainerObj);

const aboutOurStory = makeElement(aboutOurStoryObj);
const aboutIntro = makeElement(aboutIntroObj);
const aboutTextContent = makeElement(aboutTextContentObj);

const aboutImgOne = makeElement(aboutImgOneObj);
const aboutImgTwo = makeElement(aboutImgTwoObj);

aboutTextContainer.append(aboutOurStory, aboutIntro, aboutTextContent);
aboutImgContainer.append(aboutImgOne, aboutImgTwo);

aboutContainer.append(aboutTextContainer, aboutImgContainer);
heroContainer.append(heroTagline, heroPreTitle, heroTitle);
homeWrapper.append(heroWrapper, aboutContainer);

export {
    homeWrapper,
    mainImg,
}