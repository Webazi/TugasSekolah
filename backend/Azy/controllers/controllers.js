import path from 'path';
import { Op } from "sequelize";
import { Datas, User } from '/workspaces/TugasSekolah/backend/Azy/models/models.js';

// Controller
export const Datass = async (req, res) => {
    try {
        const data = await Datas.findAll();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const Search = async (req, res) => {
    try {
        const { name } = req.body; // menggunakan query string jika nama di query
        console.log(name);

        if (!name) {
            console.log("Perlu masukan data");
            return res.status(401).json({ message: "Anda tidak mencari apapun" });
        } else {
            const data = await Datas.findAll({
                where: {
                    name:{
                        [Op.like]: `%${name}%`
                    }
                }
            });
            if (!data) {
                return res.status(401).json({ message: "Data tidak ditemukan" });
            } else {
                res.json(data);
            }
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create = async (req, res) => {
    if(req.files==null) return res.status(400).json({message:"File harus diisi"});
    const { name, harga } = req.body;
    const file = req.files.image;
    const paths = path.extname(file.name);
    const image = file.md5 + paths;
    const url = `${req.protocol}://${req.get("host")}/uploads/${image}`; 
    file.mv(`/workspaces/TugasSekolah/public/uploads/${image}`);
    
    try {

        if (!name || !harga || !image) {
            return res.status(401).json({ message: "Semua field harus diisi" });
        }

        const query = await Datas.create({
            name,
            img: image,
            harga
        });

        res.status(201).send("<h1>Berhasil membuat data</h1> <a href='/'>Kembali</a>");
    } catch (error) {
        res.status(404).json({ message: "Gagal membuat data", error: error.message });
    }
};

export const SignUp = async (req, res) => {
    const { email, nama, password } = req.body;
    try {
        const quer = await User.findOne({
            where: {
                email: email
            }
        });
        if (quer) {
            return res.status(401).json({ message: "Email sudah terdaftar" });
        }
        if (!email || !nama || !password) {
            return res.status(401).json({ message: "Semua field harus diisi" });
        }

        const query = await User.create({
            email,
            nama,
            password
        });

        res.status(201).json({ message: "Berhasil membuat data" });
    } catch (error) {
        res.status(404).json({ message: "Gagal membuat data", error: error.message });
    }
}