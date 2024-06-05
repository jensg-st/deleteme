
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

    fn.execute(
        {
            input: {
                files: [
                    {
                        name: "hello.txt",
                        permission: 755,
                        content: "hello world"
                    }
                ],
                commands: [
                    {
                        command: "ls -la"
                    }
                ]
            }
        }
    )
 
    return file.base64()
}

