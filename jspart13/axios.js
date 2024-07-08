
let url="https://catfact.ninja/fact";
async function getfacts(){
    try{
        let res=await axios.get(url);
        // let data=await res.json(); NO NEED TO DO IT NOW BECAUSE AXIOS RETURN AUTOMATICALLY IN THE READABLE FORMAT
    console.log(res);
    console.log(res.data.fact);
    }
    catch(e){
        console.log("Error is:",e);
    }
}