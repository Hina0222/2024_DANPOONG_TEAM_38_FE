import React, { useState } from "react";

import { ReactComponent as Next } from "../../../../assets/component/BigNext.svg";
import { ReactComponent as ActiveNext } from "../../../../assets/component/AtBigNext.svg";
import { ReactComponent as Back } from "../../../../assets/component/BigBack.svg";
import { ReactComponent as ActiveBack } from "../../../../assets/component/AtBigBack.svg";
const menu = [
  { name: "주간" },
  { name: "월간" },
  { name: "전체" },
  { name: "프로젝트 수" },
];

const ComPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 슬라이드 인덱스
  const [isNextActive, setIsNextActive] = useState(false); // ActiveNext 렌더링 상태
  const [isBackActive, setIsBackActive] = useState(false); // ActiveBack 렌더링 상태

  const images = [
    "https://via.placeholder.com/84x105?text=Image+1",
    "https://via.placeholder.com/84x105?text=Image+2",
    "https://via.placeholder.com/84x105?text=Image+3",
    "https://via.placeholder.com/84x105?text=Image+4",
    "https://via.placeholder.com/84x105?text=Image+5",
    "https://via.placeholder.com/84x105?text=Image+6",
  ];

  // 이미지 한 번에 3개씩 슬라이드
  const imagesPerPage = 3;

  const handleNext = () => {
    if (currentIndex < images.length - imagesPerPage) {
      setCurrentIndex(currentIndex + imagesPerPage);
      setIsNextActive(true);
      setIsBackActive(false);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - imagesPerPage);
      setIsBackActive(true);
      setIsNextActive(false);
    }
  };

  return (
    <div className="rank-preview-container">
      {/* 주간,월간 별로 기업 랭킹 불러오기 필요 */}
      <div className="rank-preview-menu-container">
        {menu.map((day) => (
          <div className="rank-preview-menus">{day.name}</div>
        ))}
      </div>

      {/* 기업 이미지 연동 필요 */}

      <div className="rank-compant-img">
        {/* 현재 인덱스부터 3개의 이미지를 슬라이드  추후 기업 랭킹 이미지 연동 필요*/}
        {images
          .slice(currentIndex, currentIndex + imagesPerPage)
          .map((src, index) => (
            <div
              key={index}
              className="rank-preview-img-container"
              style={{ backgroundImage: `url(${src})` }}
            ></div>
          ))}
      </div>
      <div className="rank-preview-next-btn">
        <div className="back-btn" onClick={handleBack}>
          {isBackActive ? <ActiveBack /> : <Back />}
        </div>

        <div className="next-btn" onClick={handleNext}>
          {isNextActive ? <ActiveNext /> : <Next />}
        </div>
      </div>

      <div className="rank-preview-next-btn"></div>
    </div>
  );
};

export default ComPreview;
