/////////////////////////////////////////LATER//////////////////////////
// console.log("Installed")

// const stylesheets = document.styleSheets;

// function media(){
//     var mediaQueries = [];
//     var rules = [];

//     for(let i =0, len = stylesheets.length; i<len; i++){
//         rules = stylesheets[i].cssRules;

//         for(let j =0, len = rules.length; j<len; j++){
//             if(rules[j].cssText.includes("@media")){
//                 mediaQueries.push(rules[j].conditionText);
//             }
//         }


//     }

//     // mediaQueries.forEach(query =>{
//     //     console.log(query)
//     // })

//     var unique = mediaQueries.filter(onlyUnique);
//     console.log(unique); 


// }

// media();


// function onlyUnique(value, index, self) {
//     return self.indexOf(value) === index;
// }