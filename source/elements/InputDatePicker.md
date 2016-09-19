---
title: InputDatePicker
order: 127
description: InputDatePicker a cross-platform InputRow inputtingdates.On iOS devices, the row examples to revealDatePickerIOS when selected. The humanized date shouldbe supplied as the value prop, and it should beupdated when the value of the date-picker changes.On Anroid, the date-picker prompts the user to selecta date in a modal menu.@Platform ios, android@composes InputTouchable
---

InputDatePicker a cross-platform InputRow inputting
dates.

On iOS devices, the row examples to reveal
DatePickerIOS when selected. The humanized date should
be supplied as the value prop, and it should be
updated when the value of the date-picker changes.

On Anroid, the date-picker prompts the user to select
a date in a modal menu.

__Platforms__:  ios, android
 
 __Composes__: [InputTouchable](elements.html#InputTouchable) 


#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
expanded | bool  (required) |   | 
onToggleExpansion | func  (required) |   | function called to toggle the visibility of the date-picker. (iOS only) *
value | string  |   | the currently selected date to be displayed in collapsed row. *
maxDate | string  |   | 
minDate | string  |   | 
label | string  |   | 
mode | string  |   | 
date | object  (required) |   | 
onDateChange | func  (required) |   | 
editable | bool  | true | 
inverted | bool  |   | 