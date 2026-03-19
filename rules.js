const LEAVE_TYPE_LABEL = {
  GOLDKEY: "골드키",
  GENERAL_PRIORITY: "일반-우선",
  GENERAL_NORMAL: "일반-후순위",
};

const STATUS_LABEL = {
  APPLIED: "신청",
  SELECTED: "선정",
  CANCELLED: "취소",
  REJECTED: "미선정",
};

export function toMonthString(dateLike) {
  const d = new Date(dateLike);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  return `${y}-${m}`;
}

export function addMonths(baseDate, offset) {
  const d = new Date(baseDate);
  d.setMonth(d.getMonth() + offset);
  return d;
}

export function validateRequest({
  leaveType,
  leaveDate,
  now,
  remainingGoldkey,
  holidaysCache,
}) {
  if (!leaveType || !leaveDate) return "휴가유형과 날짜를 입력하세요.";
  const target = new Date(leaveDate);
  const targetMonth = toMonthString(target);
  const plus1 = toMonthString(addMonths(now, 1));
  const plus2 = toMonthString(addMonths(now, 2));

  if (leaveType === "GOLDKEY") {
    if (targetMonth < plus2) return "골드키는 현재월+2달부터 신청 가능합니다.";
    if (remainingGoldkey <= 0) return "잔여 골드키가 없습니다.";
    return "";
  }

  if (targetMonth !== plus1) return "일반휴가는 다음 달만 신청 가능합니다.";

  const first = getNthBusinessDay(now.getFullYear(), now.getMonth(), 1, holidaysCache);
  const second = getNthBusinessDay(
    now.getFullYear(),
    now.getMonth(),
    2,
    holidaysCache
  );
  first.setHours(0, 0, 0, 0);
  second.setHours(9, 0, 0, 0);

  if (leaveType === "GENERAL_PRIORITY") {
    if (now < first || now > second) return "일반-우선 신청 가능 시간이 아닙니다.";
  }
  if (leaveType === "GENERAL_NORMAL") {
    if (now < second) return "일반-후순위는 영업일 2일 09시 이후 가능합니다.";
  }
  return "";
}

function getNthBusinessDay(year, monthIndex, n, holidaysCache) {
  let count = 0;
  const holidaySet = new Set(
    holidaysCache.filter((h) => h.isHoliday).map((h) => h.holidayDate)
  );
  const d = new Date(year, monthIndex, 1);
  while (d.getMonth() === monthIndex) {
    const day = d.getDay();
    const iso = d.toISOString().slice(0, 10);
    const isBusiness = day !== 0 && day !== 6 && !holidaySet.has(iso);
    if (isBusiness) {
      count += 1;
      if (count === n) return new Date(d);
    }
    d.setDate(d.getDate() + 1);
  }
  return new Date(year, monthIndex, 1);
}

export function leaveTypeLabel(type) {
  return LEAVE_TYPE_LABEL[type] ?? type;
}

export function statusLabel(status) {
  return STATUS_LABEL[status] ?? status;
}

export function leaveTypeOrder(type) {
  if (type === "GOLDKEY") return 1;
  if (type === "GENERAL_PRIORITY") return 2;
  return 3;
}
