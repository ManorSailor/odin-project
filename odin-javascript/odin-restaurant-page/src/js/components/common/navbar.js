import { header, h3, nav, ul, li } from "./navbar/navComponents"

ul.append(...li);
nav.appendChild(ul);
header.append(h3, nav);

export {
    header as navbar,
}