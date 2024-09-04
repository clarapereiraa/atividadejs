module.exports = class controllersNumber{
    //cadastro de professor
    static async postTeacher(req,res){
        const { checkPar, checkImpar } = req.body;
        if(!checkpar || !checkImpar){
            res.status(400).json({message:"O número é par"});
        }
        else{
            res.status(200).json({message:'O número é impar', checkPar, checkImpar});
        }
    }
    //lista de professor 
    static async postTeacher(req,res){
        res.status(200).json({nome: "Clara"})
}
}