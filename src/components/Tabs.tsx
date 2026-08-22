"use client";
import { Cross1Icon, ExternalLinkIcon, PlusIcon } from "@radix-ui/react-icons";
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
  const [isMobileOpen, setIsMobileOpen] = useState(false);
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
    <div className={cn("grid lg:grid-cols-2 gap-8", className)}>
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
                onClick={() => {
                  setActive(i);
                  if (window.innerWidth < 1024) {
                    setIsMobileOpen(true);
                  }
                }}
                className="w-full flex justify-between text-left p-3 cursor-pointer hover:bg-primary/20 transition"
              >
                <div className="flex flex-col">
                  <span
                    className={cn(
                      "text-h4 text-text font-bold uppercase font-heading w-fit lg:highlight",
                      active === i && "active-highlight",
                    )}
                  >
                    {tab.props.title}
                  </span>
                  <span className="text-sm text-text-subtle uppercase font-body">
                    {tab.props.subtitle}
                  </span>
                </div>

                {/* Desktop dynamic icon */}
                <div className="hidden lg:block self-center">
                  {active !== i && (
                    <PlusIcon height={24} width={24} className="text-text" />
                  )}
                </div>

                {/* Mobile static icon */}
                <div className="block self-center lg:hidden">
                  <ExternalLinkIcon
                    height={24}
                    width={24}
                    className="text-text"
                  />
                </div>
              </button>
            </Fragment>
          );
        })}
      </div>

      {/* Desktop Side Panel */}
      <div
        ref={panelRef}
        className="hidden lg:block relative min-h-0 bg-stripes bg-bg text-text -ml-3 pl-3"
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

      {/* Mobile Modal Dialog */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm lg:hidden">
          <div className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto bg-bg border border-border bg-stripes p-6 text-text shadow-xl rounded-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold font-heading uppercase">
                  {tabs[active]?.props.title}
                </h3>
                <p className="text-sm text-text-subtle font-body uppercase">
                  {tabs[active]?.props.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsMobileOpen(false)}
                className="p-1 text-text hover:bg-primary/20 transition rounded"
                aria-label="Close dialog"
              >
                <Cross1Icon height={24} width={24} />
              </button>
            </div>

            <Divider />

            <div className="mt-4">{tabs[active]}</div>
          </div>
        </div>
      )}
    </div>
  );
}

function Divider() {
  return <div className="border-t border-border" />;
}

Tabs.Tab = Tab;
