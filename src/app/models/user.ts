export class User {
    public id_user: string;
    public name: string;
    public last_name: string;
    public email: string
    public photo: string;
    public password: string;

    constructor(id_user:string, name:string, last_name:string, email:string, photo:string, password:string)
    {
        this.id_user = id_user;
        this.name = name;
        this.last_name= last_name;
        this.email = email;
        this.photo = ""+photo;
        this.password = password;
    }
}


