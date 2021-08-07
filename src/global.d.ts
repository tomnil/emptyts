import "express"; // Modifies global namespace, so include it!

declare global {
    namespace Express {
        interface Request {
            token: string,
            UserID: string
        }
    }
}

export { };
