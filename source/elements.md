---
title: Elements
order: 110
description: Elements are the most basic components, the building blocks for your UI.
---

## Base

A general purpose component that converts props into styles defined by our theme. It's heavily inspired by the Base component provided by rebass.
{% iframe "https://npmcdn.com/react-native-web-player@1.2.2/index.html#vendorComponents=%5B%5B%22panza%22%2C%20%22Panza%22%2C%20%22https%3A%2F%2Frawgit.com%2Fbmcmahen%2Fpanza%2Fdocs%2Fdocs%2Fassets%2Fpanza.web.js%22%5D%5D&code=%0A%20%20import%20%7B%0A%20%20%20%20Button%2C%0A%20%20%20%20Divider%2C%0A%20%20%20%20Base%2C%0A%20%20%20%20Text%0A%20%20%7D%20from%20'panza'%0A%20%20%0A%20%20const%20Examples%20%3D%20()%20%3D%3E%20%7B%0A%0A%20%20const%20%7B%20Base%20%7D%20%3D%20Panza%0A%0A%20%20return%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Base%20with%20padding'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CBase%20backgroundColor%3D'primary'%20p%3D%7B4%7D%20%2F%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Base%20with%20margin'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CBase%20p%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20backgroundColor%3D'red'%20p%3D%7B4%7D%20mb%3D%7B2%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20backgroundColor%3D'light'%20p%3D%7B4%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Base%20rounded'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CBase%20backgroundColor%3D'green'%20rounded%3D%7B30%7D%20p%3D%7B4%7D%20%2F%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Base%20width%20%26%20height'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CBase%20width%3D%7B30%7D%20height%3D%7B50%7D%20backgroundColor%3D'green'%20%2F%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Base%20with%20flex'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CBase%20height%3D%7B200%7D%20flex%3D%7B1%7D%20column%20justify%3D'space-between'%20align%3D'center'%20backgroundColor%3D'light'%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20p%3D%7B2%7D%20backgroundColor%3D'primary'%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20p%3D%7B2%7D%20backgroundColor%3D'secondary'%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20alignSelf%3D'flex-start'%20p%3D%7B2%7D%20backgroundColor%3D'positive'%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A%0A%20%20%0A%20%20import%20%7B%0A%20%20%20%20ListView%0A%20%20%7D%20from%20'react-native'%0A%0A%20%20function%20noop()%20%7B%0A%20%20%20%20console.log('button%20pressed')%0A%20%20%7D%0A%0A%20%20const%20ds%20%3D%20new%20ListView.DataSource(%7B%0A%20%20%20%20rowHasChanged%3A%20(r1%2C%20r2)%20%3D%3E%20r1%20!%3D%3D%20r2%0A%20%20%7D)%0A%0A%20%20const%20Module%20%3D%20(%7B%20examples%20%7D)%20%3D%3E%20%7B%0A%0A%20%20%20%20const%20datas%20%3D%20ds.cloneWithRows(examples)%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CBase%0A%20%20%20%20%20%20%20%20Component%3D%7BListView%7D%0A%20%20%20%20%20%20%20%20dataSource%3D%7Bdatas%7D%0A%20%20%20%20%20%20%20%20renderRow%3D%7B(row)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20py%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20px%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mb%3D%7B1%7D%20bold%3E%7Brow.title%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20%7B...row.props%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Brow.render()%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20renderSeparator%3D%7B(a%2C%20b)%20%3D%3E%20%3CDivider%20key%3D%7Ba%20%2B%20b%7D%20%2F%3E%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20)%0A%20%20%7D%0A%0A%20%20const%20App%20%3D%20()%20%3D%3E%20%3CModule%20examples%3D%7BExamples()%7D%20%2F%3E%0A%0A%20%20ReactNative.AppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%0A" 790 500 %}

## Text

```js
const styles = StyleSheets.create({
  button: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#F62459',
    paddingVertical: 4,
    paddingHorizontal: 8
  }
});

<TouchableOpacity style={styles.button}>
  <Text style={{ color: '#F62459', fontSize: 15 }}>Press me!</Text>
</TouchableOpacity>
```

## Base 
 
A general purpose component that converts props into styles
defined by our theme. It's heavily inspired by the Base
component provided by [rebass](https://github.com/jxnblk/rebass).
#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
Component | any  |   | Custom Component
baseStyle | any  |   | The base style will be supplanted by style props, or regular style properties.
style | any  |   | Regular style attribute
underlayColor | string  |   | Underlay color. Use 'darken' to automatically darken the backgroundColor.
m | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin based on the configured scale
mt | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin top based on the configured scale
mr | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin right based on the configured scale
mb | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin bottom based on the configured scale
ml | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin left based on the configured scale
mx | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin x-axis based on the configured scale
my | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin y-asix based on the configured scale
p | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding based on the configured scale
pt | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding top based on the configured scale
pr | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding right based on the configured scale
pb | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding bottom based on the configured scale
pl | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding left based on the configured scale
px | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding x-axis based on the configured scale
py | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding y-axis based on the configured scale
backgroundColor | string  |   | Background color.
rounded | bool&#124;number |   | Border radius
borderColor | string  |   | Border color
flex | number  |   | Flex property
wrap | bool  |   | Flex-wrap property
column | bool  |   | Set the flex-direction to column
row | bool  |   | Set the flex-direction to row
align | string  |   | Align-items property
justify | string  |   | Justify-content property
height | number  |   | The height of the element
width | number  |   | The width of the element


#### Examples
{% raw %}
<iframe
        width="790"
        height="500"
        frameborder="0"
        src="https://npmcdn.com/react-native-web-player@1.2.2/index.html#width=250&vendorComponents=%5B%5B%22panza%22%2C%20%22Panza%22%2C%20%22https%3A%2F%2Frawgit.com%2Fbmcmahen%2Fpanza%2Fdocs%2Fdocs%2Fassets%2Fpanza.web.js%22%5D%5D&code=%0A%20%20import%20%7B%0A%20%20%20%20Button%2C%0A%20%20%20%20Divider%2C%0A%20%20%20%20Base%2C%0A%20%20%20%20Text%0A%20%20%7D%20from%20'panza'%0A%20%20%0A%20%20const%20Examples%20%3D%20()%20%3D%3E%20%7B%0A%0A%20%20const%20%7B%20Base%20%7D%20%3D%20Panza%0A%0A%20%20return%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Base%20with%20padding'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CBase%20backgroundColor%3D'primary'%20p%3D%7B4%7D%20%2F%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Base%20with%20margin'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CBase%20p%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20backgroundColor%3D'red'%20p%3D%7B4%7D%20mb%3D%7B2%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20backgroundColor%3D'light'%20p%3D%7B4%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Base%20rounded'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CBase%20backgroundColor%3D'green'%20rounded%3D%7B30%7D%20p%3D%7B4%7D%20%2F%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Base%20width%20%26%20height'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CBase%20width%3D%7B30%7D%20height%3D%7B50%7D%20backgroundColor%3D'green'%20%2F%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Base%20with%20flex'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CBase%20height%3D%7B200%7D%20flex%3D%7B1%7D%20column%20justify%3D'space-between'%20align%3D'center'%20backgroundColor%3D'light'%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20p%3D%7B2%7D%20backgroundColor%3D'primary'%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20p%3D%7B2%7D%20backgroundColor%3D'secondary'%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20alignSelf%3D'flex-start'%20p%3D%7B2%7D%20backgroundColor%3D'positive'%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A%0A%20%20%0A%20%20import%20%7B%0A%20%20%20%20ListView%0A%20%20%7D%20from%20'react-native'%0A%0A%20%20function%20noop()%20%7B%0A%20%20%20%20console.log('button%20pressed')%0A%20%20%7D%0A%0A%20%20const%20ds%20%3D%20new%20ListView.DataSource(%7B%0A%20%20%20%20rowHasChanged%3A%20(r1%2C%20r2)%20%3D%3E%20r1%20!%3D%3D%20r2%0A%20%20%7D)%0A%0A%20%20const%20Module%20%3D%20(%7B%20examples%20%7D)%20%3D%3E%20%7B%0A%0A%20%20%20%20const%20datas%20%3D%20ds.cloneWithRows(examples)%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CBase%0A%20%20%20%20%20%20%20%20Component%3D%7BListView%7D%0A%20%20%20%20%20%20%20%20dataSource%3D%7Bdatas%7D%0A%20%20%20%20%20%20%20%20renderRow%3D%7B(row)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20py%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20px%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mb%3D%7B1%7D%20bold%3E%7Brow.title%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20%7B...row.props%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Brow.render()%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20renderSeparator%3D%7B(a%2C%20b)%20%3D%3E%20%3CDivider%20key%3D%7Ba%20%2B%20b%7D%20%2F%3E%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20)%0A%20%20%7D%0A%0A%20%20const%20App%20%3D%20()%20%3D%3E%20%3CModule%20examples%3D%7BExamples()%7D%20%2F%3E%0A%0A%20%20ReactNative.AppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%0A"
></iframe>
  {% endraw %}



## TextBase 
 
A general purpose text component which
converts props into styles defined in the configuration.
Unlike Base, TextBase supports special Text props.
#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
Component | any  |   | 
style | any  |   | 
baseStyle | any  |   | 
fontSize | 0&#124;1&#124;2&#124;3&#124;4&#124;5&#124;6 |   | text size *
lineHeight | 0&#124;1&#124;2&#124;3&#124;4&#124;5&#124;6 | 1 | text lineheight *
color | string  | 'default' | text colour *
textAlign | string  |   | text alignment *
bold | bool  |   | bold font weight *
thin | bool  |   | thin font weight *
thick | bool  |   | thick font weight *
inverted | bool  |   | use the inverted color (by default, white) *
m | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin *
mt | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin top *
mr | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin right *
mb | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin bottom *
ml | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin left *
mx | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin x-axis *
my | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin y-asix *
p | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding *
pt | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding top *
pr | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding right *
pb | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding bottom *
pl | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding left *
px | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding x-axis *
py | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding y-axis *
backgroundColor | string  |   | Background color *
rounded | bool&#124;number |   | Border radius *
borderColor | string  |   | Border color *
flex | number  |   | flex property *
wrap | bool  |   | flex-wrap property *
column | bool  |   | set flex-direction to column *
row | bool  |   | set flex-direction to row *
align | string  |   | set align-items property *
justify | string  |   | set justify-content property *
height | number  |   | set the height of the element *
width | number  |   | set the width of the element *




## Button 
 
A basic button that inherits from Base, and provides colourization
based upon background color configuration.
 
 __Composes__: [Base](elements.html#Base), [Text](elements.html#Text), [Icon](elements.html#Icon) 


#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
small | bool  |   | button size
medium | bool  |   | 
large | bool  |   | 
primary | bool  |   | Uses the primary colour to style the button.
secondary | bool  |   | Uses the secondary colour to style the button.
positive | bool  |   | Uses the positive colour to style the button.
negative | bool  |   | Uses the negative colour to style the button.
default | bool  |   | Uses the midgray colour to style the button.
outline | bool  | false | Use an outline button style *
disabled | bool  | false | disables the button, and reduces its opacity
rounded | number  | 6 | 
onPress | func  |   | 
underlayColor | string  |   | 
backgroundColor | string  |   | 
borderColor | string  |   | 
block | bool  | false | stretch the button width
icon | string&#124;node |   | optional icon string or node
size |  | 'medium' | 


#### Examples
{% raw %}
<iframe
        width="790"
        height="500"
        frameborder="0"
        src="https://npmcdn.com/react-native-web-player@1.2.2/index.html#width=250&vendorComponents=%5B%5B%22panza%22%2C%20%22Panza%22%2C%20%22https%3A%2F%2Frawgit.com%2Fbmcmahen%2Fpanza%2Fdocs%2Fdocs%2Fassets%2Fpanza.web.js%22%5D%5D&code=%0A%20%20import%20%7B%0A%20%20%20%20Button%2C%0A%20%20%20%20Divider%2C%0A%20%20%20%20Base%2C%0A%20%20%20%20Text%0A%20%20%7D%20from%20'panza'%0A%20%20%0A%20%20const%20Examples%20%3D%20()%20%3D%3E%20%7B%0A%0A%20%20const%20%7B%20Button%20%7D%20%3D%20Panza%0A%0A%20%20return%20(%0A%20%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Plain%20Button'%2C%0A%20%20%20%20%20%20description%3A%20'A%20standard%20Button'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CButton%20onPress%3D%7Bnoop%7D%3EBacon%3C%2FButton%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20title%3A%20'Primary'%2C%0A%20%20%20%20%20description%3A%20'A%20primary%20Button'%2C%0A%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%3CButton%20primary%20onPress%3D%7Bnoop%7D%3E%0A%20%20%20%20%20%20%20%20Primary%20Button%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20title%3A%20'Secondary'%2C%0A%20%20%20%20%20description%3A%20'A%20secondary%20Button'%2C%0A%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CButton%20secondary%20onPress%3D%7Bnoop%7D%3ESecondary%20Button%3C%2FButton%3E%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20title%3A%20'Positive'%2C%0A%20%20%20%20%20description%3A%20'A%20positive%20Button'%2C%0A%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CButton%20positive%20onPress%3D%7Bnoop%7D%3EPositive%20Button%3C%2FButton%3E%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20title%3A%20'Negative'%2C%0A%20%20%20%20%20description%3A%20'A%20negative%20Button'%2C%0A%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CButton%20negative%20onPress%3D%7Bnoop%7D%3ENegative%20Button%3C%2FButton%3E%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20title%3A%20'Outline'%2C%0A%20%20%20%20%20description%3A%20'An%20outline%20Button'%2C%0A%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CButton%20outline%20onPress%3D%7Bnoop%7D%3EOutline%20Button%3C%2FButton%3E%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20title%3A%20'Primary%20Outline'%2C%0A%20%20%20%20%20description%3A%20'A%20primary%2C%20outline%20Button'%2C%0A%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CButton%20primary%20outline%20onPress%3D%7Bnoop%7D%3EPrimary%20Outline%20Button%3C%2FButton%3E%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20title%3A%20'Block'%2C%0A%20%20%20%20%20description%3A%20'A%20block%20button%20stretches%20it%20to%20the%20full%20width%20of%20the%20container%20element'%2C%0A%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CButton%20block%20onPress%3D%7Bnoop%7D%3EBlock%20Button%3C%2FButton%3E%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20title%3A%20'Icon'%2C%0A%20%20%20%20%20description%3A%20'A%20primary%20outline%20button%20with%20an%20icon%20(ios-add)'%2C%0A%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CButton%20primary%20outline%20icon%3D'ios-add'%20onPress%3D%7Bnoop%7D%3EIcon%20Button%3C%2FButton%3E%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20title%3A%20'Rounded'%2C%0A%20%20%20%20%20description%3A%20'A%20button%20with%20a%20custom%20rounded%20value'%2C%0A%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CButton%20onPress%3D%7Bnoop%7D%20primary%20rounded%3D%7B25%7D%3ERounded%3C%2FButton%3E%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20title%3A%20'Small'%2C%0A%20%20%20%20%20description%3A%20'A%20small%20button'%2C%0A%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CButton%20onPress%3D%7Bnoop%7D%20small%3ESmall%3C%2FButton%3E%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20title%3A%20'Large'%2C%0A%20%20%20%20%20description%3A%20'A%20large%20button'%2C%0A%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CButton%20onPress%3D%7Bnoop%7D%20large%3ELarge%3C%2FButton%3E%0A%20%20%20%20%7D%0A%20%20%5D.map((p)%20%3D%3E%20%7B%0A%20%20%20%20p.props%20%3D%20%7B%20px%3A%202%20%7D%0A%20%20%20%20return%20p%0A%20%20%7D)%0A%20%20)%0A%0A%7D%0A%0A%20%20%0A%20%20import%20%7B%0A%20%20%20%20ListView%0A%20%20%7D%20from%20'react-native'%0A%0A%20%20function%20noop()%20%7B%0A%20%20%20%20console.log('button%20pressed')%0A%20%20%7D%0A%0A%20%20const%20ds%20%3D%20new%20ListView.DataSource(%7B%0A%20%20%20%20rowHasChanged%3A%20(r1%2C%20r2)%20%3D%3E%20r1%20!%3D%3D%20r2%0A%20%20%7D)%0A%0A%20%20const%20Module%20%3D%20(%7B%20examples%20%7D)%20%3D%3E%20%7B%0A%0A%20%20%20%20const%20datas%20%3D%20ds.cloneWithRows(examples)%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CBase%0A%20%20%20%20%20%20%20%20Component%3D%7BListView%7D%0A%20%20%20%20%20%20%20%20dataSource%3D%7Bdatas%7D%0A%20%20%20%20%20%20%20%20renderRow%3D%7B(row)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20py%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20px%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mb%3D%7B1%7D%20bold%3E%7Brow.title%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20%7B...row.props%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Brow.render()%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20renderSeparator%3D%7B(a%2C%20b)%20%3D%3E%20%3CDivider%20key%3D%7Ba%20%2B%20b%7D%20%2F%3E%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20)%0A%20%20%7D%0A%0A%20%20const%20App%20%3D%20()%20%3D%3E%20%3CModule%20examples%3D%7BExamples()%7D%20%2F%3E%0A%0A%20%20ReactNative.AppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%0A"
></iframe>
  {% endraw %}



## ButtonGroup 
 

#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
rounded | bool&#124;number |   | 
vertical | bool  |   | 
segmented | bool  |   | A helper to create segemented controls that align together *


#### Examples
{% raw %}
<iframe
        width="790"
        height="500"
        frameborder="0"
        src="https://npmcdn.com/react-native-web-player@1.2.2/index.html#width=250&vendorComponents=%5B%5B%22panza%22%2C%20%22Panza%22%2C%20%22https%3A%2F%2Frawgit.com%2Fbmcmahen%2Fpanza%2Fdocs%2Fdocs%2Fassets%2Fpanza.web.js%22%5D%5D&code=%0A%20%20import%20%7B%0A%20%20%20%20Button%2C%0A%20%20%20%20Divider%2C%0A%20%20%20%20Base%2C%0A%20%20%20%20Text%0A%20%20%7D%20from%20'panza'%0A%20%20%0A%20%20const%20Examples%20%3D%20()%20%3D%3E%20%7B%0A%0Aconst%20%7B%0A%20%20ButtonGroup%2C%0A%20%20Button%0A%7D%20%3D%20Panza%0A%0Areturn%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Segmented%20Controls'%2C%0A%20%20%20%20%20%20description%3A%20'iOS%20style%20segmented%20controls'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CButtonGroup%20segmented%20rounded%3D%7B5%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20primary%3EOne%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20primary%20outline%20onPress%3D%7Bnoop%7D%3ETwo%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20primary%20outline%20onPress%3D%7Bnoop%7D%3EThree%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3C%2FButtonGroup%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Segmented%20Positive'%2C%0A%20%20%20%20%20%20description%3A%20'Segmented%20controls%20with%202%20positive%20buttons'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CButtonGroup%20mt%3D%7B2%7D%20segmented%20rounded%3D%7B5%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20positive%3EOne%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20positive%20outline%20onPress%3D%7Bnoop%7D%3ETwo%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3C%2FButtonGroup%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Vertical%20ButtonGroup'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CButtonGroup%20mt%3D%7B2%7D%20vertical%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20primary%20onPress%3D%7Bnoop%7D%3EPrimary%20Vertical%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20transparent%20mt%3D%7B1%7D%20onPress%3D%7Bnoop%7D%3ESecondary%20Option%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3C%2FButtonGroup%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Transparent%20ButtonGroup'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CButtonGroup%20py%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20small%20onPress%3D%7Bnoop%7D%20transparent%20icon%3D'ios-heart-outline'%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Like%0A%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20small%20onPress%3D%7Bnoop%7D%20transparent%20icon%3D'ios-text-outline'%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Comment%0A%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20small%20onPress%3D%7Bnoop%7D%20transparent%20icon%3D'ios-share-outline'%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Share%0A%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3C%2FButtonGroup%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%0A%20%20%5D%0A%0A%7D%0A%0A%20%20%0A%20%20import%20%7B%0A%20%20%20%20ListView%0A%20%20%7D%20from%20'react-native'%0A%0A%20%20function%20noop()%20%7B%0A%20%20%20%20console.log('button%20pressed')%0A%20%20%7D%0A%0A%20%20const%20ds%20%3D%20new%20ListView.DataSource(%7B%0A%20%20%20%20rowHasChanged%3A%20(r1%2C%20r2)%20%3D%3E%20r1%20!%3D%3D%20r2%0A%20%20%7D)%0A%0A%20%20const%20Module%20%3D%20(%7B%20examples%20%7D)%20%3D%3E%20%7B%0A%0A%20%20%20%20const%20datas%20%3D%20ds.cloneWithRows(examples)%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CBase%0A%20%20%20%20%20%20%20%20Component%3D%7BListView%7D%0A%20%20%20%20%20%20%20%20dataSource%3D%7Bdatas%7D%0A%20%20%20%20%20%20%20%20renderRow%3D%7B(row)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20py%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20px%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mb%3D%7B1%7D%20bold%3E%7Brow.title%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20%7B...row.props%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Brow.render()%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20renderSeparator%3D%7B(a%2C%20b)%20%3D%3E%20%3CDivider%20key%3D%7Ba%20%2B%20b%7D%20%2F%3E%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20)%0A%20%20%7D%0A%0A%20%20const%20App%20%3D%20()%20%3D%3E%20%3CModule%20examples%3D%7BExamples()%7D%20%2F%3E%0A%0A%20%20ReactNative.AppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%0A"
></iframe>
  {% endraw %}



## Card 
 
A very basic Card wrapper
 
 __Composes__: [Base](elements.html#Base) 


#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
inverted | bool  |   | 


#### Examples
{% raw %}
<iframe
        width="790"
        height="500"
        frameborder="0"
        src="https://npmcdn.com/react-native-web-player@1.2.2/index.html#width=250&vendorComponents=%5B%5B%22panza%22%2C%20%22Panza%22%2C%20%22https%3A%2F%2Frawgit.com%2Fbmcmahen%2Fpanza%2Fdocs%2Fdocs%2Fassets%2Fpanza.web.js%22%5D%5D&code=%0A%20%20import%20%7B%0A%20%20%20%20Button%2C%0A%20%20%20%20Divider%2C%0A%20%20%20%20Base%2C%0A%20%20%20%20Text%0A%20%20%7D%20from%20'panza'%0A%20%20%0A%20%20const%20Examples%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%7B%0A%20%20%20%20Card%2C%0A%20%20%20%20CardHeader%2C%0A%20%20%20%20Image%2C%0A%20%20%20%20TouchableIcon%2C%0A%20%20%20%20Icon%2C%0A%20%20%20%20Divider%2C%0A%20%20%20%20Button%2C%0A%20%20%20%20ButtonGroup%2C%0A%20%20%20%20Text%2C%0A%20%20%20%20Base%0A%20%20%7D%20%3D%20Panza%0A%0A%0A%20%20return%20%5B%0A%20%20%7B%0A%20%20%20%20title%3A%20'Card'%2C%0A%20%20%20%20description%3A%20'Using%20Card%20%26%20CardHeader'%2C%0A%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%3CCard%3E%0A%20%20%20%20%20%20%20%20%3CCardHeader%0A%20%20%20%20%20%20%20%20%20%20avatar%3D'http%3A%2F%2Fplacehold.it%2F128%2F08e%2Ffff'%0A%20%20%20%20%20%20%20%20%20%20title%3D'Ben%20McMahen'%0A%20%20%20%20%20%20%20%20%20%20subtitle%3D'October%207%2C%202016'%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTouchableIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20accessibilityLabel%3D'Show%20More'%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bnoop%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D'ios-arrow-down'%20size%3D%7B20%7D%20light%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableIcon%3E%0A%20%20%20%20%20%20%20%20%3C%2FCardHeader%3E%0A%20%20%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20%20%20backgroundColor%3D'%23eee'%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20width%3A%20'100%25'%2C%20height%3A%20250%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%20uri%3A%20'http%3A%2F%2Fplacehold.it%2F300%2F08e%2Ffff'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CBase%20p%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20large%20bold%20mb%3D%7B1%7D%3ECard%20Title%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20lineHeight%3D%7B2%7D%20small%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Ad%20id%20Lorem%20officia%20reprehenderit%20magna%20commodo%20ut%20voluptate.%20Ex%20ipsum%20in%20exercitation%20in%20officia%20reprehenderit%20dolor%20tempor.%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CButtonGroup%20py%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20small%20onPress%3D%7Bnoop%7D%20transparent%20icon%3D'ios-heart-outline'%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Like%0A%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20small%20onPress%3D%7Bnoop%7D%20transparent%20icon%3D'ios-text-outline'%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Comment%0A%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20small%20onPress%3D%7Bnoop%7D%20transparent%20icon%3D'ios-share-outline'%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Share%0A%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3C%2FButtonGroup%3E%0A%20%20%20%20%20%20%3C%2FCard%3E%0A%20%20%20%20)%0A%20%20%7D%5D%0A%7D%0A%0A%20%20%0A%20%20import%20%7B%0A%20%20%20%20ListView%0A%20%20%7D%20from%20'react-native'%0A%0A%20%20function%20noop()%20%7B%0A%20%20%20%20console.log('button%20pressed')%0A%20%20%7D%0A%0A%20%20const%20ds%20%3D%20new%20ListView.DataSource(%7B%0A%20%20%20%20rowHasChanged%3A%20(r1%2C%20r2)%20%3D%3E%20r1%20!%3D%3D%20r2%0A%20%20%7D)%0A%0A%20%20const%20Module%20%3D%20(%7B%20examples%20%7D)%20%3D%3E%20%7B%0A%0A%20%20%20%20const%20datas%20%3D%20ds.cloneWithRows(examples)%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CBase%0A%20%20%20%20%20%20%20%20Component%3D%7BListView%7D%0A%20%20%20%20%20%20%20%20dataSource%3D%7Bdatas%7D%0A%20%20%20%20%20%20%20%20renderRow%3D%7B(row)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20py%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20px%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mb%3D%7B1%7D%20bold%3E%7Brow.title%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20%7B...row.props%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Brow.render()%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20renderSeparator%3D%7B(a%2C%20b)%20%3D%3E%20%3CDivider%20key%3D%7Ba%20%2B%20b%7D%20%2F%3E%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20)%0A%20%20%7D%0A%0A%20%20const%20App%20%3D%20()%20%3D%3E%20%3CModule%20examples%3D%7BExamples()%7D%20%2F%3E%0A%0A%20%20ReactNative.AppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%0A"
></iframe>
  {% endraw %}



## CardHeader 
 
A very basic card header, which includes an optional avatar,
title, subtitle, and children
 
 __Composes__: [Base](elements.html#Base), [Image](elements.html#Image), [Text](elements.html#Text) 


#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
avatar | string&#124;node |   | 
title | string&#124;node |   | 
subtitle | string&#124;node |   | 




## BaseIcon 
 
Our base icon component that all other icons
compose. It uses ionicons, as provided by
react-native-vector-icons
#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
name | string  (required) |   | 
size | number  | 25 | 




## Icon 
 
Our base icon component that all other icons
compose. It uses Ionicons 3, as provided by
react-native-vector-icons on Android and iOS.
To use this on the web, you must include a link
tag to the Ionicons 3 stylesheet.

__Platforms__:  ios, android, web
 
 __Composes__: [TextBase](elements.html#TextBase) 


#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
name | string  |   | 
size | number  | 35 | 
color | string  |   | 




## BaseIcon 
 

#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
size | number  | 25 | 
name | string  |   | 




## CheckMark 
 
A basic CheckMark that can either be unchecked
or checked.

__Platforms__:  ios, android, web
 
 __Composes__: [Base](elements.html#Base), [Icon](elements.html#Icon) 


#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
isChecked | bool  | false | 
size | number  | 30 | 
uncheckedColor | string  | 'light' | 
checkedColor | string  | 'positive' | 
checkMarkIconName | string  | 'ios-checkmark-circle-outline' | 
uncheckedIconName | string  | 'ios-radio-button-off' | 




## ArrowRightIcon 
 





## PlusIcon 
 





## CloseIcon 
 





## BackIcon 
 





## SearchIcon 
 





## MoreIcon 
 





## TouchableIcon 
 
A touchable wrapper for <Icon />
#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
onPress | func  (required) |   | 
accessibilityLabel | string  (required) |   | 
disabled | bool  |   | 
style | object  |   | 




## Image 
 
Fade-in an image when it loads.
#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
fade | bool  | true | 
onLoadEnd | func  |   | 
height | number  |   | 
width | number  |   | 
circular | bool  | false | set the border radius to be fully round (given an equal height/width)
style | any  |   | 
source | object  (required) |   | 
resizeMode | string  | 'cover' | 
rounded | number&#124;bool | false | the border radius of the image




## Input 
 
A basic input
 
 __Composes__: [Text](elements.html#Text) 


#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
tiny | bool  |   | 
large | bool  |   | 
small | bool  |   | 
medium | bool  |   | 
giant | bool  |   | 
inverted | bool  |   | 
placeholderTextColor | string  | '#888' | 


#### Examples
{% raw %}
<iframe
        width="790"
        height="500"
        frameborder="0"
        src="https://npmcdn.com/react-native-web-player@1.2.2/index.html#width=250&vendorComponents=%5B%5B%22panza%22%2C%20%22Panza%22%2C%20%22https%3A%2F%2Frawgit.com%2Fbmcmahen%2Fpanza%2Fdocs%2Fdocs%2Fassets%2Fpanza.web.js%22%5D%5D&code=%0A%20%20import%20%7B%0A%20%20%20%20Button%2C%0A%20%20%20%20Divider%2C%0A%20%20%20%20Base%2C%0A%20%20%20%20Text%0A%20%20%7D%20from%20'panza'%0A%20%20%0A%20%20const%20Examples%20%3D%20()%20%3D%3E%20%7B%0A%0A%20%20const%20%7B%0A%20%20%20%20Input%0A%20%20%7D%20%3D%20Panza%0A%0A%20%20function%20createInput(type)%20%7B%0A%20%20%20%20return%20class%20InputExample%20extends%20React.Component%20%7B%0A%20%20%20%20%20%20constructor()%20%7B%0A%20%20%20%20%20%20%20%20super()%0A%20%20%20%20%20%20%20%20this.state%20%3D%20%7B%20value%3A%20''%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20render()%20%7B%0A%20%20%20%20%20%20%20%20let%20input%20%3D%20%3CInput%20flex%3D%7B1%7D%20style%3D%7B%7B%20width%3A%20200%2C%20height%3A%2040%7D%7D%20value%3D%7Bthis.state.value%7D%20placeholder%3D'Placeholder'%20onChangeText%3D%7B(v)%20%3D%3E%20this.setState(%7B%20value%3A%20v%20%7D)%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20return%20React.cloneElement(input%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%5Btype%5D%3A%20true%0A%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20return%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Tiny'%2C%0A%20%20%20%20%20%20props%3A%20%7B%20px%3A%202%20%7D%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20Type%20%3D%20createInput('tiny')%0A%20%20%20%20%20%20%20%20return%20%3CType%20%2F%3E%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20exampleString%3A%20%60%0A%20%20%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20%20%20tiny%0A%20%20%20%20%20%20%20%20%20%20placeholder%3D'Placeholder'%0A%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7BonChange%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7Bthis.state.value%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%60%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Small'%2C%0A%20%20%20%20%20%20props%3A%20%7B%20px%3A%202%20%7D%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20Type%20%3D%20createInput('small')%0A%20%20%20%20%20%20%20%20return%20%3CType%20%2F%3E%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20exampleString%3A%20%60%0A%20%20%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20%20%20small%0A%20%20%20%20%20%20%20%20%20%20placeholder%3D'Placeholder'%0A%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7BonChange%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7Bthis.state.value%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%60%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Medium'%2C%0A%20%20%20%20%20%20props%3A%20%7B%20px%3A%202%20%7D%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20Type%20%3D%20createInput('medium')%0A%20%20%20%20%20%20%20%20return%20%3CType%20%2F%3E%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20exampleString%3A%20%60%0A%20%20%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20%20%20placeholder%3D'Placeholder'%0A%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7BonChange%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7Bthis.state.value%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%60%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Large'%2C%0A%20%20%20%20%20%20props%3A%20%7B%20px%3A%202%20%7D%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20Type%20%3D%20createInput('large')%0A%20%20%20%20%20%20%20%20return%20%3CType%20%2F%3E%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20exampleString%3A%20%60%0A%20%20%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20%20%20large%0A%20%20%20%20%20%20%20%20%20%20placeholder%3D'Placeholder'%0A%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7BonChange%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7Bthis.state.value%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%60%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Giant'%2C%0A%20%20%20%20%20%20props%3A%20%7B%20px%3A%202%20%7D%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20Type%20%3D%20createInput('giant')%0A%20%20%20%20%20%20%20%20return%20%3CType%20%2F%3E%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20exampleString%3A%20%60%0A%20%20%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20%20%20giant%0A%20%20%20%20%20%20%20%20%20%20placeholder%3D'Placeholder'%0A%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7BonChange%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7Bthis.state.value%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%60%0A%20%20%20%20%7D%0A%20%20%5D%0A%0A%7D%0A%0A%20%20%0A%20%20import%20%7B%0A%20%20%20%20ListView%0A%20%20%7D%20from%20'react-native'%0A%0A%20%20function%20noop()%20%7B%0A%20%20%20%20console.log('button%20pressed')%0A%20%20%7D%0A%0A%20%20const%20ds%20%3D%20new%20ListView.DataSource(%7B%0A%20%20%20%20rowHasChanged%3A%20(r1%2C%20r2)%20%3D%3E%20r1%20!%3D%3D%20r2%0A%20%20%7D)%0A%0A%20%20const%20Module%20%3D%20(%7B%20examples%20%7D)%20%3D%3E%20%7B%0A%0A%20%20%20%20const%20datas%20%3D%20ds.cloneWithRows(examples)%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CBase%0A%20%20%20%20%20%20%20%20Component%3D%7BListView%7D%0A%20%20%20%20%20%20%20%20dataSource%3D%7Bdatas%7D%0A%20%20%20%20%20%20%20%20renderRow%3D%7B(row)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20py%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20px%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mb%3D%7B1%7D%20bold%3E%7Brow.title%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20%7B...row.props%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Brow.render()%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20renderSeparator%3D%7B(a%2C%20b)%20%3D%3E%20%3CDivider%20key%3D%7Ba%20%2B%20b%7D%20%2F%3E%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20)%0A%20%20%7D%0A%0A%20%20const%20App%20%3D%20()%20%3D%3E%20%3CModule%20examples%3D%7BExamples()%7D%20%2F%3E%0A%0A%20%20ReactNative.AppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%0A"
></iframe>
  {% endraw %}



## NavBar 
 
Static navigation bar that mimics that found
within ReactNative. To be used when you want a static
representation of the NavBar, without transitions.

 
 __Composes__: [Base](elements.html#Base), [NavTitle](elements.html#NavTitle) 


#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
title | string  |   | 
LeftButton | node  |   | 
RightButton | node  |   | 
style | any  |   | 
transparent | bool  |   | 
backgroundColor | string  |   | 
titleColor | string  |   | 
inverted | bool  |   | 


#### Examples
{% raw %}
<iframe
        width="790"
        height="500"
        frameborder="0"
        src="https://npmcdn.com/react-native-web-player@1.2.2/index.html#width=250&vendorComponents=%5B%5B%22panza%22%2C%20%22Panza%22%2C%20%22https%3A%2F%2Frawgit.com%2Fbmcmahen%2Fpanza%2Fdocs%2Fdocs%2Fassets%2Fpanza.web.js%22%5D%5D&code=%0A%20%20import%20%7B%0A%20%20%20%20Button%2C%0A%20%20%20%20Divider%2C%0A%20%20%20%20Base%2C%0A%20%20%20%20Text%0A%20%20%7D%20from%20'panza'%0A%20%20%0A%20%20const%20Examples%20%3D%20()%20%3D%3E%20%7B%0A%0A%20%20const%20%7B%0A%20%20%20%20NavBar%2C%0A%20%20%20%20NavTouchableText%2C%0A%20%20%20%20NavTouchableIcon%2C%0A%20%20%20%20CloseIcon%2C%0A%20%20%20%20ButtonGroup%2C%0A%20%20%20%20Button%2C%0A%20%20%20%20Divider%0A%20%20%7D%20%3D%20Panza%0A%0A%20%20const%20%7B%0A%20%20%20%20View%0A%20%20%7D%20%3D%20ReactNative%0A%0A%20%20const%20styles%20%3D%20%7B%20paddingVertical%3A%204%20%7D%0A%20%20const%20log%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20console.log('hello')%0A%20%20%7D%0A%0Areturn%20%5B%0A%20%20%7B%0A%20%20%20%20title%3A%20'NavBar'%2C%0A%20%20%20%20description%3A%20'A%20basic%20NavBar'%2C%0A%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%3CNavBar%0A%20%20%20%20%20%20%20%20RightButton%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CNavTouchableText%20onPress%3D%7Blog%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Save%0A%20%20%20%20%20%20%20%20%20%20%3C%2FNavTouchableText%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20LeftButton%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CNavTouchableIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20accessibilityLabel%3D'Close'%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Blog%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CCloseIcon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FNavTouchableIcon%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20title%3D'Hello%20World'%0A%20%20%20%20%20%20%20%20backgroundColor%3D'%23fafafa'%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20)%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20title%3A%20'Inverted%20NavBar'%2C%0A%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%3CNavBar%0A%20%20%20%20%20%20%20%20inverted%0A%20%20%20%20%20%20%20%20backgroundColor%3D'primary'%0A%20%20%20%20%20%20%20%20RightButton%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CNavTouchableText%20color%3D'white'%20onPress%3D%7Blog%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Save%0A%20%20%20%20%20%20%20%20%20%20%3C%2FNavTouchableText%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20LeftButton%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CNavTouchableIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20accessibilityLabel%3D'Close'%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Blog%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CCloseIcon%20color%3D'white'%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FNavTouchableIcon%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20title%3D'Hello%20World'%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20)%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20title%3A%20'With%20Button%20Group'%2C%0A%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%3CNavBar%0A%20%20%20%20%20%20%20%20%20%20RightButton%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CNavTouchableText%20onPress%3D%7Blog%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20Save%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FNavTouchableText%3E%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20LeftButton%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CNavTouchableIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20accessibilityLabel%3D'Close'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Blog%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CCloseIcon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FNavTouchableIcon%3E%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20title%3D'Hello%20World'%0A%20%20%20%20%20%20%20%20%20%20backgroundColor%3D'%23fafafa'%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CButtonGroup%20style%3D%7Bstyles%7D%20backgroundColor%3D'%23fafafa'%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20small%20onPress%3D%7Blog%7D%20transparent%20icon%3D'ios-heart-outline'%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Like%0A%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20small%20onPress%3D%7Blog%7D%20transparent%20icon%3D'ios-text-outline'%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Comment%0A%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20small%20onPress%3D%7Blog%7D%20transparent%20icon%3D'ios-share-outline'%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Share%0A%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3C%2FButtonGroup%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%0A%20%20%7D%0A%5D%0A%0A%7D%0A%0A%20%20%0A%20%20import%20%7B%0A%20%20%20%20ListView%0A%20%20%7D%20from%20'react-native'%0A%0A%20%20function%20noop()%20%7B%0A%20%20%20%20console.log('button%20pressed')%0A%20%20%7D%0A%0A%20%20const%20ds%20%3D%20new%20ListView.DataSource(%7B%0A%20%20%20%20rowHasChanged%3A%20(r1%2C%20r2)%20%3D%3E%20r1%20!%3D%3D%20r2%0A%20%20%7D)%0A%0A%20%20const%20Module%20%3D%20(%7B%20examples%20%7D)%20%3D%3E%20%7B%0A%0A%20%20%20%20const%20datas%20%3D%20ds.cloneWithRows(examples)%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CBase%0A%20%20%20%20%20%20%20%20Component%3D%7BListView%7D%0A%20%20%20%20%20%20%20%20dataSource%3D%7Bdatas%7D%0A%20%20%20%20%20%20%20%20renderRow%3D%7B(row)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20py%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20px%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mb%3D%7B1%7D%20bold%3E%7Brow.title%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20%7B...row.props%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Brow.render()%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20renderSeparator%3D%7B(a%2C%20b)%20%3D%3E%20%3CDivider%20key%3D%7Ba%20%2B%20b%7D%20%2F%3E%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20)%0A%20%20%7D%0A%0A%20%20const%20App%20%3D%20()%20%3D%3E%20%3CModule%20examples%3D%7BExamples()%7D%20%2F%3E%0A%0A%20%20ReactNative.AppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%0A"
></iframe>
  {% endraw %}



## NavIconContainer 
 
A wrapper for <Icon /> that positions it correctly
in a navigation bar.
#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 





## NavTitle 
 
Renders text stylized for the Navigation Bar title.

On iOS it composes PrimaryText.

On Android, it composes LargeText.

 
 __Composes__: [Text](elements.html#Text) 


#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
label | string  |   | 
color | string  |   | 
style | any  |   | 
inverted | bool  |   | 




## NavTouchableIcon 
 
Wrap Icon components within NavTouchableIcon for display
of an Icon in the Navigation bar. You may need to fiddle
around with the sizing of the Icon on android and ios devices
to ensure that they look right.
#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
onPress | func  (required) |   | 




## NavTouchableText 
 
Makes a touchable text component for the NavBar. Typically
used on iOS.

 
 __Composes__: [TextBase](elements.html#TextBase) 


#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
disabled | bool  |   | 
color | string  | 'primary' | 
bold | bool  |   | 
inverted | bool  |   | 




## ErrorPage 
 
Display an error, with messages and actions depending
upon the user state. Particularly useful with Relay.Renderer
when an error state and retry function are provided.
#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
retry | func  (required) |   | 
message | string  | 'Hmm, loading appears to be taking a while.' | 
detailMessage | string  | 'It\'s possible that our server are under heavy load, ' +
  'or that your internet connection is slow. Please try again.' | 
offlineMessage | string  | 'Please ensure that you are connected to the internet.' | 
style | any  |   | 
isOffline | bool  | false | 
inverted | bool  |   | 




## Loader 
 
Displays a loading indicator, and on iOS an optional
loading message.
#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
isLoading | bool  | true | 
large | bool  | false | 
color | string  | 'gray' | 
showText | bool  | true | 
loadingText | string  | 'Loading...' | 
alignTop | bool  | false | 
inverted | bool  |   | 


#### Examples
{% raw %}
<iframe
        width="790"
        height="500"
        frameborder="0"
        src="https://npmcdn.com/react-native-web-player@1.2.2/index.html#width=250&vendorComponents=%5B%5B%22panza%22%2C%20%22Panza%22%2C%20%22https%3A%2F%2Frawgit.com%2Fbmcmahen%2Fpanza%2Fdocs%2Fdocs%2Fassets%2Fpanza.web.js%22%5D%5D&code=%0A%20%20import%20%7B%0A%20%20%20%20Button%2C%0A%20%20%20%20Divider%2C%0A%20%20%20%20Base%2C%0A%20%20%20%20Text%0A%20%20%7D%20from%20'panza'%0A%20%20%0A%20%20const%20Examples%20%3D%20()%20%3D%3E%20%7B%0A%0A%20%20const%20%7B%20Loader%20%7D%20%3D%20Panza%0A%0A%20%20return%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Loader'%2C%0A%20%20%20%20%20%20description%3A%20'Loader'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CLoader%20%2F%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Large%20loader'%2C%0A%20%20%20%20%20%20description%3A%20'Loader'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CLoader%20large%20%2F%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Loader%20without%20text'%2C%0A%20%20%20%20%20%20description%3A%20'Loader'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CLoader%20showText%3D%7Bfalse%7D%20%2F%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A%0A%20%20%0A%20%20import%20%7B%0A%20%20%20%20ListView%0A%20%20%7D%20from%20'react-native'%0A%0A%20%20function%20noop()%20%7B%0A%20%20%20%20console.log('button%20pressed')%0A%20%20%7D%0A%0A%20%20const%20ds%20%3D%20new%20ListView.DataSource(%7B%0A%20%20%20%20rowHasChanged%3A%20(r1%2C%20r2)%20%3D%3E%20r1%20!%3D%3D%20r2%0A%20%20%7D)%0A%0A%20%20const%20Module%20%3D%20(%7B%20examples%20%7D)%20%3D%3E%20%7B%0A%0A%20%20%20%20const%20datas%20%3D%20ds.cloneWithRows(examples)%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CBase%0A%20%20%20%20%20%20%20%20Component%3D%7BListView%7D%0A%20%20%20%20%20%20%20%20dataSource%3D%7Bdatas%7D%0A%20%20%20%20%20%20%20%20renderRow%3D%7B(row)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20py%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20px%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mb%3D%7B1%7D%20bold%3E%7Brow.title%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20%7B...row.props%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Brow.render()%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20renderSeparator%3D%7B(a%2C%20b)%20%3D%3E%20%3CDivider%20key%3D%7Ba%20%2B%20b%7D%20%2F%3E%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20)%0A%20%20%7D%0A%0A%20%20const%20App%20%3D%20()%20%3D%3E%20%3CModule%20examples%3D%7BExamples()%7D%20%2F%3E%0A%0A%20%20ReactNative.AppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%0A"
></iframe>
  {% endraw %}



## Popup 
 

#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
showing | bool  (required) |   | 
onRequestClose | func  (required) |   | 
autoDismiss | bool  | true | 
showCancel | bool  | true | 
backgroundColor | string  | 'rgba(0,0,0,0.6)' | 
modalProps | object  | {} | 
customHeader | node  |   | 
options | arrayOf&#124;arrayOf (required) |   | 




## Divider 
 
A simple component used to separate rows, with an
optional inset margin on the left or right.
#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
inset | number  | 0 | 
insetRight | number  | 0 | 
inverted | bool  |   | Use the inverted colour *




## SectionHeader 
 
SectionHeader is used for rendering a section header within a ListView.
Supply text as the child.
 
 __Composes__: [Base](elements.html#Base) 


#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
backgroundColor | string  | 'gray' | 




## TouchableRow 
 
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


#### Examples
{% raw %}
<iframe
        width="790"
        height="500"
        frameborder="0"
        src="https://npmcdn.com/react-native-web-player@1.2.2/index.html#width=250&vendorComponents=%5B%5B%22panza%22%2C%20%22Panza%22%2C%20%22https%3A%2F%2Frawgit.com%2Fbmcmahen%2Fpanza%2Fdocs%2Fdocs%2Fassets%2Fpanza.web.js%22%5D%5D&code=%0A%20%20import%20%7B%0A%20%20%20%20Button%2C%0A%20%20%20%20Divider%2C%0A%20%20%20%20Base%2C%0A%20%20%20%20Text%0A%20%20%7D%20from%20'panza'%0A%20%20%0A%20%20const%20Examples%20%3D%20()%20%3D%3E%20%7B%0A%0A%20%20const%20%7B%0A%20%20%20%20TouchableRow%2C%0A%20%20%20%20InputGroup%0A%20%20%7D%20%3D%20Panza%0A%0A%20%20return%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Touchable%20Row'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CInputGroup%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTouchableRow%0A%20%20%20%20%20%20%20%20%20%20%20%20primaryText%3D'Primary%20Text'%0A%20%20%20%20%20%20%20%20%20%20%20%20secondaryText%3D'Secondary%20Text'%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3D'Value'%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bnoop%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FInputGroup%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Touchable%20Row'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CInputGroup%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTouchableRow%0A%20%20%20%20%20%20%20%20%20%20%20%20image%3D%7B%7B%20uri%3A%20'http%3A%2F%2Fplacehold.it%2F150x150'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20primaryText%3D'Primary%20Text'%0A%20%20%20%20%20%20%20%20%20%20%20%20secondaryText%3D'Secondary%20Text'%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3D'Value'%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bnoop%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FInputGroup%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%0A%20%20%5D%0A%0A%7D%0A%0A%20%20%0A%20%20import%20%7B%0A%20%20%20%20ListView%0A%20%20%7D%20from%20'react-native'%0A%0A%20%20function%20noop()%20%7B%0A%20%20%20%20console.log('button%20pressed')%0A%20%20%7D%0A%0A%20%20const%20ds%20%3D%20new%20ListView.DataSource(%7B%0A%20%20%20%20rowHasChanged%3A%20(r1%2C%20r2)%20%3D%3E%20r1%20!%3D%3D%20r2%0A%20%20%7D)%0A%0A%20%20const%20Module%20%3D%20(%7B%20examples%20%7D)%20%3D%3E%20%7B%0A%0A%20%20%20%20const%20datas%20%3D%20ds.cloneWithRows(examples)%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CBase%0A%20%20%20%20%20%20%20%20Component%3D%7BListView%7D%0A%20%20%20%20%20%20%20%20dataSource%3D%7Bdatas%7D%0A%20%20%20%20%20%20%20%20renderRow%3D%7B(row)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20py%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20px%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mb%3D%7B1%7D%20bold%3E%7Brow.title%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20%7B...row.props%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Brow.render()%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20renderSeparator%3D%7B(a%2C%20b)%20%3D%3E%20%3CDivider%20key%3D%7Ba%20%2B%20b%7D%20%2F%3E%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20)%0A%20%20%7D%0A%0A%20%20const%20App%20%3D%20()%20%3D%3E%20%3CModule%20examples%3D%7BExamples()%7D%20%2F%3E%0A%0A%20%20ReactNative.AppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%0A"
></iframe>
  {% endraw %}



## TouchableRowCell 
 
A touchable row cell container, typically used
rendering rows in a <ListView>.
#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
onPress | func  |   | 
disabled | bool  | false | 
highlighted | func  | function noop () {} | 
showMore | bool  | true | 
showMoreProps | object  |   | 
underlayColor | string  | 'rgba(0,0,0,0.1)' | 
height | number  |   | 




## InputAddRow 
 
An InputTouchable with a plus icon. This is typically used
within the context of an InputGroup consisting of
removable inputs.

__Platforms__:  ios, android, web
 
 __Composes__: [InputTouchable](elements.html#InputTouchable), [Icon](elements.html#Icon) 


#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
backgroundColor | string  |   | 
onPress | func  (required) |   | 
label | string  (required) |   | 
disabled | bool  |   | 




## InputDatePicker 
 
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


#### Examples
{% raw %}
<iframe
        width="790"
        height="500"
        frameborder="0"
        src="https://npmcdn.com/react-native-web-player@1.2.2/index.html#width=250&vendorComponents=%5B%5B%22panza%22%2C%20%22Panza%22%2C%20%22https%3A%2F%2Frawgit.com%2Fbmcmahen%2Fpanza%2Fdocs%2Fdocs%2Fassets%2Fpanza.web.js%22%5D%5D&code=%0A%20%20import%20%7B%0A%20%20%20%20Button%2C%0A%20%20%20%20Divider%2C%0A%20%20%20%20Base%2C%0A%20%20%20%20Text%0A%20%20%7D%20from%20'panza'%0A%20%20%0A%20%20const%20Examples%20%3D%20()%20%3D%3E%20%7B%0A%0A%20%20return%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Input%20Date%20Picker'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CBase%20%2F%3E%2C%0A%20%20%20%20%20%20exampleString%3A%20%60%0A%20%20%20%20%20%20%20%20%3CInputDatePicker%0A%20%20%20%20%20%20%20%20%20%20expanded%3D%7Bthis.state.focusDate%7D%0A%20%20%20%20%20%20%20%20%20%20date%3D%7Bthis.state.date%7D%0A%20%20%20%20%20%20%20%20%20%20editable%3D%7Bthis.state.editable%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7Bnew%20Date(this.state.date).getFullYear().toString()%7D%0A%20%20%20%20%20%20%20%20%20%20onDateChange%3D%7B(date)%20%3D%3E%20this.setState(%7B%20date%20%7D)%7D%0A%20%20%20%20%20%20%20%20%20%20label%3D'Your%20Birthday'%0A%20%20%20%20%20%20%20%20%20%20onToggleExpansion%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20LayoutAnimation.spring()%0A%20%20%20%20%20%20%20%20%20%20%20%20this.setState(%7B%20focusDate%3A%20!this.state.focusDate%20%7D)%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%60%0A%20%20%20%20%7D%0A%20%20%5D%0A%0A%7D%0A%0A%20%20%0A%20%20import%20%7B%0A%20%20%20%20ListView%0A%20%20%7D%20from%20'react-native'%0A%0A%20%20function%20noop()%20%7B%0A%20%20%20%20console.log('button%20pressed')%0A%20%20%7D%0A%0A%20%20const%20ds%20%3D%20new%20ListView.DataSource(%7B%0A%20%20%20%20rowHasChanged%3A%20(r1%2C%20r2)%20%3D%3E%20r1%20!%3D%3D%20r2%0A%20%20%7D)%0A%0A%20%20const%20Module%20%3D%20(%7B%20examples%20%7D)%20%3D%3E%20%7B%0A%0A%20%20%20%20const%20datas%20%3D%20ds.cloneWithRows(examples)%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CBase%0A%20%20%20%20%20%20%20%20Component%3D%7BListView%7D%0A%20%20%20%20%20%20%20%20dataSource%3D%7Bdatas%7D%0A%20%20%20%20%20%20%20%20renderRow%3D%7B(row)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20py%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20px%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mb%3D%7B1%7D%20bold%3E%7Brow.title%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20%7B...row.props%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Brow.render()%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20renderSeparator%3D%7B(a%2C%20b)%20%3D%3E%20%3CDivider%20key%3D%7Ba%20%2B%20b%7D%20%2F%3E%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20)%0A%20%20%7D%0A%0A%20%20const%20App%20%3D%20()%20%3D%3E%20%3CModule%20examples%3D%7BExamples()%7D%20%2F%3E%0A%0A%20%20ReactNative.AppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%0A"
></iframe>
  {% endraw %}



## InputDatePickerWeb 
 





## InputExpandable 
 
An input row field that expands when pressed to reveal its
children.

__Platforms__:  ios, android, web
#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
expanded | bool  (required) |   | 
Row | node  (required) |   | 




## InputGroup 
 
Wrapping components with InputGroup gives you the
option of giving Inputs dividing borders, dividing
borders with an inset, a top border (with a unique inset value),
a bottom border (with a unique inset value), shared background
colours, margins, and a label. You could supply your own
child components, too.

__Platforms__:  ios, android, web
 
 __Composes__: [Base](elements.html#Base), [Divider](elements.html#Divider), [SectionHeader](elements.html#SectionHeader) 


#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
style | object  |   | 
inset | number  | 0 | left margin inset for the divider border (excluding top and bottom)
showTopBorder | bool  | true | show the top border
showBottomBorder | bool  | true | show the bottom border
showBorder | bool  | true | whether to show the dividing border
topInset | number  | 0 | left margin inset for the top border
bottomInset | number  | 0 | left margin inset for the bottom border
label | string  |   | a label for the input group
backgroundColor | string  |   | 
inverted | bool  |   | 


#### Examples
{% raw %}
<iframe
        width="790"
        height="500"
        frameborder="0"
        src="https://npmcdn.com/react-native-web-player@1.2.2/index.html#width=250&vendorComponents=%5B%5B%22panza%22%2C%20%22Panza%22%2C%20%22https%3A%2F%2Frawgit.com%2Fbmcmahen%2Fpanza%2Fdocs%2Fdocs%2Fassets%2Fpanza.web.js%22%5D%5D&code=%0A%20%20import%20%7B%0A%20%20%20%20Button%2C%0A%20%20%20%20Divider%2C%0A%20%20%20%20Base%2C%0A%20%20%20%20Text%0A%20%20%7D%20from%20'panza'%0A%20%20%0A%20%20const%20Examples%20%3D%20()%20%3D%3E%20%7B%0A%0A%20%20const%20%7B%0A%20%20%20%20View%0A%20%20%7D%20%3D%20ReactNative%0A%0A%20%20const%20%7B%0A%20%20%20%20InputRow%2C%0A%20%20%20%20InputGroup%2C%0A%20%20%20%20InputHelpText%0A%20%20%7D%20%3D%20Panza%0A%0A%20%20function%20renderInputWithProps(props)%20%7B%0A%0A%20%20%20%20return%20class%20Example%20extends%20React.Component%20%7B%0A%0A%20%20%20%20%20%20constructor(props)%20%7B%0A%20%20%20%20%20%20%20%20super(props)%0A%20%20%20%20%20%20%20%20this.state%20%3D%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20''%20%7C%7C%20props.value%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20render()%20%7B%0A%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%3CInputRow%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7Bthis.state.value%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7B(value)%20%3D%3E%20this.setState(%7B%20value%20%7D)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B...props%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%0A%20%20class%20BasicGroup%20extends%20React.Component%20%7B%0A%0A%20%20%20%20constructor(props)%20%7B%0A%20%20%20%20%20%20super(props)%0A%20%20%20%20%20%20this.state%20%3D%20%7B%0A%20%20%20%20%20%20%20%20editable%3A%20true%2C%0A%20%20%20%20%20%20%20%20basic%3A%20''%2C%0A%20%20%20%20%20%20%20%20label%3A%20''%2C%0A%20%20%20%20%20%20%20%20label2%3A%20''%2C%0A%20%20%20%20%20%20%20%20label3%3A%20''%2C%0A%20%20%20%20%20%20%20%20label4%3A%20''%2C%0A%20%20%20%20%20%20%20%20label5%3A%20''%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%0A%20%20%20%20let%20First%20%3D%20renderInputWithProps(%7B%20placeholder%3A%20'Basic%20Input%20'%7D)%0A%20%20%20%20let%20Second%20%3D%20renderInputWithProps(%7B%0A%20%20%20%20%20%20label%3A%20'Basic%20Input%20with%20Label'%2C%0A%20%20%20%20%20%20placeholder%3A%20'Your%20Value'%0A%20%20%20%20%7D)%0A%20%20%20%20let%20Third%20%3D%20renderInputWithProps(%7B%0A%20%20%20%20%20%20label%3A%20'Basic%20Input%20with%20Label%20%26%20Vertical'%2C%0A%20%20%20%20%20%20vertical%3A%20true%2C%0A%20%20%20%20%20%20placeholder%3A%20'Placeholder'%0A%20%20%20%20%7D)%0A%0A%20%20%20%20let%20Fourth%20%3D%20renderInputWithProps(%7B%0A%20%20%20%20%20%20label%3A%20'Removable'%2C%0A%20%20%20%20%20%20removable%3A%20true%2C%0A%20%20%20%20%20%20placeholder%3A%20'Type%20here...'%2C%0A%20%20%20%20%20%20onSelectLabel%3A%20()%20%3D%3E%20noop%0A%20%20%20%20%7D)%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%3CInputGroup%20label%3D'INPUT%20GROUP%20LABEL'%20inset%3D%7B16%7D%20mt%3D%7B3%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CFirst%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CSecond%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CThird%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CFourth%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FInputGroup%3E%0A%20%20%20%20%20%20%20%20%3CInputHelpText%3E%0A%20%20%20%20%20%20%20%20%20%20Some%20help%20text.%20Aute%20nulla%20ex%20ea%20amet%20sunt%20occaecat%20qui%20fugiat%20cupidatat%20fugiat%20in.%20Veniam%20amet%20elit%20et%20tempor%20sit%20ea%20nulla%20adipisicing%20laboris%20pariatur.%0A%20%20%20%20%20%20%20%20%3C%2FInputHelpText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%0A%20%20%7D%0A%7D%0A%0A%0A%20%20return%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Basic%20InputGroup'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CBasicGroup%20%2F%3E%0A%20%20%20%20%20%20)%2C%0A%20%20%20%20%20%20exampleString%3A%20%60%0A%20%20%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%20%20%3CInputGroup%20label%3D'INPUT%20GROUP%20LABEL'%20inset%3D%7B16%7D%20mt%3D%7B3%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CInputRow%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7Bthis.state.first%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7B(first)%20%3D%3E%20this.setState(%7B%20first%20%7D)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20placeholder%3D'Basic%20Input'%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CInputRow%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7Bthis.state.second%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7B(second)%20%3D%3E%20this.setState(%7B%20second%20%7D)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3D'Basic%20Input%20with%20Label'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20placeholder%3D'Your%20Value'%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CInputRow%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7Bthis.state.value%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7B(value)%20%3D%3E%20this.setState(%7B%20value%20%7D)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3D'Basic%20Input%20with%20Label%20%26%20Vertical'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20vertical%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20placeholder%3D'Placeholder'%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CInputRow%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7Bthis.state.value%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7B(value)%20%3D%3E%20this.setState(%7B%20value%20%7D)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3D'Removable'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20removable%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20placeholder%3D'Type%20here...'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onSelectLabel%3D%7B()%20%3D%3E%20noop%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FInputGroup%3E%0A%20%20%20%20%20%20%20%20%20%20%3CInputHelpText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Some%20help%20text.%20Aute%20nulla%20ex%20ea%20amet%20sunt%20occaecat%20qui%20fugiat%20cupidatat%20fugiat%20in.%20Veniam%20amet%20elit%20et%20tempor%20sit%20ea%20nulla%20adipisicing%20laboris%20pariatur.%0A%20%20%20%20%20%20%20%20%20%20%3C%2FInputHelpText%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%60%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A%0A%20%20%0A%20%20import%20%7B%0A%20%20%20%20ListView%0A%20%20%7D%20from%20'react-native'%0A%0A%20%20function%20noop()%20%7B%0A%20%20%20%20console.log('button%20pressed')%0A%20%20%7D%0A%0A%20%20const%20ds%20%3D%20new%20ListView.DataSource(%7B%0A%20%20%20%20rowHasChanged%3A%20(r1%2C%20r2)%20%3D%3E%20r1%20!%3D%3D%20r2%0A%20%20%7D)%0A%0A%20%20const%20Module%20%3D%20(%7B%20examples%20%7D)%20%3D%3E%20%7B%0A%0A%20%20%20%20const%20datas%20%3D%20ds.cloneWithRows(examples)%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CBase%0A%20%20%20%20%20%20%20%20Component%3D%7BListView%7D%0A%20%20%20%20%20%20%20%20dataSource%3D%7Bdatas%7D%0A%20%20%20%20%20%20%20%20renderRow%3D%7B(row)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20py%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20px%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mb%3D%7B1%7D%20bold%3E%7Brow.title%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20%7B...row.props%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Brow.render()%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20renderSeparator%3D%7B(a%2C%20b)%20%3D%3E%20%3CDivider%20key%3D%7Ba%20%2B%20b%7D%20%2F%3E%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20)%0A%20%20%7D%0A%0A%20%20const%20App%20%3D%20()%20%3D%3E%20%3CModule%20examples%3D%7BExamples()%7D%20%2F%3E%0A%0A%20%20ReactNative.AppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%0A"
></iframe>
  {% endraw %}



## InputHelpText 
 
InputHelpText is typically used after an InputGroup to
offer additional information about the above inputs. This is
just a simple wrapper around Text with some padding
provided, and the text color set to light.

__Platforms__:  ios, android, web
 
 __Composes__: [Text](elements.html#Text) 


#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
inverted | bool  |   | 




## InputPicker 
 
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


#### Examples
{% raw %}
<iframe
        width="790"
        height="500"
        frameborder="0"
        src="https://npmcdn.com/react-native-web-player@1.2.2/index.html#width=250&vendorComponents=%5B%5B%22panza%22%2C%20%22Panza%22%2C%20%22https%3A%2F%2Frawgit.com%2Fbmcmahen%2Fpanza%2Fdocs%2Fdocs%2Fassets%2Fpanza.web.js%22%5D%5D&code=%0A%20%20import%20%7B%0A%20%20%20%20Button%2C%0A%20%20%20%20Divider%2C%0A%20%20%20%20Base%2C%0A%20%20%20%20Text%0A%20%20%7D%20from%20'panza'%0A%20%20%0A%20%20const%20Examples%20%3D%20()%20%3D%3E%20%7B%0A%0A%20%20const%20%7B%0A%20%20%20%20InputPicker%0A%20%20%7D%20%3D%20Panza%0A%0A%20%20return%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Input%20Picker'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CBase%20%2F%3E%2C%0A%20%20%20%20%20%20render()%20%7B%0A%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%3CInputPicker%0A%20%20%20%20%20%20%20%20%20%20%20%20expanded%3D%7Btrue%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7B'Java'%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3D'Select%20a%20Language'%0A%20%20%20%20%20%20%20%20%20%20%20%20editable%3D%7Btrue%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CPicker%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20prompt%3D'Select%20a%20language'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20width%3A%20300%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20selectedValue%3D%7B'Java'%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CPicker.Item%20label%3D'Java'%20value%3D'Java'%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CPicker.Item%20label%3D'Javascript'%20value%3D'Javascript'%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FPicker%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FInputPicker%3E%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A%0A%20%20%0A%20%20import%20%7B%0A%20%20%20%20ListView%0A%20%20%7D%20from%20'react-native'%0A%0A%20%20function%20noop()%20%7B%0A%20%20%20%20console.log('button%20pressed')%0A%20%20%7D%0A%0A%20%20const%20ds%20%3D%20new%20ListView.DataSource(%7B%0A%20%20%20%20rowHasChanged%3A%20(r1%2C%20r2)%20%3D%3E%20r1%20!%3D%3D%20r2%0A%20%20%7D)%0A%0A%20%20const%20Module%20%3D%20(%7B%20examples%20%7D)%20%3D%3E%20%7B%0A%0A%20%20%20%20const%20datas%20%3D%20ds.cloneWithRows(examples)%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CBase%0A%20%20%20%20%20%20%20%20Component%3D%7BListView%7D%0A%20%20%20%20%20%20%20%20dataSource%3D%7Bdatas%7D%0A%20%20%20%20%20%20%20%20renderRow%3D%7B(row)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20py%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20px%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mb%3D%7B1%7D%20bold%3E%7Brow.title%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20%7B...row.props%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Brow.render()%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20renderSeparator%3D%7B(a%2C%20b)%20%3D%3E%20%3CDivider%20key%3D%7Ba%20%2B%20b%7D%20%2F%3E%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20)%0A%20%20%7D%0A%0A%20%20const%20App%20%3D%20()%20%3D%3E%20%3CModule%20examples%3D%7BExamples()%7D%20%2F%3E%0A%0A%20%20ReactNative.AppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%0A"
></iframe>
  {% endraw %}



## RowActions 
 
A collection of RowActions to be displayed behind
a revealing row.
#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
style | any  |   | 




## RowAction 
 
A row action that hide underneath the row, such
as 'Delete', or 'Edit', etc.
#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 





## RemoveButton 
 
Remove button




## InputRow 
 
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


#### Examples
{% raw %}
<iframe
        width="790"
        height="500"
        frameborder="0"
        src="https://npmcdn.com/react-native-web-player@1.2.2/index.html#width=250&vendorComponents=%5B%5B%22panza%22%2C%20%22Panza%22%2C%20%22https%3A%2F%2Frawgit.com%2Fbmcmahen%2Fpanza%2Fdocs%2Fdocs%2Fassets%2Fpanza.web.js%22%5D%5D&code=%0A%20%20import%20%7B%0A%20%20%20%20Button%2C%0A%20%20%20%20Divider%2C%0A%20%20%20%20Base%2C%0A%20%20%20%20Text%0A%20%20%7D%20from%20'panza'%0A%20%20%0A%20%20const%20Examples%20%3D%20()%20%3D%3E%20%7B%0A%0A%20%20const%20%7B%0A%20%20%20%20InputRow%2C%0A%20%20%20%20InputGroup%2C%0A%20%20%20%20InputHelpText%0A%20%20%7D%20%3D%20Panza%0A%0A%20%20function%20renderInputWithProps(props)%20%7B%0A%0A%20%20%20%20return%20class%20Example%20extends%20React.Component%20%7B%0A%0A%20%20%20%20%20%20constructor(props)%20%7B%0A%20%20%20%20%20%20%20%20super(props)%0A%20%20%20%20%20%20%20%20this.state%20%3D%20%7B%0A%20%20%20%20%20%20%20%20%20%20value%3A%20''%20%7C%7C%20props.value%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20render()%20%7B%0A%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%3CInputRow%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7Bthis.state.value%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7B(value)%20%3D%3E%20this.setState(%7B%20value%20%7D)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B...props%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20return%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'With%20placeholder'%2C%0A%20%20%20%20%20%20exampleString%3A%20%60%0A%20%20%20%20%20%20%20%20%3CInputGroup%3E%0A%20%20%20%20%20%20%20%20%20%20%3CInputRow%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7Bthis.state.text%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7B(text)%20%3D%3E%20this.setState(%7B%20text%20%7D)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20placeholder%3D'Placeholder'%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FInputGroup%3E%0A%20%20%20%20%20%20%60%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20Example%20%3D%20renderInputWithProps(%7B%20placeholder%3A%20'Placeholder'%20%7D)%0A%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%3CInputGroup%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FInputGroup%3E%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'With%20label'%2C%0A%20%20%20%20%20%20exampleString%3A%20%60%0A%20%20%20%20%20%20%20%20%3CInputGroup%3E%0A%20%20%20%20%20%20%20%20%20%20%3CInputRow%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7Bthis.state.text%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7B(text)%20%3D%3E%20this.setState(%7B%20text%20%7D)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3D'With%20Label'%0A%20%20%20%20%20%20%20%20%20%20%20%20placeholder%3D'Placeholder'%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FInputGroup%3E%0A%20%20%20%20%20%20%60%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20Example%20%3D%20renderInputWithProps(%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'With%20Label'%2C%0A%20%20%20%20%20%20%20%20%20%20placeholder%3A%20'Placeholder'%0A%20%20%20%20%20%20%20%20%7D)%0A%0A%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%3CInputGroup%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FInputGroup%3E%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Removable'%2C%0A%20%20%20%20%20%20exampleString%3A%20%60%0A%20%20%20%20%20%20%20%20%3CInputGroup%3E%0A%20%20%20%20%20%20%20%20%20%20%3CInputRow%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7Bthis.state.text%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7B(text)%20%3D%3E%20this.setState(%7B%20text%20%7D)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3D'Removable'%0A%20%20%20%20%20%20%20%20%20%20%20%20removable%0A%20%20%20%20%20%20%20%20%20%20%20%20placeholder%3D'Type%20here...'%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FInputGroup%3E%0A%20%20%20%20%20%20%60%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20Example%20%3D%20renderInputWithProps(%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Removable'%2C%0A%20%20%20%20%20%20%20%20%20%20removable%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20placeholder%3A%20'Type%20here...'%0A%20%20%20%20%20%20%20%20%7D)%0A%0A%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%3CInputGroup%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FInputGroup%3E%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Vertical'%2C%0A%20%20%20%20%20%20exampleString%3A%20%60%0A%20%20%20%20%20%20%20%20%3CInputGroup%3E%0A%20%20%20%20%20%20%20%20%20%20%3CInputRow%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7Bthis.state.text%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7B(text)%20%3D%3E%20this.setState(%7B%20text%20%7D)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3D'Vertical'%0A%20%20%20%20%20%20%20%20%20%20%20%20vertical%0A%20%20%20%20%20%20%20%20%20%20%20%20placeholder%3D'Type%20here...'%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FInputGroup%3E%0A%20%20%20%20%20%20%60%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20Example%20%3D%20renderInputWithProps(%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Vertical'%2C%0A%20%20%20%20%20%20%20%20%20%20vertical%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20placeholder%3A%20'Type%20here...'%0A%20%20%20%20%20%20%20%20%7D)%0A%0A%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%3CInputGroup%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FInputGroup%3E%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Touchable%20label'%2C%0A%20%20%20%20%20%20exampleString%3A%20%60%0A%20%20%20%20%20%20%20%20%3CInputGroup%3E%0A%20%20%20%20%20%20%20%20%20%20%3CInputRow%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7Bthis.state.text%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7B(text)%20%3D%3E%20this.setState(%7B%20text%20%7D)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3D'Touchable%20Label'%0A%20%20%20%20%20%20%20%20%20%20%20%20placeholder%3D'Type%20here...'%0A%20%20%20%20%20%20%20%20%20%20%20%20onSelectLabel%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log('label%20touched')%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FInputGroup%3E%0A%20%20%20%20%20%20%60%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20Example%20%3D%20renderInputWithProps(%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Touchable%20Label'%2C%0A%20%20%20%20%20%20%20%20%20%20placeholder%3A%20'Type%20here...'%2C%0A%20%20%20%20%20%20%20%20%20%20onSelectLabel%3A%20()%20%3D%3E%20noop%0A%20%20%20%20%20%20%20%20%7D)%0A%0A%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%3CInputGroup%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FInputGroup%3E%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%0A%20%20%5D%0A%0A%7D%0A%0A%20%20%0A%20%20import%20%7B%0A%20%20%20%20ListView%0A%20%20%7D%20from%20'react-native'%0A%0A%20%20function%20noop()%20%7B%0A%20%20%20%20console.log('button%20pressed')%0A%20%20%7D%0A%0A%20%20const%20ds%20%3D%20new%20ListView.DataSource(%7B%0A%20%20%20%20rowHasChanged%3A%20(r1%2C%20r2)%20%3D%3E%20r1%20!%3D%3D%20r2%0A%20%20%7D)%0A%0A%20%20const%20Module%20%3D%20(%7B%20examples%20%7D)%20%3D%3E%20%7B%0A%0A%20%20%20%20const%20datas%20%3D%20ds.cloneWithRows(examples)%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CBase%0A%20%20%20%20%20%20%20%20Component%3D%7BListView%7D%0A%20%20%20%20%20%20%20%20dataSource%3D%7Bdatas%7D%0A%20%20%20%20%20%20%20%20renderRow%3D%7B(row)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20py%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20px%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mb%3D%7B1%7D%20bold%3E%7Brow.title%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20%7B...row.props%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Brow.render()%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20renderSeparator%3D%7B(a%2C%20b)%20%3D%3E%20%3CDivider%20key%3D%7Ba%20%2B%20b%7D%20%2F%3E%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20)%0A%20%20%7D%0A%0A%20%20const%20App%20%3D%20()%20%3D%3E%20%3CModule%20examples%3D%7BExamples()%7D%20%2F%3E%0A%0A%20%20ReactNative.AppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%0A"
></iframe>
  {% endraw %}



## InputRowCell 
 
A simple component that is used to wrap various Input Rows.
It provides a fixed height, and other default styles.

__Platforms__:  ios, android, web
 
 __Composes__: [Base](elements.html#Base) 


#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
height | number  | 50 | 




## RevealOption 
 
Input Option
#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
onPress | func  (required) |   | 
backgroundColor | string  | 'midgray' | 
label | string  (required) |   | 
textColor | string  | 'white' | 




## InputRowRevealOptions 
 
Revealable row options container. Typically used
to delete a row.
#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
height | number  | 40 | 
options | array  |   | 




## InputToggle 
 
A row with a label and switch, allowing
the user to toggle a boolean value.

__Platforms__:  ios, android
 
 __Composes__: [InputRowCell](elements.html#InputRowCell), [Switch](elements.html#Switch) 


#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
style | any  |   | 
value | bool  (required) |   | 
backgroundColor | string  | 'transparent' | 
label | string  (required) |   | 
onValueChange | func  (required) |   | 
editable | bool  | true | 
switchProps | object  |   | 
onTintColor | string  | 'success' | 




## InputTouchable 
 
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




## RevealingRow 
 
ReavealingRow enables a row to have revealed options
that appear, for instance, when editing it.

__Platforms__:  ios, android, web
 
 __Composes__: [Base](elements.html#Base) 


#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
showingOptions | bool  (required) | false | 
revealedContent | node  (required) |   | 
backgroundColor | string  | 'white' | 




## Text 
 
Basic Text Component that provides shorthands for sizing,
lineHeight, and fontWeights.
#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
tiny | bool  |   | 
small | bool  |   | 
medium | bool  |   | 
large | bool  |   | 
giant | bool  |   | 
thin | bool  |   | 
thick | bool  |   | 
bold | bool  |   | 
inverted | bool  |   | 
lineHeight | number  |   | 


#### Examples
{% raw %}
<iframe
        width="790"
        height="500"
        frameborder="0"
        src="https://npmcdn.com/react-native-web-player@1.2.2/index.html#width=250&vendorComponents=%5B%5B%22panza%22%2C%20%22Panza%22%2C%20%22https%3A%2F%2Frawgit.com%2Fbmcmahen%2Fpanza%2Fdocs%2Fdocs%2Fassets%2Fpanza.web.js%22%5D%5D&code=%0A%20%20import%20%7B%0A%20%20%20%20Button%2C%0A%20%20%20%20Divider%2C%0A%20%20%20%20Base%2C%0A%20%20%20%20Text%0A%20%20%7D%20from%20'panza'%0A%20%20%0A%20%20const%20Examples%20%3D%20()%20%3D%3E%20%7B%0A%0A%20%20const%20%7B%20Text%20%7D%20%3D%20Panza%0A%0A%20%20return%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Tiny'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CText%20tiny%3EHello%20world%3C%2FText%3E%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Small'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CText%20small%3EHello%20world%3C%2FText%3E%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Medium'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CText%3EHello%20world%3C%2FText%3E%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Large'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CText%20large%3EHello%20world%3C%2FText%3E%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Giant'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CText%20giant%3EHello%20world%3C%2FText%3E%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Primary%20color'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CText%20color%3D'primary'%3EHello%20world%3C%2FText%3E%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Bold'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CText%20bold%3EHello%20world%3C%2FText%3E%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'All%20together%20now'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20%3CText%20giant%20color%3D'primary'%20thin%3EHello%20world%3C%2FText%3E%0A%20%20%20%20%7D%0A%20%20%5D.map((p)%20%3D%3E%20%7B%0A%20%20%20%20p.props%20%3D%20%7B%20px%3A%202%20%7D%0A%20%20%20%20return%20p%0A%20%20%7D)%0A%0A%7D%0A%0A%20%20%0A%20%20import%20%7B%0A%20%20%20%20ListView%0A%20%20%7D%20from%20'react-native'%0A%0A%20%20function%20noop()%20%7B%0A%20%20%20%20console.log('button%20pressed')%0A%20%20%7D%0A%0A%20%20const%20ds%20%3D%20new%20ListView.DataSource(%7B%0A%20%20%20%20rowHasChanged%3A%20(r1%2C%20r2)%20%3D%3E%20r1%20!%3D%3D%20r2%0A%20%20%7D)%0A%0A%20%20const%20Module%20%3D%20(%7B%20examples%20%7D)%20%3D%3E%20%7B%0A%0A%20%20%20%20const%20datas%20%3D%20ds.cloneWithRows(examples)%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CBase%0A%20%20%20%20%20%20%20%20Component%3D%7BListView%7D%0A%20%20%20%20%20%20%20%20dataSource%3D%7Bdatas%7D%0A%20%20%20%20%20%20%20%20renderRow%3D%7B(row)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20py%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20px%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mb%3D%7B1%7D%20bold%3E%7Brow.title%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20%7B...row.props%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Brow.render()%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20renderSeparator%3D%7B(a%2C%20b)%20%3D%3E%20%3CDivider%20key%3D%7Ba%20%2B%20b%7D%20%2F%3E%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20)%0A%20%20%7D%0A%0A%20%20const%20App%20%3D%20()%20%3D%3E%20%3CModule%20examples%3D%7BExamples()%7D%20%2F%3E%0A%0A%20%20ReactNative.AppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%0A"
></iframe>
  {% endraw %}


