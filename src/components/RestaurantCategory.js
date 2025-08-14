import React from 'react'
import {useState} from 'react'
import ItemList from './itemList';

const RestaurantCategory = ({ data }) => {
    const [showItems, setShowItems] = useState(false);
    const handleClick = () =>{
        setShowItems(!showItems) ;
        console.log("clicked");
    }



    console.log(data);
    return (
        // header
        <div>
            <div className='w-6/12 mx-auto my-4 p-4 font-bold bg-gray-50 shadow-lg' onClick={handleClick}>

                <div className=' cursor-pointer'>
                    <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
                </div>
                {showItems && <ItemList key={data.categoryId} items={data.itemCards} />}
            </div>
        </div>
        // Accordion body
    )
}

export default RestaurantCategory;