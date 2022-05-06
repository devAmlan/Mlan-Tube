import React, { useState } from 'react'
import "./Video.css"
import { FiMoreVertical } from "react-icons/fi"
import { AiOutlineClockCircle } from "react-icons/ai"
import { MdPlaylistAdd } from "react-icons/md"
function Video({ title, thumbnail, channelname, channel_profile, time }) {

    const [showbox, setShowbox] = useState(false)
    return (
        <>
            <div className="video">
                <div className="thumbnail">
                    <img src={thumbnail} alt="" />
                </div>
                <div className="video_time">{time}</div>
                <div className="video_info">
                    <img className="channel_profile_image" src={channel_profile} alt="" />
                    <div className='video_title'>
                        {title}
                    </div>
                    <FiMoreVertical className='more_btn' onClick={() => { setShowbox(!showbox) }} />

                    <div className={showbox ? "list_box" : "hide_list_box"}>
                        <div className="list_btns">
                            <AiOutlineClockCircle className='list_btns_icon' />
                            Add to Watch later
                        </div>
                        <div className="list_btns">
                            <MdPlaylistAdd className='list_btns_icon' />
                            Save to Playlist
                        </div>
                    </div>
                </div>
                <div className='video_channel_name'>{channelname}</div>
            </div>
        </>
    )
}

export default Video