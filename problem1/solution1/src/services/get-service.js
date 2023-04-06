const axios = require('axios');


const { Merge , MergeSort } = require('../utils/helper');


class GetService {


    
    
    createData(data){
        var validUrls = [];
        const myData =[
            "http://localhost:4500/fibo",
            "http://localhost:4500/primes",
            "http://localhost:4500/odd",
            "http://localhost:4500/rand",
            // "http://anything.com/fibo",
            // "http://anything.com/primes,"
            // "http://anything.com/odd",
            // "http://anything.com/rand",
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
             const filterArray = this.createData(data);
             const urlResponses =[]
             for(let i =0 ; i<filterArray.length ; i++){
                const ans = await axios.get(filterArray[i]);
                urlResponses.push(ans.data);
            }
            console.log(urlResponses.length);
            var emptyArr =[];
            for(let i = 0 ; i< urlResponses.length ; i++){
                let secondArr = urlResponses[i];
                console.log(emptyArr);
                emptyArr = Merge(emptyArr ,secondArr);
                console.log("after -> ",emptyArr);

            }
            var sortedMergedArray = MergeSort(emptyArr);
            console.log(emptyArr);

            
        }
        catch(error){
            console.log("Something went wrong in the service layer");
            throw{error};
        }
    }
}

module.exports = GetService;