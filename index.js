/**
 * @description LENGTH - Nos diz quantos elementos essa array contém.
 * @description Se não passar a propriedade 'length' irá mostrar os dados do array e não a quantidade de elementos dentro do mesmo.
 */

/*const notebook = ['Acer', 'Samsung', 'Dell', 'Msi', 'Positivo', 'HP'];
console.log(notebook.length);
console.log(notebook)

// Acessa um item do array que você deseja
const acessaItem = notebook[4]
console.log(acessaItem)

// Acessa o array de tras para frente
const ultimoItems = notebook[notebook.length - 2];
console.log(ultimoItems)



/**
 * @description PUSH () - Recebe um parâmetro que será adicionado no final de uma array
 * @description POP () - Faz exatamente o contráriodo push, removendo o último parâmetro de um array OBS: Mesmo passando parâmetro irá remover o ultimo
 */

/*const umaArray = []
umaArray.push('Marcos', 'Lucas', 'David')
console.log(umaArray)

/*umaArray.pop()
console.log(umaArray);

/**
 * @description SHIFT - Remove o primeiro item do array. OBS: Mesmo passando valor ele irá remover o primeiro item e não apresentará erro
 * @description UNSHIFT - Adiciona um item no inicio do array. OBS: Se não passar nada irá acrescentar em branco.
 */

/*const RemovInicio = umaArray.shift();
console.log(umaArray)

const AddInicio = umaArray.unshift('Matheus')
console.log(umaArray)

/**
 * @description IndexOf - Procura um item no array e informa a posição do mesmo. OBS: indexOf () é case sensitive
 * @description SPLICE - Pode ser utilizado para remover items dentro do array passando posição que deseja começar ou passando apenas a quantidade que deseja apagar do array.
 * @description SPLICE - Tambem pode ser utilizado para copiar um array, passando nome do array acrescentando o 'SLICE(vazio)' - Exemplo: nomeDoArray.splice ()
 */

/*const frutas = ['Manga', 'Banana', 'Morango', 'Maça']
console.log(frutas)

const posicao = frutas.indexOf('Manga');
console.log(posicao)


console.log('Array: ' + frutas)
const pos = 1,
    n = 2
const RemoveItemPos = frutas.splice(pos, n);
// 'n' define o número e items que desejo remover e 'pos' de qual parte desejo começar a contagem do array para remover os items
console.log('Array apos items removidos: ' + frutas)
console.log('Items removidos: ' + RemoveItemPos)


const copiar = frutas.slice();
console.log(copiar)

/**
 * @description Filter - filtra os dados de um array po um determinado valor.
 * @description Reduce - Pode receber 4 arqgumentos (Acumulador (acc), valorAtual (cur), indexAtual (idx), Arrayoriginal (src)). é atributo de acumular/somar
 * Reduce busca reduzir um array. Ele iterará por cada elemento dessa lista com o objetivo de ao final gerar um único valor (de qualquer tipo), como por exemplo a soma de todos os elementos desse array. Lembrando que não ficamos presos apenas a números
 * @description Find - Retorna o valor do primeiro elemento do array que satisfazer a função provida. Executa a função Callback uma vez para cada elemento presente no array até encontra o retorno e retorna TRUE, caso contrario find retorna 'undefined'
 * Find adicionado 3 argumentos: o valor do elemento, o indice do elemento e o objeto do array que está sendo cruzado. Find se encontrar o valor ele para mostra o valor e não percorre mais o array.
 *
 */
/*
const numero = (value) => {
    return value >= 10;
}
const filtered = [10, 11, 3, 5, 130, 9, 50].filter(numero);
console.log(filtered)

const found = filtered.find(element => element >= 130);
console.log(found);

const soma = (acc, cur) => acc + cur;
console.log(filtered.reduce(soma));

/*
const data = [{
        name: 'Labrador',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Persa',
        age: 6,
        type: 'cat'
    },
    {
        name: 'Pit Bull',
        age: 1,
        type: 'dog'
    },
    {
        name: 'Dobermann',
        age: 10,
        type: 'dog'
    },
    {
        name: 'Siamês',
        age: 7,
        type: 'cat'
    },
]

const cat = data.filter((animais) => {
    return animais.type === 'cat';
})
console.log(cat)


/**
 * @description SORT - ordena os elements do array e retorna o array. A ordenação é padrão de acordo com a pontuação de código unicode.
 */
const nomes = ['word', 'Word', '1 Word', '2 Word'];
//Em Unicode, números veem antes de letras maiuculas e as quais vem antes das minusculas
const ordena = nomes.sort();
console.log(ordena)

const numeros = [1, 10, 2, 21];
// OBS: 10 vem antes do numero 2, porque em ponto de código Unicode
const ordenaN = numeros.sort();
console.log(ordenaN)