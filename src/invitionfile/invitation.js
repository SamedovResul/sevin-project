import { useCallback, useState } from 'react';
import {React, useEffect} from 'react'
import InvitationImg from '../image/invi2.png';
import bgInvitation from '../image/invibg1.jpg';

export default function Invitation() {
  const [scrolling, setScrolling] = useState(0)
  const [transform, setTransform] = useState({top: '0px'})
  const [y, setY] = useState(window.scrollY);
  
const handleNavigation = useCallback(
  e => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      setScrolling(y - 1)
      setTransform({top: -y + 'px' })
    } else if (y < window.scrollY) {
      setScrolling(y - 1)
      setTransform({top: -y + 'px' })
    }
    setY(window.scrollY);
  }, [y ]
);

useEffect(() => {
  document.getElementsByClassName("sticky")[0].style.display = "none";
  setY(window.scrollY);
  window.addEventListener("scroll", handleNavigation);

  return () => {
    window.removeEventListener("scroll", handleNavigation);
  };
}, [handleNavigation]);

  
  return (
    <>
      <div   className="invitation-page" >
        <img src={bgInvitation} className="bg-invitation" alt="img" />
        <img style={transform}  className="invitation" src={InvitationImg} alt="img" />
      </div>
    </>
  )
}
