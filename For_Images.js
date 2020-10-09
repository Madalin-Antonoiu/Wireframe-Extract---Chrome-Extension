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
        el.style.background= "#666666 !important";
    }

}