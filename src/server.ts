import express from 'express'
import { sequelize } from './database/seeders';
import { adminJs, adminJsRouter } from './adminjs';
import { router } from './routes';

const app = express();

app.use(express.static('public'));

app.use(adminJs.options.rootPath, adminJsRouter);

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT,  () => {
     sequelize.authenticate().then(() => {
        console.log('Db connection successfull');
        
    });

    console.log('App runing');
    
});