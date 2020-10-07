"use strict"

console.log("Installed XOXO")

/** I need to reach bottom of page to load every dinamic elements, like src, imgs, pictures etc
 * - Change text with lorem ipsum
 */
var body = document.body;
var html = document.documentElement;
var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

var h1s = document.querySelectorAll("h1");
var h2s = document.querySelectorAll("h2");
var h3s = document.querySelectorAll("h3");
var h4s = document.querySelectorAll("h4");
var h5s = document.querySelectorAll("h5");

var as = document.querySelectorAll("a");
var ps = document.querySelectorAll("p");

var pictures = document.querySelectorAll("picture");
var sources = document.querySelectorAll("source");

var imgs = document.querySelectorAll("img");
var divs = document.querySelectorAll("div");

var button = document.createElement("button"); button.style = `
position: fixed;
top:0;
left:0;
z-index: 100000;

`
button.textContent= "TRIGGER"
document.body.append(button)

button.onClick = ()=>{
    
    window.addEventListener('scroll', someFunction);
    window.scrollBy(0,600);
}


// Event listener for scrolling


function someFunction (){

    // Check if we're at the bottom
    if (window.innerHeight + window.scrollY >= height) {
        console.log("You`ve reached the bottom!")

        // Remove scroller
        window.removeEventListener("scroll", someFunction);

        //Execute main script
        executeScript();

    } else {
            console.log("Keep scrolling")

            setTimeout(()=>{ window.scrollBy(0,600);}, 400)
        // Change color to white
        //document.querySelector('body').style.background = 'white';
    }

};

function executeScript(){
    h1s.forEach(h1=>{ h1.style.backgroundColor = "black"; h1.style.color = "black"})
    h2s.forEach(h2=>{ h2.style.backgroundColor = "black"; h2.style.color = "black"})
    h3s.forEach(h3=>{ h3.style.backgroundColor = "black"; h3.style.color = "black"})
    h4s.forEach(h4=>{ h4.style.backgroundColor = "black"; h4.style.color = "black"})
    h5s.forEach(h5=>{ h5.style.backgroundColor = "black"; h5.style.color = "black"})
    as.forEach(a=>{ a.style.backgroundColor = "#808080"; a.style.color = "#808080"})
    ps.forEach(p=>{ p.style.backgroundColor = "#606060"; p.style.color = "#606060"})

    pictures.forEach(picture=>{ picture.srcset = "https://www.wirify.com/client/images/placeholder.png";});
    sources.forEach(source=>{ source.srcset = "https://www.wirify.com/client/images/placeholder.png";});

    imgs.forEach(img=>{ img.src = "https://www.wirify.com/client/images/placeholder.png"; img.srcset = "https://www.wirify.com/client/images/placeholder.png"});
    divs.forEach(div=>{ 
        // if(div.textContent !== ""){
        //     div.style.background = "black"; div.style.color = "green"
        // }
        if(div.style.backgroundImage !== ""){
            div.style.backgroundImage = "url(https://www.wirify.com/client/images/placeholder.png)";
        }


    });
       

}





// let scrollToBottom = setInterval(function(){ window.scrollBy(0,600); }, 400);
// clearInterval()