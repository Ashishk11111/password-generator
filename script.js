let lenght = document.getElementById("lenght");
let showlenght = document.getElementById("lenghtvalue");
let passbox = document.getElementById("passbox");

let upper = document.getElementById("uppercase");
let lower = document.getElementById("lowercase");
let num = document.getElementById("numbers");
let symbol = document.getElementById("symbols");
let genbtn = document.getElementById("genbtn");

let copyicon = document.getElementById("copyicon");

copyicon.addEventListener("click",()=>{
    if(passbox!="" || passbox.lenght>=1){
        navigator.clipboard.writeText(passbox.value);
        copyicon.title = "Password Copied";
        copyicon.innerHTML = "check";
        setTimeout(()=>{
        copyicon.title = "Copy";
        copyicon.innerHTML = "Content_Copy";
        
        },3000)}
    }
    
)

copyicon.addEventListener("mouseenter", () => {
    copyicon.title = "Copy";
});

showlenght.textContent = lenght.value;

lenght.addEventListener("input",()=>{
    showlenght.textContent = lenght.value;
})

genbtn.addEventListener("click",()=>{
    passbox.value = generatePassword();
})

// GENERATE PASSWORD

let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let  lowerchars = upperchars.toLowerCase();

let allsymbols = "!@#$%^&*(){}[]:<>/?";

let allnumbers  = "0123456789";


function generatePassword(){

    let password = "";

    allChars = "";
    allChars += upper.checked ? upperchars : "";
    allChars += lower.checked ? lowerchars : "";
    allChars += num.checked ? allnumbers : "";
    allChars += symbol.checked ? allsymbols : "";

    if(allChars=="" || allChars.lenght==0) return password;

    let i = 1;
    while(i<=lenght.value){
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    
    return password;
}



