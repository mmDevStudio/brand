"use client";

import { type ReactNode, useId, useState } from "react";
import cn from "@/utils/cn";

export type TabItem = {
  id?: string;
  title: string;
  panel: ReactNode;
};

type CarouselProps = React.ComponentProps<"div"> & {
  tabs: TabItem[];
  startTab?: number;
};

export default function Carousel({
  tabs,
  startTab = 0,
  className,
  ...props
}: CarouselProps) {
  const [currentTab, setCurrentTab] = useState(startTab);
  const baseId = useId();

  if (!tabs.length) return null;

  const activeTabId = `${baseId}-tab-${currentTab}`;
  const activePanelId = `${baseId}-panel-${currentTab}`;

  return (
    <div className={cn("flex flex-col gap-4", className)} {...props}>
      <div
        role="tablist"
        className="flex w-full overflow-x-auto justify-between bg-stripes p-1"
      >
        {tabs.map(({ id, title }, tabNum) => {
          const isSelected = tabNum === currentTab;
          const tabId = `${baseId}-tab-${id ?? tabNum}`;
          const panelId = `${baseId}-panel-${id ?? tabNum}`;

          return (
            <button
              type="button"
              className={cn(
                "w-full py-1",
                isSelected ? "bg-white border-border-subtle border" : "",
              )}
              key={id ?? `${title}-${tabNum}`}
              id={tabId}
              role="tab"
              aria-selected={isSelected}
              aria-controls={panelId}
              onClick={() => setCurrentTab(tabNum)}
            >
              {title}
            </button>
          );
        })}
      </div>

      <div
        id={activePanelId}
        role="tabpanel"
        className="w-full"
        aria-labelledby={activeTabId}
      >
        {tabs[currentTab]?.panel}
      </div>
    </div>
  );
}
