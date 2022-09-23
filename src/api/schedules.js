import { schedules, scheduleCreate } from "@/api/index";

// 거래량 많은 순으로 일정표 조회
function mostBuySchedule(scheduleId) {
  return schedules.get(scheduleId);
}

// 일정표 데이터 목록 조회
function fetchSchedules() {
  return schedules.get("/get");
}

// 특정 일정표 조회
function fetchSchedule(scheduleId) {
  return schedules.get(scheduleId);
}

// 일정표 생성
function createSchedule(scheduleData) {
  return scheduleCreate.post("/insert", scheduleData);
}

export { mostBuySchedule, fetchSchedules, fetchSchedule, createSchedule };
