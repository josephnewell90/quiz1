'use strict';

/**
 * @function fileExtension
 * @description gets the file extension from the given filename
 * @param {String} name - The name of the file
 * @return {String|Boolean} The extension (without the period) or false if no
 * extension
 */
module.exports = function fileExtension(name) {
  var splitString = name.split('.');
  var extensionLocation = splitString.length - 1;
  if (extensionLocation <= 0) {return false;}  /* If no file extension, return false */
  var fileExtension = splitString[extensionLocation];
  return fileExtension;
};
