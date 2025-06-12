import { Category } from "../models";

export const categoryService = {
    findAllPaginated: async (page: number, limit: number) => {
         const offset = (page -1) * limit;
         
        const { count, rows } = await Category.findAndCountAll({
            attributes: ['id', 'name', 'position'],
            order: [['position', 'ASC']],
            limit,
            offset
        })

        return {
                categories: rows,
                page,
                limit,
                total: count
            }
    }
}