"use strict";
/** eslint-disable **/

const docs = require('../docs.json')
const fs = require('fs')
const buildExampleBuffer = require('./generate-examples')
const groupBy = require('lodash.groupby');

function removeLineBreaks(text) {
  return text.replace(/(\r\n|\n|\r)/gm,"")
}

function escapeHtml(unsafe) {
  return unsafe
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#039;");
}

function generateTitle(name) {
  return `## ${name}\n\n`
}

function generateHeader(folderName) {
  return `## ${folderName}\n---\n\n`
}

function generateMeta(component, order) {
  return `---
title: ${component.displayName}
order: ${order}
description: ${component.description.replace(/(\r\n|\n|\r)/gm,"")}
---
`
}

function generateFolderMeta(folderName, order) {
  return `---
title: ${folderName}
order: ${order}
---\n
`}

// we could eventually build this tree using babel.
// would be a fun hack project.
function generateDescriptionWithLinks(description) {
  if (!description) return ''

  description = removeLineBreaks(description)
  const regex = /@Composes(.*)/i
  const comp = description.match(regex)
  var newDescription = description.replace(regex, '')

  const platformRegex = /@Platform/i
  newDescription = newDescription.replace(platformRegex, '__Platforms__: ')

  if (comp && comp[1]) {
    const m = comp[1]
    const links = m.split(',').map((c) => {
      return `[${c.trim()}](/components/${c.trim()}.html)`
    }).join(', ')

    return `${newDescription || ''} \n __Composes__: ${links} \n\n`
  }

  return `${newDescription}\n\n`
}

function generatePropType(type) {

  if (!(type && type.name)) {
    return ''
  }

  if (!type.value) {
    return type.name;
  }

  let values = '';
  if (Array.isArray(type.value)) {
    const valueList = type.value
    .map(t => t.name || t.value)
    .join(',');
    values += `(${valueList})`
  } else {
    values = type.value
  }

  return `${type.name}${values}`
}

function generatePropDefaultValue(value) {
  if (!value) return ' '
  return `> _defaultValue: \`${value.value}\`_`
}

function generateProp(propName, prop) {
  const required = prop.required ? ' (required)' : ''
  const description = prop.description || ''
  const type = generatePropType(prop.type)
  const df = generatePropDefaultValue(prop.defaultValue)

  return `> \`${propName}\` _${type}_ ${required}
> ${description}
${df}\n\n`
}

function generateProps(props) {
  if (!props) return ''

  const propList = Object.keys(props)
    .filter(name => (
      name !== 'panza' && name !== 'children'
    ))
    .map(name => (
      generateProp(name, props[name])
    ))
    .join('\n')

  return `**Props**\n\n${propList}`
}

// var header = `---
// title: Component API
// order: 1
// description: A list of all components provided by Panza and their props
// ---
// `

function groupDocsByFolder(docs) {
  return groupBy(Object.keys(docs), path => path.split('/')[3])
}

const docFolders = groupDocsByFolder(docs);

// Generate markdown for all of our docs
Object.keys(docFolders).forEach((folderName, i) => {
  let header = generateFolderMeta(folderName, 10 + i);

  docFolders[folderName].forEach(path => {
    const components = docs[path]
    components.forEach(Component => {
      try {
        if (!Component.displayName) {
          throw new Error(`No displayName for: ${path}`)
        }
        const md = generateTitle(Component.displayName) +
          escapeHtml(generateDescriptionWithLinks(Component.description)) +
          generateProps(Component.props);

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
        header += `\n${md}\n\n`
        // fs.writeFileSync(`${__dirname}/../source/elements/${name}.md`, md) // eslint-disable-line
      } catch (err) {
        console.warn(err) // eslint-disable-line
      }
    })
  })
  fs.writeFileSync(`${__dirname}/../source/components/${folderName}.md`, header) // eslint-disable-line
})

// fs.writeFileSync(`${__dirname}/../source/components.md`, header) // eslint-disable-line
