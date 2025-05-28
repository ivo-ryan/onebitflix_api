import express from 'express'
import { sequelize } from './database/seeders';

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT,  () => {
     sequelize.authenticate().then(() => {
        console.log('Db connection successfull');
        
    });

    console.log('App runing');
    
})