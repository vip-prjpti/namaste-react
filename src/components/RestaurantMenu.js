import React from 'react'
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router';
// import {MENU_API} from '../../utils/constants'
import useRestaurantMenu from '../../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';


const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState();

    if (resInfo === null) {
        return <Shimmer />
    }

    const { name } = resInfo?.data?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR);
    const categories = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories)

    return (

        <div className='text-center'>
            <h1 className='my-10 text-2xl font-bold'>{name}</h1>
            <h2 className='text-lg'>Menu</h2>
            {/* <ul>
                {itemCards.map((itemCard) =>
                    <li key={itemCard.card.info.id}> {itemCard.card.info.name} - Rs. {(itemCard.card.info.price) / 100}</li>
                )}

            </ul> */}
            {/* categories-accordion */}

            {categories.map((category, index) => <RestaurantCategory key={category.card.card.categoryId} data={category?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)} />)}
        </div>
    )
}

export default RestaurantMenu