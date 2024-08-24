const authentication = (req, res, next) => {
    if(! req.session.usuario){
        res.redirect('/')
    }else{
        return next()
    }
}

export default authentication