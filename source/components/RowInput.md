---
title: RowInput
order: 20
---


## InputAddRow

An InputTouchable with a plus icon. This is typically usedwithin the context of an InputGroup consisting ofremovable inputs.__Platforms__:  ios, android, web 
 __Composes__: [InputTouchable](/components/InputTouchable.html), [Icon](/components/Icon.html) 

**Props**

> `backgroundColor` _string_ 
> 
 


> `onPress` _func_  (required)
> 
 


> `label` _string_  (required)
> 
 


> `disabled` _bool_ 
> 
 




## InputDatePicker

InputDatePicker a cross-platform InputRow inputtingdates.On iOS devices, the row examples to revealDatePickerIOS when selected. The humanized date shouldbe supplied as the value prop, and it should beupdated when the value of the date-picker changes.On Anroid, the date-picker prompts the user to selecta date in a modal menu.__Platforms__:  ios, android 
 __Composes__: [InputTouchable](/components/InputTouchable.html) 

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
 




## InputDatePickerWeb




## InputExpandable

An input row field that expands when pressed to reveal itschildren.__Platforms__:  ios, android, web

**Props**

> `expanded` _bool_  (required)
> 
 


> `Row` _node_  (required)
> 
 




## InputGroup

Wrapping components with InputGroup gives you theoption of giving Inputs dividing borders, dividingborders with an inset, a top border (with a unique inset value),a bottom border (with a unique inset value), shared backgroundcolours, margins, and a label. You could supply your ownchild components, too.__Platforms__:  ios, android, web 
 __Composes__: [Base](/components/Base.html), [Divider](/components/Divider.html), [SectionHeader](/components/SectionHeader.html) 

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
 




## InputHelpText

InputHelpText is typically used after an InputGroup tooffer additional information about the above inputs. This isjust a simple wrapper around Text with some paddingprovided, and the text color set to light.__Platforms__:  ios, android, web 
 __Composes__: [Text](/components/Text.html) 

**Props**

> `inverted` _bool_ 
> 
 




## InputPicker

InputPicker provides a unified API for Android and iOSpicker rows.On iOS, when the user selects the picker row, the row expands toreveal the children. The value prop that appears alongsidethe right of the picker row will typically be a humanizedversion of the selected value in the picker.On Android, we display the picker as the row itself. Whenselected, the picker prompt will occur. A label isrendered above the picker. The value prop is ignored,since the Android picker already prints the value for us.__Platforms__:  ios, android 
 __Composes__: [InputTouchable](/components/InputTouchable.html), [InputExpandable](/components/InputExpandable.html) 

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
 




## RowActions

A collection of RowActions to be displayed behinda revealing row.

**Props**

> `style` _any_ 
> 
 




## RowAction

A row action that hide underneath the row, suchas &#039;Delete&#039;, or &#039;Edit&#039;, etc.

**Props**




## RemoveButton

Remove button




## InputRow

An Input field with a lot of added functionality. You&#039;d typicallywant to wrap this within an InputGroup.__Platforms__:  ios, android, web 
 __Composes__: [RevealingRow](/components/RevealingRow.html), [InputRowCell](/components/InputRowCell.html), [RemoveButton](/components/RemoveButton.html), [Input](/components/Input.html), [Base](/components/Base.html), [Text](/components/Text.html), [RowAction](/components/RowAction.html), [RowActions](/components/RowActions.html) 

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
 




## InputRowCell

A simple component that is used to wrap various Input Rows.It provides a fixed height, and other default styles.__Platforms__:  ios, android, web 
 __Composes__: [Base](/components/Base.html) 

**Props**

> `height` _number_ 
> 
> _defaultValue: `50`_




## RevealOption

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




## InputRowRevealOptions

Revealable row options container. Typically usedto delete a row.

**Props**

> `height` _number_ 
> 
> _defaultValue: `40`_


> `options` _array_ 
> 
 




## InputToggle

A row with a label and switch, allowingthe user to toggle a boolean value.__Platforms__:  ios, android 
 __Composes__: [InputRowCell](/components/InputRowCell.html), [Switch](/components/Switch.html) 

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




## InputTouchable

An InputTouchable is typically used within the context of anInputGroup, when you want the user to select a value from anotherListView, PopupMenu, etc. It&#039;s a very simple wrapper aroundTouchableRow, to make it play nicely with other Input components.__Platforms__:  ios, android, web 
 __Composes__: [TouchableRow](/components/TouchableRow.html), [Text](/components/Text.html) 

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
 




## RevealingRow

ReavealingRow enables a row to have revealed optionsthat appear, for instance, when editing it.__Platforms__:  ios, android, web 
 __Composes__: [Base](/components/Base.html) 

**Props**

> `showingOptions` _bool_  (required)
> 
> _defaultValue: `false`_


> `revealedContent` _node_  (required)
> 
 


> `backgroundColor` _string_ 
> 
> _defaultValue: `'white'`_



