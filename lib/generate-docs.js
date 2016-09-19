/** eslint-disable **/

const documents = require('../docs.json')
const fs = require('fs')
const buildExampleBuffer = require('./generate-examples')

function stringOfLength(string, length) {
  var newString = ''
  for (var i = 0; i < length; i++) {
    newString += string
  }
  return newString
}

function generateTitle(name) {
  return `## ${name} \n ${stringOfLength('=', name)}`
}

function generateHeader(component, order) {
  return `---
title: ${component.displayName}
order: ${order}
description: ${component.description.replace(/(\r\n|\n|\r)/gm,"")}
---
`
}
// we could eventually build this tree using babel.
// would be a fun hack project.
function buildCompositionLinks(description) {
  const regex = /@Composes(.*)/i
  const comp = description.match(regex)
  var newDescription = description.replace(regex, '')

  const platformRegex = /@Platform/i
  newDescription = newDescription.replace(platformRegex, '__Platforms__: ')

  if (comp && comp[1]) {
    const m = comp[1]
    const links = m.split(',').map((c) => {
      return `[${c.trim()}](elements.html#${c.trim()})`
    }).join(', ')

    return `${newDescription || ''} \n __Composes__: ${links} \n\n`

  }

  return newDescription || ''

}

function generatePropType(type) {

  if (!type) {
    return ''
  }

  const n = (type.name === 'union' || type.name === 'enum') ? '' : type.name

  var values
  if (Array.isArray(type.value)) {
    const t = type.value
      .map((typeValue) => typeValue.name || typeValue.value)
      .join('&#124;')

    values = `${t}`
  } else {
    values = type.value
  }

  return `${n + (values || ' ')}`
}

function generatePropDefaultValue(value) {
  if (!value) return ' '
  return value.value || ' '
}

function generateProp(propName, prop) {
  const required = prop.required ? ' (required)' : ''
  const description = prop.description || ''
  const type = generatePropType(prop.type)
  const df = generatePropDefaultValue(prop.defaultValue)

  return `${propName} | ${type + required} | ${df} | ${description}`
}

function generateProps(props) {
  if (!props) return ''

  // Table Header
  const parts = [
    '\n#### Props',
    'Name | Type | Default Value | Description',
    '--- | --- | --- | --- \n'
  ].join('\n')

  // The props
  const propTable = Object.keys(props)
    .filter(name => (
      name !== 'panza' && name !== 'children'
    ))
    .map(name => (
      generateProp(name, props[name])
    ))
    .join('\n')

  return parts + propTable
}

function generateMarkdown(name, reactAPI) {
  return generateHeader(name) + '\n' + //eslint-disable-line
    buildCompositionLinks(reactAPI.description) +
    generateProps(reactAPI.props)
}

function generatePage(component) {
  return generateHeader(component) + '\n' + //eslint-disable-line
    buildCompositionLinks(component.description) +
    generateProps(component.props)
}

const keys = Object.keys(documents)

var header = `---
title: Elements
order: 110
description: Elements are the most basic components, the building blocks for your UI.
---

## Base

A general purpose component that converts props into styles defined by our theme. It's heavily inspired by the Base component provided by rebass.
{% iframe "https://npmcdn.com/react-native-web-player@1.2.2/index.html#vendorComponents=%5B%5B%22panza%22%2C%20%22Panza%22%2C%20%22https%3A%2F%2Frawgit.com%2Fbmcmahen%2Fpanza%2Fdocs%2Fdocs%2Fassets%2Fpanza.web.js%22%5D%5D&code=%0A%20%20import%20%7B%0A%20%20%20%20Button%2C%0A%20%20%20%20Divider%2C%0A%20%20%20%20Base%2C%0A%20%20%20%20Text%0A%20%20%7D%20from%20'panza'%0A%20%20%0A%20%20const%20Examples%20%3D%20()%20%3D%3E%20%7B%0A%0A%20%20const%20%7B%20Base%20%7D%20%3D%20Panza%0A%0A%20%20return%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Base%20with%20padding'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CBase%20backgroundColor%3D'primary'%20p%3D%7B4%7D%20%2F%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Base%20with%20margin'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CBase%20p%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20backgroundColor%3D'red'%20p%3D%7B4%7D%20mb%3D%7B2%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20backgroundColor%3D'light'%20p%3D%7B4%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Base%20rounded'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CBase%20backgroundColor%3D'green'%20rounded%3D%7B30%7D%20p%3D%7B4%7D%20%2F%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Base%20width%20%26%20height'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CBase%20width%3D%7B30%7D%20height%3D%7B50%7D%20backgroundColor%3D'green'%20%2F%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Base%20with%20flex'%2C%0A%20%20%20%20%20%20render%3A%20()%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CBase%20height%3D%7B200%7D%20flex%3D%7B1%7D%20column%20justify%3D'space-between'%20align%3D'center'%20backgroundColor%3D'light'%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20p%3D%7B2%7D%20backgroundColor%3D'primary'%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20p%3D%7B2%7D%20backgroundColor%3D'secondary'%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20alignSelf%3D'flex-start'%20p%3D%7B2%7D%20backgroundColor%3D'positive'%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A%0A%20%20%0A%20%20import%20%7B%0A%20%20%20%20ListView%0A%20%20%7D%20from%20'react-native'%0A%0A%20%20function%20noop()%20%7B%0A%20%20%20%20console.log('button%20pressed')%0A%20%20%7D%0A%0A%20%20const%20ds%20%3D%20new%20ListView.DataSource(%7B%0A%20%20%20%20rowHasChanged%3A%20(r1%2C%20r2)%20%3D%3E%20r1%20!%3D%3D%20r2%0A%20%20%7D)%0A%0A%20%20const%20Module%20%3D%20(%7B%20examples%20%7D)%20%3D%3E%20%7B%0A%0A%20%20%20%20const%20datas%20%3D%20ds.cloneWithRows(examples)%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CBase%0A%20%20%20%20%20%20%20%20Component%3D%7BListView%7D%0A%20%20%20%20%20%20%20%20dataSource%3D%7Bdatas%7D%0A%20%20%20%20%20%20%20%20renderRow%3D%7B(row)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CBase%20py%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20px%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mb%3D%7B1%7D%20bold%3E%7Brow.title%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CBase%20%7B...row.props%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Brow.render()%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBase%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20renderSeparator%3D%7B(a%2C%20b)%20%3D%3E%20%3CDivider%20key%3D%7Ba%20%2B%20b%7D%20%2F%3E%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20)%0A%20%20%7D%0A%0A%20%20const%20App%20%3D%20()%20%3D%3E%20%3CModule%20examples%3D%7BExamples()%7D%20%2F%3E%0A%0A%20%20ReactNative.AppRegistry.registerComponent('App'%2C%20()%20%3D%3E%20App)%0A" 790 500 %}

## Text

\`\`\`js
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
\`\`\`
`

// Generate markdown for all of our docs
keys.forEach((key, i) => {
  const file = documents[key]
  file.forEach((comp) => {
    const name = comp.displayName
    try {
      if (!name) {
        throw new Error(`No displayName for: ${key}`)
      }
      const md = generateHeader(comp, 100 + i) + '\n' + //eslint-disable-line
        buildCompositionLinks(comp.description) +
        generateProps(comp.props)
      ;

      // const md = generateMarkdown(name, comp)
      // const exampleExists = fs.existsSync(
      //   `${__dirname}/../api/examples/${name}.js`
      // )
      // const exampleBuffer = exampleExists
      //   ? fs.readFileSync(
      //     `${__dirname}/../api/examples/${name}.js`,
      //     { encoding: 'utf-8' }
      //   ) : ''
      //
      // const example = buildExampleBuffer(exampleBuffer)
      // header += `\n${md}\n\n`
      fs.writeFileSync(`${__dirname}/../source/elements/${name}.md`, md) // eslint-disable-line
    } catch (err) {
      console.warn(err) // eslint-disable-line
    }
  })
})

// fs.writeFileSync(`${__dirname}/../source/elements.md`, header) // eslint-disable-line
