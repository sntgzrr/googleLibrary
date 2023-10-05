export class BookDetail{
    title: string | undefined;
    infoLink: string | undefined;
    imageLinks: string | undefined;

    constructor(obj?: any){
        this.title = obj && obj.title || null;
        this.infoLink = obj && obj.infoLink || null;
        this.imageLinks = obj && obj.imageLinks || null;
    }
}