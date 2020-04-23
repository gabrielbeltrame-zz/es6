class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();

    this.usuario = "Gabriel";
  }

  mostraUsuario() {
    console.log(this.usuario);
  }
}

const MinhaLista = new TodoList();

document.getElementById("novotodo").onclick = function () {
  MinhaLista.add("Novo todo");
};

MinhaLista.mostraUsuario();

// Métodos estaticos

class Matemtica {
  static add(a, b) {
    return a + b;
  }
}

console.log(Matemtica.add(1, 2));

// Vatores

const arr = [1, 3, 4, 5, 8, 10];

const newArr = arr.map((item, index) => {
  return item * index;
});

// console.log(newArr);

const sum = arr.reduce(function (total, next) {
  return total + next;
});

// console.log(sum);

const filter = arr.filter((item) => item % 2 === 0);

// console.log(filter);

const find = arr.find((item) => item === 4);

// console.log(find);

// Desestrutiração de objetos

const usuario = {
  nome: "Gabriel",
  idade: 27,
  endereco: {
    cidade: "São Paulo",
    estado: "SP",
  },
};

const {
  nome,
  idade,
  endereco: { cidade },
} = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

// Rest/Spread
//REST, serve para pegar o resto das propriedades

const usuario = {
  nome: "Gabriel",
  idade: 27,
  empresa: "Gawi",
};

const { nome, ...resto } = usuario;

const arr = [1,2,3,4];
const [a, b, ...c];

function soma(...params) {
  return params.reduce((total, next) => total + next);
}

 // Spread
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1, ...arr2];

// Template Literals

const nome = "Gabriel";
const idade = 27;
console.log(`Meu nome é ${nome} e tenho ${idade} anos`);

// Object Short Syntaz
const usuario = {
  nome,
  idade,
  empresa: 'Gawi'
}