// app.js
import express from 'express';
import bodyparser from 'body-parser'
import indexRouter from './routes/index';

const app = express();

app.use(bodyparser.json({limit: '50mb', extended: true}));
app.use(bodyparser.urlencoded( {limit: '50mb', extended: true} ));

app.listen(3010, () => console.log('listening on port 3010'));

app.use("/", indexRouter);

export default app;