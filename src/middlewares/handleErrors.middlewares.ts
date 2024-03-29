import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { ZodError } from "zod";

const handleErrors = (
    error: unknown,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
): Response => {
    
    if(error instanceof AppError){
        return res.status(error.status).json({ message:  error.message });
    }

    if (error instanceof ZodError) {
        return res.status(400).json({ message: error.flatten().fieldErrors });
      }

    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
}

export default handleErrors;