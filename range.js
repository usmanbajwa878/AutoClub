module.exports = (req,res,next) => {
    res.header('Access-Control-Expose-Headers', 'Content-Range')
    res.header('Content-Range','bytes : 0-9/*')
    next()
}

// response.headers.add('Content-Range','bytes : 0-9/*')