console.log('welcome in API part');

let temp;
let description;
let lon;
let lat;


async function Getdata(cityname){
    console.log('before fetch data');
 let ans= await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityname + '&appid=e4a98571b577a282519f100cbb89bde8');
 if (ans=='Cannot read properties of undefined ') {
   window.alert("Please enter correct city name");
   return false;
 }
 
 ans=ans.json();
     return ans;
    
}
run();

async function run(){
let cityname='CHAKRATA';
let ans  = await Getdata(cityname);
   let temp=(ans['main']['temp'])-273;
temp= temp.toFixed(3);
let descript=ans['weather'][0]['description'];
let lon=ans['coord']['lon'];
let lat=ans['coord']['lat'];


     document.getElementById('nameofcity').innerHTML = `Location : `+ cityname;
document.getElementById('temp').innerHTML =`Temperature : `+ temp + ` °C `;
document.getElementById('description').innerHTML =`Description : `+ descript;
document.getElementById('longitude').innerHTML = `longitude :`+ lon + ` °E`;
document.getElementById('latitude').innerHTML = `latitude :`+ lat+ ' °N';

}



async function runclick(){
    
    cityname=document.getElementById('city').value;
    // cityname = (typeof cityname !== 'undefined') ?  cityname : chakrata;
    // console.log(cityname);
     if (cityname=="") {
     await  run();
    window.alert("Please enter correct city name");
    return false;
  }
      let ans  = await Getdata(cityname);
    // console.log(ans[0].avatar_url);
       console.log(ans['coord']['lon']);
       console.log(ans['coord']['lat']);
       console.log(ans['main']['temp']);
       console.log(ans['weather'][0]['description']);



       let temp=(ans['main']['temp'])-273;
    temp= temp.toFixed(3);
let descript=ans['weather'][0]['description'];
let lon=ans['coord']['lon'];
let lat=ans['coord']['lat'];


         document.getElementById('nameofcity').innerHTML = `Location : `+ cityname;
    document.getElementById('temp').innerHTML =`Temperature : `+ temp + ` °C `;
    document.getElementById('description').innerHTML =`Description : `+ descript;
    document.getElementById('longitude').innerHTML = `longitude :`+ lon+ ` °E`;
    document.getElementById('latitude').innerHTML = `latitude :`+ lat+ ' °N';


    console.log(cityname);



}