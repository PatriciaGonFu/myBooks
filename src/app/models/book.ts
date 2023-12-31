export class Book {
    public title: string;
    public type: string;
    public author: string;
    public price: number;
    public photo: string;
    public id_book: number;
    public id_user: number = 0;

    constructor (
        title:string, 
        type:string, 
        author:string, 
        price:number, 
        photo:string,
        id_book: number,
        id_user: number = 0) 
    {
        this.title = title;
        this.type = type;
        this.author = author;
        this.price = price;
        this.photo= ""+photo; 
        this.id_book = id_book;
    }
}



