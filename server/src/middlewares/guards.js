module.exports = {
    isAuth: () => (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.status(401).json({ message: 'Unauthenticated' });
        }
    },
    isOwner: () => (req, res, next) => {
        if (!req.user) {
            res.status(401).json({ message: 'Unauthenticated' });
        } else if (req.user._id == res.locals.item.owner._id) {
            next();
        } else {
            res.status(403).json({ message: 'Unauthorized' });
        }
    }
};