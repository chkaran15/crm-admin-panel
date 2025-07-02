import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Bell } from "lucide-react";

function NavNotification() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="cursor-pointer size-[36px] hover:bg-background rounded-full flex justify-center items-center relative">
              <Bell className="size-6 " />
              <span className="absolute min-w-[1.5rem] min-h-[1.5rem] text-xs flex justify-center items-center  -top-1 -right-1 bg-destructive text-background border-[2px] border-background rounded-full">
                12
              </span>
              <span className="sr-only">Notification</span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Notification</p>
          </TooltipContent>
        </Tooltip>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Notification</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center gap-2">
          <div className="rounded-full h-2 w-2 bg-blue-500"></div>
          <div>
            <p className="text-sm font-medium">New message received</p>
            <p className="text-xs text-muted-foreground">5 minutes ago</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2">
          <div className="rounded-full h-2 w-2 bg-green-500"></div>
          <div>
            <p className="text-sm font-medium">Task completed</p>
            <p className="text-xs text-muted-foreground">1 hour ago</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2">
          <div className="rounded-full h-2 w-2 bg-yellow-500"></div>
          <div>
            <p className="text-sm font-medium">Meeting reminder</p>
            <p className="text-xs text-muted-foreground">Tomorrow, 10:00 AM</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Mark all as read</DropdownMenuItem>
        <DropdownMenuItem>Notification settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NavNotification;
