import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export function verifyToken(req, res, next) {
    const token = req.headers["authorization"];
    if (!token) return res.status(403).json({ error: "No autorizado" });
    try {
        const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(401).json({ error: "Token inválido" });
    }
}
