const { prisma } = require("../prisma/prisma-client");

const FollowController = {
    followUser: async (req, res) => {
        const { followingId } = req.body;
        const userId = req.user.userId;

        if (followingId === userId) {
            return res.status(500).json({ error: "You can't follow to yourself"})
        }

        try {
            const existingSubscriptions = await prisma.follows.findFirst({
                where: {
                    AND: [
                        { followerId: userId },
                        { followingId }
                    ]
                }
            })

            if (existingSubscriptions) {
                return res.status(400).json({ error: "The subscription already exists"})
            }

            await prisma.follows.create({
                data: {
                    follower: {
                        connect: { id: userId }
                    },
                    following: {
                        connect: { id: followingId }
                    }
                }
            })

            res.status(201).json({ message: "The subscription has been successfully created"})
        } catch (error) {
            console.error("Subscribe user error:", error);
            res.status(500).json({ error: "Internal server error" })
        }
    },
    unfollowUser: async (req, res) => {
        const { followingId } = req.body;
        const userId = req.user.userId;

        try {
            const follows = await prisma.follows.findFirst({
                where: {
                    AND: [
                        { followerId: userId },
                        { followingId }
                    ]
                }
            })

            if (!follows) {
                return res.status(404).json({ error: "You are not subscribed to this user" });
            }

            await prisma.follows.delete({
                where: { id: follows.id }
            })

            res.status(201).json({ message: "The subscription has been successfully deleted"})
        } catch (error) {
            console.error("Delete subscribe user error:", error);
            res.status(500).json({ error: "Internal server error" })
        }
    }
}

module.exports = FollowController;