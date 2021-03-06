import { JsonWebTokenError } from "jsonwebtoken"

export const generateToken = (user) =>{
    return jwt.sign({
        id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
    }, process.env.JWT_SECRET,
    {
        expiresIn:'30d',
    }
    );
};