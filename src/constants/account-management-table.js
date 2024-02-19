const ACCOUNT_MANAGEMENT_COLUMNS = {
  NAME: {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  EMAIL: {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  BRANCH: {
    title: "Branch",
    dataIndex: ["branch", "address"],
    key: ["branch", "_id"],
  },
  ACTIONS: {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
  },
};

export default ACCOUNT_MANAGEMENT_COLUMNS;
