
import axios from 'axios';

class GetService {
    async getAll(filter){
        try{
            
        }
        catch(error){
            console.log("Something went wrong in the service layer");
            throw{error};
        }
    }
}

module.exports = GetService;