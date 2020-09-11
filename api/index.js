// The main, exported, function of the endpoint,
// dealing with the request and subsequent response

import pkg from "../package.json";

module.exports = async (req, res) => {
    res.status(200).json(pkg)
}