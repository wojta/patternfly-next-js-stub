import {NextApiRequest, NextApiResponse} from "next";
import jwt from 'next-auth/jwt'

const secret = process.env.SECRET ?? "INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const token = await jwt.getToken({req, secret});
    if (token) {
        // Signed in
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({status: "ok"}));
    } else {
        // Not Signed in
        res.statusCode = 401;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({status: "unauthorized"}));
    }
    res.end();
};
