import logo from '../assets/add-logo.png'
import Header from '../components/RecipeHeader.jsx'
import React, { useState } from 'react'
import Input from '../components/Input.jsx'


const Add = () => {
    return (
        <div>
            <Header title="Add Recipe" logo={logo} />

            <div className="flex items-center justify-center h-screen">
                <div className="flex items-start pt-8 h-screen">
                    <div className="bg-main-purple pt-8 pb-8 pl-14 pr-5 rounded-2xl">
                        <Input />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add