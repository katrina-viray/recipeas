import logo from '../assets/add-logo.png'
import Header from '../components/RecipeHeader.jsx'
import Button from '../components/Button.jsx'
import React, { useState } from 'react';

const Add = () => {
    return (
        <div>
            <Header title="Add Recipe" logo={logo} />

            <div className="flex items-center justify-center h-screen">
                <div className="flex items-start pt-8 h-screen">
                    <div className="bg-main-purple pt-8 pb-8 px-14 rounded-2xl">
                        <p className="text-white pb-2">Which type of food would you like to add?</p>

                        <div className="py-1.5 flex">
                            <Button title="Breakfast"/>
                            <div className="pl-2">
                                <Button title="Lunch" />
                            </div>
                        </div>

                        <div className="py-1.5 flex">
                            <Button title="Dinner"/>
                            <div className="pl-2">
                                <Button title="Dessert" />
                            </div>
                        </div>

                        <div className="py-1.5 pr-9">
                            <Button title="Snacks" />
                        </div>

                        <p className="text-white pt-6 pb-1">Serving Size</p>
                        <input type="text" placeholder="E.g. 1 serving"
                         className="rounded-md pl-3 py-1.5 pr-24 focus:outline-none"/>

                        <p className="text-white pt-4">Cook Time</p>
                        <input type="text" placeholder="E.g. 1 hour"
                         className="rounded-md pl-3 py-1.5 pr-24 focus:outline-none"/>

                        <p className="text-white pt-4">Ingredients</p>
                        <div className="relative w-full" >
                            <input type="text" placeholder="E.g. 1 cup of milk"
                            className="rounded-md pl-3 py-1.5 pr-24 focus:outline-none"/>
                        </div>

                        <p className="text-white pt-4">Directions</p>
                        <div className="relative w-full">
                            <input type="text" placeholder="E.g. 1. Mix ingredients."
                            className="rounded-md pl-3 py-1.5 pr-24 focus:outline-none"/>
                        </div>

                        <div className="flex justify-center item-center pt-9">
                            <button className="bg-second-purple text-white hover:bg-main-blue
                            hover:text-white hover:border-slate-500 hover:drop-shadow 
                            hover:outline-none font-bold py-1.5 w-36
                            rounded-full">Save Recipe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add