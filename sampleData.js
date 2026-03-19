export const users = [
  { id: "u_admin_001", name: "김수간", role: "ADMIN", employeeNo: "A0001" },
  { id: "u_nurse_001", name: "이간호", role: "NURSE", employeeNo: "N1001" },
  { id: "u_nurse_002", name: "박간호", role: "NURSE", employeeNo: "N1002" },
  { id: "u_nurse_003", name: "정간호", role: "NURSE", employeeNo: "N1003" },
  { id: "u_nurse_004", name: "최간호", role: "NURSE", employeeNo: "N1004" },
  { id: "u_nurse_005", name: "한간호", role: "NURSE", employeeNo: "N1005" },
];

export const initialGoldkeys = [
  { userId: "u_nurse_001", quotaTotal: 3, usedCount: 1, remainingCount: 2 },
  { userId: "u_nurse_002", quotaTotal: 2, usedCount: 0, remainingCount: 2 },
  { userId: "u_nurse_003", quotaTotal: 4, usedCount: 2, remainingCount: 2 },
  { userId: "u_nurse_004", quotaTotal: 1, usedCount: 0, remainingCount: 1 },
  { userId: "u_nurse_005", quotaTotal: 2, usedCount: 1, remainingCount: 1 },
];

export const initialRequests = [
  {
    id: "lr_001",
    userId: "u_nurse_001",
    leaveDate: "2026-05-12",
    leaveType: "GOLDKEY",
    status: "SELECTED",
    requestedAt: "2026-03-02T00:05:00+09:00",
    memo: "가족행사",
  },
  {
    id: "lr_002",
    userId: "u_nurse_002",
    leaveDate: "2026-05-12",
    leaveType: "GOLDKEY",
    status: "APPLIED",
    requestedAt: "2026-03-02T00:07:00+09:00",
    memo: "개인사정",
  },
  {
    id: "lr_003",
    userId: "u_nurse_003",
    leaveDate: "2026-04-08",
    leaveType: "GENERAL_PRIORITY",
    status: "APPLIED",
    requestedAt: "2026-03-03T00:10:00+09:00",
    memo: "병원진료",
  },
];

export const initialPriorityNotes = [
  {
    id: "ln_001",
    leaveRequestId: "lr_003",
    content: "당사자 협의 결과 정간호 1순위",
    agreedOrder: 1,
  },
];

export const initialCancellations = [];
export const initialSelections = [
  {
    id: "ls_001",
    leaveRequestId: "lr_001",
    selectedBy: "u_admin_001",
    selectedAt: "2026-03-03T11:00:00+09:00",
  },
];

export const initialAdjustmentLogs = [];

export const holidaysCache = [
  { holidayDate: "2026-04-06", holidayName: "대체공휴일", isHoliday: true },
  { holidayDate: "2026-05-05", holidayName: "어린이날", isHoliday: true },
];
