const fs = require('fs')
const path = require('path')
const express = require('express')
const archiver = require('archiver')

const app = express();
const port = 8000;

// fs.mkdir(path.join(__dirname,'Image'),(err)=>{
//     if (err){
//         throw err
//     }
//     console.log('Папка создана')
// })

// const imageFilePath=path.join(__dirname,'Image/pitbull.jpg')
// const changeFormatFile=path.join(__dirname,'Image/pitbull.jpeg')
// const changeFormatSecond=path.join(__dirname,'Image/pitbull.png')
//
// async function changeImage() {
//     const rs=fs.createReadStream(imageFilePath)
//     const ws=fs.createWriteStream(changeFormatFile)
//     const sws=fs.createWriteStream(changeFormatSecond)
//     await rs.pipe(ws)
//     await rs.pipe(sws)
// }
// changeImage()

const srcFilePath = path.join(__dirname, 'Image')
const zipDir = path.join(__dirname, 'newImage.zip')


 function createArchive() {
    const archive = archiver('zip', {
        zlib: {
            level: 9
        }
    })
    const ws = fs.createWriteStream(zipDir)
    return new Promise((resolve, reject) => {
        archive.directory(srcFilePath)
        archive.on('err', error => reject(error))
        archive.pipe(ws)
        ws.on('close', () => resolve())
        archive.finalize()
    })
}
createArchive()


app.get('/',(req,res)=> {
    res.sendFile(zipDir)
})
app.get('/',(req,res)=>{
    res.send('Hello Express')
})
app.listen(port,()=>console.log(`Server done port: ${port}`))


