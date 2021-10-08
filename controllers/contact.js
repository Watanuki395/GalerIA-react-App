const { httpError } = require('../helpers/handleError')
var sg = require('../common/sendgrid_config');


const SendMail = (req, res) => {
    try {
        const { UserEmail, UserName, UserMessage } = req.body
        sg.sendEmail(UserEmail,UserName)
        res.json({msg:"Gracias por contactar a galeria the company"})
    } catch (e) {
        httpError(res, e)
    }
    
}


module.exports = { SendMail }