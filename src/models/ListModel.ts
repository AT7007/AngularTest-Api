import * as connections from '../config/connection';
import { Schema, Document } from 'mongoose';

export interface IListModel extends Document {
    createdAt ? : Date;
    updatedAt ? : Date;
    title : String;
    description: String;
}

const ListSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    collection: 'list',
    versionKey: false
}).pre('save', (next) => {
    // this will run before saving
    if (this._doc) {
        const doc: IListModel = this._doc;
        const now: Date = new Date();

        if (!doc.createdAt) {
            doc.createdAt = now;
        }
        doc.updatedAt = now;
    }
    next();

    return this;
});

export default connections.db.model < IListModel >('ListModel', ListSchema);
