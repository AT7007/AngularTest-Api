import * as express from 'express';
import UserRouter from './UserRouter';
import { IServer } from '../interfaces/ServerInterface';
import ListRouter from './ListRouter';

export default class Routes {
    /**
     * @param  {IServer} server
     * @returns void
     */
    static init(server: IServer): void {
        const router: express.Router = express.Router();

        server.app.use('/', router);
        // users
        // server.app.use('/v1/users', new UserRouter().router);

        server.app.use('/', new ListRouter().router);
    }
}
