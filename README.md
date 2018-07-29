#Operação com Array Javascript
```bash
Primeira solução que pensei apesar que ficou com complexidade elevada. 
Porém foi a que satifez já que é necessario alterar um dos array enquanto 
ocorre a ação e checar o indice.
 - Refatorar

```

```bash

É preciso somar cada key do primeiro array com todas as keys do segundo array mas individualmente 
fazendo um push() em "summedResults", porém somente com as seguintes condições abaixo



1) Não somar quando for os mesmos índices dos objetos de cada array.
2) A soma de cada key não pode ser maior que 296296.
3) Remover a key do "packs2" (somada com sucesso) para não somar na próxima interação.
4) Se alguma key do packs1 não retornou soma, fazer o push() dele mesmo em "remainingPacks"
5) Se a soma da key do "packs1" for efetuada com sucesso com alguma key do
 "packs2", então não deve tentar somar com as seguintes, pois as keys
 restantes do "packs2" devem ficar para a próxima interação de soma.
 ```

Arrays
```bash
const packs1 = [ 
  { dimensions: 295200 },
  { dimensions: 247500 },
  { dimensions: 247500 },
  { dimensions: 123750 },
  { dimensions: 79200 },
  { dimensions: 8400 },
  { dimensions: 5000 } 
]
const packs2 = [ 
  { dimensions: 295200 },
  { dimensions: 247500 },
  { dimensions: 247500 },
  { dimensions: 123750 },
  { dimensions: 79200 },
  { dimensions: 8400 },
  { dimensions: 5000 } 
]
const remainingPacks = [];
const summedResults = [];
```