export function getPaginationParams(query: any) :[page: number, perPage: number] {
    const { page ='1', perPage ='10' } = query;
        const pageNumber = +page;
        const limit = +perPage; 

        return [pageNumber, limit]
}