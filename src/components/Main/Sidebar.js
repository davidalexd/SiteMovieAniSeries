import React from 'react'
import './sidebar.css'
export const Sidebar = () => {
    const mainMenus = [
        { text: 'Inicio', icon: "fas fa-home" },
        { text: 'Directorio anime', icon: "fas fa-folder-open" },
        { text: 'Horario de programacion', icon: "fas fa-calendar-alt" },
    ]
    const libraryMenus = [
        { text: 'Historial  ', icon: "fas fa-history" },
        { text: 'Ver luego', icon: "fas fa-clock" },
        { text: 'Me gusta', icon: "fas fa-thumbs-up" },
        { text: 'Ver mas', icon: "fas fa-arrows-alt" },
    ]
    const bestMenus = [
        { text: 'Ranking top anime', icon: "fas fa-chart-line" },
        { text: 'En emision', icon: "fas fa-broadcast-tower" },
        { text: 'Noticias', icon: "fas fa-newspaper" },
    ]
    return (
        <div className="sidebar">
            <ul className="menu-group">
                {mainMenus.map(menu => (
                    <li className="menu-item">
                        <i className={menu.icon}></i>
                        <span className="text">{menu.text}</span>
                    </li>
                ))}
            </ul>
            <h4 className="menu-group-label">Libreria</h4>
            <ul className="menu-group">
                {libraryMenus.map(menu => (
                    <li className="menu-item">
                        <i className={menu.icon}></i>
                        <span className="text">{menu.text}</span>
                    </li>
                ))}
            </ul>
            <h4 className="menu-group-label">Lo mejor de aniseries</h4>
            <ul className="menu-group">
                {bestMenus.map(menu => (
                    <li className="menu-item">
                        <i className={menu.icon}></i>
                        <span className="text">{menu.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
