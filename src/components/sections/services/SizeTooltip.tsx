import React from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface IconButtonWithTooltipProps {
  icon: React.ReactNode;
  tooltipText: string;
  onClick: () => void;
}

const IconButtonWithTooltip: React.FC<IconButtonWithTooltipProps> = ({
  icon,
  tooltipText,
  onClick,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="!bg-zinc-900 hover:!text-myColor-orange w-12 h-12 md:w-16 md:h-16 border-none"
            onClick={onClick}
          >
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent className="!bg-myColor-gray">
          <p className="!bg-myColor-gray !text-white text-lg">{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default IconButtonWithTooltip;
