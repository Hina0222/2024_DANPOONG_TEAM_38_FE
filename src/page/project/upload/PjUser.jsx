import React, { useState } from "react";
import { ReactComponent as Line } from "../../../assets/component/upload/useline.svg";
import { ReactComponent as Up12 } from "../../../assets/component/upload/up12.svg";
import { ReactComponent as Up11 } from "../../../assets/component/upload/up11.svg";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import createProject from "../../../apis/project/PostCreateProject";

const menu = [
  { id: 1, name: "카카오뱅크" },
  { id: 2, name: "우리은행" },
  { id: 3, name: "기업은행" },
  { id: 4, name: "하나은행" },
  { id: 5, name: "농협은행" },
  { id: 6, name: "신한은행" },
  { id: 7, name: "한국시티은행" },
  { id: 8, name: "국민은행" },
];

const PjUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedLocal, setSelectedLocal] = useState(null);
  const [account, setAccount] = useState("");

  const {
    targetAmount,
    startDate,
    endDate,
    images,
    mainTitle,
    subTitle,
    summary,
    region,
    category,
    introduction,
    budgetDescription,
    scheduleDescription,
    teamDescription,
  } = location.state || {}; // state에서 데이터 받기

  const handleLocalClick = (check) => {
    setSelectedLocal(check === selectedLocal ? null : check);
  };

  const { isLoggedIn, accessToken } = useOutletContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create requestData with all required fields
    const requestData = {
      mainTitle,
      subTitle,
      category, // You can set category based on the selected bank or region
      region,
      account,
      budgetDescription,
      scheduleDescription,
      teamDescription,
      targetAmount,
      introduction,
      images,
      startDate,
      endDate,
      summary,
      accessToken,
    };

    try {
      const result = await createProject(requestData);
      console.log("프로젝트 생성 성공:", result);
      // Handle success (e.g., redirect, show success message, etc.)
      navigate("/showproject"); // Navigate to the show project page after successful submission
    } catch (error) {
      console.error("프로젝트 생성 실패:", error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="pj-write-container">
      <div className="pj-write-left">
        <div className="pj-write-name">이름 연동 필요</div>
        <div className="pj-write-show-container">
          <div className="pj-write-graph">
            <Line />
          </div>
          <div className="pj-user-category">
            <Up11 />
          </div>
          <div className="pj-user-title">
            <Up12 />
          </div>
        </div>
      </div>
      <div className="pj-write-right">
        <div className="pj-write-right-int-title">기본 정보</div>
        <div className="pj-write-fund-input">
          <div className="pj-fund-box1">닉네임</div>
          <input
            className="pj-fund-maintitle"
            placeholder="목표 금액을 입력해주세요."
          />

          <div className="pj-fund-box2">대표 링크</div>
          <input
            className="pj-fund-subtitle"
            placeholder="달성 시 예상 수령 금액을 입력해주세요."
            onChange={(e) => setAccount(e.target.value)}
          />
        </div>
        <div className="pj-any-box">소개글 작성</div>
        <input
          className="pj-any-title"
          placeholder="달성 시 예상 수령 금액을 입력해주세요."
        />

        <div className="pj-any-container">
          <form className="pj-any-title">
            <textarea
              className="pj-any-input"
              placeholder="내용을 입력하세요"
            ></textarea>
          </form>
        </div>

        <input
          className="pj-any-title"
          placeholder="달성 시 예상 수령 금액을 입력해주세요."
        />
        <div className="pj-any-map">
          {menu.map((local) => (
            <div
              key={local.id}
              className={`pj-select-any-check ${
                selectedLocal === local.name ? "selected" : ""
              }`}
              onClick={() => handleLocalClick(local.name)}
            >
              {local.name}
            </div>
          ))}
        </div>

        {/* Changed onClick to call handleSubmit */}
        <div
          className="pj-local-next-btn"
          onClick={handleSubmit} // Trigger handleSubmit when button is clicked
        >
          저장하기
        </div>
      </div>
    </div>
  );
};

export default PjUser;
