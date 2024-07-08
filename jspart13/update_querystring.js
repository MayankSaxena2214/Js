let url="http://universities.hipolabs.com/search?name=";

async function getdata(){
    try{
        let country=prompt("Enter the country name to see the universities");
        let res=await axios.get(url+country);
        for(let i=0;i<res.data.length;i++){
            console.log(res.data[i].name);
        }
    }
    catch(e){
        console.log("Error is:",e);
    }
}