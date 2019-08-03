const fs = require('fs')

const iFile = process.argv[2]
const oFile = `ES${iFile}`

async function main() {
	var objArr = JSON.parse(await readLargeFileSync(iFile, 'utf8'))
	var arr = objArr.map(obj => {
		var o = {}
		obj.aid = +obj.aid
		obj.tid = +obj.tid
		obj.cid = +obj.cid
		obj.videos = +obj.videos
		o["_source"] = obj
		return JSON.stringify(o)
	})

	var str = arr.join('\n')

	try {
		fs.writeFileSync(oFile, str)
	} catch(e) {
		console.log(e)
	}
}

async function readLargeFileSync(filename, encoding) {
	return new Promise((resolve, reject) => {
		var data = ''

		var readerStream = fs.createReadStream(filename)
		readerStream.setEncoding(encoding)

		readerStream.on('data', function(chunk) {
			data += chunk
		})

		readerStream.on('end',function(){
			resolve(data)
		})
	})
}

main()
