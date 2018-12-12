function index(req,res) {
    //ternary operator to set page views to either 1, or to add one to existing total
    req.session.views = req.session.views ? req.session.views + 1 : 1;
    res.json(req.session.views);
};

module.exports = {
    index
};