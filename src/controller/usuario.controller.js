const userService = require("../service/usuario.service");

const findUserByIdController = async (req, res) => {
    try{
        const user = await useService.findUserByIdService(req.params.id);

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

const findAllUsersController = async (req, res) => {
    try{
       return res.status(200).send(await userService.findAllUsersService());
    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!`});  
    }
};

const createUserController = async (req, res) => {
    try{
        const body = req.body;

        if(!body.nome){
            return res.status(400).send({ message: 'O campo Nome precisa ser preenchido!'});
        }

        return res.status(201).send(await userService.createUserService(body));
    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!`});  
    }
};

const updateUserController = async (req, res) => {
    try{
        const body = req.body;

        if(!body.nome){
            return res.status(400).send({ message: 'O campo Nome precisa ser preenchido!'});
        }

        return res.send(await useService.updateUserService(req.params.id, req.body));

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!`});  
    }
};

const removeUserController = async (req, res) => {
    try{

        const deletedUser = await userService.removeUserService(req.params.id);

        console.log(deletedUser);

        if(deletedUser == null){
            res.status(404).send({ message: `Usuário não encontrado, tente novamente!`});   
        }else{
            res.status(200).send({ message: `Sucesso, usuario deletado!`});  
       }

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!`});  
    }
};

const addUserAddressController = async (req, res) => {
    try{
        req.body.createdAt = new Date();
        const endereco = await userService.addUserAddressService(req.params.id, req.body);

        if(endereco.ok == 1){
            res.status(201).send({ message: ` Endereço adicionado com Sucesso!`});  
        }else{
            res.status(400).send({ message: `Algo deu errado no endereço, tente novemente!`});   
        }

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!`});  
    }
};

const removeUserAddressController = async (req, res) => {
    try{
        const endereco  = await userService.removeUserAddressService(req.body.id, req.body.addressId);

        if(endereco.ok == 1){
            res.status(200).send({ message: ` Endereço removido com Sucesso!`});  
        }else{
            res.status(400).send({ message: `Algo deu errado no endereço,  não foi removido, tente novemente!`});   
        }

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!`});  
    }
};

const addUserFavProductController = async (req, res) => {
    try{




    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!`});  
    }
};

const removeUserFavProductController = async (req, res) => {
    try{




    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!`});  
    }
};

module.exports = {
    findUserByIdController,
    findAllUsersController,
    createUserController,
    updateUserController,
    removeUserController,
    addUserAddressController,
    removeUserAddressController,
    addUserFavProductController,
    removeUserFavProductController,
};