---
title: InputRow
order: 133
description: An Input field with a lot of added functionality. You'd typicallywant to wrap this within an InputGroup.@Platform ios, android, web@Composes RevealingRow, InputRowCell, RemoveButton, Input, Base, Text, RowAction, RowActions
---

An Input field with a lot of added functionality. You'd typically
want to wrap this within an InputGroup.

__Platforms__:  ios, android, web
 
 __Composes__: [RevealingRow](elements.html#RevealingRow), [InputRowCell](elements.html#InputRowCell), [RemoveButton](elements.html#RemoveButton), [Input](elements.html#Input), [Base](elements.html#Base), [Text](elements.html#Text), [RowAction](elements.html#RowAction), [RowActions](elements.html#RowActions) 


#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
label | string  |   | 
autoFocus | bool  |   | 
removable | bool  | false | 
placeholder | string  |   | 
vertical | bool  |   | 
onSelectLabel | func  |   | 
onChangeText | func  (required) |   | 
value | string&#124;node |   | 
backgroundColor | string  | 'white' | 
editable | bool  | true | 
labelWidth | number  |   | 
verticalHeight | number  | 80 | 
onRequestRemove | func  |   | 
height | number  | 50 | 
icon | node  |   | 
inverted | bool  |   | 
condensed | bool  |   | 
multiline | bool  |   | 