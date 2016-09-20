---
title: Getting Started
order: 0
description: Panza is a stateless UI library for React Native
---

Panza is a simple, flexible, and beautiful ui foundation for [react-native](https://github.com/facebook/react-native) and [react-native-web](https://github.com/necolas/react-native-web), created by [Ben McMahen](https://twitter.com/BenMcMahen) and [Hammad Jutt](http://jutt.ca). Essentially, it's the [Bootstrap](http://getbootstrap.com/) of react-native.

Panza gives you:

- The standard building blocks of most mobile applications.
- Beautiful UI-styles out of the box, suitable for iOS, Android, and the web.
- A method for [theming](themes.html) your application.
- A [Base](components.html#Base) and [Text](components.html#Text) component, which provide useful shorthand [prop to style conversions](components.html#Base). For example, use `p={2}` to provide padding, or `backgroundColor='primary'` to provide a background colour. Most UI-components compose `Base`, and thus accept these props.

So instead of doing this:

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

You can do this:

```js
<Button primary>
  Press me!
</Button>
```

## Installation

Install using NPM.

```
npm i panza --save
npm i react-native-vector-icons --save
rnpm link react-native-vector-icons
```

And import your components.

```js
import { Base, Button, Text } from 'panza'

const Hello = ({ onPress }) => (
  <Base flex={1} backgroundColor='light'>
    <Text large color='positive'>I am text</Text>
    <Button
      primary
      outline
      onPress={onPress}>
        I am a button
    </Button>
  </Base>
)
```

## Themes

You can override parts of the global theme to provide custom colours, font sizes, scales, etc. Use the [customizeTheme](docs/themes.md) function provided by Panza to supply a custom theme before registering your application. Check out the [default config](components/panza/config.js) to see which variables you can override.

```js
import { customizeTheme } from 'panza'

customizeTheme({
  colors: {
    primary: '#08e'
  }
})

// mount your application
```

## Examples

- [UIExplorer](https://github.com/bmcmahen/panza-ui-explorer)
- bRandom - Randomize your routine ([GitHub](https://github.com/bmcmahen/random-routine), [App Store](https://itunes.apple.com/ca/app/brandom-randomize-your-routine/id1135088308?mt=8))
- [Roast Buddy](https://github.com/bmcmahen/roast-buddy)

Built something with Panza? Let us know!

## Contributing

If you are interested in working on Panza and want to develop it locally within a react-native project, we recommend using [wml](https://github.com/wix/wml) to directly copy your local `panza` directory into your `node_modules` folder inside of your react-native project. This is the best solution until react-native fully support symlinks.

```
wml add ~/panza ~/panza-example/node_modules/panza
wml start
```

To run the tests:
```
npm test
```

## License
MIT
