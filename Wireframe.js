/** Websites i tested  and wireframes 99.99% TEXT ONLY while maintaining original page structure: (not all the colors yet, not IFRAMES)
 * 1. Google.com,Twitch.com (dynamic), Stackoverflow.com (some parts are dynamic, like ads)
 * 3. W3schools.com (some parts are dynamic, like ads - have to perfect on IFRAMES)
 * 4. python.org, https://onextrapixel.com/, https://developer.mozilla.org/, https://www.samsung.com/ro/, emag.ro (dynamic some elements)
 * 5. https://www.awwwards.com/ (base) and it`s following sites:
 *      -TECHNOLOGY: https://letter.co/, https://hytek.co.jp/ (japanese), https://www.pride.ru/ (RU!)
 *                  https://www.dwr.com/ (Design within reach, YES!), https://www.teamgb.com/, https://climate.ai/, https://virginhyperloop.com/
 */                 //https://utrust.com/,  https://www.storemaven.com/, https://www.tesla.com/ etc.

// For iframe i just insert Array.from to run inside iframe's document :)
// For the ::before and ::after, you can find any elem that has it within like window.getComputedStyle($0, '::before');

    console.log("Replace every bit of text - Installed")

// Helpers
    function styled(color="#666666"){
        return (
            `
            background: ${color}!important; 
            color: ${color}!important; 
            border: 1px solid #A6A6A6 !important; 
            text-shadow: none !important;
            `
        )
    }
    // function createForceImageCssRule(){
    //     // Create this class for images
    //     var style = document.createElement('style'); style.id="customCss"
    //     style.type = 'text/css';
    //     style.innerHTML = `.forceImage { ${styled()} }`;
    //     document.getElementsByTagName('head')[0].appendChild(style);
    //     // const customCss = document.querySelector("#customCss")
    // }
    // function replaceElementComputedStyleBackgroundUrlIfPresent(el){
    //     if(window.getComputedStyle(el)["background"].includes("url")){
    //         // el.classList.add("forceImage");
    //         el.style = styled("#333333");

    //     }

       

    // }
    function ifAnyChildExistsAndIsTextNodeAndNotEmpty(el){

        let children = el.childNodes;

        children.forEach( child =>{
            if(child.textContent && child.textContent.trim().length >= 1 && child.nodeType === 3){
                wrapTHISTextNodeInAMark(child)
            }
        })

        function createMark(textNodeTextContent){
            let mark = document.createElement("mark"); 
            mark.style = styled();
            mark.innerText = textNodeTextContent;
            return mark
        }

        // THis one does the whole text replace with grey thing :)
        function wrapTHISTextNodeInAMark(el){
            let textNodeTextContent = el.textContent.trim();
            let textNodeParent = el.parentElement;

            let mark = createMark(textNodeTextContent);

            el.remove(); // THIS WAS THE BUG? OH, LORD!
            textNodeParent.appendChild(mark);
            // textNodeParent.style = styled(color)
        }
    }
//
//createForceImageCssRule();

// Main execution   
Array.from(document.body.querySelectorAll('*')).forEach(el => {

    // I. TEXT ( and where applicable, image too)
    if(el.nodeName == "SCRIPT"){
        //do nothing
    }
    else if(el.nodeName == "A"){
        ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
        // replaceElementComputedStyleBackgroundUrlIfPresent(el);

        // Looks good to me
        // if(window.getComputedStyle(el)["background"].includes("rgb") && window.getComputedStyle(el)["background"].includes("url") == false){
        //     // el.classList.add("forceImage");
        //     el.style.background= "#666666 !important";
            
        // }

    }
    else if(el.nodeName == "DIV"){
        //console.log(el.nodeName, el.style.fontSize)
        ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
        // replaceElementComputedStyleBackgroundUrlIfPresent(el)

        // if(window.getComputedStyle(el)["background"].includes("rgb") && window.getComputedStyle(el)["background"].includes("url") == false){
        //     // el.classList.add("forceImage");
        //     el.style.background= "#444444 !important";
            
        // }
    } 
    else if(el.nodeName == "SPAN"){
        ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);

        if(window.getComputedStyle(el)["backgroundColor"]){
            el.style = styled();
        }   

    }
    else if(el.nodeName == "TD" || el.nodeName == "B" || el.nodeName == "I" || el.nodeName == "TH"){
        ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
    }
    else if(el.nodeName == "H1" || el.nodeName == "H2" || el.nodeName == "H3" || el.nodeName == "H4" || el.nodeName == "H5"){
        //console.log(el.nodeName, el.style.fontSize)
        ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
    }
    else if(el.nodeName == "INPUT" || el.nodeName == "BUTTON" || el.nodeName == "PRE"){
        el.style= styled();
        if(el.placeholder) el.placeholder = "";
    }
    else if(el.nodeName == "CITE" || el.nodeName == "TIME" || el.nodeName == "LABEL" || el.nodeName == "DD" ){
        ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
    }
    else if(el.nodeName == "P" || el.nodeName == "S" || el.nodeName == "LI"){
        if(el.nodeName == "P"){
            //console.log(el.nodeName, el.style.fontSize)
        }
        ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
    }
    else if(el.nodeName == "CODE" || el.nodeName == "STRONG" || el.nodeName == "EM" || el.nodeName == "SUMMARY"){
        ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
    }
    else if(el.nodeName == "SMALL" || el.nodeName == "SUP" || el.nodeName == "FIGCAPTION" || el.nodeName == "DT"){
        ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
    }
    else if(el.nodeName == "DEL" || el.nodeName == "INS" || el.nodeName == "SUB" || el.nodeName == "MARK"){
        ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
    }
    
    // I. IMAGE
    
})
