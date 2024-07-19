const main_container = document.getElementsByTagName("main")[0];
const add_book_button = document.getElementById("add-book-button");
const dialogElement = document.getElementsByClassName("book-detail-dialog")[0];
const cancel_button = document.getElementById("cancel-button");
const submit_button = document.getElementById("submit-button");

const library = [];

function toTitleCase(str){
    let newStr = str[0].toUpperCase() + str.substring(1).toLowerCase();
    return newStr;
}

class Book {
    constructor(name, author, pages, read) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

let createCard = function(bookObject){
    // Createes the wrapping div for card
    let content_card = document.createElement("div");
    content_card.className = "content-card";

    // Adds the close button "X" marks on top-right
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

    // Creates the div for name
    let name_div = document.createElement("div");
    name_div.className = "name-div";
    name_div.innerHTML = `<strong>Name:</strong> ${bookObject.name}`;

    // Creates the author div
    let author_div = document.createElement("div");
    author_div.className = "author-div";
    author_div.innerHTML = `<strong>Author:</strong> ${bookObject.author}`;
    
    // Creates the pages div
    let pages_div = document.createElement("div");
    pages_div.className = "pages-div";
    pages_div.innerHTML = `<strong>Pages:</strong> ${bookObject.pages}`;
    
    // Creates the read-status div
    let read_status_div = document.createElement("div");
    read_status_div.className = "read-status-div";
    let read_text = document.createElement("p");
    read_text.className = "read-text";
    read_text.innerHTML = "<strong>Read: </strong>";
    let read_button = document.createElement("button");
    read_button.className = "read-button";
    let str = `${bookObject.read}`;
    str = toTitleCase(str);
    read_button.innerHTML = str;
    read_button.addEventListener("click",
        () => {
            bookObject.read = !bookObject.read;
            str = `${bookObject.read}`;
            read_button.innerHTML = toTitleCase(str);
        }
    );
    read_status_div.appendChild(read_text);
    read_status_div.appendChild(read_button);
    
    // Adds all the div to wrapping
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

let addBookToLibrary = function(Name,author,pages,readStatus){
    let book = new Book(Name,author,pages,readStatus);
    library.push(book);
    addObjectToPage(book);
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
    dialogElement.close();
    addBookToLibrary(Name,Author,Pages,readStatus);
    document.getElementsByClassName("book-detail-form")[0].reset();
});

addBookToLibrary("Kraven Last Hunt","J.M.Demaittis",120,false);
addBookToLibrary("Watchmen","Alan Moore",150,true);