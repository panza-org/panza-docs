---
title: Row
order: 19
---


## Divider

A simple component used to separate rows, with anoptional inset margin on the left or right.

**Props**

> `inset` _number_ 
> 
> _defaultValue: `0`_


> `insetRight` _number_ 
> 
> _defaultValue: `0`_


> `inverted` _bool_ 
> Use the inverted colour *
 




## SectionHeader

SectionHeader is used for rendering a section header within a ListView.Supply text as the child. 
 __Composes__: [Base](/components/Base.html) 

**Props**

> `backgroundColor` _string_ 
> 
> _defaultValue: `'gray'`_




## TouchableRow

The basic RowCell for use within ListView. It displaysan image, primary text, secondary text, a value,and an arrow right icon if the respective props arespecified.__Platforms__:  ios, android, web 
 __Composes__: [TouchableRowCell](/components/TouchableRowCell.html), [Image](/components/Image.html), [Text](/components/Text.html) 

**Props**

> `primaryText` _union(string,node)_ 
> 
 


> `secondaryText` _union(string,node)_ 
> 
 


> `value` _union(string,node)_ 
> A value attribute of the cell, to appear on the right
 


> `onPress` _func_  (required)
> 
 


> `image` _union(object,node)_ 
> An thumbnail to be displayed on the left of the cell
 


> `height` _number_ 
> 
 


> `inverted` _bool_ 
> 
 


> `showMore` _bool_ 
> Displays a right arrow on the right hand side of the cell
 




## TouchableRowCell

A touchable row cell container, typically usedrendering rows in a &lt;ListView&gt;.

**Props**

> `onPress` _func_ 
> 
 


> `disabled` _bool_ 
> 
> _defaultValue: `false`_


> `highlighted` _func_ 
> 
> _defaultValue: `function noop () {}`_


> `showMore` _bool_ 
> 
> _defaultValue: `true`_


> `showMoreProps` _object_ 
> 
 


> `underlayColor` _string_ 
> 
> _defaultValue: `'rgba(0,0,0,0.1)'`_


> `height` _number_ 
> 
 



