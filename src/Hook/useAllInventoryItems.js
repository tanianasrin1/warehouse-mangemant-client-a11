import { useEffect, useState } from "react"

const useAllInventoryItems = () => {
    const [inventories, setInventories] = useState([]);

    useEffect( () => {
        fetch('https://mysterious-bastion-52209.herokuapp.com/inventory')
        .then(res => res.json())
        .then(data => setInventories(data))
    },[])
    return [inventories, setInventories]
}

export default useAllInventoryItems;