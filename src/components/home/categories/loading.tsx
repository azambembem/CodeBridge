import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="w-[217px] h-[344px] flex flex-col gap-4 overflow-y-auto mt-10">
      <Skeleton className="w-full min-h-[30px] rounded-sm" />
      <Skeleton className="w-full min-h-[30px] rounded-sm" />
      <Skeleton className="w-full min-h-[30px] rounded-sm" />
      <Skeleton className="w-full min-h-[30px] rounded-sm" />
      <Skeleton className="w-full min-h-[30px] rounded-sm" />
      <Skeleton className="w-full min-h-[30px] rounded-sm" />
      <Skeleton className="w-full min-h-[30px] rounded-sm" />
      <Skeleton className="w-full min-h-[30px] rounded-sm" />
      <Skeleton className="w-full min-h-[30px] rounded-sm" />
      <Skeleton className="w-full min-h-[30px] rounded-sm" />
      <Skeleton className="w-full min-h-[30px] rounded-sm" />
    </div>
  );
};

export default Loading;
