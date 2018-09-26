export class Pagination {
    constructor( skip= 1, limit= 1, tRegi = 0 ) {
        skip = 1;
        limit = 1;
        this.tRegi = 0;
    }
    skip: number;
    limit: number;
    tRegi: number;
}
