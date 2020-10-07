
//#cccccc

function isFirstNodeTextThenReplaceWithSpan(node){
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
function headers(){
    document.querySelectorAll("h1").forEach(h1=>{ 
        // h1.style.backgroundColor = "black";
        h1.style.color = "#FFFFFF" 
        isFirstNodeTextThenReplaceWithSpan(h1)

    })
    document.querySelectorAll("h2").forEach(h2=>{ 
        // h2.style.backgroundColor = "black"; 
        h2.style.color = "#FFFFFF"
        isFirstNodeTextThenReplaceWithSpan(h2)
    })
    
    document.querySelectorAll("h3").forEach(h3=>{ 
        // h3.style.backgroundColor = "black"; 
        h3.style.color = "#FFFFFF"
        isFirstNodeTextThenReplaceWithSpan(h3)
    
    })

    document.querySelectorAll("h4").forEach(h4=>{ 
        // h4.style.backgroundColor = "black"; 
        h4.style.color = "#FFFFFF"
        isFirstNodeTextThenReplaceWithSpan(h4)
    })
    document.querySelectorAll("h5").forEach(h5=>{ 
        // h5.style.backgroundColor = "black"; 
        h5.style.color = "#FFFFFF"
        isFirstNodeTextThenReplaceWithSpan(h5)
    
    })
}
function spans(){
    var spans = document.querySelectorAll("span");
    spans.forEach(span=>{  
        span.style.background = "#666666";
        span.style.color = "#666666";
    })
    
}
function imgs(){
    var imgs = document.querySelectorAll("img");
    imgs.forEach(img=>{ img.src = "https://www.wirify.com/client/images/placeholder.png"; img.srcset = "https://www.wirify.com/client/images/placeholder.png"});
    
    
}
function divs(){
    document.querySelectorAll("div").forEach(div=>{ 

        if(div.style.backgroundImage !== ""){
            div.style.backgroundImage = "url(https://www.wirify.com/client/images/placeholder.png)";
        }
    
        if(div.style.backgroundColor){
            div.style.backgroundColor = "grey";
        }
    
    });
    
}
function as(){
    document.querySelectorAll("a").forEach(a=>{  

        if(a.textContent !== ""){
            a.style.background = "#808080"; 
            a.style.color = "#808080"
            // console.log(a)
        }
    })
}
function ps(){
    document.querySelectorAll("p").forEach( p => { 
        // p.style.backgroundColor = "#606060"; 
        // p.style.color = "#606060"
        if(p.textContent !== ""){
            // p.style.background = "#b2b2b2"
            isFirstNodeTextThenReplaceWithSpan(p)
        }
    })   
    
}

headers();
imgs();
divs();
as();
ps();
spans();

// LOOKS REALLY GOOD for now











var lis = document.querySelectorAll("li");
lis.forEach(li=>{ 
    li.style.backgroundColor = "grey"; 
    li.style.color = "orange"
})



























var pictures = document.querySelectorAll("picture");
var sources = document.querySelectorAll("source");


pictures.forEach(picture=>{ picture.srcset = "https://www.wirify.com/client/images/placeholder.png";});
sources.forEach(source=>{ source.srcset = "https://www.wirify.com/client/images/placeholder.png";});

var imgs = document.querySelectorAll("img");
imgs.forEach(img=>{ img.src = "https://www.wirify.com/client/images/placeholder.png"; img.srcset = "https://www.wirify.com/client/images/placeholder.png"});












// var text = $(".title").contents().filter(function() {
//     return this.nodeType == Node.TEXT_NODE;
//   }).text();