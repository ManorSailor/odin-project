// Card Count
const MAX = 6;

// Globals
const cardsContainer = document.getElementById("card-container");

// Card Data
const title = ['Super Cool Project', 'Less Cool Project', 'Impossible App', 'Easy Peasy App', 'App From Hell', 'Ad Blocker'];
const text  = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis labore natus fugit sit et alias!';
const avatar = (seed) => `https://unsplash.it/${seed}?random`;

// Card class
class Card {
    constructor (title, text, avatar) {
        this.title = title;
        this.text = text;
        this.avatar = avatar;
    }

    get card() {
        return this.newCard();
    }

    newCard() {
        // Parts of a card
        const article = document.createElement("article");
        const header = document.createElement("header");
        const h4 = document.createElement("h4");
        const p = document.createElement("p");
        const footer = document.createElement("footer");
        const img = document.createElement("img");

        // Card container
        article.classList.add("card");

        // Header area
        header.classList.add("card-content");
        h4.textContent = this.title;
        p.textContent = this.text;
        header.appendChild(h4);
        header.appendChild(p);

        // Footer area
        footer.classList.add("card-footer");
        img.classList.add("card-avatar");
        img.src = this.avatar;
        img.alt = "Random Image";
        footer.appendChild(img);

        // Append direct children to parent container
        article.appendChild(header);
        article.appendChild(footer);
        return article;
    }
}

// Generate cards & append them to the cards container
for (let i = 0; i < MAX; i++) {
    const card = new Card(title[i], text, avatar(i + 32));
    cardsContainer.append(card.card);
}