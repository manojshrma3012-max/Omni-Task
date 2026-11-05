import jwt from 'jsonwebtoken';
import type { JwtPayload } from 'jsonwebtoken';
import type { Request, Response, NextFunction } from "express";
export type userpayload = {
    _id: string;
    name: string;
    email: string;
    image: string;
}

export interface AuthenticatedRequest extends Request {
    user?: userpayload | null;
}

export async function authmiddle(
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
): Promise<void> {
    const header = req.headers.authorization;

    if (!header || !header.startsWith("Bearer ")) {
        res.status(401).json({
            message: "Forbidden No header"
        });
        return;
    }

    const token = header.split(" ")[1];

    if (!token) {
        res.status(401).json({
            message: "Forbidden No token"
        });
        return;
    }

    try {
        const payload = jwt.verify(token, process.env.SECRET as string) as JwtPayload;
        const tokenUser = (payload.tokendata ?? payload) as Partial<userpayload>;
        console.log(tokenUser)
        if (
            typeof tokenUser.email !== "string" ||
            typeof tokenUser._id !== "string" ||
            typeof tokenUser.name !== "string" ||
            typeof tokenUser.image !== "string"
        ) {
            res.status(401).json({
                message: "Forbidden Invalid token payload"
            });
            return;
        }
        req.user = {
            email: tokenUser.email,
            _id: tokenUser._id,
            name: tokenUser.name,
            image: tokenUser.image,
        };
        next();
    } catch (error) {
        res.status(401).json({
            message: "Forbidden Invalid token"
        });
    }
}