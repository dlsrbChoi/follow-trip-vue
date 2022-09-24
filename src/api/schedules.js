import { schedules, scheduleCreate, purchaseSchedule } from "@/api/index";

// 거래량 많은 순으로 일정표 조회
function mostBuySchedule() {
  return schedules.put("/top");
}

// 일정표 데이터 목록 조회
function fetchSchedules(data) {
  return schedules.put("/search", data);
}

// 특정 일정표 조회
function fetchSchedule(Id) {
  return schedules.put("/get", Id);
}

// 일정표 구매 요청
function buySchedule(scheduleId) {
  return purchaseSchedule.post("/buy/insert", scheduleId);
}

// 구매한 일정표 조회
function afterBuySchedule(Id) {
  return schedules.put("/buy", Id);
}

// 일정표 생성
function createSchedule(scheduleData) {
  return scheduleCreate.post("/insert", scheduleData);
}

export {
  mostBuySchedule,
  fetchSchedules,
  fetchSchedule,
  createSchedule,
  afterBuySchedule,
  buySchedule,
};
