import CognitoExpress from 'cognito-express';

class Authorizer {

    verifyBusiness(req, res, next) {
        const cognitoExpress = new CognitoExpress({
            region: "eu-west-2",
            cognitoUserPoolId: "eu-west-2_NzD6u4BOr",
            tokenUse: "access",
            tokenExpiration: 3600000
        });

        let token = req.headers.authorization;

        if (token.startsWith("Bearer ")) {
            token = token.slice(7, accessTokenFromClient.length).trimLeft();
        }

        //Fail if token not present in header. 
        if (!token) return res.status(401).send("Access Token missing from header");

        cognitoExpress.validate(token, function (err, response) {

            //If API is not authenticated, return 401 with error message. 
            if (err) return res.status(401).send(err);

            // Attach user if authenticated
            res.locals.user = response;
            next();
        });
    }

    verifyConsumer(req, res, next) {
        const cognitoExpress = new CognitoExpress({
            region: "eu-west-2",
            cognitoUserPoolId: "eu-west-2_NzD6u4BOr",
            tokenUse: "access",
            tokenExpiration: 3600000
        });

        let token = req.headers.authorization;

        if (token.startsWith("Bearer ")) {
            token = token.slice(7, accessTokenFromClient.length).trimLeft();
        }

        //Fail if token not present in header. 
        if (!token) return res.status(401).send("Access Token missing from header");

        cognitoExpress.validate(token, function (err, response) {

            //If API is not authenticated, return 401 with error message. 
            if (err) return res.status(401).send(err);

            // Attach user if authenticated
            res.locals.user = response;
            next();
        });
    }
}

export default new Authorizer();