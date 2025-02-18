let BoxColor=document.getElementsByClassName("Color");
let box=document.getElementsByClassName("BoxToBox");
let iconSocial=document.getElementsByTagName("i");
let MainPage=document.getElementsByClassName("main");
let abuteMe=document.getElementsByClassName("abuteMe");
let PageAboutMe=document.getElementsByClassName("PageAboutMe");



BoxColor[0].style.top="80px";
BoxColor[0].style.right="1px";
BoxColor[1].style.bottom="80px";
BoxColor[1].style.right="280px";

box[0].addEventListener("mousemove", function(){
    BoxColor[1].style.right="-20px";
    BoxColor[0].style.right="280px";
})
box[0].addEventListener("mouseleave", function(){
     BoxColor[1].style.right="280px";
     BoxColor[0].style.right="-30px";
})


let buttons = document.getElementsByClassName("buttom"); // انتخاب تمام دکمه‌ها

// آرایه‌ای از رنگ‌های مختلف برای هر دکمه
const colors = ["#ff0a53", "#00aaff", "#b5179e","#0582ca" ]; 

// تبدیل HTMLCollection به آرایه و اعمال تغییرات
Array.from(buttons).forEach((button, index) => {
    button.addEventListener("mousemove", () => {
        button.style.boxShadow = `inset 0 0 20px ${colors[index]}49, 
                                  inset 0 0 5px ${colors[index]}, 
                                  0 5px 5px rgba(0, 0, 0, 0.164)`;

        //for(let i=0;i<iconSocial.length;i++){
            iconSocial[index].style.color=colors[index];
        //}                         
    });

    button.addEventListener("mouseleave", () => {
        button.style.boxShadow = ""; // حذف باکس شدو وقتی موس خارج شد
        iconSocial[index].style.color="aliceblue";
    });
});

// buttons[3].addEventListener("click", ()=>{
//     alert("دوست عزیز فعلا لینک در دسترس نیست بزودی در update بعدی قرار میگیرد از صبر شما مچکریم")
// })



abuteMe[0].addEventListener("click",()=>{
    setTimeout(() => {
        MainPage[0].style.display="none"
    }, 1000);

    box[0].style.transform="rotate3d(1, 1, 1, 360deg)";
    PageAboutMe[0].style.display="block"

    if(screen.width<=100){
        box[0].style.width="500px"
    }
})










