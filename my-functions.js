module.exports = {
    setDate: setDate,
}

function setDate(requestParams, context, ee, next) {
    requestParams.json.date = new Date();
    return next(); // MUST be called for the scenario to continue
}

