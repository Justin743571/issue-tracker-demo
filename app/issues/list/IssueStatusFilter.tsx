"use client";

import { Select } from "@radix-ui/themes";
import React from "react";
import { Status } from "@prisma/client";
import { useRouter } from "next/navigation";

const IssueStatusFilter = () => {
  const statuses: { label: string; value: Status | "all" }[] = [
    { label: "All", value: "all" },
    { label: "Open", value: "OPEN" },
    { label: "In progress", value: "IN_PROGRESS" },
    { label: "Closed", value: "CLOSED" },
  ];

  const router = useRouter();

  return (
    <Select.Root
      onValueChange={(status) => {
        const option = status === "all" ? "" : "?status=" + status;
        router.push("/issues/list" + option);
      }}
    >
      <Select.Trigger placeholder="Filter by Status..." />
      <Select.Content>
        <Select.Group>
          {statuses.map((status) => (
            <Select.Item key={status.value} value={status.value}>
              {status.label}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
