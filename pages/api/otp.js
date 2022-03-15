import Cookie from "cookie";

export default (req, res) =>{
    res.setHeader(
        "Set-Cookie",
        Cookie.serialize(req.body.name , req.body.value, {
            htttpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 400,
            sameSite: "strict",
            path: "/",
        })
    );
    res.statusCode = 200;
    res.json({ success: true });
}