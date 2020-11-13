export class Album {

    constructor(
        public _id: String,
        public title: String,
        public artistId: String,
        public coverUrl: String,
        public year: number,
        public genre: String,
        public _createdAt: String,
        public _updatedAt: String
    ) { }
}