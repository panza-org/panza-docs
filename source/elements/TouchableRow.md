---
title: TouchableRow
order: 124
description: The basic RowCell for use within ListView. It displaysan image, primary text, secondary text, a value,and an arrow right icon if the respective props arespecified.@Platform ios, android, web@composes TouchableRowCell, Image, Text
---

The basic RowCell for use within ListView. It displays
an image, primary text, secondary text, a value,
and an arrow right icon if the respective props are
specified.

__Platforms__:  ios, android, web
 
 __Composes__: [TouchableRowCell](elements.html#TouchableRowCell), [Image](elements.html#Image), [Text](elements.html#Text) 


#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
primaryText | string&#124;node |   | 
secondaryText | string&#124;node |   | 
value | string&#124;node |   | A value attribute of the cell, to appear on the right
onPress | func  (required) |   | 
image | object&#124;node |   | An thumbnail to be displayed on the left of the cell
height | number  |   | 
inverted | bool  |   | 
showMore | bool  |   | Displays a right arrow on the right hand side of the cell