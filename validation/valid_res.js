// delete

const validRes = str => (
    typeof str === 'string' && str.trim().length > 0
);

module.exports = validRes;