"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={`relative h-[20px] w-full overflow-hidden rounded-full bg-[#FAB72A] ${className}`}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-[#F7DD54] transition-all"
      style={{
        transform: `translateX(-${100 - (value || 0)}%)`,
        boxShadow:
          "0 20px 50px rgba(248, 223, 183, 0.8), 0 -20px 50px rgba(248, 223, 183, 0.8)",
      }}
    />
    <div className="absolute top-1 left-0 text-browngrey w-full h-full z-40 text-[10px] font-bold leading-3 py-0.5 px-4">
      {value?.toFixed(2)}
    </div>
  </ProgressPrimitive.Root>
));

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
