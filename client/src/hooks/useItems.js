import {useMemo} from "react";

export const useSortedItems = (items, sort) => {

    const sortedItems = useMemo(() => {

        if (sort === "name" || sort === "description") {
          
          return [...items].sort((a, b) => a[sort].localeCompare(b[sort]));
    
        }

        if (sort.includes("price")) {

            const price = sort.slice(0, 5);

            if (sort.includes("↑")) {

                return [...items].sort((a, b) => a[price][0] - b[price][0]);

            }

            else {

                return [...items].sort((a, b) => b[price][0] - a[price][0]);

            }

        }
    
        return items;
    
      }, [sort, items]);

    return sortedItems;

}

export const useSortedAndFilteredByBrandItems = (items, sort, params) => {

    const sortedItems = useSortedItems(items, sort);

    const sortedAndFilteredByBrandItems = useMemo(() => {

        return sortedItems.filter(item => {

            if (params.brands.length === 0) {

                return item;

            }

            for (const brand of params.brands) {
                  
                if (item.brand === brand) return item;

            }

        });

    }, [params, sortedItems]);

    return sortedAndFilteredByBrandItems;

}

export const useSortedAndFilteredByColorItems = (items, sort, params) => {

    const sortedAndFilteredByBrandItems = useSortedAndFilteredByBrandItems(items, sort, params);

    const sortedAndFilteredByColorItems = useMemo(() => {

        return sortedAndFilteredByBrandItems.filter(item => {

            if (params.colors.length === 0) {

                return item;

            }

            for (const color of params.colors) {
                  
                if (item.colors.includes(color)) return item;

            }

        });

    }, [params, sortedAndFilteredByBrandItems]);

    return sortedAndFilteredByColorItems;

}

export const useSortedAndFilteredByMemoryItems = (items, sort, params) => {

    const sortedAndFilteredByColorItems = useSortedAndFilteredByColorItems(items, sort, params);

    const sortedAndFilteredByMemoryItems = useMemo(() => {

        return sortedAndFilteredByColorItems.filter(item => {

            if (params.memory.length === 0) {

                return item;

            }

            for (const mem of params.memory) {
                  
                if (item.memory.includes(mem)) return item;

            }

        });

    }, [params, sortedAndFilteredByColorItems]);

    return sortedAndFilteredByMemoryItems;

}

export const useItems = (items, sort, query, params) => {

    const sortedAndFilteredByMemoryItems = useSortedAndFilteredByMemoryItems(items, sort, params);

    const sortedAndSearchedItems = useMemo(() => {

        return sortedAndFilteredByMemoryItems.filter(item => item.name.toLowerCase()
                                                     .includes(query.toLowerCase()))
    
    }, [query, sortedAndFilteredByMemoryItems]);

    return sortedAndSearchedItems;

}