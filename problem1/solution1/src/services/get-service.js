const axios = require('axios');



class GetService {

    #createData(data){
        var validUrls = [];
        const myData =[
            "http://anything.com/fibo",
            "http://anything.com/primes",
            "http://anything.com/odd",
            "http://anything.com/rand",
        ];

        var urlArr = data.URL;
        console.log("data -> " , urlArr);
        console.log("querylength-> ",data.URL.length)
        for(let i =0 ; i<data.URL.length; i++){
            console.log("check -> " , myData.includes(urlArr[i]));
            console.log("arrayyyyyyyyyyyyy -> ", myData[i]);
           if( myData.includes(urlArr[i])){
               validUrls.push(urlArr[i]);
           }
        }
        return validUrls;
    }

    async getAll(data){
        try{
             const filterArray = this.#createData(data);
             console.log("ans ->", filterArray);
        }
        catch(error){
            console.log("Something went wrong in the service layer");
            throw{error};
        }
    }
}

module.exports = GetService;