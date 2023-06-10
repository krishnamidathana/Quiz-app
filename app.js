const container = document.querySelector(".container");
const bg3 = document.querySelector(".bg3");
const bg2 = document.querySelector(".bg2");
const bg1 = document.querySelector(".bg1");
const clickbtn = document.getElementById("click-btn");
const quiz = document.querySelector(".quiz");
const count = document.querySelector(".count");
const question = document.querySelector(".question");
const li = document.querySelectorAll("li");
const submit = document.querySelector(".submit");
const bt = document.querySelectorAll(".bt");
const scoreboard = document.querySelector(".scoreboard");
const marks = document.querySelector(".marks");



const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");





let min = 5;
let sec= 0;
let timer;
let idx =0;
let clickedValue = new Set();
let selected =[];
let scvalue =0;
let adding


    
    clickbtn.addEventListener('click',()=>{
      
        bg3.style.width = '900px';
        bg3.style.height = '900px';
        bg3.style.opacity = '1';

        bg2.style.width = '900px';
        bg2.style.height = '900px';
        bg2.style.opacity = '1';

        bg1.style.width = '900px';
        bg1.style.height = '900px';
        bg1.style.opacity = '1';

        function delaypanel (){
            quiz.style.display = 'block';
        }
        setTimeout(delaypanel,1500)
        
 
         function countdown(){
            sec--
            if(sec < 0){
                sec =59
                min--
            }


            submit.addEventListener('click',()=>{
              clearInterval(timer)
              quiz.style.display ='none'
              container.style.display ='none'
              scoreboard.style.display ="block"
              marks.innerHTML =clickedValue.size
            })

            if (min==0 &sec==0){
                clearInterval(timer)
                quiz.style.display ='none'
                container.style.display ='none'
                scoreboard.style.display ="block"
                marks.innerHTML =clickedValue.size
                 
                
            }
            let m = min<10 ? '0'+ min:min;
            let s = sec<10 ? '0'+ sec:sec;
          
            count.innerHTML=`${m}:${s}`
        }
       timer  = setInterval(countdown,1000);

        function changedata(){
            question.innerHTML =this.q;
            a.innerHTML = `A.   ${this.a}`;
            b.innerHTML =` B.   ${this.b}`;
            c.innerHTML =` C.   ${this.c}`;
            d.innerHTML =` D.   ${this.d}`;

        }

        const prashnalu = [ {
            
            q:`1) what is the alfabet which comes before the alfabet  Y?` ,
            a:'G',
            b:'T',
            c:'F',
            d:'X'},

           { q:'2) What is the letter P means in APJ Abdul Kalam?',
            a:'Padmanabam',
            b:'Pakir',
            c:'Parandhamam',
            d:'Prudvi'},

            { q:'3) Who is the american president?',
            a:'Putin',
            b:'Jo Biden',
            c:'Jalenskey',
            d:'Modi'},

            { q:'4) What is the capital city of ukraine ?',
            a:'Kherson',
            b:'Palvlohrad',
            c:'Kyiv',
            d:'Donetsk'},

            { q:'5) What is the shape of Egg?',
            a:'Circle',
            b:'Square',
            c:'Rectangle',
            d:'Oval'},
        ]

        

        changedata.call(prashnalu[0]);
        bt.forEach(btns=>{
        btns.addEventListener('click',()=>{
        document.querySelector('.active')?.classList.remove('active'),
        btns.classList.add('active')
   })
});
       
         if(idx ==0){
            previous.style.display ='none';
            
            
          }
      
       next.addEventListener('click',()=>{
        document.querySelector('.active')?.classList.remove('active')
        idx++
      if(idx==4){
        next.style.display ='none';
        submit.style.display = 'block';
         }
    else if (idx ==1||2||3) {
        previous.style.display = 'block';
        }
     changedata.call(prashnalu[idx ])
    })


        previous.addEventListener('click',()=>{
          document.querySelector('.active')?.classList.remove('active')
          idx--;
                      
          if(idx ==0){
            previous.style.display ='none';
            submit.style.display = 'none';
            }
          else if(idx ==1||2||3){
        
         next.style.display ='block';
            submit.style.display = 'none';
             }
         changedata.call(prashnalu[idx])
          })
         function score (){
          d.addEventListener('click',()=>{
            if(idx==0){
          clickedValue.add(d.innerHTML)
              }})
          b.addEventListener('click',()=>{
            if(idx==1){
              clickedValue.add(b.innerHTML)
           }})
          b.addEventListener('click',()=>{
            if(idx==2){
           clickedValue.add(b.innerHTML)
            }})
          c.addEventListener('click',()=>{
            if(idx==3){
              clickedValue.add(c.innerHTML)
          }})
          d.addEventListener('click',()=>{
            if(idx==4){
              clickedValue.add(d.innerHTML)
          }})}
         score();
          });