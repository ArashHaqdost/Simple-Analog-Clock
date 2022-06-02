const sec=document.querySelector('.second');
const min=document.querySelector('.min');
const hour=document.querySelector('.hour');




function setDate(){
const now = new Date();
const seconds = now.getSeconds();
const secondDegree=((seconds/60)*360)+90;
sec.style.transform=`rotate(${secondDegree}deg)`;
console.log(seconds)

const mints= now.getMinutes();
const minitDegree=((mints)/60)*360+90;
min.style.transform=`rotate=(${minitDegree}deg)`;
console.log(mints);

const hours= now.getHours();
const hoursDegree=((mints/12)*360)+90;
hour.style.transform=`rotate=(${hoursDegree}deg)`;
console.log(hours);

}


setInterval(setDate,1000);