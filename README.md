## market-place_nodejs

O codigo do mais novo market place

## Instalação

1. Baixe todo o código
2. Abra o terminal do VS Code
3. Execute: npm i
4. Rode usando: npm run dev

## EndPoints

Todos os endpoints da nossa aplicação serão listados abaixo

### Usuario

Todos os endpoints da nossa aplicação serão listados abaixo

#### /findById


| Codigo | resposta                                                     |
| -------- | -------------------------------------------------------------- |
| 200    | retorna um usuario valido                                    |
| 400    | retorna uma mensagem informando o erro                       |
| 401    | retorna o erro de autenticacao                               |
| 404    | retorna uma mensagem informando que não encontrou o usuario |


````javascript
const findUserByIdController = async (req, res) => {
    try{
        const user = await userService.findUserByIdService(req.params.id);

        if(!user){
            return res.status(404).send({message: "Usuario não encontrado, tente novamente"});
        }

        return res.status(200).send(user);

    }catch (err){
        if(err.kind == "ObjectId"){
            console.log(err.kind == "ObjectId");
            return res.status(400).send({ message: `ID informado, esta incorreto, tente novamente!`});  
        }

        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!`});  
    }
};
````

### Produto

Todos os endpoints de produto listado abaixo
