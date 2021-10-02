// 1) Declarar una clase Usuario

// 2) Hacer que Usuario cuente con los siguientes atributos:
// nombre: String
// apellido: String
// libros: Object[]
// mascotas: String[]

class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

// 3) Hacer que Usuario cuente con los siguientes métodos:
// getFullName(): String. Retorna el nombre completo del usuario. Utilizar template strings.

getFullName() {
    console.log(`El nombre de usuario es: ${this.nombre} y su apellido es: ${this.apellido}`);
}

// addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.

addMascota(nombreMascota) {
    this.mascotas.push(nombreMascota);
}

// countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.

countMascotas() {
    console.log(this.mascotas.length);
}
// addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.

addBook(nombre, autor) {
    this.libros.push({ nombre, autor });
}

// getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.

getBookNames() {
    const arrayNombreLibros = this.libros.map((libro) => libro.nombre);
    console.log(arrayNombreLibros);
}
}
// 4) Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos.

const usuario1 = new Usuario(
    "Jane",
    "Doe",
    [
        { nombre: 'La filosofia de house', autor: 'Henry Jacoby' },
        { nombre: 'Mad Men and Philosophy', autor: 'James B., Carveth' },
        { nombre: 'Libro 3', autor: 'Desconocido' }
    ],
    ['Kaiser', 'Levi', 'Reiner']
);

usuario1.addMascota("Mikasa");

usuario1.getFullName();
usuario1.countMascotas();
usuario1.countMascotas();
usuario1.getBookNames();
