import CognitoExpress from 'cognito-express';

class Authorizer {

    static formatToken(token) {
        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft();
        }
        return token;
    }

    verifyBusiness(req, res, next) {
        const businessUserPool = new CognitoExpress({
            region: "eu-west-2",
            cognitoUserPoolId: process.env.BUSINESS_USERPOOLID,
            tokenUse: "access",
            tokenExpiration: 3600000
        });

        let token = req.headers.authorization;

        //Fail if token not present in header. 
        if (!token) return res.status(401).send("Authorization token required.");

        token = Authorizer.formatToken(token);

        businessUserPool.validate(token, function (err, response) {

            //If API is not authenticated, return 401 with error message. 
            if (err) return res.status(401).send(err);

            // Attach user if authenticated
            res.locals.user = response;
            res.locals.userType = "business";
            next();
        });
    }

    verifyConsumer(req, res, next) {
        const consumerUserPool = new CognitoExpress({
            region: "eu-west-2",
            cognitoUserPoolId: process.env.CONSUMER_USERPOOLID,
            tokenUse: "access",
            tokenExpiration: 3600000
        });

        let token = req.headers.authorization;

        //Fail if token not present in header. 
        if (!token) return res.status(401).send("Authorization token required.");

        token = Authorizer.formatToken(token);

        consumerUserPool.validate(token, function (err, response) {

            //If API is not authenticated, return 401 with error message. 
            if (err) return res.status(401).send(err);

            // Attach user if authenticated
            res.locals.user = response;
            res.locals.userType = "consumer";
            next();
        });
    }

    verifyAny(req, res, next) {
        const businessUserPool = new CognitoExpress({
            region: "eu-west-2",
            cognitoUserPoolId: process.env.BUSINESS_USERPOOLID,
            tokenUse: "access",
            tokenExpiration: 3600000
        });

        const consumerUserPool = new CognitoExpress({
            region: "eu-west-2",
            cognitoUserPoolId: process.env.CONSUMER_USERPOOLID,
            tokenUse: "access",
            tokenExpiration: 3600000
        });

        let token = req.headers.authorization;

        //Fail if token not present in header. 
        if (!token) return res.status(401).send("Authorization token required.");

        token = Authorizer.formatToken(token);

        consumerUserPool.validate(token, function (err, response) {
            //If unable to validate with consumer pool, try business pool
            if (err) {
                businessUserPool.validate(token, function (err, response) {
                    //If unable to validate with business pool, reject the request
                    if (err) {
                        return res.status(401).send(err);
                    }
                    // Attach user if able to authenticate with business pool
                    res.locals.user = response;
                    res.locals.userType = "business";
                    next();
                })
            } else {
                // Attach user if authenticated with consumer pool
                res.locals.user = response;
                res.locals.userType = "consumer";
                next();
            }
        });
    }
}

export default new Authorizer();