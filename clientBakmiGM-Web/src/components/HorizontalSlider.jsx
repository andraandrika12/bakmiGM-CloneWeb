import { useState } from "react";
import './HorizontalSlider.css'; 

const images = [
  "https://www.bakmigm.com/cfind/source/thumb/images/promo/cover_w1112_h572_tw2307_th1187_x110_y15_paw_1112x572.png",
  "https://www.bakmigm.com/cfind/source/thumb/images/promo/cover_w1112_h572_tw2312_th1190_x13_y13_website_february_paket-padu_1112x572.png",
  "https://www.bakmigm.com/cfind/source/thumb/images/promo/cover_w1112_h572_tw2315_th1189_x13_y13_website_february_cny-hampers_1112x572.png",
];

export default function HorizontalSlider() {
  const [imgActive, setImgActive] = useState(0);

  const onChange = (e) => {
    if (e) {
      const slide = Math.ceil(e.target.scrollLeft / e.target.offsetWidth);
      if (slide !== imgActive) {
        setImgActive(slide);
      }
    }
  };

  return (
      <div className="wrap">
        <div
          onScroll={(e) => onChange(e)}
          className="scroll"
        >
          {images.map((e, index) => (
            <img
              key={e}
              className="image"
              src={e}
              alt={`Slider Image ${index}`}
            />
          ))}
        </div>
        <div className="wrapDot">
          {images.map((e, index) => (
            <span
              key={e}
              className={index === imgActive ? "dotActive" : "dot"}
            >
              ●
            </span>
          ))}
        </div>
      </div>
  );
}
