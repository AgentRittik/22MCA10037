const GetService = require('../services/get-service');
const getService = new GetService();

const getAll = async (req, res) => {
    try{
        const response = await getService.getAll(req.query);
        // console.log(req.query.URL[0]);
        // console.log(req.query.URL[1]);
         console.log(req.query.URL.length);


        return res.status(200).json({
            data: response,
            sucess: true,
            message: 'Sucessfully fetched all the cities',
            err: {}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'not able to fetch the cities',
            err: error

        });
    }
}

module.exports = {
    getAll
}