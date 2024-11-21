import React, { useState, useEffect } from "react";
import ReviewProfile from "./ReviewProfile";
import Comment from "./Comment";
import GetReview from "../../../../apis/project/GetReview";
import GetMyProject from "../../../../apis/myPage/GetMyProject";
const ComReview = ({ project }) => {
  const [reviews, setReviews] = useState([]); // 후기를 저장할 상태
  const [myreviews, setMyReviews] = useState([]); // 후기를 저장할 상태

  // 사용자가 쓴 댓글을 위해 토큰 확인 코드 필요

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        if (!project.id) {
          console.error("프로젝트 ID가 없습니다.");
          return;
        }

        const reviewType = "COMPANY_REVIEW"; // 후기를 조회할 타입 (COMPANY_REVIEW 고정)

        // GetReview API 호출, project.id와 reviewType을 전달
        const response = await GetReview(project.id, reviewType);

        if (response && response.length > 0) {
          setReviews(response); // 응답 데이터로 리뷰 목록을 업데이트
        } else {
          console.error("후기를 찾을 수 없습니다.");
        }
      } catch (error) {
        console.error("후기를 불러오는 데 실패했습니다.", error);
      }
    };

    const fetchMyReviews = async () => {
      try {
        if (!project.id) {
          console.error("프로젝트 ID가 없습니다.");
          return;
        }

        // GetReview API 호출, project.id와 reviewType을 전달
        const response = await setMyReviews(project.id);

        if (response && response.length > 0) {
          setMyReviews(response); // 응답 데이터로 리뷰 목록을 업데이트
        } else {
          console.error("후기를 찾을 수 없습니다.");
        }
      } catch (error) {
        console.error("후기를 불러오는 데 실패했습니다.", error);
      }
    };
    fetchMyReviews();
    fetchReviews();
  }, [project.id]);

  return (
    <div className="pj-boost-reviews-container">
      <div className="pj-boost-reviews-comment-container">
        {/* 후원자 기업 정보 및 댓글 API 연동 필요 */}
        <ReviewProfile key={myreviews.id} myreviews={myreviews} />
        {/* 각 후기를 댓글로 표시 */}
        {reviews.length > 0 ? (
          reviews.map((review) => <Comment key={review.id} review={review} />)
        ) : (
          <p>후기가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default ComReview;
