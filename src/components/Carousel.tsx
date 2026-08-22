"use client";

import { type ReactNode, useId, useState } from "react";
import cn from "@/utils/cn";
import Button from "./Button";

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
        className="flex gap-2 w-full overflow-x-auto md:justify-between"
      >
        {tabs.map(({ id, title }, tabNum) => {
          const isSelected = tabNum === currentTab;
          const tabId = `${baseId}-tab-${id ?? tabNum}`;
          const panelId = `${baseId}-panel-${id ?? tabNum}`;

          return (
            <Button
              key={id ?? `${title}-${tabNum}`}
              id={tabId}
              role="tab"
              aria-selected={isSelected}
              aria-controls={panelId}
              mode="ghost"
              active={isSelected}
              onClick={() => setCurrentTab(tabNum)}
            >
              {title}
            </Button>
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
