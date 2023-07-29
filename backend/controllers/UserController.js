import { Op } from "sequelize";
import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
    // membtuhkan 3 parameter


    // 1. page -> currentp agenya
    // jika user tidak memberikan pagenya, secara default nilainya 0
    const page = parseInt(req.query.page) || 0

    // 2. limit -> batas data yang kita tampilkan
    const limit = parseInt(req.query.limit) || 10

    // 3. search -> menampung keyword yg diketik user
    const search = req.query.search_query || ""

    const offset = limit * page

    // menghitung record
    const totalRows = await User.count({
        where: {
            [Op.or]: [{
                name: {
                    [Op.like]: '%' + search + '%'
                }
            }, {
                email: {
                    [Op.like]: '%' + search + '%'
                }
            }]
        }
    })

    const totalPage = Math.ceil(totalRows / limit)
    const result = await User.findAll({
        where: {
            [Op.or]: [{
                name: {
                    [Op.like]: '%' + search + '%'
                }
            }, {
                email: {
                    [Op.like]: '%' + search + '%'
                }
            }]
        },
        offset: offset,
        limit: limit,
        order: [
            'id', 'DESC'
        ]
    })
    res.json({
        result: result,
        page: page,
        limit: limit,
        totalRows: totalRows,
        totalPage: totalPage
    })
}