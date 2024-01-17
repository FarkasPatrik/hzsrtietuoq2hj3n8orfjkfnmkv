function createPopup(id){
    let PopupNode = document-queryselector(id);
    let overlay = popupNode.queryselector(".overlay");
    let closeBtn = popupNode.queryselector(".close-btn")
    function openPopup (){
        popupNode.classList.remove("active");
    }
    function closePopup(){
        popupNode.classList.remove("active");
    }
    overlay.addEventListener("click", closePopup)
    closeBtn.addEventListener("click", closePopup)
    return openPopup;
}

let popup = createPopup("#popup");
document.querySelector("#open-popup").addEventListener=("click",popup);