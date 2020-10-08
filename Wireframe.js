/** Websites i tested  and wireframes 99.99% TEXT ONLY while maintaining original page structure: (not all the colors yet, not IFRAMES)
 * 1. Google.com,Twitch.com (dynamic), Stackoverflow.com (some parts are dynamic, like ads)
 * 3. W3schools.com (some parts are dynamic, like ads - have to perfect on IFRAMES)
 * 4. python.org, https://onextrapixel.com/, https://developer.mozilla.org/, https://www.samsung.com/ro/, emag.ro (dynamic some elements)
 * 5. https://www.awwwards.com/ (base) and it`s following sites:
 *      -TECHNOLOGY: https://letter.co/, https://hytek.co.jp/ (japanese), https://www.pride.ru/ (RU!)
 *                  https://www.dwr.com/ (Design within reach, YES!)
 */

// For iframe i just insert Array.from to run inside iframe's document :)
// For the ::before and ::after, you can find any elem that has it within like window.getComputedStyle($0, '::before');

console.log("Replace every bit of text - Installed")

// Helpers
    var styled = `
    background: #666666 !important; 
    color: #666666 !important; 
    border: 1px solid #A6A6A6 !important; 
    text-shadow: none !important;
    `;
    function ifFirstChildExistsAndIsTextNodeAndNotEmpty(el){

    // Helper
    function wrapTextNodeInAMark(el){
        if(el.firstChild){
            let textNodeTextContent = el.firstChild.textContent.trim();
            let textNodeParent = el.firstChild.parentElement;

            let mark = document.createElement("mark"); mark.style = styled;mark.innerText = textNodeTextContent;
        
            textNodeParent.textContent = "";
            textNodeParent.appendChild(mark);
        }

    }

    if(el.firstChild && el.firstChild.textContent.trim().length > 0 && el.firstChild.nodeType === 3){
        wrapTextNodeInAMark(el)
    }
    }
    function ifAnyChildExistsAndIsTextNodeAndNotEmpty(el){

        let children = el.childNodes;
        children.forEach( child =>{
            if(child.textContent && child.textContent.trim().length > 0 && child.nodeType === 3){
                wrapTHISTextNodeInAMark(child)
            }

            //Contains only Alphanumerical characters
            // if((/\d/.test(child.textContent) || /[a-zA-Z]/.test(child.textContent)) === true) {
            //     wrapTHISTextNodeInAMark(child)
            // }
        })


        // Helper
        function wrapTHISTextNodeInAMark(el){
            let textNodeTextContent = el.textContent.trim();
            let textNodeParent = el.parentElement;

            let mark = document.createElement("mark"); mark.style = styled;mark.innerText = textNodeTextContent;

            textNodeParent.textContent = "";
            textNodeParent.appendChild(mark);
        }
    }
//


// Main execution   
Array.from(document.body.querySelectorAll('*')).forEach(el => {
    if(el.nodeName == "SCRIPT"){
        //do nothing
    }
    else if(el.nodeName == "DIV"){
        // ifFirstChildExistsAndIsTextNodeAndNotEmpty(el)
        ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
    } 
    else if(el.nodeName == "A"){
        ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
    }
    else if(el.nodeName == "SPAN"){
        if(el.style.backgroundColor){
            el.style= styled;
        }
    
        ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
    }
    else if(el.nodeName == "TD"){
        ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
    }
    else if(el.nodeName == "H1" || el.nodeName == "H2" || el.nodeName == "H3" || el.nodeName == "H4" || el.nodeName == "H5"){
        ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
    }
    else if(el.nodeName == "INPUT" || el.nodeName == "BUTTON" ){
        el.style= styled;
        el.placeholder = "";
    }
    else if(el.nodeName == "CITE" || el.nodeName == "TIME" || el.nodeName == "LABEL" || el.nodeName == "DD" || el.nodeName == "TH"){
        ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
    }
    else if(el.nodeName == "LI"){
        ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
    }
    else if(el.nodeName == "P" || el.nodeName == "S" ){
        ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
    }
    else if(el.nodeName == "CODE" || el.nodeName == "STRONG" || el.nodeName == "EM" || el.nodeName == "SUMMARY"){
        ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
    }
    else if(el.nodeName == "PRE"){
        el.style= styled;
    }
    else if(el.nodeName == "SMALL" || el.nodeName == "SUP" || el.nodeName == "FIGCAPTION" || el.nodeName == "DT"){
        ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
    }
    else if(el.nodeName == "B" || el.nodeName == "I"){
        ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
    }
    
})
