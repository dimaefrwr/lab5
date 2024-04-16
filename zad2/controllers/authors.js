exports.getAuthorList = (req, res) => {
    res.render('authors', { authors: [] });
};