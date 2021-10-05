
import { useState, useEffect } from 'react';

const useService = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return [service, setService]

}
export default useService;