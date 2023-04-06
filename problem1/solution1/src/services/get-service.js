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
        if(typeof(data.URL) === "string"){
            if(myData.includes(data.URL)){
                validUrls.push(urlArr);
            }
        }
        else{
            for(let i =0 ; i<data.URL.length; i++){
                if( myData.includes(urlArr[i])){
                    validUrls.push(urlArr[i]);
                }
             }
        }
        return validUrls;
    }

    async getAll(data){
        try{
             const filterArray = this.#createData(data);
             const urlResponses =[]
             for(let i =0 ; i<filterArray.length ; i++){
                const ans = await axios.get(filterArray[i]);
                urlResponses.push(ans);
             }
             console.log("ans ->", filterArray);
        }
        catch(error){
            console.log("Something went wrong in the service layer");
            throw{error};
        }
    }
}

module.exports = GetService;