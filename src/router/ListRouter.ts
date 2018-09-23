import ListController from '../controllers/ListController';
import { Router } from 'express';

export default class ListRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {
        this.router.get('/list', ListController.getAll);
        this.router.get('/info/:listId', ListController.getInfoById);
    }
}
