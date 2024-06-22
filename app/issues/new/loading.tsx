import { Box } from "@radix-ui/themes";
import Skeleton from "@/app/components/Skeleton";


const LoadingNewIssuePage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton width="20rem" />
    </Box>
  );
};

export default LoadingNewIssuePage;
