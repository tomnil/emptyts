import Express from "express";

const app = Express();

app.get('/ping', function (req: Express.Request, res: Express.Response) {
    console.log(`${new Date().toISOString()}: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    // req.UserID is available here because of the modification of the global namespace
    res.json({ Pong: new Date() });
});

app.listen(4000, () => console.log('Listening on port 4000! Try http://localhost:4000/ping'));


export {

};