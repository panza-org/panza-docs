---
title: Component API
order: 1
description: A list of all components provided by Panza and their props
---
## Base
---


### Base

A general purpose component that converts props into stylesdefined by our theme. It&#039;s heavily inspired by the Basecomponent provided by [rebass](https://github.com/jxnblk/rebass).

**Props**

> `Component` _any_ 
> Custom Component
 


> `baseStyle` _any_ 
> The base style will be supplanted by style props, or regular style properties.
 


> `style` _any_ 
> Regular style attribute
 


> `underlayColor` _string_ 
> Underlay color. Use 'darken' to automatically darken the backgroundColor.
 


> `m` _enum(0,1,2,3,4)_ 
> Margin based on the configured scale
 


> `mt` _enum(0,1,2,3,4)_ 
> Margin top based on the configured scale
 


> `mr` _enum(0,1,2,3,4)_ 
> Margin right based on the configured scale
 


> `mb` _enum(0,1,2,3,4)_ 
> Margin bottom based on the configured scale
 


> `ml` _enum(0,1,2,3,4)_ 
> Margin left based on the configured scale
 


> `mx` _enum(0,1,2,3,4)_ 
> Margin x-axis based on the configured scale
 


> `my` _enum(0,1,2,3,4)_ 
> Margin y-asix based on the configured scale
 


> `p` _enum(0,1,2,3,4)_ 
> Padding based on the configured scale
 


> `pt` _enum(0,1,2,3,4)_ 
> Padding top based on the configured scale
 


> `pr` _enum(0,1,2,3,4)_ 
> Padding right based on the configured scale
 


> `pb` _enum(0,1,2,3,4)_ 
> Padding bottom based on the configured scale
 


> `pl` _enum(0,1,2,3,4)_ 
> Padding left based on the configured scale
 


> `px` _enum(0,1,2,3,4)_ 
> Padding x-axis based on the configured scale
 


> `py` _enum(0,1,2,3,4)_ 
> Padding y-axis based on the configured scale
 


> `backgroundColor` _string_ 
> Background color.
 


> `rounded` _union(bool,number)_ 
> Border radius
 


> `borderColor` _string_ 
> Border color
 


> `flex` _number_ 
> Flex property
 


> `wrap` _bool_ 
> Flex-wrap property
 


> `column` _bool_ 
> Set the flex-direction to column
 


> `row` _bool_ 
> Set the flex-direction to row
 


> `align` _string_ 
> Align-items property
 


> `justify` _string_ 
> Justify-content property
 


> `height` _number_ 
> The height of the element
 


> `width` _number_ 
> The width of the element
 




### TextBase

A general purpose text component whichconverts props into styles defined in the configuration.Unlike Base, TextBase supports special Text props.

**Props**

> `Component` _any_ 
> 
 


> `style` _any_ 
> 
 


> `baseStyle` _any_ 
> 
 


> `fontSize` _enum(0,1,2,3,4,5,6)_ 
> text size *
 


> `lineHeight` _enum(0,1,2,3,4,5,6)_ 
> text lineheight *
> _defaultValue: `1`_


> `color` _string_ 
> text colour *
> _defaultValue: `'default'`_


> `textAlign` _string_ 
> text alignment *
 


> `bold` _bool_ 
> bold font weight *
 


> `thin` _bool_ 
> thin font weight *
 


> `thick` _bool_ 
> thick font weight *
 


> `inverted` _bool_ 
> use the inverted color (by default, white) *
 


> `m` _enum(0,1,2,3,4)_ 
> Margin *
 


> `mt` _enum(0,1,2,3,4)_ 
> Margin top *
 


> `mr` _enum(0,1,2,3,4)_ 
> Margin right *
 


> `mb` _enum(0,1,2,3,4)_ 
> Margin bottom *
 


> `ml` _enum(0,1,2,3,4)_ 
> Margin left *
 


> `mx` _enum(0,1,2,3,4)_ 
> Margin x-axis *
 


> `my` _enum(0,1,2,3,4)_ 
> Margin y-asix *
 


> `p` _enum(0,1,2,3,4)_ 
> Padding *
 


> `pt` _enum(0,1,2,3,4)_ 
> Padding top *
 


> `pr` _enum(0,1,2,3,4)_ 
> Padding right *
 


> `pb` _enum(0,1,2,3,4)_ 
> Padding bottom *
 


> `pl` _enum(0,1,2,3,4)_ 
> Padding left *
 


> `px` _enum(0,1,2,3,4)_ 
> Padding x-axis *
 


> `py` _enum(0,1,2,3,4)_ 
> Padding y-axis *
 


> `backgroundColor` _string_ 
> Background color *
 


> `rounded` _union(bool,number)_ 
> Border radius *
 


> `borderColor` _string_ 
> Border color *
 


> `flex` _number_ 
> flex property *
 


> `wrap` _bool_ 
> flex-wrap property *
 


> `column` _bool_ 
> set flex-direction to column *
 


> `row` _bool_ 
> set flex-direction to row *
 


> `align` _string_ 
> set align-items property *
 


> `justify` _string_ 
> set justify-content property *
 


> `height` _number_ 
> set the height of the element *
 


> `width` _number_ 
> set the width of the element *
 



## Buttons
---


### Button

A basic button that inherits from Base, and provides colourizationbased upon background color configuration. 
 __Composes__: [Base](elements.html#Base), [Text](elements.html#Text), [Icon](elements.html#Icon) 

**Props**

> `tiny` _bool_ 
> button size
 


> `small` _bool_ 
> 
 


> `medium` _bool_ 
> 
 


> `large` _bool_ 
> 
 


> `giant` _bool_ 
> 
 


> `primary` _bool_ 
> Uses the primary colour to style the button.
 


> `secondary` _bool_ 
> Uses the secondary colour to style the button.
 


> `positive` _bool_ 
> Uses the positive colour to style the button.
 


> `negative` _bool_ 
> Uses the negative colour to style the button.
 


> `default` _bool_ 
> Uses the midgray colour to style the button.
 


> `outline` _bool_ 
> Use an outline button style *
> _defaultValue: `false`_


> `disabled` _bool_ 
> disables the button, and reduces its opacity
> _defaultValue: `false`_


> `rounded` _union(number,bool)_ 
> 
> _defaultValue: `6`_


> `onPress` _func_ 
> 
 


> `underlayColor` _string_ 
> 
 


> `backgroundColor` _string_ 
> 
 


> `borderColor` _string_ 
> 
 


> `block` _bool_ 
> stretch the button width
> _defaultValue: `false`_


> `icon` _union(string,node)_ 
> optional icon string or node
 


> `size` __ 
> 
> _defaultValue: `'medium'`_




### ButtonGroup

**Props**

> `rounded` _union(bool,number)_ 
> 
 


> `vertical` _bool_ 
> 
 


> `segmented` _bool_ 
> A helper to create segemented controls that align together *
 



## Card
---


### Card

A very basic Card wrapper 
 __Composes__: [Base](elements.html#Base) 

**Props**

> `inverted` _bool_ 
> 
 




### CardHeader

A very basic card header, which includes an optional avatar,title, subtitle, and children 
 __Composes__: [Base](elements.html#Base), [Image](elements.html#Image), [Text](elements.html#Text) 

**Props**

> `avatar` _union(string,node)_ 
> 
 


> `title` _union(string,node)_ 
> 
 


> `subtitle` _union(string,node)_ 
> 
 



## Icons
---


### BaseIcon

Our base icon component that all other iconscompose. It uses ionicons, as provided byreact-native-vector-icons

**Props**

> `name` _string_  (required)
> 
 


> `size` _number_ 
> 
> _defaultValue: `25`_




### Icon

Our base icon component that all other iconscompose. It uses Ionicons 3, as provided byreact-native-vector-icons on Android and iOS.To use this on the web, you must include a linktag to the Ionicons 3 stylesheet.__Platforms__:  ios, android, web 
 __Composes__: [TextBase](elements.html#TextBase) 

**Props**

> `name` _string_ 
> 
 


> `size` _number_ 
> 
> _defaultValue: `35`_


> `color` _string_ 
> 
 




### BaseIcon

**Props**

> `size` _number_ 
> 
> _defaultValue: `25`_


> `name` _string_ 
> 
 




### CheckMark

A basic CheckMark that can either be uncheckedor checked.__Platforms__:  ios, android, web 
 __Composes__: [Base](elements.html#Base), [Icon](elements.html#Icon) 

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




### ArrowRightIcon




### PlusIcon




### CloseIcon




### BackIcon




### SearchIcon




### MoreIcon




### TouchableIcon

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
 



## Image
---


### Image

Fade-in an image when it loads.

**Props**

> `fade` _bool_ 
> 
> _defaultValue: `true`_


> `onLoadEnd` _func_ 
> 
 


> `height` _number_ 
> 
 


> `width` _number_ 
> 
 


> `circular` _bool_ 
> set the border radius to be fully round (given an equal height/width)
> _defaultValue: `false`_


> `style` _any_ 
> 
 


> `source` _object_  (required)
> 
 


> `resizeMode` _string_ 
> 
> _defaultValue: `'cover'`_


> `rounded` _union(number,bool)_ 
> the border radius of the image
> _defaultValue: `false`_



## Input
---


### Input

A basic input 
 __Composes__: [Text](elements.html#Text) 

**Props**

> `tiny` _bool_ 
> 
 


> `large` _bool_ 
> 
 


> `small` _bool_ 
> 
 


> `medium` _bool_ 
> 
 


> `giant` _bool_ 
> 
 


> `inverted` _bool_ 
> 
 


> `placeholderTextColor` _string_ 
> 
> _defaultValue: `'#888'`_



## Nav
---


### NavBar

Static navigation bar that mimics that foundwithin ReactNative. To be used when you want a staticrepresentation of the NavBar, without transitions. 
 __Composes__: [Base](elements.html#Base), [NavTitle](elements.html#NavTitle) 

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
 




### NavIconContainer

A wrapper for &lt;Icon /&gt; that positions it correctlyin a navigation bar.

**Props**




### NavTitle

Renders text stylized for the Navigation Bar title.On iOS it composes PrimaryText.On Android, it composes LargeText. 
 __Composes__: [Text](elements.html#Text) 

**Props**

> `label` _string_ 
> 
 


> `color` _string_ 
> 
 


> `style` _any_ 
> 
 


> `inverted` _bool_ 
> 
 




### NavTouchableIcon

Wrap Icon components within NavTouchableIcon for displayof an Icon in the Navigation bar. You may need to fiddlearound with the sizing of the Icon on android and ios devicesto ensure that they look right.

**Props**

> `onPress` _func_  (required)
> 
 




### NavTouchableText

Makes a touchable text component for the NavBar. Typicallyused on iOS. 
 __Composes__: [TextBase](elements.html#TextBase) 

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
 



## Pages
---


### ErrorPage

Display an error, with messages and actions dependingupon the user state. Particularly useful with Relay.Rendererwhen an error state and retry function are provided.

**Props**

> `retry` _func_  (required)
> 
 


> `message` _string_ 
> 
> _defaultValue: `'Hmm, loading appears to be taking a while.'`_


> `detailMessage` _string_ 
> 
> _defaultValue: `'It\'s possible that our server are under heavy load, ' +
  'or that your internet connection is slow. Please try again.'`_


> `offlineMessage` _string_ 
> 
> _defaultValue: `'Please ensure that you are connected to the internet.'`_


> `style` _any_ 
> 
 


> `isOffline` _bool_ 
> 
> _defaultValue: `false`_


> `inverted` _bool_ 
> 
 




### Loader

Displays a loading indicator, and on iOS an optionalloading message.

**Props**

> `isLoading` _bool_ 
> 
> _defaultValue: `true`_


> `large` _bool_ 
> 
> _defaultValue: `false`_


> `color` _string_ 
> 
> _defaultValue: `'gray'`_


> `showText` _bool_ 
> 
> _defaultValue: `true`_


> `loadingText` _string_ 
> 
> _defaultValue: `'Loading...'`_


> `alignTop` _bool_ 
> 
> _defaultValue: `false`_


> `inverted` _bool_ 
> 
 



## Popup
---


### Popup

**Props**

> `showing` _bool_  (required)
> 
 


> `onRequestClose` _func_  (required)
> 
 


> `autoDismiss` _bool_ 
> 
> _defaultValue: `true`_


> `showCancel` _bool_ 
> 
> _defaultValue: `true`_


> `backgroundColor` _string_ 
> 
> _defaultValue: `'rgba(0,0,0,0.6)'`_


> `modalProps` _object_ 
> 
> _defaultValue: `{}`_


> `customHeader` _node_ 
> 
 


> `options` _union(arrayOf,arrayOf)_  (required)
> 
 



## Row
---


### Divider

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
 




### SectionHeader

SectionHeader is used for rendering a section header within a ListView.Supply text as the child. 
 __Composes__: [Base](elements.html#Base) 

**Props**

> `backgroundColor` _string_ 
> 
> _defaultValue: `'gray'`_




### TouchableRow

The basic RowCell for use within ListView. It displaysan image, primary text, secondary text, a value,and an arrow right icon if the respective props arespecified.__Platforms__:  ios, android, web 
 __Composes__: [TouchableRowCell](elements.html#TouchableRowCell), [Image](elements.html#Image), [Text](elements.html#Text) 

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
 




### TouchableRowCell

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
 



## RowInput
---


### InputAddRow

An InputTouchable with a plus icon. This is typically usedwithin the context of an InputGroup consisting ofremovable inputs.__Platforms__:  ios, android, web 
 __Composes__: [InputTouchable](elements.html#InputTouchable), [Icon](elements.html#Icon) 

**Props**

> `backgroundColor` _string_ 
> 
 


> `onPress` _func_  (required)
> 
 


> `label` _string_  (required)
> 
 


> `disabled` _bool_ 
> 
 




### InputDatePicker

InputDatePicker a cross-platform InputRow inputtingdates.On iOS devices, the row examples to revealDatePickerIOS when selected. The humanized date shouldbe supplied as the value prop, and it should beupdated when the value of the date-picker changes.On Anroid, the date-picker prompts the user to selecta date in a modal menu.__Platforms__:  ios, android 
 __Composes__: [InputTouchable](elements.html#InputTouchable) 

**Props**

> `expanded` _bool_  (required)
> 
 


> `onToggleExpansion` _func_  (required)
> function called to toggle the visibility of the date-picker. (iOS only) *
 


> `value` _string_ 
> the currently selected date to be displayed in collapsed row. *
 


> `maxDate` _string_ 
> 
 


> `minDate` _string_ 
> 
 


> `label` _string_ 
> 
 


> `mode` _string_ 
> 
 


> `date` _object_  (required)
> 
 


> `onDateChange` _func_  (required)
> 
 


> `editable` _bool_ 
> 
> _defaultValue: `true`_


> `inverted` _bool_ 
> 
 




### InputDatePickerWeb




### InputExpandable

An input row field that expands when pressed to reveal itschildren.__Platforms__:  ios, android, web

**Props**

> `expanded` _bool_  (required)
> 
 


> `Row` _node_  (required)
> 
 




### InputGroup

Wrapping components with InputGroup gives you theoption of giving Inputs dividing borders, dividingborders with an inset, a top border (with a unique inset value),a bottom border (with a unique inset value), shared backgroundcolours, margins, and a label. You could supply your ownchild components, too.__Platforms__:  ios, android, web 
 __Composes__: [Base](elements.html#Base), [Divider](elements.html#Divider), [SectionHeader](elements.html#SectionHeader) 

**Props**

> `style` _object_ 
> 
 


> `inset` _number_ 
> left margin inset for the divider border (excluding top and bottom)
> _defaultValue: `0`_


> `showTopBorder` _bool_ 
> show the top border
> _defaultValue: `true`_


> `showBottomBorder` _bool_ 
> show the bottom border
> _defaultValue: `true`_


> `showBorder` _bool_ 
> whether to show the dividing border
> _defaultValue: `true`_


> `topInset` _number_ 
> left margin inset for the top border
> _defaultValue: `0`_


> `bottomInset` _number_ 
> left margin inset for the bottom border
> _defaultValue: `0`_


> `label` _string_ 
> a label for the input group
 


> `backgroundColor` _string_ 
> 
 


> `inverted` _bool_ 
> 
 




### InputHelpText

InputHelpText is typically used after an InputGroup tooffer additional information about the above inputs. This isjust a simple wrapper around Text with some paddingprovided, and the text color set to light.__Platforms__:  ios, android, web 
 __Composes__: [Text](elements.html#Text) 

**Props**

> `inverted` _bool_ 
> 
 




### InputPicker

InputPicker provides a unified API for Android and iOSpicker rows.On iOS, when the user selects the picker row, the row expands toreveal the children. The value prop that appears alongsidethe right of the picker row will typically be a humanizedversion of the selected value in the picker.On Android, we display the picker as the row itself. Whenselected, the picker prompt will occur. A label isrendered above the picker. The value prop is ignored,since the Android picker already prints the value for us.__Platforms__:  ios, android 
 __Composes__: [InputTouchable](elements.html#InputTouchable), [InputExpandable](elements.html#InputExpandable) 

**Props**

> `onToggleExpansion` _func_  (required)
> a function called when toggling the visibility of the picker. (iOS only)
 


> `editable` _bool_ 
> 
> _defaultValue: `true`_


> `value` _string_ 
> the picker value displayed in the row. (iOS only)
 


> `label` _string_  (required)
> the label for the picker *
 


> `expanded` _bool_ 
> controls whether the picker is visible. (iOS only)
 


> `backgroundColor` _string_ 
> 
 




### RowActions

A collection of RowActions to be displayed behinda revealing row.

**Props**

> `style` _any_ 
> 
 




### RowAction

A row action that hide underneath the row, suchas &#039;Delete&#039;, or &#039;Edit&#039;, etc.

**Props**




### RemoveButton

Remove button




### InputRow

An Input field with a lot of added functionality. You&#039;d typicallywant to wrap this within an InputGroup.__Platforms__:  ios, android, web 
 __Composes__: [RevealingRow](elements.html#RevealingRow), [InputRowCell](elements.html#InputRowCell), [RemoveButton](elements.html#RemoveButton), [Input](elements.html#Input), [Base](elements.html#Base), [Text](elements.html#Text), [RowAction](elements.html#RowAction), [RowActions](elements.html#RowActions) 

**Props**

> `label` _string_ 
> 
 


> `autoFocus` _bool_ 
> 
 


> `removable` _bool_ 
> 
> _defaultValue: `false`_


> `placeholder` _string_ 
> 
 


> `vertical` _bool_ 
> 
 


> `onSelectLabel` _func_ 
> 
 


> `onChangeText` _func_  (required)
> 
 


> `value` _union(string,node)_ 
> 
 


> `backgroundColor` _string_ 
> 
> _defaultValue: `'white'`_


> `editable` _bool_ 
> 
> _defaultValue: `true`_


> `labelWidth` _number_ 
> 
 


> `verticalHeight` _number_ 
> 
> _defaultValue: `80`_


> `onRequestRemove` _func_ 
> 
 


> `height` _number_ 
> 
> _defaultValue: `50`_


> `icon` _node_ 
> 
 


> `inverted` _bool_ 
> 
 


> `condensed` _bool_ 
> 
 


> `multiline` _bool_ 
> 
 




### InputRowCell

A simple component that is used to wrap various Input Rows.It provides a fixed height, and other default styles.__Platforms__:  ios, android, web 
 __Composes__: [Base](elements.html#Base) 

**Props**

> `height` _number_ 
> 
> _defaultValue: `50`_




### RevealOption

Input Option

**Props**

> `onPress` _func_  (required)
> 
 


> `backgroundColor` _string_ 
> 
> _defaultValue: `'midgray'`_


> `label` _string_  (required)
> 
 


> `textColor` _string_ 
> 
> _defaultValue: `'white'`_




### InputRowRevealOptions

Revealable row options container. Typically usedto delete a row.

**Props**

> `height` _number_ 
> 
> _defaultValue: `40`_


> `options` _array_ 
> 
 




### InputToggle

A row with a label and switch, allowingthe user to toggle a boolean value.__Platforms__:  ios, android 
 __Composes__: [InputRowCell](elements.html#InputRowCell), [Switch](elements.html#Switch) 

**Props**

> `style` _any_ 
> 
 


> `value` _bool_  (required)
> 
 


> `backgroundColor` _string_ 
> 
> _defaultValue: `'transparent'`_


> `label` _string_  (required)
> 
 


> `onValueChange` _func_  (required)
> 
 


> `editable` _bool_ 
> 
> _defaultValue: `true`_


> `switchProps` _object_ 
> 
 


> `onTintColor` _string_ 
> 
> _defaultValue: `'success'`_




### InputTouchable

An InputTouchable is typically used within the context of anInputGroup, when you want the user to select a value from anotherListView, PopupMenu, etc. It&#039;s a very simple wrapper aroundTouchableRow, to make it play nicely with other Input components.__Platforms__:  ios, android, web 
 __Composes__: [TouchableRow](elements.html#TouchableRow), [Text](elements.html#Text) 

**Props**

> `backgroundColor` _string_ 
> 
> _defaultValue: `'white'`_


> `label` _union(string,node)_  (required)
> 
 


> `icon` _node_ 
> 
 


> `image` _object_ 
> 
 


> `value` _union(string,node)_ 
> 
 


> `showMore` _bool_ 
> 
> _defaultValue: `false`_


> `condensed` _bool_ 
> 
 


> `onPress` _func_  (required)
> 
 


> `disabled` _bool_ 
> 
> _defaultValue: `false`_


> `labelColor` _string_ 
> 
> _defaultValue: `'default'`_


> `inverted` _bool_ 
> 
 




### RevealingRow

ReavealingRow enables a row to have revealed optionsthat appear, for instance, when editing it.__Platforms__:  ios, android, web 
 __Composes__: [Base](elements.html#Base) 

**Props**

> `showingOptions` _bool_  (required)
> 
> _defaultValue: `false`_


> `revealedContent` _node_  (required)
> 
 


> `backgroundColor` _string_ 
> 
> _defaultValue: `'white'`_



## Text
---


### Text

Basic Text Component that provides shorthands for sizing,lineHeight, and fontWeights.

**Props**

> `tiny` _bool_ 
> 
 


> `small` _bool_ 
> 
 


> `medium` _bool_ 
> 
 


> `large` _bool_ 
> 
 


> `giant` _bool_ 
> 
 


> `thin` _bool_ 
> 
 


> `thick` _bool_ 
> 
 


> `bold` _bool_ 
> 
 


> `inverted` _bool_ 
> 
 


> `lineHeight` _number_ 
> 
 



