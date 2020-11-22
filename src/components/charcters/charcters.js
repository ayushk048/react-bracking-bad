import React from 'react'
import Spinner from '../ui/spinner'
import Character from './charcter/charcter'
import './charcters.css'

const Characters = ({ items, isLoading }) => {
    return isLoading ? (
        <Spinner />
    ) : (
            <section className='cards'>
                {items.map((item) => (
                    <Character key={item.char_id} item={item}></Character>
                ))}
            </section>
        )
}

export default Characters
