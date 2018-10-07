export class Pagination {
    constructor( skip= 1, limit= 10, tRegi = 0 ) {
        skip = 1;
        limit = 10;
        this.tRegi = 0;
    }
    skip: number;
    limit: number;
    tRegi: number;
}
