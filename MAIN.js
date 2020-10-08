
// Biggest Feature: wrap every piece of text within a span, and make it grey color grey background
async function MAIN(){
    async function isFirstNodeTextThenReplaceWithSpan(node){
        if(node.firstChild){
            if(node.firstChild.nodeName == "#text"){
                let text = node.firstChild.textContent.trim();
                let span = document.createElement("span")
                span.innerText = text;
                node.textContent = "";
                node.appendChild(span);
            }
        }
    }
    async function nodeTypeisThreeThenReplaceWithSpan(node){
        if(node){
            if(node.nodeName == "#text"){
                let text = node.textContent.trim();
                let span = document.createElement("span")
                span.innerText = text;
                node.textContent = "";
                node.parentElement.appendChild(span);
            }
        }
    }
    async function wrapAnyNodeTypeThreeChildrenWithinASpan(node){
        let innerNodes = node.childNodes;
        innerNodes.forEach(child=>{
        
            if(child.nodeType == 3){
                // p.style.background = "#b2b2b2"
                nodeTypeisThreeThenReplaceWithSpan(child)
            }
        })
    }
    async function clearsBackgroundColor(node){
        let styles = window.getComputedStyle(node) 
        for(i=0;i<styles.length;i++){
            if(styles[i].includes("background-color")){
                node.style.background = "#808080"; 
                node.style.color = "#808080"
            }
        }
    }
    async function clearsBackgroundImage(node){
        let styles = window.getComputedStyle(node) 
        for(i=0;i<styles.length;i++){
            if(styles[i].includes("background-image")){
                node.style.backgroundImage = "url(https://www.wirify.com/client/images/placeholder.png)"; 
            }
        }
    }
    async function headers(){
        document.querySelectorAll("h1").forEach(h1=>{ 
            // h1.style.backgroundColor = "black";
            h1.style.color = "#FFFFFF" 

            wrapAnyNodeTypeThreeChildrenWithinASpan(h1)

        })
        document.querySelectorAll("h2").forEach(h2=>{ 
            // h2.style.backgroundColor = "black"; 
            h2.style.color = "#FFFFFF"
            wrapAnyNodeTypeThreeChildrenWithinASpan(h2)
        })
        
        document.querySelectorAll("h3").forEach(h3=>{ 
            // h3.style.backgroundColor = "black"; 
            h3.style.color = "#FFFFFF"
            wrapAnyNodeTypeThreeChildrenWithinASpan(h3)
        
        })

        document.querySelectorAll("h4").forEach(h4=>{ 
            // h4.style.backgroundColor = "black"; 
            h4.style.color = "#FFFFFF"
            wrapAnyNodeTypeThreeChildrenWithinASpan(h4)
        })
        document.querySelectorAll("h5").forEach(h5=>{ 
            // h5.style.backgroundColor = "black"; 
            h5.style.color = "#FFFFFF"
            wrapAnyNodeTypeThreeChildrenWithinASpan(h5)
        
        })

        return {"message": "success"}
    }
    async function spans(){
        var spans = document.querySelectorAll("span");
        spans.forEach(span=>{  
            span.style.background = "#666666";
            span.style.color = "#666666";
            // span.style.outline = "1px solid white";
        })
        
    }
    async function imgs(){
        document.querySelectorAll("img").forEach(img=>{ 
            
            img.src= "https://www.wirify.com/client/images/placeholder.png";
            img.srcset = "https://www.wirify.com/client/images/placeholder.png";
            img.width = img.width;
            img.height = img.height;
        });
        
    }
    async function divs(){
        document.querySelectorAll("div").forEach(async div=>{ 

            if(div.style.backgroundColor){
                div.style.backgroundColor = "grey";
            }

            if(window.getComputedStyle(div).background.includes("rgb")){
                //Get the class that has this color and replace it!
               div.style.background = "grey !important";
            }

            if(div.style.background.includes("url")){
                div.style.background= 'url(https://www.wirify.com/client/images/placeholder.png)'
            }

            if(window.getComputedStyle(div).background.includes("url")){
                div.style.background= 'url(https://www.wirify.com/client/images/placeholder.png)'
            }

            await wrapAnyNodeTypeThreeChildrenWithinASpan(div);
            
        });
        
    }
    async function as(){
        document.querySelectorAll("a").forEach(a=>{  

            if(a.textContent !== ""){
                // a.style.background = "#808080"; 
                // a.style.color = "#808080"
                clearsBackgroundColor(a);
                wrapAnyNodeTypeThreeChildrenWithinASpan(a)
            }

            if(a.style.background.includes("url")){
                a.style.background= 'url(https://www.wirify.com/client/images/placeholder.png)'
            }
        })
    }
    async function ps(){
        document.querySelectorAll("p").forEach( p => { 
            // p.style.backgroundColor = "#606060"; 
            // p.style.color = "#606060"
            wrapAnyNodeTypeThreeChildrenWithinASpan(p)

            if(p.textContent !== ""){
                // p.style.background = "#b2b2b2"
                isFirstNodeTextThenReplaceWithSpan(p)
            }

        })   
        
    }
    async function bs(){
        document.querySelectorAll("b").forEach( b => { 
            // p.style.backgroundColor = "#606060"; 
            // p.style.color = "#606060"
            if(b.textContent !== ""){
                // p.style.background = "#b2b2b2"
                isFirstNodeTextThenReplaceWithSpan(b)
            }
        })   
        
    }
    async function canvases(){
        document.querySelectorAll("canvas").forEach(canvas=>{
            canvas.style.backgroundColor="#e5e5e5";
        })
    }
    async function sections(){
        document.querySelectorAll("section").forEach(section=>{
            section.style.backgroundColor="#bfbfbf";
        })
    }
    async function smalls(){
        document.querySelectorAll("small").forEach(small=>{  
            small.style.background = "#666666";
            small.style.color = "#666666";
        })
        
    }
    async function footers(){
        document.querySelectorAll("footer").forEach(footer=>{  
            footer.style.background = "#bfbfbf";
        })
        
    }
    async function svgs(){
        document.querySelectorAll("svg").forEach(svg=>{  
            svg.style.background = "#666666";
            svg.style.color = "#666666";
        })
        
    }
    async function sups(){
        document.querySelectorAll("sup").forEach(sup=>{  
            sup.style.background = "#666666";
            sup.style.color = "#666666";
        })
        
    }
    async function gs(){
        document.querySelectorAll("g").forEach(g=>{  
            g.remove();
        })
        
    }
    async function inputs(){
        document.querySelectorAll("input").forEach(input=>{  
            input.placeholder="";
            input.style.background = "#777777";
        })
    }
    async function buttons(){
        document.querySelectorAll("button").forEach(button=>{  
            button.style.background = "#888888";
            button.style.color = "#888888";
        })
    }
    async function sources(){
        document.querySelectorAll("source").forEach(source=>{  
            source.srcset = "https://www.wirify.com/client/images/placeholder.png";
        })
    }
    async function strongs(){
        document.querySelectorAll("strong").forEach(strong=>{  
            strong.style.background = "#666666";
            strong.style.color = "#666666";
        })
        
    }
    async function videos(){
        document.querySelectorAll("video").forEach(video=>{ 
            video.src = "https://www.wirify.com/client/images/placeholder.png"; 
            video.srcset = "https://www.wirify.com/client/images/placeholder.png"
            video.poster = "https://www.wirify.com/client/images/placeholder.png"
        });
        
    }
    async function labels(){
        document.querySelectorAll("label").forEach(label=>{  
            wrapAnyNodeTypeThreeChildrenWithinASpan(label)
        })
        
    }
    
    await headers();
    await imgs();
    await divs();
    await as();
    await ps();
    await bs();
    await canvases();
    await sections();
    await smalls();
    await footers();
    await svgs();
    await sups();
    await gs();
    await inputs();
    await buttons();
    await sources();
    await strongs();
    await videos();
    await labels();

    await spans();
}


var start = performance.now();
MAIN();
var duration = performance.now() - start;
console.log(duration)








var pictures = document.querySelectorAll("picture");
var sources = document.querySelectorAll("source");


pictures.forEach(picture=>{ picture.srcset = "https://www.wirify.com/client/images/placeholder.png";});
sources.forEach(source=>{ source.srcset = "https://www.wirify.com/client/images/placeholder.png";});




