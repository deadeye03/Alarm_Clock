let set=document.getElementById('set');
let btn=document.getElementById('bt');
PlayAudio=()=>{
    let audio=new Audio('sunny.mp3');
   audio.play();
   
}
const setAlarm=()=> {
   
    let date= new Date();
    let hr=date.getHours();
    let mn=date.getMinutes();
    // let s=date.getSeconds();
    // console.log('hii')
    let alarm_time=appt.value
    set.innerHTML=alarm_time
   let hours=appt.value.split(":")[0]
   let minutes=appt.value.split(":")[1]
   if (hr==hours && mn==minutes) {
   PlayAudio();
   clearInterval(interval);
   }
}
btn.addEventListener('click',()=>{
    interval=setInterval(setAlarm,1000);
});
let time=document.getElementById('time');

const updatetime=()=>{
    let d= new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();

    time.innerHTML=`${h} : ${m} : ${s}` 
//     let alarm_time=appt.value
//     set.innerHTML=alarm_time
//    let hours=appt.value.split(":")[0]
//    let minutes=appt.value.split(":")[1]
//    if (h==hours && m==minutes) {
//    PlayAudio();
//    }
}

setInterval(updatetime,1000)