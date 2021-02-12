var app = angular.module("simpleApp", []);

function simpleController() {
    this.collection = [{bookname: "A Promised Land",author:"Barack Obama", price: 1200, genres: "Memoir",},
        {bookname: "Becoming",author:"Michelle Obama", price: 950, genres: "Memoir, Autobiography"},
        {bookname: "The Alchemist",author:"Paulo Coelho", price: 850, genres: "Drama, Quest, Fantasy"},
        {bookname: "Caste: The Origins of our Discontents",author:"Isabel Wilkerson", price: 750, genres: "Non- Fiction"},
        {bookname: "Think Like a Monk",author:"Jay Shetty", price: 1500, genres: "Self- help book"},
        {bookname: "The Hobbit",author:"J. R. R Tolkien", price: 820, genres: "Fantasy, Fiction"}];

    this.limit = 9;
    this.sortProperty = 'bookname';
    this.reverseSort = false;
}

simpleController.prototype.addEntry = function () {
    this.collection.push(this.newData);
    this.newData = '';
};

simpleController.prototype.sort = function (prop) {
    this.sortProperty = prop;
    this.reverseSort = !this.reverseSort;
}


app.controller("simpleController", simpleController);