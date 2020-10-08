// 1. hasSiblingTop, hasSiblingBot, hasParent,hasChild #text
// 2. Add on top of the replaced content an absolute element containing div > textNode, colors etc

// Helpers
    var styled = `
        background: #666666 !important; 
        color: #666666 !important; 
        border: 1px solid #A6A6A6 !important; 
        text-shadow: none !important;
    `;
    function ifFirstChildExistsAndIsTextNodeAndNotEmpty(el){//I will probably need to check all children in a next iteration
        if(el.firstChild && el.firstChild.textContent.trim().length > 0 && el.firstChild.nodeType === 3){
            wrapTextNodeInAMark(el)
        }
    }
    function wrapTextNodeInAMark(el){
        let textNodeTextContent = el.firstChild.textContent.trim();
        let textNodeParent = el.firstChild.parentElement;

        let mark = document.createElement("mark"); mark.style = styled;mark.innerText = textNodeTextContent;
    
        textNodeParent.textContent = "";
        textNodeParent.appendChild(mark);
    }
    function replaceColorAndOthers(el){
        elem.style = styled;
    }


//

// MAIN. With only one QUERY of all elements :)
    Array.from(document.body.querySelectorAll('*')).forEach(el => {
        if(el.nodeName == "SCRIPT"){
            //do nothing
        }
        else if(el.nodeName == "DIV"){
            ifFirstChildExistsAndIsTextNodeAndNotEmpty(el)
        } 
        else if(el.nodeName == "A"){
            ifFirstChildExistsAndIsTextNodeAndNotEmpty(el)
        }
        else if(el.nodeName == "SPAN"){
            el.style= styled;
            ifFirstChildExistsAndIsTextNodeAndNotEmpty(el)
        }
        else if(el.nodeName == "TD"){
            ifFirstChildExistsAndIsTextNodeAndNotEmpty(el)
        }
        else if(el.nodeName == "H1" || el.nodeName == "H2" || el.nodeName == "H3" || el.nodeName == "H4" || el.nodeName == "H5"){
            ifFirstChildExistsAndIsTextNodeAndNotEmpty(el)
        }
        else if(el.nodeName == "INPUT"){
            el.style= styled;
        }
    })
//

