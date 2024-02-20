const TABLE_CHECK_IN_COLUMNS = {
  DATE: {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  MEMBER: {
    title: "Member",
    dataIndex: "member",
    key: "member",
  },
  CHECK_IN: {
    title: "Check-in",
    dataIndex: "check-in",
    key: "check-in",
  },
  CHECK_OUT: {
    title: "Check-out",
    dataIndex: "check-out",
    key: "check-out",
  },
  DEVICE: {
    title: "Device",
    dataIndex: "device",
    key: "device",
  },
  BRANCH: {
    title: "Branch",
    dataIndex: ["branch", "address"],
    key: ["branch", "_id"],
  },
};

export default TABLE_CHECK_IN_COLUMNS;
