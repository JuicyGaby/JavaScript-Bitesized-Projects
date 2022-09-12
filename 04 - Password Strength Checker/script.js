const indicator = document.querySelector(".indicator");
const input = document.querySelector("input");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".moderate");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
const showBtn = document.querySelector(".showBtn");


let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

input.addEventListener("keyup", function() {
    if (input.value != "") {
        indicator.style.display = "block"
        indicator.style.display = "flex"
        
        if(input.value.length <= 3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong)))no=1;
        if(input.value.length >= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong))))no=2;
        if(input.value.length >= 6 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong))no=3;
        if (no === 1) {
            weak.classList.add("active")
            text.style.display = "block"
            text.classList.add("weak")
            text.textContent = "Your password is too weak."
        }
        if(no==2){
            medium.classList.add("active");
            text.textContent = "Your password is medium";
            text.classList.add("moderate");
        }   else{
            medium.classList.remove("active");
            text.classList.remove("moderate");
        }
        if (no === 3) {
            medium.classList.add("active")
            strong.classList.add("active")
            text.style.display = "block"
            text.classList.add("strong")
            text.textContent = "Your password is strong."
        } else {
            strong.classList.remove("active")
            text.classList.remove("strong")
        }
        showBtn.style.display = "block"
        showBtn.addEventListener("click", function() {
            showPassword()
        })
    } else {
        indicator.style.display = "none"
        text.style.display = "none"
        showBtn.style.display = "none"
        
    }
})

function showPassword() {
    if (input.type == "password") {
        input.type = "text"
        showBtn.textContent = "HIDE"
    } else {
        input.type = "password"
        showBtn.textContent = "SHOW"
    }
}