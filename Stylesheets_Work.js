// THERE ARE TWO TYPES OF WAYS TO PUT AN IMAGE IN AN HTML ELEMENT
//1. STYLESHEET
//2. INLINE ( you need to loop over HTML ELEMENTS AND FIND SRC,DATASRC ETC)

// CREATE SEPARATE FUNCTION MODULES, .then CHAIN THEM!

// STARTING WITH 2. INLINE STYLES
async function imgPromise(){
    let t0 = performance.now();

    var imgs = document.getElementsByTagName("img");
    var foundElems = [];

    for (var i = 0; i < imgs.length; i++) {
        foundElems.push(imgs[i]);
        let wxh = imgs[i].offsetWidth + "x" + imgs[i].offsetHeight
        imgs[i].src = `https://via.placeholder.com/${wxh}`; //break the link with 'url()'
        imgs[i].alt="";
    }

    let t1 = performance.now();
    let performant = (t1 - t0).toFixed(2) +" ms";

    return ({performant, foundElems})
}
async function imagePromise(){
    let t0 = performance.now();

    var images = document.getElementsByTagName("image");
    var foundElems = [];

    for (var i = 0; i < images.length; i++) {
        foundElems.push(images[i]);
        let wxh = images[i].width.baseVal.value + "x" + images[i].height.baseVal.value
        images[i].href.baseVal = `https://via.placeholder.com/${wxh}`; //break the link with 'url()'
    }

    let t1 = performance.now();
    let performant = (t1 - t0).toFixed(2) +" ms";

    return ({performant, foundElems})
}
async function divsImageBgPromise(){
    let t0 = performance.now();

    var divs = document.getElementsByTagName("DIV");
    var foundElems = [];

    for (var i = 0; i < divs.length; i++) {
        foundElems.push(divs[i]);
        let wxh = divs[i].offsetWidth + "x" + divs[i].offsetHeight

        if(divs[i].style.backgroundImage){
            divs[i].style.backgroundImage = `url("https://via.placeholder.com/${wxh}")`
        }

    }

    let t1 = performance.now();
    let performant = (t1 - t0).toFixed(2) +" ms";

    return ({performant, foundElems})
}
async function iBgPromise(){
    let t0 = performance.now();

    var is = document.getElementsByTagName("i");
    var foundElems = [];

    for (var i = 0; i < is.length; i++) {
        foundElems.push(is[i]);
        let wxh = is[i].offsetWidth + "x" + is[i].offsetHeight

        if(window.getComputedStyle(is[i])["background-image"].includes("url")){
            is[i].style.backgroundImage = `url("https://via.placeholder.com/${wxh}")`
        }

    }

    let t1 = performance.now();
    let performant = (t1 - t0).toFixed(2) +" ms";

    return ({performant, foundElems})
}


//INLINE
var [img, image, stylesheet, divsimg, is] = await Promise.all([
    console.log(imgPromise()), 
    console.log(imagePromise()),
    console.log(divsImageBgPromise()),
    console.log(iBgPromise()),
]);

//STYLESHEET
// * - you cannot access CSS rules coming from external site ( wowhead is an example). WHat i could do is get computed all classes and rewrite them?
async function stylesheetCss(){
    //sheets[4].cssRules[0].style.backgroundImage
    let t0 = performance.now();
    let rootVars = [];
    let foundElems = [];
    let foundCssRules = [];

    let sheets = document.styleSheets;
    for (var i = 0; i < sheets.length; i++) {
    
        let cssRules = sheets[i].cssRules;
        foundCssRules.push(cssRules);

        for (var j = 0; j < cssRules.length; j++) {
            let style = cssRules[j].style;

            if(cssRules[j]["selectorText"] && cssRules[j]["selectorText"].includes(":root")){
                // Returns :root css variables :)
                let rootText = cssRules[j]["cssText"];
                var vars = rootText.split(';');
                rootVars.push(vars);
            }

            if(style){
                //if (style.background) console.log(style.background) - works, logs all the bg colours on the page with the possibility to change them!
                //if (style.color.includes("var")) console.log(style.color)
                //if (style.color.includes("var")) style.color = "grey";
                if (style.color){
                    style.color = "grey";
                    // style.backgroundColor = "grey";
                } 
            }

        }
        
    }

    let t1 = performance.now();
    let performant = (t1 - t0).toFixed(2) +" ms";

    return ({performant, foundCssRules, foundElems, rootVars})
}