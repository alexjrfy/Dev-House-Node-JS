/*
Index: listagem de sessoes
store: criar uma sessão
show: listar unica sessão
update: alterar sessão
destroy: excluir uma sessão
*/

import User from '../models/User';

class SessionController{ 

    async store(req, res){
        const {email} = req.body;

        

        let user = await User.findOne({email:email});
        if(!user){
            let user = await User.create({email:email});
        }

        return res.json(user);
    }

}

export default new SessionController();