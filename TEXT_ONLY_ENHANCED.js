// Helpers
var style = `
    background: #666666 !important; 
    color: #666666 !important; 
    border: 1px solid #A6A6A6 !important; 
    text-shadow: none !important;
`;

async function wrapAnyNodeTypeThreeChildrenWithinMark(node){
    let innerNodes = node.childNodes;
    innerNodes.forEach(child=>{
    
        if(child.nodeType == 3){
            // p.style.background = "#b2b2b2"
            nodeTypeisThreeThenReplaceWithMark(child)
        }
    })
}
async function nodeTypeisThreeThenReplaceWithMark(node){
    if(node){
        if(node.nodeName == "#text" && node.textContent !== ""){
            let text = node.textContent.trim();
            let mark = document.createElement("mark")
            mark.innerText = text;
            mark.style = `
                background: #666666 !important; 
                color: #666666 !important; 
                border: 1px solid #A6A6A6 !important; 
                text-shadow: none !important;
            `
            node.textContent = "";
            node.parentElement.appendChild(mark);
        }
    }
}
async function isFirstNodeTextThenReplaceWithMark(node){
    if(node.firstChild){
        if(node.firstChild.nodeName == "#text"){
            let text = node.firstChild.textContent.trim();
            let mark = document.createElement("mark")
            mark.innerText = text;
            node.textContent = "";
            mark.style = style;
            node.appendChild(mark);
        }
    }
}
function replaceText(node){
    document.querySelectorAll(node).forEach(node=>{  wrapAnyNodeTypeThreeChildrenWithinMark(node) })
}
function replaceFirstText(node){
    document.querySelectorAll(node).forEach(node=>{  isFirstNodeTextThenReplaceWithMark(node) })
}
function replaceColor(node){
    var nodes = document.querySelectorAll(node);
    nodes.forEach(elem=>{  
        elem.style = style

    })

}


async function main(){
    replaceText("a")

    replaceText("td")

    replaceText("h1");
    replaceText("h2");
    replaceText("h3");
    replaceText("h4");
    replaceText("h5");

    replaceText("span")
    replaceColor("span")

}
main();
