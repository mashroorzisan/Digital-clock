function whatTime(){
    //declaring variables
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();  
    let session = "AM";

    //variable manipulation
    h = (h==0) ? h = 12 : h;
    h = (h>12) ? h = h-12 : h;
    h = (h<10) ? h = "0"+h : h;
    m = (m<10) ? m = "0"+m : m;
    s = (s<10) ? s = "0"+s : s;
    session = (h>12) ? session = "PM" : session = "AM";
    
    //dom manipulation
    const clock = document.getElementById('clock');
    clock.innerHTML =`${h} : ${m} : ${s} ${session}`;
    setTimeout(whatTime,1000)
}
whatTime();