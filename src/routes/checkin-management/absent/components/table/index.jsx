import React from "react";
import { Avatar, Button, Modal, Table } from "antd";

import AppIcon from "@/components/apps/app-icon";

import ABSENT_REQUEST_COLUMNS from "@/constants/absent-request-table";
import useAccountManagementStore from "@/store/use-account-management-store";

import { scroll } from "./config";

const memberList = [
  {
    name: "Thai Ha",
    position: "Lead",
    typeAbsent: "Remove",
    dateRequested: "1-1-2023 8:20:34",
    durationRequested: {
      from: "1-1-2023 8:20:34",
      to: "1-1-2023 8:20:34",
    },
    description:
      "Lorem Ipsum is dummy text of the printing and typesetting industry, derived from a Latin passage by Cicero. Learn, eat, sleep, repeat.Lorem Ipsum is dummy text of the printing and typesetting industry, derived from a Latin passage by Cicero. Learn, eat, sleep, repeat.",
  },
  {
    name: "Thai Ha Ha",
    position: "Lead",
    typeAbsent: "Remove",
    dateRequested: "1-1-2023 8:20:34",
    durationRequested: {
      from: "1-1-2023 8:20:34",
      to: "1-1-2023 8:20:34",
    },
    description:
      "Lorem Ipsum is dummy text of the printing and typesetting industry, derived from a Latin passage by Cicero. Learn, eat, sleep, repeat.Lorem Ipsum is dummy text of the printing and typesetting industry, derived from a Latin passage by Cicero. Learn, eat, sleep, repeat.",
  },
  {
    name: "Thai Ha Ha Ha",
    position: "Lead",
    typeAbsent: "Remove",
    dateRequested: "1-1-2023 8:20:34",
    durationRequested: {
      from: "1-1-2023 8:20:34",
      to: "1-1-2023 8:20:34",
    },
    description:
      "Lorem Ipsum is dummy text of the printing and typesetting industry, derived from a Latin passage by Cicero. Learn, eat, sleep, repeat.Lorem Ipsum is dummy text of the printing and typesetting industry, derived from a Latin passage by Cicero. Learn, eat, sleep, repeat.",
  },
  {
    name: "Thai Ha Ha Ha Ha",
    position: "Lead",
    typeAbsent: "Remove",
    dateRequested: "1-1-2023 8:20:34",
    durationRequested: {
      from: "1-1-2023 8:20:34",
      to: "1-1-2023 8:20:34",
    },
    description:
      "Lorem Ipsum is dummy text of the printing and typesetting industry, derived from a Latin passage by Cicero. Learn, eat, sleep, repeat.Lorem Ipsum is dummy text of the printing and typesetting industry, derived from a Latin passage by Cicero. Learn, eat, sleep, repeat.",
  },
  {
    name: "Thai Ha Ha Ha Ha Ha",
    position: "Lead",
    typeAbsent: "Remove",
    dateRequested: "1-1-2023 8:20:34",
    durationRequested: {
      from: "1-1-2023 8:20:34",
      to: "1-1-2023 8:20:34",
    },
    description:
      "Lorem Ipsum is dummy text of the printing and typesetting industry, derived from a Latin passage by Cicero. Learn, eat, sleep, repeat.Lorem Ipsum is dummy text of the printing and typesetting industry, derived from a Latin passage by Cicero. Learn, eat, sleep, repeat.",
  },
  {
    name: "Thai Ha Ha Ha Ha Ha Ha",
    position: "Lead",
    typeAbsent: "Remove",
    dateRequested: "1-1-2023 8:20:34",
    durationRequested: {
      from: "1-1-2023 8:20:34",
      to: "1-1-2023 8:20:34",
    },
    description:
      "Lorem Ipsum is dummy text of the printing and typesetting industry, derived from a Latin passage by Cicero. Learn, eat, sleep, repeat.Lorem Ipsum is dummy text of the printing and typesetting industry, derived from a Latin passage by Cicero. Learn, eat, sleep, repeat.",
  },
];

function AbsentRequestTable() {
  const onShowModalAbsentRequest =
    useAccountManagementStore().onShowModalAbsentRequest;
  const isShowModalAbsentRequest =
    useAccountManagementStore().isShowModalAbsentRequest;
  const onHideModalAbsentRequest =
    useAccountManagementStore().onHideModalAbsentRequest;

  const [selectedRequest, setSelectedRequest] = React.useState(null);

  const columns = [
    {
      ...ABSENT_REQUEST_COLUMNS.DURATION_REQUEST,
      width: "13.43%",
      render: (_, record) => {
        const { from, to } = record.durationRequested;
        return (
          <div>
            {from}
            <br />
            {to}
          </div>
        );
      },
    },
    {
      ...ABSENT_REQUEST_COLUMNS.DATE_REQUEST,
      width: "13.43%",
    },
    {
      ...ABSENT_REQUEST_COLUMNS.NAME,
      width: "19.96%",
      render: (text, record) => {
        const initials = text
          .split(" ")
          .map((name) => name[0])
          .join("");

        return (
          <div className="flex gap-3">
            <Avatar
              className="bg-volcano-1 text-volcano-2"
              size={40}
              alt="avatar"
            >
              {initials}
            </Avatar>
            <div className="flex flex-col">
              <span className="font-medium">{text}</span>
              <span className="text-xs opacity-45">{record.position}</span>
            </div>
          </div>
        );
      },
    },
    {
      ...ABSENT_REQUEST_COLUMNS.TYPE_ABSENT,
      width: "13.43%",
    },
    {
      ...ABSENT_REQUEST_COLUMNS.DESCRIPTION,
      width: "32.69%",
      render: (text) => {
        return <div className="line-clamp-3 whitespace-normal">{text}</div>;
      },
    },
    {
      ...ABSENT_REQUEST_COLUMNS.ACTIONS,
      width: "5.30%",
      render: (_, record) => {
        const onClickButtonView = () => {
          setSelectedRequest(record);
          onShowModalAbsentRequest();
        };

        return (
          <div className="flex flex-row gap-[1.25rem]">
            <Button
              onClick={onClickButtonView}
              className="m-0 h-fit p-0"
              type="text"
            >
              <AppIcon className="text-black/45" src="/icons/eye-icon.svg#id" />
            </Button>
            <Button className="m-0 h-fit p-0" type="text">
              <AppIcon
                className="text-black/45"
                src="/icons/trash-icon.svg#id"
              />
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Table
        rowKey="_id"
        dataSource={memberList}
        {...(memberList.length !== 0 ? { scroll } : null)}
        columns={columns}
      />
      <Modal
        title={
          <p className="border-b pb-4 font-medium text-black/[.85]">
            Absent Request
          </p>
        }
        open={isShowModalAbsentRequest}
        width={572}
        footer={<Button onClick={onHideModalAbsentRequest}>Cancel</Button>}
      >
        <div className="flex flex-col gap-y-[0.75rem] border-b pb-8 pt-6">
          <div className="flex justify-between">
            <span className="font-bold">Member</span>
            <span>{selectedRequest?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">From</span>
            <span>{selectedRequest?.durationRequested?.from}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">To</span>
            <span>{selectedRequest?.durationRequested?.to}</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="font-bold">Description</span>
            <span>{selectedRequest?.description}</span>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default React.memo(AbsentRequestTable);
