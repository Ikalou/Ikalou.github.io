const fs = require('fs')

const dir = fs.opendirSync('times')
let dirent
let times = {}
while ((dirent = dir.readSync()) !== null) {
    times[dirent.name.split('.')[0]] = JSON.parse(fs.readFileSync('times/' + dirent.name))
}
dir.closeSync()

fs.writeFileSync('times.json', JSON.stringify(times))