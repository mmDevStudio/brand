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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const baseId = useId();

  if (!tabs.length) return null;

  const activeTabId = `${baseId}-tab-${currentTab}`;
  const activePanelId = `${baseId}-panel-${currentTab}`;

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentTab((prev) => Math.min(prev + 1, tabs.length - 1));
    } else if (isRightSwipe) {
      setCurrentTab((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <div className={cn("flex flex-col gap-4", className)} {...props}>
      <div
        role="tablist"
        className="relative isolate flex w-full overflow-x-auto justify-between bg-stripes p-1"
      >
        <div
          className="absolute top-1 bottom-1 bg-white border border-border-subtle transition-transform duration-300 ease-out -z-10"
          style={{
            width: `calc((100% - 0.5rem) / ${tabs.length})`,
            transform: `translateX(calc(${currentTab} * 100%))`,
          }}
        />
        {tabs.map(({ id, title }, tabNum) => {
          const isSelected = tabNum === currentTab;
          const tabId = `${baseId}-tab-${id ?? tabNum}`;
          const panelId = `${baseId}-panel-${id ?? tabNum}`;

          return (
            <button
              type="button"
              className="w-full py-1"
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
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {tabs[currentTab]?.panel}
      </div>
    </div>
  );
}
