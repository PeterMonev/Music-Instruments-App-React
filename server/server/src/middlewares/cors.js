module.exports = () => (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Should be http://localhost:3000
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Authorization');

    next();
};