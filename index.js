const main_container = document.getElementsByTagName("main")[0];

let library = [];

class Book {
    constructor(name, author, pages, read) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

let Book1 = new Book("Kraven Last Hunt","J.M.Demaittis",120,false);
let Book2 = new Book("Watchmen","Alan Moore",150,true);
library.push(Book1);
library.push(Book2);
console.log(library);

let createCard = function(bookObject){
    let content_card = document.createElement("div");
    content_card.className = "content-card";

    let delete_button_div = document.createElement("div");
    delete_button_div.className = "delete-button-div";
    let delete_button = document.createElement("button");
    delete_button.className = "delete-button";
    let img_element = document.createElement("img");
    img_element.src = "./images/close.svg";
    img_element.style.height = "20px";
    img_element.style.width = "20px";
    delete_button.appendChild(img_element);
    delete_button.style.border = "none";
    delete_button.style.borderRadius = "50%";
    delete_button.style.padding = "5px";
    delete_button.style.backgroundColor = "transparent";
    delete_button_div.appendChild(delete_button);
    delete_button_div.style.display = "flex";
    delete_button_div.style.justifyContent = "end";

    let name_div = document.createElement("div");
    name_div.className = "name-div";
    name_div.innerHTML = `<strong>Name:</strong> ${bookObject.name}`;

    
    let author_div = document.createElement("div");
    author_div.className = "author-div";
    author_div.innerHTML = `<strong>Author:</strong> ${bookObject.author}`;
    
    let pages_div = document.createElement("div");
    pages_div.className = "pages-div";
    pages_div.innerHTML = `<strong>Pages:</strong> ${bookObject.pages}`;
    
    let read_status_div = document.createElement("div");
    read_status_div.className = "read-status-div";
    read_status_div.innerHTML = `<strong>Read:</strong> ${bookObject.read}`;
    
    content_card.appendChild(delete_button_div);
    content_card.appendChild(name_div);
    content_card.appendChild(author_div);
    content_card.appendChild(pages_div);
    content_card.appendChild(read_status_div);

    return content_card;
}

for(let book of library){
    let bookCard = createCard(book);
    main_container.appendChild(bookCard);
}