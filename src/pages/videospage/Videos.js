import React, { useState } from 'react'
import Video from '../../components/video/Video'
import "./Videos.css"
import { videoDb } from '../../api/videosdb'
function Videos() {
    const [categories] = useState(["Design", "Web Development", "App Development", "Web 3", "Cyber Security"])
    const [videocategory, setVideocategory] = useState("Design")
    const filterVideos = (categoryname) => {
        setVideocategory(categoryname)
    }
    return (
        <>
            <div className="category_bar">
                {categories.map((category) => {
                    return (
                        <p onClick={() => { filterVideos(category) }}>{category}</p>
                    )
                })}
            </div>
            <div className='all_videos'>
                {
                    videoDb.map((video) => {
                        return (
                            <>
                                {
                                    (video.category === videocategory) ?
                                        <div>
                                            <Video
                                                title={video.title}
                                                thumbnail={video.thumbnail}
                                                channelname={video.channel_name}
                                                channel_profile={video.channel_profile}
                                                time={video.time}
                                            />
                                        </div> : <></>
                                }
                            </>)
                    })
                }
            </div>
        </>
    )
}

export default Videos