
function try_catch() {
    try {
        if (Math.random() > 0.3)
            throw new Error()
        return
    } catch (e) {

    } finally {
        console.log('Finalmente!')
    }
}

try_catch()