---
title: Icons
order: 13
---


## BaseIcon

Our base icon component that all other iconscompose. It uses ionicons, as provided byreact-native-vector-icons

**Props**

> `name` _string_  (required)
> 
 


> `size` _number_ 
> 
> _defaultValue: `25`_




## Icon

Our base icon component that all other iconscompose. It uses Ionicons 3, as provided byreact-native-vector-icons on Android and iOS.To use this on the web, you must include a linktag to the Ionicons 3 stylesheet.__Platforms__:  ios, android, web 
 __Composes__: [TextBase](/components/TextBase.html) 

**Props**

> `name` _string_ 
> 
 


> `size` _number_ 
> 
> _defaultValue: `35`_


> `color` _string_ 
> 
 




## BaseIcon

**Props**

> `size` _number_ 
> 
> _defaultValue: `25`_


> `name` _string_ 
> 
 




## CheckMark

A basic CheckMark that can either be uncheckedor checked.__Platforms__:  ios, android, web 
 __Composes__: [Base](/components/Base.html), [Icon](/components/Icon.html) 

**Props**

> `isChecked` _bool_ 
> 
> _defaultValue: `false`_


> `size` _number_ 
> 
> _defaultValue: `30`_


> `uncheckedColor` _string_ 
> 
> _defaultValue: `'light'`_


> `checkedColor` _string_ 
> 
> _defaultValue: `'positive'`_


> `checkMarkIconName` _string_ 
> 
> _defaultValue: `'ios-checkmark-circle-outline'`_


> `uncheckedIconName` _string_ 
> 
> _defaultValue: `'ios-radio-button-off'`_




## ArrowRightIcon




## PlusIcon




## CloseIcon




## BackIcon




## SearchIcon




## MoreIcon




## TouchableIcon

A touchable wrapper for &lt;Icon /&gt;

**Props**

> `onPress` _func_  (required)
> 
 


> `accessibilityLabel` _string_  (required)
> 
 


> `disabled` _bool_ 
> 
 


> `style` _object_ 
> 
 



