export class Categories {
    constructor(_id = null, name = '', length = 0) {
        this._id = _id;
        this.name = name;
        this.length = length;
    }
    _id: string;
    name: string;
    length: number;
}
