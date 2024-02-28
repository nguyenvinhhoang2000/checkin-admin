const ABSENT_REQUEST_COLUMNS = {
  NAME: {
    title: "Name",
    dataIndex: ["user", "name"],
    key: "name",
  },
  TYPE_ABSENT: {
    title: "Type Absent",
    dataIndex: "absentType",
    key: "absentType",
  },
  DATE_REQUEST: {
    title: "Date Request",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  DURATION_REQUEST: {
    title: "From - To",
    dataIndex: "fromAt",
    key: "fromAt",
  },
  DESCRIPTION: {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  ACTIONS: {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
  },
};

export default ABSENT_REQUEST_COLUMNS;
