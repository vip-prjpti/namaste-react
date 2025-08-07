import React from 'react'
import ItemList from './itemList';
const RestaurantCategory = ({ data }) => {
    console.log(data);
    return (
        // header
        <div>

            <div className='w-6/12 mx-auto my-4 p-4 font-bold bg-gray-50 shadow-lg'>
                <span>{data.title} ({data.itemCards.length})</span>
            </div>
                <ItemList key={data.itemCards.categoryId} items={data.itemCards} />
        </div>
        // Accordion body
    )
}

export default RestaurantCategory;