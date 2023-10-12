import React, { useRef, useEffect } from "react";
import video from '../../assets/IntelliViewVideo.mp4'
import styled from "styled-components";


const VideoContent = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        const playVideo = () => {
            if (video) {
                video.muted = true;
                video.play().catch((error) => {
                    console.error("Video playback error:", error);
                });
            }
        };

        video.addEventListener("ended", playVideo);

        playVideo();

        return () => {
            video.removeEventListener("ended", playVideo);
        };
    }, []);

    return (
        <VideoBox>
            <video ref={videoRef} width="80%" className="video" preload="auto">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </VideoBox>
    )
}

export default VideoContent



const VideoBox = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 2rem 0% 4rem 0%;
border-radius: 2rem;



.video {
    border-radius: 1rem;
    object-fit: cover;
    border: 0.05rem solid var(--lightOrange);
    box-shadow: 0 0 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
}

`

