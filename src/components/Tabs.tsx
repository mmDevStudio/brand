"use client";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  Children,
  type ComponentProps,
  Fragment,
  isValidElement,
  type ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import cn from "@/utils/cn";

type TabProps = ComponentProps<"div"> & {
  title: string;
  subtitle: string;
  children: ReactNode;
};

function Tab({ children, ...props }: TabProps) {
  return <div {...props}>{children}</div>;
}

type TabsProps = { children: ReactNode; className?: string };

export default function Tabs({ children, className }: TabsProps) {
  const [active, setActive] = useState(0);
  const [triangleY, setTriangleY] = useState(0);
  const tabs = Children.toArray(children) as React.ReactElement<TabProps>[];
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const panelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const btn = buttonRefs.current[active];
    const panel = panelRef.current;
    if (!btn || !panel) return;

    const btnRect = btn.getBoundingClientRect();
    const panelRect = panel.getBoundingClientRect();
    setTriangleY(btnRect.top + btnRect.height / 2 - panelRect.top);
  }, [active]);

  return (
    <div className={cn("grid grid-cols-2 gap-8", className)}>
      <div>
        {tabs.map((tab, i) => {
          const k = isValidElement(tab) ? tab.key : i;
          return (
            <Fragment key={k}>
              {i !== 0 && <Divider />}
              <button
                ref={(el) => {
                  buttonRefs.current[i] = el;
                }}
                type="button"
                onClick={() => setActive(i)}
                className="w-full flex justify-between text-left p-3 cursor-pointer outline-none hover:bg-primary/20 transition"
              >
                <div className="flex flex-col">
                  <span
                    className={cn(
                      "text-h4 text-text font-bold uppercase font-heading w-fit",
                      active === i && "bg-primary",
                    )}
                  >
                    {tab.props.title}
                  </span>
                  <span className="text-sm text-text-subtle uppercase font-body">
                    {tab.props.subtitle}
                  </span>
                </div>
                {active !== i && (
                  <PlusIcon
                    height={24}
                    width={24}
                    className="text-text self-center"
                  />
                )}
              </button>
            </Fragment>
          );
        })}
      </div>

      <div
        ref={panelRef}
        className="relative min-h-0 bg-stripes bg-bg text-text -ml-3 pl-3"
        style={{
          clipPath:
            triangleY === null
              ? undefined
              : `polygon(
              12px 0,
              100% 0,
              100% 100%,
              12px 100%,
              12px ${triangleY + 8}px,
              0px ${triangleY}px,
              12px ${triangleY - 8}px
            )`,
          transition: "clip-path 200ms ease",
        }}
      >
        {tabs[active]}
      </div>
    </div>
  );
}

function Divider() {
  return <div className="border-t border-border" />;
}

Tabs.Tab = Tab;
