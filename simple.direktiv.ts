function start(state) {
 
    var s = getSecret({
        name: "jens"
    })
 
 
    var file = getFile({
        name: "content.txt"
    })
 
    return s
}