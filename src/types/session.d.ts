// src/types/session.d.ts
import "express-session";

declare module "express-session" {
    interface Session {
        user?: {
            id: number;
            email: string;
            name: string;
        };
    }
}
