const IMAGE_API_URL = 'https://picsum.photos/200/300'
const imageElement = document.getElementById('image')


function myFetch(IMAGE_API_URL) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', IMAGE_API_URL)
        xhr.setRequestHeader('Context-type', 'application/json')
        xhr.responseType = 'blob'
        xhr.onload = () => {
            if (xhr.response >= 400) {
                resolve(xhr.response)
            } else {
                const response = {
                    data: xhr.response,
                    json() {
                        return new Promise((resolve, reject => {
                                const reader = new FileReader();
                                reader.onload = (e) => {
                                    console.log(e.target.result)
                                    resolve(JSON.parse(reader.result))
                                }
                                reader.readAsText(this.data)
                            }
                        ))
                    },
                    blob() {
                        console.log(this.data)
                        return Promise.resolve(this.data)
                    }

                }
                resolve(response)
            }
            xhr.onerror = () => {
                reject(xhr.response)
            }
        }
        xhr.send()
    })
}

myFetch(IMAGE_API_URL)
    .then(response => response.blob())
    .then(blob => {
        const reader = new FileReader()
        reader.onload = () => {
            insertImage(reader.result)
        }
        reader.readAsDataURL(blob)
        return blob
    }).then(response => response.json())
    .catch(e => {
        console.log(`Error : ${e}`)
    })


function insertImage(src) {
    imageElement.src = src
}
