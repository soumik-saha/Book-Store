const checkUserRole = (allowedRoles) => {
    return (req, res, next) => {
        // Assuming user information is stored in the request object after authentication
        const userRole = req.user.role;

        if (allowedRoles.includes(userRole)) {
            // User has the required role, proceed to the next middleware or route handler
            next();
        } else {
            // User doesn't have the required role, send a forbidden response
            res.status(403).json({ message: 'Forbidden: Insufficient privileges' });
        }
    };
};

export default { checkUserRole };
