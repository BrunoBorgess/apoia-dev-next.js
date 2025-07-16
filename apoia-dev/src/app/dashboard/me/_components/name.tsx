"use client"

import { ChangeEvent, useState } from "react"
import { debounce } from 'lodash'

export function Name({ initialName }: { initialName: string }){
    
    const [name, setName] = useState(initialName)
    const [originalName] = useState(initialName)

    const debouncedSaveName = useRef(
        debounce(async (currentName: string) => {
            if(currentName.trim() === ""){
                setName(originalName)
                return;
            }
        },500)
    )

    function handleChangeName(e: ChangeEvent<HTMLInputElement>){
        const value = e.target.value;
        setName(value);
        
    }

    return(
        <input
            className="text-xl md:text-2xl font-bold bg-gray-50 border-gray-100 rounded--md outline-none p-2 w-full max-w-2xl"
            value={name}
            onChange={handleChangeName}
        />
    )
}


/// minuto 20:42