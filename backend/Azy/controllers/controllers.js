import {Datas, User} from '/workspaces/TugasSekolah/backend/Azy/models/models.js';


export const Datass = async (req,res)=>{
    try{
        const data = await Datas.findAll()
        res.json(data)
    } catch  (error){

    }
}
export const Search = async (req,res)=>{
    try{
        const data = await Datas.findOne()
        res.json(data)
    } catch  (error){

    }
}