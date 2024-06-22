import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Card, Heading } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  if (typeof params.id !== "number") notFound();

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <div>
      <Heading className="mb-2">{issue.title}</Heading>
      <div className="flex items-center mb-5 space-x-3">
        <IssueStatusBadge status={issue.status} />
        <div>{issue.createAt.toDateString()}</div>
      </div>
      <Card>{issue.description}</Card>
    </div>
  );
};

export default IssueDetailPage;
