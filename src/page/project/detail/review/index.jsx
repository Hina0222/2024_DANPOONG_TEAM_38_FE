import React, { useState } from "react";
import BoostReview from "./BoostReview";
import ComReview from "./ComReview";
import Planning from "./Planning";
import Deadline from "./Deadline";

const Review = ({ project }) => {
  const menu = [
    { title: "기획", component: <Planning project={project} /> },
    { title: "기업 후기", component: <ComReview project={project} /> },
    { title: "후원자 후기", component: <BoostReview project={project} /> },
    { title: "마감 후기", component: <Deadline project={project} /> },
  ];

  const [activeMenu, setActiveMenu] = useState(menu[0].title); // 초기값은 "기획"

  return (
    <div className="pj-detail-review-container">
      <div className="pj-detail-review-container-box">
        <div className="pj-detail-review-container-box-header">
          {menu.map((item) => (
            <div
              key={item.title}
              className={`menu-item ${
                activeMenu === item.title ? "active" : ""
              }`}
              onClick={() => setActiveMenu(item.title)}
            >
              {item.title}
            </div>
          ))}
        </div>
        <div className="pj-detail-review-container-box-content">
          {menu.find((item) => item.title === activeMenu)?.component}
        </div>
      </div>
    </div>
  );
};

export default Review;
