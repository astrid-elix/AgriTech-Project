

function soil_moisture_fun() {
    let soil_moisture_info=document.getElementById("Soil-moisture-info");
    let soil_moisture=Math.random()*100+1;
   let soil_moisture_div=document.getElementById("Soil-moisture-percent")
   soil_moisture_div.innerHTML=(Math.floor(soil_moisture)).toString()+"%";
if (soil_moisture>=50 && soil_moisture<80) {
    soil_moisture_info.innerHTML="soil need little more moisture"
}
else if(soil_moisture<50)
{
soil_moisture_info.innerHTML="soil moisture low can hurt plants"
}
else if(soil_moisture>91)
{
soil_moisture_info.innerHTML="close water line"
var audio=new Audio("resourse/simple-notification-152054.mp3");
audio.play();
alert("no more watering the plants needed");

}
else{
    soil_moisture_info.innerHTML="soil moisture is sufficient"
} 
}


function WaterLevel() {
    let water_lvl_info=document.getElementById("water-level-info");
    let water_lvl=Math.random()*100+1;
   let water_lvl_per=document.getElementById("water-level-percent");
water_lvl_per.innerHTML=(Math.floor(water_lvl)).toString()+"%";

   if (water_lvl<25) {
    water_lvl_info.innerHTML="Water level is very low"
   }
   else if(water_lvl<50)
   {
   water_lvl_info.innerHTML="Water level is low"
   }
   else if(water_lvl<80)
   {
  water_lvl_info.innerHTML="Water level normal"
   }
   else if(water_lvl<91)
   {
  water_lvl_info.innerHTML="water level is very good"
   }
else{
water_lvl_info.innerHTML="water tank is full"
var audio2=new Audio("resourse/reverby-notification-sound-246407.mp3");
audio2.play();
alert("Stop!!! Water tank is Full");

}
    
}


setInterval(soil_moisture_fun,5000);
setInterval(WaterLevel,5000);

   
