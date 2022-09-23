import { reviews } from "@/api/index";

// 리뷰 데이터 목록 조회
function fetchReview() {
  return reviews.get("/");
}

// 리뷰 생성
function createReview(reviewData) {
  return reviews.post("/insert", reviewData);
}

export { fetchReview, createReview };
