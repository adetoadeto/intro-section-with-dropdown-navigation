const featuresBox = document.querySelector("#features");
const companyBox = document.querySelector("#company");
const mobileFeatures = document.querySelector("#mobile-features");
const mobileCompany = document.querySelector("#mobile-company");
const featuresDropDownIcon = document.querySelectorAll(".features-dropdown-icon");
const companyDropDownIcon = document.querySelectorAll(".company-dropdown-icon");

const hamburgerMenu = document.querySelector(".hamburger-icon img");
const mobileNavBarPopUp = document.querySelector("#mobile-navbar");
const closeButton = document.querySelector("#close");
const backDrop = document.querySelector(".backdrop");

popUpBox(featuresDropDownIcon, mobileFeatures, featuresBox);
popUpBox(companyDropDownIcon, mobileCompany, companyBox);


function popUpBox (icon, mobile, desktop) {
    for (let i = 0 ; i < icon.length; i++) {
         icon[i].addEventListener("click", ()=> {
            mobile.classList.toggle("show");
            desktop.classList.toggle("show");  
        });
    }
}

hamburgerMenu.addEventListener("click", ()=>{
    backDrop.style.display = "block";
    mobileNavBarPopUp.style.display = "block";
});

closeButton.addEventListener("click", ()=>{
    backDrop.style.display = "none";
    mobileNavBarPopUp.style.display = "none";
});




