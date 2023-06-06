#Replace anything inside the dom jquery is required
$("body").html($("body").html().replace(/\?a=view/g,''));

#Replace anything inside the dom
document.body.innerHTML = document.body.innerHTML.replace(/\?a=view/g,'')

#Remove div with a particular text in it jquery is required
$("div:contains('Example')").remove()

#select element by attribute
#Don't put a space between the selector and the attribute
#You can use other Attribute selectors not just the (=)
#When using querySelectorAll(div > a) will get you the a that is a child, using querySelectorAll(div a) will give you the nearest a to the div according to the Dom tree hierarchy
#querySelectorAll(div > a) = the nearest child
#querySelectorAll(div a) = the nearest child or grandchild
#For more info just google "Attribute selectors"
#document.querySelectorAll("") is the same as $("") in jQuery 
document.querySelectorAll("element.class_OR_element#id[myAttribute='Value']");

#Extract text from specific html element and copy it to clipboard [change (x.textContent) to suit your needs]
#The clipboard method is highly recommended if the output is too big
let output = "";
document.querySelectorAll("div.box span a").forEach(x => output += x.textContent + '\n');
copy(output);

#Same as the above but require jquery
var output = "";
$("a:contains('mirrors.kernel.org/ubuntu')").each(function() {output += this.href + '\n'});
copy(output);

#Extract text from specific html element [change (x.textContent) to suit your needs]
let elm = document.createElement('textarea');
elm.setAttribute("id", "output");
document.querySelector('body').prepend(elm)
document.querySelectorAll("div.box span a").forEach(x => document.querySelector("#output").textContent += x.textContent + '\n')


#Extract text from specific html element with regex if it matches specific text and [change (x.textContent) to suit your needs] you can use the clipboard method
let elm = document.createElement('textarea');
elm.setAttribute("id", "output");
document.querySelector('body').prepend(elm)
function get_nodes_containing_text(selector, text) {
const elements = [...document.querySelectorAll(selector)];
return elements.filter((element) =>element.childNodes[0] &&element.childNodes[0].nodeValue &&RegExp(text, "i","g","u").test(element.childNodes[0].nodeValue.trim()));}
get_nodes_containing_text('a', '~').forEach(x => document.querySelector("#output").textContent += x.textContent + '\n')


#Extract text from specific html element if it matches specific text and it is case sensitive and jquery is required you can use the clipboard method
let elm = document.createElement('textarea');
elm.setAttribute("id", "output");
document.querySelector('body').prepend(elm)
var data = $('#output').text();
$(".filename:contains('S05')").each(function() {data += this.textContent + '\n'});
$('#output').text( data );

#set cookie value 
document.cookie = "cookiename=cookievalue"

#set localstorage value
localStorage["key"] = "value"


#Select parent if it contain a specific child. and you can use "Attribute selectors" if you need it. jQuery is Required
#It also works with grandparent and grandchild elements. So it is stranger than XPath
$('parent_element:has(child_element)')


#Select parent if it contain a specific child. and you can use "Attribute selectors" if you need it. You can use XPath because, in contrast to CSS selector
#XPath does not care about the child element. XPath just need an element and a condition to select an element if specified
#It only works with parent and child elements. So it is weaker than jQuery
//parent_element[child_element[contains(@child_element_Attribute,'Attribute_Value')]]
#only work in Chrome DevTools Console       (If you are using the DevTools Console, the outside of XPath must use double quotes, but the inside must use single quotes)
$x("//parent_element[child_element[contains(@child_element_Attribute,'Attribute_Value')]]")

#When you use arrow function, anything after the arrow function must be inside {} but you can omit it if the arrow function is simple
document.querySelectorAll("img").forEach(x => {if(x.height == 16){x.remove()}})

#To Concatenate a String with a Variable you need to put the string the Variable inside backtick (`)
example = 'world';
result = `hello ${example}`

#To change element attribute you need first to get the element then change its attribute 
#to get the element you have two options

document.getElementById('elem_id_value')
document.querySelector('#elem_id_value')
document.querySelector('.elem_class_value')

#the aforementioned options work on a single element
#when you need more than one element, you can use 
#querySelectorAll() with arrow function

#setAttribute() take two arguments the attribute name and the attribute value
#when the element does not have an attribute will be assigned to it

setAttribute(Attribute_name, Attribute_value)

#For example 
document.querySelector("a").setAttribute("href", "javascript.info");

#will change "href" value of the "a" element to javascript.info

#You can use removeAttribute() to remove an attribute from the element. It only takes one argument
#just like setAttribute you need to select an element first
removeAttribute(attrName)

#element class is considered an attribute, but you can change it with two other ways

#First way using classList
#just like setAttribute you need to get the element first

#classList does not overwrite other classes, it just added another class

#to add class to an element  
classList.add('MyClass') 
#to remove class from an element
classList.remove('MyClass')

#Second way using className
#just like setAttribute you need to get the element first

#className overwrite every class with the value that you assigned to it        (Useful to remove all the classes from an element)
#to remove all the classes from an element
className = ''
