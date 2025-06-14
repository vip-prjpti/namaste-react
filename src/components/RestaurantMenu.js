import React from 'react'
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router';
import {MENU_API} from '../../utils/constants'


const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();

        console.log(json);
        setResInfo(json);
    }

    if (resInfo === null) {
        return <Shimmer />
    }

    const { name } = resInfo?.data?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);

    return (

        <div>
            <h1>{name}</h1>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((itemCard) =>
                    <li key={itemCard.card.info.id}> {itemCard.card.info.name} - Rs. {(itemCard.card.info.price) / 100}</li>
                )}

            </ul>
        </div>
    )
}

export default RestaurantMenu