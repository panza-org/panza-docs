---
title: InputTouchable
order: 137
description: An InputTouchable is typically used within the context of anInputGroup, when you want the user to select a value from anotherListView, PopupMenu, etc. It's a very simple wrapper aroundTouchableRow, to make it play nicely with other Input components.@Platform ios, android, web@composes TouchableRow, Text
---

An InputTouchable is typically used within the context of an
InputGroup, when you want the user to select a value from another
ListView, PopupMenu, etc. It's a very simple wrapper around
TouchableRow, to make it play nicely with other Input components.

__Platforms__:  ios, android, web
 
 __Composes__: [TouchableRow](elements.html#TouchableRow), [Text](elements.html#Text) 


#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
backgroundColor | string  | 'white' | 
label | string&#124;node (required) |   | 
icon | node  |   | 
image | object  |   | 
value | string&#124;node |   | 
showMore | bool  | false | 
condensed | bool  |   | 
onPress | func  (required) |   | 
disabled | bool  | false | 
labelColor | string  | 'default' | 
inverted | bool  |   | 