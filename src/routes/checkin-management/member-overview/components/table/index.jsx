import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Table } from "antd";

import AppIcon from "@/components/apps/app-icon";

import { LOCATIONS } from "@/constants/locations";
import MEMBER_OVERVIEW_COLUMNS from "@/constants/member-overview-table";

import { scroll } from "./config";

const memberList = [
  {
    _id: "1",
    name: "Thai Ha",
    position: "Lead",
    checkIn: {
      early: 0,
      late: 0,
    },
    checkOut: {
      early: 0,
      late: 0,
    },
    absent: 0,
  },
  {
    _id: "2",
    name: "Thai Ha Ha",
    position: "Lead",
    checkIn: {
      early: 0,
      late: 0,
    },
    checkOut: {
      early: 0,
      late: 0,
    },
    absent: 0,
  },
  {
    _id: "3",
    name: "Thai Ha Ha Ha",
    position: "Lead",
    checkIn: {
      early: 0,
      late: 0,
    },
    checkOut: {
      early: 0,
      late: 0,
    },
    absent: 0,
  },
  {
    _id: "4",
    name: "Thai Ha Ha Ha Ha",
    position: "Lead",
    checkIn: {
      early: 0,
      late: 0,
    },
    checkOut: {
      early: 0,
      late: 0,
    },
    absent: 0,
  },
  {
    _id: "5",
    name: "Thai Ha Ha Ha Ha Ha",
    position: "Lead",
    checkIn: {
      early: 0,
      late: 0,
    },
    checkOut: {
      early: 0,
      late: 0,
    },
    absent: 0,
  },
  {
    _id: "6",
    name: "Thai Ha Ha Ha Ha Ha Ha",
    position: "Lead",
    checkIn: {
      early: 0,
      late: 0,
    },
    checkOut: {
      early: 0,
      late: 0,
    },
    absent: 123,
  },
];

function MemberOverviewTable() {
  const navigate = useNavigate();

  const columns = [
    {
      ...MEMBER_OVERVIEW_COLUMNS.NAME,
      width: "27.14%",
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
      ...MEMBER_OVERVIEW_COLUMNS.CHECKIN_EARLY,
      width: "13.57%",
    },
    {
      ...MEMBER_OVERVIEW_COLUMNS.CHECKIN_LATE,
      width: "13.57%",
      style: { whiteSpace: "nowrap" },
    },
    {
      ...MEMBER_OVERVIEW_COLUMNS.CHECKOUT_EARLY,
      width: "13.57%",
      style: { whiteSpace: "nowrap" },
    },
    {
      ...MEMBER_OVERVIEW_COLUMNS.CHECKOUT_LATE,
      width: "13.57%",
      style: { whiteSpace: "nowrap" },
    },
    {
      ...MEMBER_OVERVIEW_COLUMNS.ABSENT,
      width: "13.57%",
      style: { whiteSpace: "nowrap" },
    },
    {
      ...MEMBER_OVERVIEW_COLUMNS.ACTIONS,
      width: "5%",
      render: (id) => {
        const onClickButtonView = () => {
          navigate(LOCATIONS.MEMBER_DETAIL.pathWithId(id));
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
          </div>
        );
      },
    },
  ];

  return (
    <Table
      rowKey="_id"
      dataSource={memberList}
      scroll={memberList.length !== 0 ? scroll : null}
      columns={columns}
    />
  );
}

export default React.memo(MemberOverviewTable);
