const main_container = document.getElementsByTagName("main")[0];
const add_book_button = document.getElementById("add-book-button");
const dialogElement = document.getElementsByClassName("book-detail-dialog")[0];
const cancel_button = document.getElementById("cancel-button");
const submit_button = document.getElementById("submit-button");

const library = [];

class Book {
    constructor(name, author, pages, read) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

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
    delete_button_div.appendChild(delete_button);

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

let addObjectToPage = function(book){
    let bookCard = createCard(book);
    main_container.appendChild(bookCard);
}

add_book_button.addEventListener("click",() => {
    dialogElement.showModal();
});

cancel_button.addEventListener("click",() => {
    dialogElement.close();
});

submit_button.addEventListener("click", () => {
    let Name = document.getElementById("name").value;
    let Author = document.getElementById("author").value;
    let Pages = document.getElementById("pages").valueAsNumber;
    let true_status = document.getElementById("true-button").checked;
    let false_status = document.getElementById("false-button").checked;
    let readStatus = false;
    if(true_status == true){
        readStatus = true;
    }
    else if(false_status == true){
        readStatus = false;
    }
    else{
        readStatus = null;
    }
    let bookObject = new Book(Name,Author,Pages,readStatus);
    library.push(bookObject);
    dialogElement.close();
    addObjectToPage(bookObject);
    document.getElementsByClassName("book-detail-form")[0].reset();
});

let Book1 = new Book("Kraven Last Hunt","J.M.Demaittis",120,false);
let Book2 = new Book("Watchmen","Alan Moore",150,true);
library.push(Book1);
library.push(Book2);
console.log(library);

for(let book of library){
    addObjectToPage(book);
}