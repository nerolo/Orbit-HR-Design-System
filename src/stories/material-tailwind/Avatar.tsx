import { Avatar, Typography, Badge } from "@material-tailwind/react";

export function AvatarDefault() {
  return <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />;
}

export function AvatarVariants() {
  return (
    <div className="flex gap-4">
      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" variant="rounded" />
      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" variant="square" />
    </div>
  );
}

export function AvatarSizes() {
  return (
    <div className="flex w-max items-end gap-4">
      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xs" />
      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="sm" />
      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="md" />
      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="lg" />
      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xl" />
      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xxl" />
    </div>
  );
}

export function AvatarWithBorder() {
  return (
    <div className="flex gap-4">
      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" withBorder={true} className="p-0.5" />
      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" variant="rounded" withBorder={true} color="green" className="p-0.5" />
      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" variant="square" withBorder={true} color="pink" className="p-0.5" />
    </div>
  );
}

export function AvatarWithText() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
        <div>
          <Typography variant="h6">Tania Andrew</Typography>
          <Typography variant="small" color="gray" className="font-normal">Web Developer</Typography>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" variant="rounded" />
        <div>
          <Typography variant="h6">Tania Andrew</Typography>
          <Typography variant="small" color="gray" className="font-normal">Web Developer</Typography>
        </div>
      </div>
    </div>
  );
}

export function AvatarStack() {
  return (
    <div className="flex items-center -space-x-4">
      <Avatar variant="circular" alt="user 1" className="border-2 border-white hover:z-10 focus:z-10" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80" />
      <Avatar variant="circular" alt="user 2" className="border-2 border-white hover:z-10 focus:z-10" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=1061&q=80" />
      <Avatar variant="circular" alt="user 3" className="border-2 border-white hover:z-10 focus:z-10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1288&q=80" />
      <Avatar variant="circular" alt="user 4" className="border-2 border-white hover:z-10 focus:z-10" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80" />
    </div>
  );
}

export function AvatarWithDotIndicator() {
  return (
    <div className="flex gap-4">
      <Badge placement="top-end" overlap="circular" color="green" withBorder>
        <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
      </Badge>
      <Badge placement="bottom-end" overlap="circular" color="red" withBorder>
        <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
      </Badge>
    </div>
  );
}

export function AvatarCustomStyles() {
  return (
    <Avatar
      size="lg"
      alt="avatar"
      src="https://docs.material-tailwind.com/img/face-2.jpg"
      className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
  );
}
