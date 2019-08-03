/*
 * @description: 这是一个执行 "node index 文件名" 就能分解文件的脚本工具（#2）
 * @input: rid.json
 * @output: rid_1_10.json, rid_11_20.json, ......
 */

const fs = require('fs')

var inputFile = process.argv[2]
var pageURL = JSON.parse(fs.readFileSync(inputFile, 'utf8'))

var lB = 1
var uB = 10

while(pageURL.length > 0) {
  var splitURL = pageURL.splice(0, 100000)
  var filename = `${inputFile.split('.')[0]}_${lB}_${uB}.json`
  fs.writeFileSync(filename, JSON.stringify(splitURL))
  lB += 10
  uB += 10
}