function createForceImageCssRule(){
    // Create this class for images
    var style = document.createElement('style'); style.id="customCss"
    style.type = 'text/css';
    style.innerHTML = `.forceImage { url(placeholder_image) }`;
    document.getElementsByTagName('head')[0].appendChild(style);
    // const customCss = document.querySelector("#customCss")
}
function replaceElementComputedStyleBackgroundUrlIfPresent(el){
    if(window.getComputedStyle(el)["background"].includes("url")){
        // el.classList.add("forceImage");
        el.style = styled("#333333");

    }

    

}


createForceImageCssRule();



if(el.nodeName == "A"){
    ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
    replaceElementComputedStyleBackgroundUrlIfPresent(el);

    //Looks good to me
    if(window.getComputedStyle(el)["background"].includes("rgb") && window.getComputedStyle(el)["background"].includes("url") == false){
        // el.classList.add("forceImage");
        el.style.background= "#666666 !important";
        
    }

}