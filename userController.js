import prisma from "./DB/db.config.js";

const userController = {}

userController.createUser = async (req, res) => {
    const {name, email, password} = req.body;

    const existing = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if(existing) {
        return res.status(400).json({error: "User already exists"})
    }

    const user = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: password
        }
    })

    res.status(201).json({user: user})
}

export default userController