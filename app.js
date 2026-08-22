import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import {getDatabase,ref,push,set,onValue} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';
import {firebaseConfig} from './firebase-config.js';

initializeApp(firebaseConfig);
const db=getDatabase();

const params=new URLSearchParams(location.search);
if(params.get('to')) guest.innerText=params.get('to').replaceAll('-',' ');

window.openInvitation=()=>{
cover.style.display='none';
main.classList.remove('hidden');
};

setInterval(()=>{
let diff=new Date('2026-09-13T08:00:00')-new Date();
countdown.innerText=Math.max(0,Math.floor(diff/86400000))+' hari menuju acara';
},1000);

rsvp.onsubmit=async e=>{
e.preventDefault();
await set(push(ref(db,'rsvp')),{
nama:nama.value,
hadir:hadir.value,
jumlah:jumlah.value,
ucapan:ucapan.value,
timestamp:new Date().toISOString()
});
alert('RSVP tersimpan');
};

onValue(ref(db,'rsvp'),snap=>{
let html='';
snap.forEach(x=>{
let d=x.val();
html+=`<div class="wish"><b>${d.nama}</b><br>${d.ucapan||''}</div>`;
});
wishes.innerHTML=html;
});