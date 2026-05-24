import { Skeleton } from "@heroui/react";
const Loadingcard = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <div className="space-y-2">
        <p className="truncate text-xs text-muted">Loading...</p>
        <div className="shadow-panel space-y-3 rounded-lg bg-transparent p-4">
          <Skeleton animationType="pulse" className="h-20 rounded-lg" />
          <Skeleton animationType="pulse" className="h-3 w-3/5 rounded-lg" />
          <Skeleton animationType="pulse" className="h-3 w-4/5 rounded-lg" />
        </div>
      </div>

      <div className="space-y-2">
        <p className="truncate text-xs text-muted">Loading...</p>
        <div className="shadow-panel space-y-3 rounded-lg bg-transparent p-4">
          <Skeleton animationType="pulse" className="h-20 rounded-lg" />
          <Skeleton animationType="pulse" className="h-3 w-3/5 rounded-lg" />
          <Skeleton animationType="pulse" className="h-3 w-4/5 rounded-lg" />
        </div>
      </div>

      <div className="space-y-2">
        <p className="truncate text-xs text-muted">Loading...</p>
        <div className="shadow-panel space-y-3 rounded-lg bg-transparent p-4">
          <Skeleton animationType="pulse" className="h-20 rounded-lg" />
          <Skeleton animationType="pulse" className="h-3 w-3/5 rounded-lg" />
          <Skeleton animationType="pulse" className="h-3 w-4/5 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Loadingcard;