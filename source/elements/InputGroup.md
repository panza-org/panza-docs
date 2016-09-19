---
title: InputGroup
order: 130
description: Wrapping components with InputGroup gives you theoption of giving Inputs dividing borders, dividingborders with an inset, a top border (with a unique inset value),a bottom border (with a unique inset value), shared backgroundcolours, margins, and a label. You could supply your ownchild components, too.@Platform ios, android, web@Composes Base, Divider, SectionHeader
---

Wrapping components with InputGroup gives you the
option of giving Inputs dividing borders, dividing
borders with an inset, a top border (with a unique inset value),
a bottom border (with a unique inset value), shared background
colours, margins, and a label. You could supply your own
child components, too.

__Platforms__:  ios, android, web
 
 __Composes__: [Base](elements.html#Base), [Divider](elements.html#Divider), [SectionHeader](elements.html#SectionHeader) 


#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
style | object  |   | 
inset | number  | 0 | left margin inset for the divider border (excluding top and bottom)
showTopBorder | bool  | true | show the top border
showBottomBorder | bool  | true | show the bottom border
showBorder | bool  | true | whether to show the dividing border
topInset | number  | 0 | left margin inset for the top border
bottomInset | number  | 0 | left margin inset for the bottom border
label | string  |   | a label for the input group
backgroundColor | string  |   | 
inverted | bool  |   | 