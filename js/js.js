const button= document.querySelector('.button');
const mManu = document.querySelector('.m_menu');
const mHeader =document.querySelector(`#header`) 
button.onclick =function(e){
  e.preventDefault();
  button.classList.toggle('active');
  mManu.classList.toggle('active');
  mHeader.classList.toggle('active');
};



const elCk =document.querySelectorAll(`.header>div>nav>ul>li`);
const elWep =document.querySelectorAll(`.dep_web`);
let idx=0;




elCk.forEach
(function(wep,i)
  {wep.onclick = function(e){ 
      e.preventDefault();

      elCk[idx].classList.remove(`active`)
      elWep[idx].classList.remove(`active`)
      elCk[i].classList.add(`active`)
      elWep[i].classList.add(`active`)
      idx=i;

    } 
  }
)
elCk.forEach((ele,key)=>{
  ele.addEventListener(`mouseleave`,()=>{
    elWep[key].classList.remove(`active`)
    key=idx;
  })
})

/* const elNav =document.querySelectorAll(`.img>span`)
const elMain = document.querySelectorAll(`.sl-slide>div `)
  
elNav.forEach((ele,key)=>{
  ele.addEventListener(`click`,()=>{
    elNav[idx].classList.remove(`active`)

    elMain[idx].classList.remove(`active`)

    elNav[key].classList.add(`active`)

    elMain[key].classList.add(`active`)

    idx=key
  });
});
 */
let num= 0;

$('.m_menu>ul>li>a').on('click',function(e){
  if($(window).width()<=1100){ 
    e.preventDefault();
    $(this).parent().toggleClass('on').siblings().removeClass('on')

    $('.m_menu>ul>li').each(function(index){
      if($('.m_menu>ul>li').eq(index).hasClass('on')==true){
        /* $(this).find('dep_menu').slideUp(200); */
        $(this).find('.dep_menu').slideDown(200);
      }else{
        $('.m_menu>ul>li').eq(index).find('.dep_menu').slideUp(200);
      /*   $(this).find('.dep_menu').slideDown(200) */
      }

    });

    $('.has_dep>a').on('click', function(event){
      event.stopPropagation();
      event.preventDefault();
      if($(window).width()<=1100){
        console.log( $(this).parent())
        
        $(this).parent().toggleClass('on').siblings().removeClass('on')
    
        $('.has_dep').each(function(index){
          if($(this).hasClass('on') == true){
            console.log(index);
            $(this).find('.depth3').stop().slideDown(200);
          } else{
             $(this).find('.depth3').stop().slideUp(200);
          }
        });
      }
    });
    

  }
});



/* const elEm= document.querySelectorAll(`.m_menu li>ul`);

const elMm= document.querySelectorAll(`.m_menu>ul`).children;
console.log(elEm)
elMm.forEach((ele,k)=>{
  ele.addEventListener(`click`,(e)=>{
    e.preventDefault();
    elEm[idx].classList.add(`active`)
    elEm[k].classList.add(`active`)
    idx=k
  })
}) */

