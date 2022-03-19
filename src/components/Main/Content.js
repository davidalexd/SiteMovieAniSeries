import React from 'react'
import { HomeContent } from '../home/HomeContent'
import { Sidebar } from './Sidebar';
import "./content.css";
export const Content = () => {
    return (
        <div className='content'>
            <Sidebar/>
            <HomeContent/>
        </div>
    )
}
