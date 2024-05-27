// Exercise 45 (Cars)

function storeCarinfo(manufacturer:string , modelNmae:string , ...extraOption: { [key : string] : any } []) : object {
    const carInfo = {
        manufacturer,
        modelNmae,
        ...Object.assign({}, ...extraOption)
    }
    return carInfo;
};

let ans = storeCarinfo("Honda" , "Civic" , {color:"Black"} , {Features:['navigation' ,'Power Window']});
console.log(ans);



