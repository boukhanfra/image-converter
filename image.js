/**
 * This file contain JS code which is runnable by nodejs plateform
 * This program aim to replace color in the existing images in the current folder
 * /!\: file search is recurrsive and there is no depth limit
 */

/**
 * package replace-color is used to replace color in image
 */
const replacer = require('replace-color')

/**
 * findit2 is library to do recursive search in the file system.
 * It use event pattern to dispatch the result
 */
const finder = require('findit2')(__dirname)

/**
 * `path` is used to get information about a file
 */
const path = require('path')

/**
 * hex code of the color to replace
 */
let targetColor =  '#DADAFF'

/**
 * hex code of the replace color
 */
let replaceColor = '#FFFFFF'

/**
 * Counter for processed image
 */
let processed = 0;

/**
 * for loading env var in the node process
 */
require('dotenv').config()

/**
 * This event est fired when the iterator match a directory.
 * It ignore node_modules directory
 */
finder.on('directory', function (dir, stat, stop, linkPath) {
    const base = path.basename(dir)
    if (base === 'node_modules') {
        stop()
    }
})

/**
 * This event est fired when the iterator match a file.
 * with `path`, we get file extension to filtre result and get only images
 * /!\: extensions of images can be set in the env var.
 */
finder.on('file', function(file) {
    if ((process.env.IMAGE_EXSTENSIONS?.split(',') || ['.png']).includes(path.extname(file))) {
        processImage(file)
        processed++;
    }
});

/**
 * Event fired at the end of file search.
 * It show the number of processed images
 */
finder.on('end', function() {
    console.log(`processed images: ${processed}`);
});


/**
 * function that replace `#DADAFF` color by `#FFFFFF` color
 * it also replace the content of the image with the same filename 
 * and in the same folder
 * @param {*} imagePath string
 */
const processImage = (imagePath) => {
    /**
     * replace image color based on `replace-color` package. it using Jimp library
     */
    replacer({
        image: imagePath,
        colors: {
            type: 'hex',
            targetColor: targetColor,
            replaceColor: replaceColor
        }
    }).then((jimpObject) => {
        /**
         * Writing the file in the same origin path
         */
        jimpObject.write(imagePath, (error) => {
            if (error) {
                console.log(error)
            }
        })
    }).catch((error) => console.log(error))
}
