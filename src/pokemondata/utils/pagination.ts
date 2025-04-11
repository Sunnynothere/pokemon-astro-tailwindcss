const TOTAL_POKEMON = 60; // New constant
const ITEMS_PER_PAGE = 6; // New constant

export const getPaginationData = (currentPage: number) => { // Simplified parameters
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const totalPages = Math.ceil(TOTAL_POKEMON / ITEMS_PER_PAGE);
  
    const pageRange = Array.from(
      { length: totalPages }, 
      (_, i) => i + 1
    ).filter(page => 
      page === 1 || 
      page === totalPages || 
      (page >= currentPage - 2 && page <= currentPage + 2)
    );
  
    return {
      currentPage,
      totalPages,
      itemsPerPage: ITEMS_PER_PAGE,
      offset,
      pageRange,
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1,
      nextPage: currentPage + 1,
      prevPage: currentPage - 1
    };
  };