const { GetService } = require('../services/get-service');
const getService = new GetService();
const getAll = async (req, res) => {
    try{
        const response = await getService.getAll(req.query);
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

module.export = {
    getAll
}