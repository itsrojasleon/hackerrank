/*
  Designer PDF Viewer
*/
/*
  https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
*/

function designerPdfViewer(h, word) {
  let wordNums = word.split('').map(l => l.charCodeAt(0) - 96);
  let values = [];

  for (let i = 0; i < wordNums.length; i++) {
    for (let j = 0; j < h.length; j++) {
      if (wordNums[i] === j + 1) {
        values.push(h[j]);
      }
    }
  }
  return Math.max(...values) * word.length;
}
