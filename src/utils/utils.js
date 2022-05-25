
/**
 * function to remove duplicated keys from duplicated array and return new unique keys
 * @param {*} array array of objects from raw sever data
 * @param {*} key key of array of objects 
 * @returns uniqueExtractedValues
 */

export function generateUniqueKeys(array, key) {
    const arrayObjectsKeys = array?.map(obj => obj[key])
    const uniqueExtractedValues = [...new Set(arrayObjectsKeys)]
    return uniqueExtractedValues
}