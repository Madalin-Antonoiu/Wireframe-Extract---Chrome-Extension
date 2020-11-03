async function imgPromise() {
    let t0 = performance.now();

    var imgs = document.getElementsByTagName("img");
    var foundElems = [];

    for (var i = 0; i < imgs.length; i++) {
        foundElems.push(imgs[i]);
        let wxh = imgs[i].offsetWidth + "x" + imgs[i].offsetHeight
        imgs[i].src = `https://via.placeholder.com/${wxh}`; //break the link with 'url()'
        imgs[i].alt = "";
    }

    let t1 = performance.now();
    let performant = (t1 - t0).toFixed(2) + " ms";

    return ({ performant, foundElems })
}
async function imagePromise() {
    let t0 = performance.now();

    var images = document.getElementsByTagName("image");
    var foundElems = [];

    for (var i = 0; i < images.length; i++) {
        foundElems.push(images[i]);
        let wxh = images[i].width.baseVal.value + "x" + images[i].height.baseVal.value
        images[i].href.baseVal = `https://via.placeholder.com/${wxh}`; //break the link with 'url()'
    }

    let t1 = performance.now();
    let performant = (t1 - t0).toFixed(2) + " ms";

    return ({ performant, foundElems })
}
async function divsImageBgPromise() {
    let t0 = performance.now();

    var divs = document.getElementsByTagName("DIV");
    var foundElems = [];

    for (var i = 0; i < divs.length; i++) {
        foundElems.push(divs[i]);
        let wxh = divs[i].offsetWidth + "x" + divs[i].offsetHeight

        if (divs[i].style.backgroundImage) {
            divs[i].style.backgroundImage = `url("https://via.placeholder.com/${wxh}")`
        }

    }

    let t1 = performance.now();
    let performant = (t1 - t0).toFixed(2) + " ms";

    return ({ performant, foundElems })
}
async function iBgPromise() {
    let t0 = performance.now();

    var is = document.getElementsByTagName("i");
    var foundElems = [];

    for (var i = 0; i < is.length; i++) {
        foundElems.push(is[i]);
        let wxh = is[i].offsetWidth + "x" + is[i].offsetHeight

        if (window.getComputedStyle(is[i])["background-image"].includes("url")) {
            is[i].style.backgroundImage = `url("https://via.placeholder.com/${wxh}")`
        }

    }

    let t1 = performance.now();
    let performant = (t1 - t0).toFixed(2) + " ms";

    return ({ performant, foundElems })
}


//INLINE
async function main() {
    var [img, image, stylesheet, divsimg, is] = await Promise.all([
        console.log(imgPromise()),
        console.log(imagePromise()),
        console.log(divsImageBgPromise()),
        console.log(iBgPromise()),
    ]);
}

main();