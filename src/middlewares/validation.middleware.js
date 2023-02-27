import { validationResult } from 'express-validator'
export default (request, res, next) => {
    const errors = validationResult(request)
    if (!errors.isEmpty()) {
        res.status(400)
        res.setHeader('Content-Type', 'application/problem+json')
        res.send({
            type: 'about:blank',
            message: 'Fields missing',
            status: 400,
            detail: errors.array(),
        })
    } else {
        next()
    }
}
