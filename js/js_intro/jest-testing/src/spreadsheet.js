/**
 * this is the same bug from last time
 * But the challenge this time is to write a unit test 
 * which exposes the bug. Ie, yur unit test should be failing because of
 * the bug, and pass when it's fixed
**/
function duplicateSpreadsheet(original) {
    original = JSON.parse(JSON.stringify(original))
    let copy = {
      created: Date.now(),
      author: original.author,
      cells: original.cells,
      metadata: original.metadata
    }
    copy.metadata.title = 'Copy of ' + original.metadata.title
    return copy
  }



  module.exports = duplicateSpreadsheet


  