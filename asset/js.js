let BoxColor=document.getElementsByClassName("Color");
let box=document.getElementsByClassName("BoxToBox");
let iconSocial=document.getElementsByTagName("i");
//let buttom=document.getElementsByClassName("buttom");

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



// buttom.forEach(buttom => {
//     bottom.addEventListener("mousemove",()=>{
//         buttom.style.backgroundColor="red"
//     })
// });

// buttom.addEventListener("mousemove",()=>{
//     buttom[0].style.backgroundColor="red"
// })


let buttons = document.getElementsByClassName("buttom"); // انتخاب تمام دکمه‌ها

// آرایه‌ای از رنگ‌های مختلف برای هر دکمه
const colors = ["#ff0a53", "#00aaff", "#b5179e","#0582ca" ]; 

// تبدیل HTMLCollection به آرایه و اعمال تغییرات
Array.from(buttons).forEach((button, index) => {
    button.addEventListener("mousemove", () => {
        button.style.boxShadow = `inset 0 0 20px ${colors[index]}49, 
                                  inset 0 0 5px ${colors[index]}, 
                                  0 5px 5px rgba(0, 0, 0, 0.164)`;
    });

    button.addEventListener("mouseleave", () => {
        button.style.boxShadow = ""; // حذف باکس شدو وقتی موس خارج شد
    });
});






