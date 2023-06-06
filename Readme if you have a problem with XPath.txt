To get the desired element from XPath you need 
1- the element before the desired element
2- the element after the desired element
3- element attributes

## Any attributes will suffice. I mean any attributes, Not only the very popular ones like [id,class,herf] 
## For example 
## data-tags attribute from safebooru will work
## You don't need to specify the exact value. You just need to specify part of the value, as long full element attribute contain a part of what you did specify

//the_desired_element[preceding::element_before[contains(@attribute,"attributes_Value")]][following::element_after[contains(@attribute,"attributes_Value")]]

for example

//table[preceding::span[contains(@id,"Event_Wishes")]][following::span[contains(@id,"Change_History")]]
