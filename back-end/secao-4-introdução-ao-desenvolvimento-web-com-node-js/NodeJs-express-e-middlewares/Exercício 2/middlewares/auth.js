module.exports = function validateToken(req, res, next) {
    const { authorization } = req.headers;

    if (!authorization || authorization.lenth !== 16) {
        return res.status(401).json({ message: 'Token inválido!' });
    }
};