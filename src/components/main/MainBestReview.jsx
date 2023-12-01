import MainBestReviewItem from "./MainBestReviewItem";

const MainBestReview = () => {
  return (
    <div>
      <div className="ml-[12px] mt-[15px] text-lg font-semibold">
        BEST REVIEW
      </div>
      <MainBestReviewItem
        className="border-b border-lightgray-sunsu"
        src="images/1_6.webp"
        alt="김연아님의 리뷰 사진"
        plannerName="유희정"
        coupleName="김연아"
        content="희정 플래너님은 상담에서 의견을 최대한 반영해주시고 친절하게 응대해주셔서 좋았어요. 조금 늦게 시작했다고 생각했는데 불안함을 다 잡아주시고 다양한 옵션 제시해주셔서 너무 좋았어요! 플래너님께서 강추하신 곳에서 메이크업도 최고였고, 결혼 준비가 힘들줄만 알았는데 즐거웠어요. 희정 플래너님 추천합니다! 😍🌈"
        reviewId={1}
      />
      <MainBestReviewItem
        src="images/2_6.webp"
        alt="박신혜님의 리뷰 사진"
        plannerName="김아름"
        coupleName="박신혜"
        content="4월부터 아름 플래너님과 함께 했는데요. 블로그에서 추천 글을 보고 연락 드렸었어요! 상담하는데 취향 존중 해주시고 답변도 빨리 해주셔서 편안하게 진행했던 것 같아요. 스드메 선택할 때 정말 많은 옵션이 있었는데 아름 플래너님께서 제게 맞는 곳을 추천해줘서 좋았어요( . ̫ .)💗"
        reviewId={2}
      />
    </div>
  );
};

export default MainBestReview;
