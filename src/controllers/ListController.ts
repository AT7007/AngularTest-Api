import ListModel from '../models/ListModel';
import InfoModel from '../models/InfoModel';
import * as express from 'express';
import { ObjectId } from 'bson';

class ListController {
    /**
     * @param  {express.Request} req
     * @param  {express.Response} res
     * @param  {express.NextFunction} next
     */
    public getAll(req: express.Request, res: express.Response, next: express.NextFunction): void {
        ListModel
            .find({})
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((error: Error) => {
                res.status(500).json({
                    error: error.message,
                    errorStack: error.stack
                });
                next(error);
            });
    }

    public getInfoById(req: express.Request, res: express.Response, next: express.NextFunction): void {
        console.log({
            listId: req.params.listId
        })
        InfoModel
            .find({
                listId: req.params.listId
            })
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((error: Error) => {
                res.status(500).json({
                    error: error.message,
                    errorStack: error.stack
                });
                next(error);
            });
    }
}

export default new ListController();
