import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import IssueStatusFilter from "./IssueStatusFilter";

const IssueActions = () => {
  return (
    <Flex className="mb-5" justify="between">
      <IssueStatusFilter />
      <Link href="/issues/new" legacyBehavior>
        <Button>New Issue</Button>
      </Link>
    </Flex>
  );
};

export default IssueActions;
