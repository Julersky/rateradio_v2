import React from 'react';
// import { useState } from 'react';
import './Replay.scss';
import Fetch from '../../components/Fetch/Fetch';

function Replay(){
    document.title = "Raté Radio - Replay";
    const baseAPI = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCU6UEmu_OiCqB2lx9i3QCmA&key=AIzaSyBNdp_-lAGIP6aocMWbsPhRTh3P4xMswUw"

    return (
     <div>    
        <div>
            <Fetch 
            api = {baseAPI}
            />
        </div>
     </div>


    );
}


export default Replay;
