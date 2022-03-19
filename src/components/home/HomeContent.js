import React from 'react'
import { VideosRow } from '../Main/VideosRow'
import './homecontent.css'
export const HomeContent = () => {
    const recommendedVideos = [
        {
            thumbnail: `https://areajugones.sport.es/wp-content/uploads/2019/09/OnePiecePoster.jpg`,
            title: "One Piece",
            length: 208,
            channel: {
                name: "One Piece",
                link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 1812124001,
            uploadedAt: "2020-12-01"
        },
        {
            thumbnail: `https://i.imgur.com/2e1boXs.jpg`,
            title: "Josee to tora to sakana-tachi",
            length: 208,
            channel: {
                name: "Josee to tora to sakana-tachi",
                link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 1812124001,
            uploadedAt: "2020-02-01"
        },
        {
            thumbnail: `https://i.pinimg.com/originals/0a/13/c1/0a13c1821a11e78087279881ffc773ae.png`,
            title: "Anohana",
            length: 208,
            channel: {
                name: "Anohana",
                link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 1812124001,
            uploadedAt: "2020-02-01"
        },
        {
            thumbnail: `https://cdn.donmai.us/sample/fe/68/sample-fe68e09b1c4c65ef7745893205d26927.jpg`,
            title: "Cop craft",
            length: 208,
            channel: {
                name: "Cop craft",
                link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 1812124001,
            uploadedAt: "2020-02-01"
        },
    ]

    const channelVideos = [
        {
            thumbnail: `https://www.cinepremiere.com.mx/wp-content/uploads/2021/03/Anime-Invierno-2021-900x491.jpg`,
            title: "Boku no hero",
            length: 208,
            channel: {
                name: "Boku no hero",
                link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 1812124001,
            uploadedAt: "2020-12-01"
        },
        {
            thumbnail: `https://www.cinepremiere.com.mx/wp-content/uploads/2021/03/Anime-Invierno-2021-900x491.jpg`,
            title: "Boku no hero",
            length: 208,
            channel: {
                name: "Boku no hero",
                link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 1812124001,
            uploadedAt: "2020-02-01"
        },
        {
            thumbnail: `https://www.cinepremiere.com.mx/wp-content/uploads/2021/03/Anime-Invierno-2021-900x491.jpg`,
            title: "Boku no hero",
            length: 208,
            channel: {
                name: "Boku no hero",
                link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 1812124001,
            uploadedAt: "2020-02-01"
        },
        {
            thumbnail: `https://www.cinepremiere.com.mx/wp-content/uploads/2021/03/Anime-Invierno-2021-900x491.jpg`,
            title: "Boku no hero",
            length: 208,
            channel: {
                name: "Boku no hero",
                link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 1812124001,
            uploadedAt: "2020-02-01"
        },
    ]

    const marqChan = {
        name: "Boku no hero",
        link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
        image: "https://definicion.de/wp-content/uploads/2015/10/anime.png"
    }
    return (
        <div className="home-content">
            <VideosRow 
                type= "normal"
                label= "Agregado recientemente"
                videos= {recommendedVideos}
            />
            <VideosRow
                type= "channel"
                channel= {marqChan}
                videos= {channelVideos} />
                <div className='panel-chat'>
                <iframe src='https://webchat.botframework.com/embed/davidperezgarcia?s=rcLd5OPwvQE.Ki51Fgr7L7iqlcyA_MXmMC25ydFWQaNzDwicj-tINxc'></iframe>
                </div>
        </div>
    )
}
