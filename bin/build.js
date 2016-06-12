// external imports
import pug from 'pug'
import path from 'path'
import fs from 'fs'

// the project root dir
const projectRoot = path.join(__dirname, '..')
// the location of the index template
const templatePath = path.join(projectRoot, 'slides', 'index.pug')
// the target location for the final product
const buildPath = path.join(projectRoot, 'index.html')

// compile the template file
const template = pug.compileFile(templatePath)

// the template context variables
const context = {}

// render the template to the target directory
fs.writeFile(buildPath, template(context), (err) => {
    // if there was an error
    if (err) {
        // print it
        return console.log(err)
    }
    // otherwise the file was saved correctly
    console.log('Successfully built slides')
})