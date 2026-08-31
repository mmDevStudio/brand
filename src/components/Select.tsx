import { CheckCircledIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import {
  Content,
  Icon,
  Item,
  ItemIndicator,
  ItemText,
  Portal,
  Root,
  Trigger,
  Value,
  Viewport,
} from "@radix-ui/react-select";
import cn from "@/utils/cn";
import Button from "./Button";
import { inputContainerStyles } from "./Input";

type SelectProps = React.ComponentProps<typeof Root> &
  Pick<React.ComponentProps<typeof Value>, "placeholder"> &
  Pick<React.ComponentProps<typeof Button>, "className" | "prefixIcon">;

export default function Select({
  className,
  placeholder,
  children,
  prefixIcon,
  ...props
}: SelectProps) {
  return (
    <Root {...props}>
      <Trigger asChild>
        <Button
          prefixIcon={
            prefixIcon && <span className="text-text-subtle">{prefixIcon}</span>
          }
          className={cn(inputContainerStyles(), "text-left", className)}
          suffixIcon={
            <Icon asChild>
              <ChevronDownIcon className="text-text-subtle" />
            </Icon>
          }
        >
          <Value
            placeholder={
              <span className="text-text-subtle">{placeholder}</span>
            }
          />
        </Button>
      </Trigger>

      <Portal>
        <Content
          position="popper"
          sideOffset={-1}
          className="bg-bg border border-border min-w-(--radix-select-trigger-width) h-max-(--radix-select-content-available-height)"
        >
          <Viewport className="space-y-2 w-full">{children}</Viewport>
        </Content>
      </Portal>
    </Root>
  );
}

type OptionProps = React.ComponentProps<typeof Item>;

function Option({ children, className, ...props }: OptionProps) {
  return (
    <Item
      {...props}
      className={cn("px-3 py-2 flex gap-3 items-center w-full", className)}
    >
      <ItemText asChild>
        <span className="flex-1">{children}</span>
      </ItemText>

      <ItemIndicator asChild>
        <CheckCircledIcon className="text-text-subtle" />
      </ItemIndicator>
    </Item>
  );
}

Select.Option = Option;
