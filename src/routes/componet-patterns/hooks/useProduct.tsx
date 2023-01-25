import React, { useState } from 'react'

export const useProduct = () => {

    const [counter, setCounter] = useState(0)
    
    const increaseBy = (value: number = 1) => setCounter(i => Math.max( i + value, 0))

    return { counter, increaseBy }
}
