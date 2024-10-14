function clock(){
    let time= new Date();
    let hrs=time.getHours();
    let min=time.getMinutes();
    let sec=time.getSeconds();
    const week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const date=week[time.getDate()];

    let section=document.getElementById("session");
    if(hrs>12){
        hrs=hrs-12;
    }
    if(hrs<10){
        hrs="0"+hrs;
    }
    
    if(min<10){
        min="0"+min;
    }
    
    if(sec<10){
        sec="0"+sec; 
    }
    
    if(hrs>=12){
        section.innerHTML="PM";
    }
    else{
        section.innerHTML="AM";
    }
    document.getElementById("hours").innerHTML=hrs;
    document.getElementById("minutes").innerHTML=min;
    document.getElementById("seconds").innerHTML=sec;
     document.getElementById("day") .innerHTML=date;  
}

setInterval(() => {
    clock()
}, 10);