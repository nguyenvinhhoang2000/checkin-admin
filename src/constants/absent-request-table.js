const ABSENT_REQUEST_COLUMNS = {
  NAME: {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  TYPE_ABSENT: {
    title: "Type Absent",
    dataIndex: "typeAbsent",
    key: "typeAbsent",
  },
  DATE_REQUEST: {
    title: "Date Request",
    dataIndex: "dateRequested",
    key: "dateRequested",
  },
  DURATION_REQUEST: {
    title: "From - To",
    dataIndex: ["durationRequested", "from"],
    key: ["durationRequested", "from"],
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
