import { useState } from "react";

export const useFetching = (callback) => {

    const [isItemsLoading, setIsItemsLoading] = useState(true);
    const [error, setError] = useState("");

    const fetching = () => {

        setTimeout(async () => {

            try {

                await callback();

            }

            catch (e) {

                setError(e.message);

            }

            finally {

                setIsItemsLoading(false);

            }

        }, 1500);
    
    }

    return [fetching, isItemsLoading, error];

    }