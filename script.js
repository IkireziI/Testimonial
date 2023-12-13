const customersFB=[
  {
      name: 'Anysia KAMANZI',
      email: 'anysia@gmail.com',
      testimonial:"Speaking French opens up a world of culture and opportunities. It's a beautiful language that connects people globally.",
      img:'../img/anysia.jpeg',
  },
  {
      name: 'Angel IRACYADUKUNDA',
      email: 'ange@gmail.com',
      testimonial:"Knowing multiple languages broadens your horizons and enhances your understanding of diverse perspectives and ideas.",
      img:'../img/ange.jpeg',
  },
  {
      name:'Ines IKIREZI',
      email: 'ines@gmail.com',
      testimonial:"Learning Kinyarwanda can be challenging, but it's worth the effort to connect with the rich cultural heritage of Rwanda.",
      img:'../img/ines.jpeg',
  },

];
let j=customersFB.length;
let tc=document.getElementById('feedback');
let nextbt=document.getElementById('next');
let prevbt=document.getElementById('prev');
nextbt.addEventListener('click',()=>{
 i=(j+i+1)%j;
 display();
});
prevbt.addEventListener('click',()=>{
  i=(j+i-1)%j;
  display();
});
let i=0;
let display=()=>{
  tc.innerHTML=`
  <p>${customersFB[i].testimonial}</p>
  <img src="${customersFB[i].img}" alt="">
  <h3>${customersFB[i].name}</h3>
  <p>${customersFB[i].email}</p>
  `;
};
window.onload=display;
