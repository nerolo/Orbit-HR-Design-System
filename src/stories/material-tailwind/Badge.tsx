import { Badge, Button, IconButton, Avatar } from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";

export function BadgeDefault() {
  return (
    <Badge content="5">
      <Button>Notifications</Button>
    </Badge>
  );
}

export function BadgeColors() {
  return (
    <div className="flex items-center gap-4">
      <Badge color="red" content="5"><Button>Red</Button></Badge>
      <Badge color="green" content="5"><Button>Green</Button></Badge>
      <Badge color="amber" content="5"><Button>Amber</Button></Badge>
      <Badge color="purple" content="5"><Button>Purple</Button></Badge>
    </div>
  );
}

export function BadgePlacement() {
  return (
    <div className="flex items-center gap-4">
      <Badge placement="top-start" content="5"><Button>Top Start</Button></Badge>
      <Badge placement="top-end" content="5"><Button>Top End</Button></Badge>
      <Badge placement="bottom-start" content="5"><Button>Bottom Start</Button></Badge>
      <Badge placement="bottom-end" content="5"><Button>Bottom End</Button></Badge>
    </div>
  );
}

export function BadgeOverlap() {
  return (
    <div className="flex items-center gap-8">
      <Badge content="5">
        <IconButton>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
        </IconButton>
      </Badge>
      <Badge content="5" overlap="circular" placement="bottom-end">
        <Avatar src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80" alt="profile picture" />
      </Badge>
    </div>
  );
}

export function BadgeWithBorder() {
  return (
    <Badge content="5" withBorder>
      <Button>Notifications</Button>
    </Badge>
  );
}

export function BadgeDot() {
  return (
    <Badge>
      <Button>Settings</Button>
    </Badge>
  );
}

export function BadgeCustomStyles() {
  return (
    <Badge
      content={<CheckIcon className="h-4 w-4 text-white" strokeWidth={2.5} />}
      className="bg-gradient-to-tr from-green-400 to-green-600 border-2 border-white shadow-lg shadow-black/20"
    >
      <Button>Notifications</Button>
    </Badge>
  );
}
