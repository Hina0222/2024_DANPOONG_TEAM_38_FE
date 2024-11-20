import React from "react";

import { ReactComponent as Like } from "../../../assets/component/project/like.svg";
import { useNavigate } from "react-router-dom";

// 후원 순위 api 대신
const ranks = [
  { id: 1, name: "test1", won: "2,900,000원" },
  { id: 2, name: "test2", won: "900,000원" },
  { id: 3, name: "test3", won: "500,000원" },
];

const BoostRank = ({ projectDetails }) => {
  const navigate = useNavigate();

  return (
    <div className="pj-detail-boost-ranking-container">
      {/* 후원 순위 api 연동 필요 */}
      {ranks.map((rank) => (
        <div className="pj-detail-boost-rank-container">
          <div className="pj-detail-boost-rank-num">{rank.id}위</div>
          <div className="pj-detail-boost-rank-img"></div>
          <div className="pj-detail-boost-rank-content">
            <div className="pj-detail-boost-rank-name">{rank.name}</div>
            <div className="pj-detail-boost-rank-won-box">
              <div className="pj-detail-boost-rank-won">{rank.won}</div>
              &nbsp;후원
            </div>
          </div>
        </div>
      ))}
      <div className="pj-line"></div>
      <div className="pj-detail-boost-rank-Amount-won-box">
        <div className="pj-detail-boost-rank-Amount-won-title"> 모인 금액</div>
        <div className="pj-detail-boost-rank-Amount-won-content">
          <div className="pj-detail-boost-rank-Amount-won-content-num">
            {projectDetails ? (
              <>
                <div className="pj-detail-boost-rank-Amount-won-content-num-won">
                  {projectDetails.achievementAmount}
                  <div className="pj-detail-boost-rank-Amount-won-content-num-won-unit">
                    {" "}
                    원
                  </div>
                </div>

                <div className="pj-detail-boost-rank-Amount-won-content-percent">
                  {projectDetails.achievementRate}%달성
                </div>
              </>
            ) : (
              <>
                <div className="pj-detail-boost-rank-Amount-won-content-num-won">
                  0
                  <div className="pj-detail-boost-rank-Amount-won-content-num-won-unit">
                    {" "}
                    원
                  </div>
                </div>

                <div className="pj-detail-boost-rank-Amount-won-content-percent">
                  0%달성
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="pj-detail-boost-rank-period-box">
        <div className="pj-detail-boost-rank-period-title">남은 기간</div>
        {projectDetails ? (
          <div className="pj-detail-boost-rank-period-content">
            {projectDetails.leftDays}
            <div className="pj-detail-boost-rank-period-content-day"> 일</div>
          </div>
        ) : (
          <div className="pj-detail-boost-rank-period-content">
            0<div className="pj-detail-boost-rank-period-content-day"> 일</div>
          </div>
        )}
      </div>

      <div className="pj-detail-boost-rank-period-box">
        <div className="pj-detail-boost-rank-period-title">후원자</div>
        {projectDetails ? (
          <div className="pj-detail-boost-rank-period-content">
            {projectDetails.boostedUserCount}
            <div className="pj-detail-boost-rank-period-content-day"> 명</div>
          </div>
        ) : (
          <div className="pj-detail-boost-rank-period-content">
            0<div className="pj-detail-boost-rank-period-content-day"> 명</div>
          </div>
        )}
      </div>
      <div className="pj-detail-boost-rank-btn-container">
        <div className="pj-detail-boost-rank-like-btn">
          <Like />
          {/* 프로젝트 좋아요 api 연동 필요 */}
          <div className="pj-detail-boost-rank-like-num">111</div>
        </div>
        {/* 후원하기 api 연동 필요,후원하기 페이지 이동 연동 필요 */}
        <div
          className="pj-detail-boost-rank-boost-btn"
          onClick={() => navigate("/detail/boost")}
        >
          이 프로젝트 후원하기
        </div>
      </div>
    </div>
  );
};

export default BoostRank;
