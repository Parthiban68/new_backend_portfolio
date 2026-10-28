import { useEffect, useRef, useState } from 'react';
import { useLenis } from 'lenis/react';

export default function CustomScrollbar() {
  const lenis = useLenis();
  const trackRef = useRef(null);
  const thumbRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({startY:0,startScroll:0});
  useEffect(() => {
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!track || !thumb) return;
    const updateThumb = () => {
      if (isDragging) return;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) { thumb.style.height = '0px'; thumb.style.transform = 'translateY(0px)'; return; }
      const scrollTop = lenis ? lenis.scroll : (window.scrollY || document.documentElement.scrollTop);
      const progress = Math.min(Math.max(scrollTop/docHeight,0),1);
      const trackHeight = track.clientHeight;
      const thumbHeight = Math.max(trackHeight*0.15,40);
      thumb.style.height = thumbHeight + 'px';
      const maxThumbPos = trackHeight - thumbHeight;
      thumb.style.transform = 'translateY(' + (progress*maxThumbPos) + 'px)';
    };
    const handleScroll = () => { requestAnimationFrame(updateThumb); };
    if (lenis) { lenis.on('scroll', handleScroll); } else { window.addEventListener('scroll', handleScroll, {passive:true}); }
    window.addEventListener('resize', updateThumb, {passive:true});
    updateThumb();
    const interval = setInterval(updateThumb, 100);
    return () => {
      if (lenis) { lenis.off('scroll', handleScroll); } else { window.removeEventListener('scroll', handleScroll); }
      window.removeEventListener('resize', updateThumb);
      clearInterval(interval);
    };
  }, [lenis, isDragging]);
  const handleTrackClick = (e) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const trackHeight = track.clientHeight;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    const progress = Math.min(Math.max(clickY/trackHeight,0),1);
    const targetScroll = progress * docHeight;
    if (lenis) { lenis.scrollTo(targetScroll, {immediate:false}); } else { window.scrollTo({top:targetScroll, behavior:'smooth'}); }
  };
  const handleThumbMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    dragState.current.startY = e.clientY;
    dragState.current.startScroll = lenis ? lenis.scroll : (window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    if (!isDragging) return;
    const handleMouseMove = (e) => {
      const track = trackRef.current;
      if (!track) return;
      const deltaY = e.clientY - dragState.current.startY;
      const trackHeight = track.clientHeight;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const thumbHeight = Math.max(trackHeight*0.15,40);
      const maxThumbPos = trackHeight - thumbHeight;
      const deltaProgress = deltaY/maxThumbPos;
      const newScroll = dragState.current.startScroll + deltaProgress*docHeight;
      if (lenis) { lenis.scrollTo(Math.min(Math.max(newScroll,0),docHeight), {immediate:true}); } else { window.scrollTo({top:Math.min(Math.max(newScroll,0),docHeight), behavior:'auto'}); }
    };
    const handleMouseUp = () => { setIsDragging(false); };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => { document.removeEventListener('mousemove', handleMouseMove); document.removeEventListener('mouseup', handleMouseUp); };
  }, [isDragging, lenis]);
  return (
    <div ref={trackRef} onClick={handleTrackClick} className='fixed right-[6px] top-1/2 -translate-y-1/2 h-[65vh] w-[5px] z-[10000] cursor-pointer hidden lg:block' aria-hidden='true'>
      <div className='absolute inset-0 bg-[#1a1a1a] dark:bg-white rounded-full' />
      <div ref={thumbRef} onMouseDown={handleThumbMouseDown} className='absolute left-1/2 -translate-x-1/2 w-[5px] bg-[#08C9E8] rounded-full cursor-grab active:cursor-grabbing shadow-sm' style={{top: 0}} />
    </div>
  );
}

