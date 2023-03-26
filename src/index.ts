import Express from "express";

// ***************************************************
// * Use global variables (see global.d.ts file for definitions)
// ***************************************************

global.Config = { Foo: "Bar" };
global.Foo = "Bar";

// ***************************************************
// * Setup express
// ***************************************************

const app = Express();

// ***************************************************
// * Add a couple of routes
// ***************************************************

app.get('/ping', function (req: Express.Request, res: Express.Response) {
	console.log(`${new Date().toISOString()}: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
	// req.UserID is available here because of the modification of the global namespace
	res.json({ Pong: new Date() });
});

app.get('/attach-to-debugger', function (req: Express.Request, res: Express.Response) {

	console.log("The debugger will auto attach here if run with for example `npm run tsc-watch`.");
	debugger; // Use debugger statement or F9 to set breakpoints
	console.log("Step to me by pressing F10");
	res.json({ DebuggingCompleted: new Date() });
});

// ***************************************************
// * Start listening on port 4000
// ***************************************************

app.listen(4000, () => {
	console.log('Listening on port 4000. Try these URL:s');
	console.log("http://localhost:4000/ping");
	console.log("http://localhost:4000/attach-to-debugger");
});

// ***************************************************
// * This is mandatory in all files
// ***************************************************

export { };
