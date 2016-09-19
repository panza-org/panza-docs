---
title: Button
order: 102
description: A basic button that inherits from Base, and provides colourizationbased upon background color configuration.@Composes Base, Text, Icon
---

A basic button that inherits from Base, and provides colourization
based upon background color configuration.
 
 __Composes__: [Base](elements.html#Base), [Text](elements.html#Text), [Icon](elements.html#Icon) 


#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
small | bool  |   | button size
medium | bool  |   | 
large | bool  |   | 
primary | bool  |   | Uses the primary colour to style the button.
secondary | bool  |   | Uses the secondary colour to style the button.
positive | bool  |   | Uses the positive colour to style the button.
negative | bool  |   | Uses the negative colour to style the button.
default | bool  |   | Uses the midgray colour to style the button.
outline | bool  | false | Use an outline button style *
disabled | bool  | false | disables the button, and reduces its opacity
rounded | number  | 6 | 
onPress | func  |   | 
underlayColor | string  |   | 
backgroundColor | string  |   | 
borderColor | string  |   | 
block | bool  | false | stretch the button width
icon | string&#124;node |   | optional icon string or node
size |  | 'medium' | 