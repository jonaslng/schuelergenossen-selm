import getSession from "next-session";

export default async function handler(req, res) {
    const session = await getSession(req, res);
    
    if (session.cart === null || session.cart === undefined) {
        session.cart = [];
    }

    const product = req.body;

    session.cart.forEach(element => {
        if(element.id === product.id) {
            element.amount += 1;
            return res.status(200).json(session.cart);
        }
    });

    session.cart.push(product);

    res.status(200).json("added to cart PRODUCT="+product.toString());
}