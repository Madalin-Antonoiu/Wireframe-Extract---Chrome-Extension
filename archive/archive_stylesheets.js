//Extracts all CSS - 


var css = [];
for (var i=0; i<document.styleSheets.length; i++)
{
    var sheet = document.styleSheets[i];
    var rules = ('cssRules' in sheet)? sheet.cssRules : sheet.rules;
    if (rules) {
        css.push('\n/* Stylesheet : '+(sheet.href||'[inline styles]')+' */');
        for (var j=0; j<rules.length; j++){
            var rule = rules[j]
            if ('cssText' in rule){
                css.push(rule.cssText);
            }
            else{
                css.push(rule.selectorText+' {\n'+rule.style.cssText+'\n}\n');
            }
        }
    }
}
var cssInline = css.join('\n')+'\n';




let sheet = document.styleSheets[4];
var rules = sheet.cssRules || sheet.rules;

console.log(rules[0].selectorText + " has the following styles: ", rules[0].style)

if(rules[0].style.backgroundImage){
    rules[0].style.backgroundImage="url()"; // simply change it :)
    console.log(rules[0].style.backgroundImage)
}