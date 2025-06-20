import { Request, Response } from "express";
import { categoryService } from "../services/categoryService";
import { getPaginationParams } from "../helpers/getPaginationParams";

export const categoriesController = {
    index: async (req: Request, res: Response) => {
        const [pageNumber, limit] = getPaginationParams(req.params);

        try {
            const paginatedCategories = await categoryService.findAllPaginated(pageNumber, limit);
            
            return res.json(paginatedCategories);
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({ message: err.message }); 
        }
    }
    },
    
    show: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const category = await categoryService.findByIdWithCourses(+id);
            res.json(category)
        } catch (error) {
            if (error instanceof Error) {
            return res.status(400).json({ message: error.message }); 
        }
        }
    }
}