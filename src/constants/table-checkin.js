const TABLE_CHECK_IN_COLUMNS = {
  DATE: {
    title: "Date",
    dataIndex: "createdAt",
    key: "date",
  },
  MEMBER: {
    title: "Member",
    dataIndex: ["user", "name"],
    key: "member",
  },
  CHECK_IN: {
    title: "Check-in",
    dataIndex: ["checkIn", "date"],
    key: "check-in",
  },
  CHECK_OUT: {
    title: "Check-out",
    dataIndex: ["checkOut", "date"],
    key: "check-out",
  },
  DEVICE: {
    title: "Device",
    dataIndex: "userAgent",
    key: "device",
  },
  BRANCH: {
    title: "Branch",
    dataIndex: ["branch", "name"],
    key: ["branch", "_id"],
  },
};

export default TABLE_CHECK_IN_COLUMNS;
