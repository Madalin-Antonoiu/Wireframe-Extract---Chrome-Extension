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
    function ifAnyChildExistsAndIsTextNodeAndNotEmpty(el){//I will probably need to check all children in a next iteration

        let children = el.childNodes;
        children.forEach( child =>{
            if(child.textContent && child.textContent.trim().length > 0 && child.nodeType === 3){
                wrapTHISTextNodeInAMark(child)
            }
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

// MAIN. With only one QUERY of all elements :)
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
            el.style= styled;
            ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
        }
        else if(el.nodeName == "TD"){
            ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
        }
        else if(el.nodeName == "H1" || el.nodeName == "H2" || el.nodeName == "H3" || el.nodeName == "H4" || el.nodeName == "H5"){
            ifAnyChildExistsAndIsTextNodeAndNotEmpty(el);
        }
        else if(el.nodeName == "INPUT"){
            el.style= styled;
        }
    })
//

