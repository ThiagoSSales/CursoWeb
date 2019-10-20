const obj = {
    _temp: 0,

    get temperatura() {
        return this._temp
    },

    set temperatura(temp) {
        if (temp < 0) {
            throw new Error('Temperatura deve ser maior que 0!')
        } else {
            this._temp = temp
        }
    }
}

try {
    obj.temperatura = 10
    console.log(obj.temperatura)

    obj.temperatura = -5
    console.log(obj.temperatura)
} catch (e) {
    console.log(e.message)
}