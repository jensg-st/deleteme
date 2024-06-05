
const fn = setupFunction({
    image: "golang"
    cmd: "direktiv"
})

function start(state) {
 


    var s = getSecret({
        name: "jens"
    })
 
 
    var file = getFile({
        name: "content.txt"
        scope: "shared"
    })
 
    return file.base64()
}