---
title: Nav
order: 16
---


## NavBar

Static navigation bar that mimics that foundwithin ReactNative. To be used when you want a staticrepresentation of the NavBar, without transitions. 
 __Composes__: [Base](/components/Base.html), [NavTitle](/components/NavTitle.html) 

**Props**

> `title` _string_ 
> 
 


> `LeftButton` _node_ 
> 
 


> `RightButton` _node_ 
> 
 


> `style` _any_ 
> 
 


> `transparent` _bool_ 
> 
 


> `backgroundColor` _string_ 
> 
 


> `titleColor` _string_ 
> 
 


> `inverted` _bool_ 
> 
 




## NavIconContainer

A wrapper for &lt;Icon /&gt; that positions it correctlyin a navigation bar.

**Props**




## NavTitle

Renders text stylized for the Navigation Bar title.On iOS it composes PrimaryText.On Android, it composes LargeText. 
 __Composes__: [Text](/components/Text.html) 

**Props**

> `label` _string_ 
> 
 


> `color` _string_ 
> 
 


> `style` _any_ 
> 
 


> `inverted` _bool_ 
> 
 




## NavTouchableIcon

Wrap Icon components within NavTouchableIcon for displayof an Icon in the Navigation bar. You may need to fiddlearound with the sizing of the Icon on android and ios devicesto ensure that they look right.

**Props**

> `onPress` _func_  (required)
> 
 




## NavTouchableText

Makes a touchable text component for the NavBar. Typicallyused on iOS. 
 __Composes__: [TextBase](/components/TextBase.html) 

**Props**

> `disabled` _bool_ 
> 
 


> `color` _string_ 
> 
> _defaultValue: `'primary'`_


> `bold` _bool_ 
> 
 


> `inverted` _bool_ 
> 
 



