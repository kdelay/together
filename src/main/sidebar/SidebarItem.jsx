import React from 'react';
import './CSSSidebar.css'

function SidebarItem({menu}) {
    return (
        <div className='sidebar-item'>
            <p>{menu.img}{menu.name}</p>
            
        </div>
    );
}

export default SidebarItem;