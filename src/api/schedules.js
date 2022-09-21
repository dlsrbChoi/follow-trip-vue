import { schedules } from "@/api/index";

// 일정표 데이터 목록 조회
function fetchSchedules() {
  return schedules.get("/");
}

// 특정 일정표 조회
function fetchSchedule(scheduleId) {
  return schedules.get(scheduleId);
}

// 일정표 생성
function createSchedule(scheduleData) {
  return schedules.post("/api/v1/schedule/insert", scheduleData);
}

export { fetchSchedules, fetchSchedule, createSchedule };
