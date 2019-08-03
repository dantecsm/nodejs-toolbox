const fs = require('fs')

var filesArr = process.argv.splice(2)

console.log('正在尝试合并' + filesArr.toString())

var mergedData = filesArr.reduce((arr, file) => {
	console.log(`正在读取 ${file}`)
	return arr.concat(JSON.parse(fs.readFileSync(file)))
}, [])

console.log('开始写入 total.json')
fs.writeFileSync('total.json', JSON.stringify(mergedData))
