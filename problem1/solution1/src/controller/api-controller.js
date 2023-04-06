const GetService = require('../services/get-service');
const getService = new GetService();

const getAll = async (req, res) => {
    try{
        const response = await getService.getAll(req.query);
        // console.log(req.query.URL[0]);
        // console.log(req.query.URL[1]);
         //console.log(req.query.URL.length);


        return res.status(200).json({
            numbers: response,
            sucess: true,
            message: 'Sucessfully',
            err: {}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'something went wrong in controllers',
            err: error

        });
    }
}

module.exports = {
    getAll
}