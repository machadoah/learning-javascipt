# Algorithm topics in JS

## Primitive types

|Primitive Types | Description |
| -------------- | ----------|
|String          |Character string|
|Number| Represents numbers (integers and floating point)|
|Boolean| **true** or **false**|
|Undefined|Variable declared worthless|
|Null|Variable declared null|
|Symbol| value unique|

Example with number, null and undefined:

![Alt text](image.png)

### Curiosidades sobre `null`

```
typeof null // object (bug in ECMAScript, deveria ser null)
typeof undefined // undefined
null === undefined // falso
null == undefined // verdadeiro
```

## Arrays

Arrays are ...

- **Lista de dados**
  Armazena dados de todos os tipos em um 'grupo' (podemos comparar com uma lista)

- **Iterável**
  Podemos percorrer item por item e executar algum bloco de código

- **Estruturados por índices e valor**
  Os índices começam em 0 (zero)

## Objeto

Object is ...

- **Representa uma unidade**
  Uma pessoa, um formulário, um carro, etc.

- **Estruturado por chave e valor**
  ```
  'name': 'Victor'
  ```
  - **name** is key
  - **Victor** is value

- **Possui propriedades**
  Que são as chaves e valores pertencentes ao objeto.