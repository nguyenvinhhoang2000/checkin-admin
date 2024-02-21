const MEMBER_OVERVIEW_COLUMNS = {
  NAME: {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  CHECKIN_EARLY: {
    title: "Check-in Early",
    dataIndex: ["checkIn", "early"],
    key: ["checkIn", "early"],
  },
  CHECKIN_LATE: {
    title: "Check-in Late",
    dataIndex: ["checkIn", "late"],
    key: ["checkIn", "late"],
  },
  CHECKOUT_EARLY: {
    title: "Check-out Early",
    dataIndex: ["checkOut", "early"],
    key: ["checkOut", "early"],
  },
  CHECKOUT_LATE: {
    title: "Check-out Late",
    dataIndex: ["checkOut", "late"],
    key: ["checkOut", "late"],
  },
  ABSENT: {
    title: "Absent",
    dataIndex: "absent",
    key: "absent",
  },
  ACTIONS: {
    title: "Actions",
    dataIndex: "_id",
    key: "_id",
  },
};

export default MEMBER_OVERVIEW_COLUMNS;
