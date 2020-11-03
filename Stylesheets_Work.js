// THERE ARE TWO TYPES OF WAYS TO PUT AN IMAGE IN AN HTML ELEMENT
//1. STYLESHEET
//2. INLINE ( you need to loop over HTML ELEMENTS AND FIND SRC,DATASRC ETC)

// CREATE SEPARATE FUNCTION MODULES, .then CHAIN THEM!

// STARTING WITH 2. INLINE STYLES

//STYLESHEET
// * - you cannot access CSS rules coming from external site ( wowhead is an example). WHat i could do is get computed all classes and rewrite them?
async function stylesheetCss() {
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

            if (cssRules[j]["selectorText"] && cssRules[j]["selectorText"].includes(":root")) {
                // Returns :root css variables :)
                let rootText = cssRules[j]["cssText"];
                var vars = rootText.split(';');
                rootVars.push(vars);
            }

            if (style) {
                //if (style.background) console.log(style.background) - works, logs all the bg colours on the page with the possibility to change them!
                //if (style.color.includes("var")) console.log(style.color)
                //if (style.color.includes("var")) style.color = "grey";
                if (style.color) {
                    style.color = "grey";
                    // style.backgroundColor = "grey";
                }
            }

        }

    }

    let t1 = performance.now();
    let performant = (t1 - t0).toFixed(2) + " ms";

    return ({ performant, foundCssRules, foundElems, rootVars })
}