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
    },

    findByIdWithCourses: async (id: number) => {
        const categoryWithCourses = await Category.findByPk(id, {
            attributes: ['id', 'name'],
            include: {
                association: 'courses',
                attributes: ['id', 'name', 'synopsis', ['thumbnail_url', 'thumbnailUrl']]
            }
        });

        return categoryWithCourses
    }
}