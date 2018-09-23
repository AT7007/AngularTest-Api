import * as connections from '../config/connection';
import { Schema, Document } from 'mongoose';

export interface IInfoModel extends Document {
    createdAt ? : Date;
    updatedAt ? : Date;
    title : String;
    description: String;
    listId: String;
}

const InfoSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    listId: {
        type: String,
        required: true
    }
}, {
    collection: 'info',
    versionKey: false
}).pre('save', (next) => {
    // this will run before saving
    if (this._doc) {
        const doc: IInfoModel = this._doc;
        const now: Date = new Date();

        if (!doc.createdAt) {
            doc.createdAt = now;
        }
        doc.updatedAt = now;
    }
    next();

    return this;
});

export default connections.db.model < IInfoModel >('InfoModel', InfoSchema);
