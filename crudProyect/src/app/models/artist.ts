export class Artist {

    constructor(
        public _id: String,
        public name: String,
        public photoUrl: String,
        public birthdate: Date,
        public deathDate: Date,
        public _createdAt: Date,
        public _updatedAt: Date
    ) { }
}