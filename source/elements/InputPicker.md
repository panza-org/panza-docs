---
title: InputPicker
order: 132
description: InputPicker provides a unified API for Android and iOSpicker rows.On iOS, when the user selects the picker row, the row expands toreveal the children. The value prop that appears alongsidethe right of the picker row will typically be a humanizedversion of the selected value in the picker.On Android, we display the picker as the row itself. Whenselected, the picker prompt will occur. A label isrendered above the picker. The value prop is ignored,since the Android picker already prints the value for us.@platform ios, android@composes InputTouchable, InputExpandable
---

InputPicker provides a unified API for Android and iOS
picker rows.

On iOS, when the user selects the picker row, the row expands to
reveal the children. The value prop that appears alongside
the right of the picker row will typically be a humanized
version of the selected value in the picker.

On Android, we display the picker as the row itself. When
selected, the picker prompt will occur. A label is
rendered above the picker. The value prop is ignored,
since the Android picker already prints the value for us.

__Platforms__:  ios, android
 
 __Composes__: [InputTouchable](elements.html#InputTouchable), [InputExpandable](elements.html#InputExpandable) 


#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
onToggleExpansion | func  (required) |   | a function called when toggling the visibility of the picker. (iOS only)
editable | bool  | true | 
value | string  |   | the picker value displayed in the row. (iOS only)
label | string  (required) |   | the label for the picker *
expanded | bool  |   | controls whether the picker is visible. (iOS only)
backgroundColor | string  |   | 