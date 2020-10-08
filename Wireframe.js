
console.log("Replace every bit of text - Installed")
var styled = `
background: #666666 !important; 
color: #666666 !important; 
border: 1px solid #A6A6A6 !important; 
text-shadow: none !important;
`;

// Helpers
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


    // Really unnecessary!, i can just do the Array.from
    var whenReady = function(callback) {
        if (document.readyState === 'complete') callback(); // check not already loaded prior to this function being called
        else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback); // for standards compliant browsers (including IE 9+)
        else if (document.attachEvent) document.attachEvent('onreadystatechange', callback); // for IE 8
    };

    whenReady(initApplication());


// MAIN. With only one QUERY of all elements :)
function initApplication(){

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
        else if(el.nodeName == "CITE" || el.nodeName == "TIME" || el.nodeName == "LABEL" || el.nodeName == "CODE"){
            ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
        }
        else if(el.nodeName == "LI"){
            ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
        }
        else if(el.nodeName == "P"){
            ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
        }

    })

}