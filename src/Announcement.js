import { useState } from "react";
import InfoCircle from 'react-bootstrap-icons/dist/icons/info-circle-fill';
import Marquee from "react-fast-marquee";

function Announcement(props){
    const [announce] = useState(props.announce);
    return (
        <div>
            <Marquee>
            {
                announce.map((v,i) => <span key = {i}> <InfoCircle/> &nbsp; {v} &nbsp;&nbsp;</span> )
            }
            </Marquee>
        </div>
    );
}
export default Announcement;