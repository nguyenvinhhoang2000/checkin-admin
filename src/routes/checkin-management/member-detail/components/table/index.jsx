import React from "react";
import { Table } from "antd";

import MEMBER_DETAIL_COLUMNS from "@/constants/members-detail-table";

import { scroll } from "./config";

const memberList = [
  {
    _id: "1",
    date: "1-1-2023",
    isAbsent: false,
    checkIn: {
      time: "8:20:34",
      isLate: false,
    },
    checkOut: {
      time: "17:20:34",
      isLate: false,
    },
    device: "Iphone 10",
  },
  {
    _id: "2",
    date: "1-1-2023",
    isAbsent: true,
    checkIn: {
      time: "8:20:34",
      isLate: false,
    },
    checkOut: {
      time: "17:20:34",
      isLate: false,
    },
    device: "Iphone 10",
  },
  {
    _id: "3",
    date: "1-1-2023",
    isAbsent: false,
    checkIn: {
      time: "8:20:34",
      isLate: false,
    },
    checkOut: {
      time: "17:20:34",
      isLate: false,
    },
    device: "Iphone 10",
  },
  {
    _id: "4",
    date: "1-1-2023",
    isAbsent: false,
    checkIn: {
      time: "8:20:34",
      isLate: false,
    },
    checkOut: {
      time: "17:20:34",
      isLate: false,
    },
    device: "Samsung Galaxy 8",
  },
  {
    _id: "5",
    date: "1-1-2023",
    isAbsent: false,
    checkIn: {
      time: "8:20:34",
      isLate: false,
    },
    checkOut: {
      time: "17:20:34",
      isLate: false,
    },
    device: "Iphone 10",
  },
];

function MemberDetailTable() {
  const columns = [
    {
      ...MEMBER_DETAIL_COLUMNS.DATE,
      width: "25%",
    },
    {
      ...MEMBER_DETAIL_COLUMNS.CHECK_IN,
      width: "25%",
      render: (text, record) => {
        return (
          <div className="flex flex-col gap-[0.125rem]">
            {record.isAbsent ? (
              <>
                <span className="text-sm text-character-title">Absent</span>
                <span className="text-xs text-secondary-3">Description</span>
              </>
            ) : (
              <>
                <span className="text-sm text-character-title">
                  {text.time}
                </span>
                <span className="text-xs text-secondary-2">Check-in Early</span>
              </>
            )}
          </div>
        );
      },
    },
    {
      ...MEMBER_DETAIL_COLUMNS.CHECK_OUT,
      width: "25%",
      render: (text, record) => {
        return (
          <div className="flex flex-col gap-[0.125rem]">
            {record.isAbsent ? (
              <>
                <span className="text-sm text-character-title">Absent</span>
                <span className="text-xs text-secondary-3">Description</span>
              </>
            ) : (
              <>
                <span className="text-sm text-character-title">
                  {text.time}
                </span>
                <span className="text-xs text-danger">Check-in Early</span>
              </>
            )}
          </div>
        );
      },
    },
    {
      ...MEMBER_DETAIL_COLUMNS.DEVICE,
      width: "25%",
      style: { whiteSpace: "nowrap" },
    },
  ];

  return (
    <Table
      rowKey="_id"
      dataSource={memberList}
      {...(memberList.length !== 0 ? { scroll } : null)}
      columns={columns}
    />
  );
}

export default React.memo(MemberDetailTable);
