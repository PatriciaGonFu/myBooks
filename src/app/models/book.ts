export class Book {
    public title: string;
    public type: string;
    public author: string;
    public price: number;
    public photo: string;
    public id_user: number;
    public id_book: number;


    constructor (
        title:string, 
        type:string, 
        author:string, 
        price:number, 
        photo:string,
        id_user: number,
        id_book: number
) 
    {
        this.title = title;
        this.type = type;
        this.author = author;
        this.price = price;
        this.photo= ""+photo; 
        this.id_user = id_user;
        this.id_book = id_book;

    }
}



