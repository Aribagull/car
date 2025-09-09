import { useRef, useState } from "react";
import img1 from "../Assets/Images/Heroslider-3.png";
import img2 from "../Assets/Images/Heroslider-3.png";
import img3 from "../Assets/Images/Heroslider-3.png";
import img4 from "../Assets/Images/Heroslider-3.png";
import img5 from "../Assets/Images/Heroslider-3.png";
import img6 from "../Assets/Images/Heroslider-3.png";
import img7 from "../Assets/Images/Heroslider-3.png";
import img8 from "../Assets/Images/Heroslider-3.png";

export default function ImageGallery() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const scrollRef = useRef(null);

  // drag states
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // ✅ container click → next/prev
  const handleContainerClick = (e) => {
    if (isDragging) return; // agar drag ho raha hai → click ignore
    if (!scrollRef.current) return;

    const imageWidth = 350 + 8; // ek image ka width + gap
    const container = scrollRef.current;
    const containerMid = container.offsetWidth / 2; // container ka beech
    const clickX = e.nativeEvent.offsetX; // user ne kaha click kiya

    if (clickX > containerMid) {
      // right side → agay move
      container.scrollLeft += imageWidth;
    } else {
      // left side → piche move
      container.scrollLeft -= imageWidth;
    }
  };

  // drag events
  const handleMouseDown = (e) => {
    setIsDown(true);
    setIsDragging(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);

  const handleMouseUp = () => {
    setIsDown(false);
    setTimeout(() => setIsDragging(false), 0);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    setIsDragging(true);
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-[#f7faf6] py-2 pb-10 relative">
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-scroll no-scrollbar cursor-grab active:cursor-grabbing"
        style={{ scrollBehavior: "smooth" }}
        onClick={handleContainerClick}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {images.map((src, i) => (
          <div key={i} className="flex-shrink-0">
            <img
              src={src}
              alt={`gallery-${i}`}
              className="h-40 w-[350px] object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
