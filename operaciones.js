function suma(a, b) {
    return a + b;
}

const persona = {
    nombre: "Juanito"
}

function getNombre(params) {
    return persona.nombre;
}

exports.suma = suma;
exports.getNombre = getNombre;
