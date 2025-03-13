import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; 
    if (!token) return res.status(403).json({ message: "Akses ditolak" });

    jwt.verify(token, "SECRET_KEY", (err, decoded) => {
        if (err) return res.status(401).json({ message: "Token tidak valid" });
        req.user = decoded;
        next();
    });
};
