
const sec=document.querySelector('.second');
const min=document.querySelector('.minute');
const hour=document.querySelector('.hour');




function setDate(){
const now = new Date();
const seconds = now.getSeconds();
const secondDegree=(((seconds/60)*360));
sec.style.transform=`rotate(${secondDegree}deg)`;


const mints= now.getMinutes();
const minitDegree=(((mints)/60)*360)+ ((seconds/60) * 6);
min.style.transform=`rotate(${minitDegree}deg)`;


const hours= now.getHours();
const hoursDegree=(30*(hours) + (mints/12)) ;
hour.style.transform=`rotate(${hoursDegree}deg)`;

}


setInterval(setDate,1000);