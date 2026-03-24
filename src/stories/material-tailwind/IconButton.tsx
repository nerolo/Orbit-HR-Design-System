// Note: These examples use Font Awesome icons (<i className="fas fa-heart" />).
// To see icons, add Font Awesome to your project:
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />

import { IconButton } from "@material-tailwind/react";

export function IconButtonDefault() {
  return (
    <IconButton>
      <i className="fas fa-heart" />
    </IconButton>
  );
}

export function IconButtonVariants() {
  return (
    <div className="flex gap-4">
      <IconButton><i className="fas fa-heart" /></IconButton>
      <IconButton variant="gradient"><i className="fas fa-heart" /></IconButton>
      <IconButton variant="outlined"><i className="fas fa-heart" /></IconButton>
      <IconButton variant="text"><i className="fas fa-heart" /></IconButton>
    </div>
  );
}

export function IconButtonSizes() {
  return (
    <div className="flex items-end gap-4">
      <IconButton size="sm"><i className="fas fa-heart" /></IconButton>
      <IconButton size="md"><i className="fas fa-heart" /></IconButton>
      <IconButton size="lg"><i className="fas fa-heart fa-lg" /></IconButton>
    </div>
  );
}

export function IconButtonColors() {
  return (
    <div className="flex gap-4">
      <IconButton color="blue"><i className="fas fa-heart" /></IconButton>
      <IconButton color="red"><i className="fas fa-heart" /></IconButton>
      <IconButton color="green"><i className="fas fa-heart" /></IconButton>
      <IconButton color="amber"><i className="fas fa-heart" /></IconButton>
    </div>
  );
}

export function IconButtonRounded() {
  return (
    <div className="flex items-center gap-4">
      <IconButton className="rounded-full"><i className="fas fa-heart" /></IconButton>
      <IconButton variant="gradient" className="rounded-full"><i className="fas fa-heart" /></IconButton>
      <IconButton variant="outlined" className="rounded-full"><i className="fas fa-heart" /></IconButton>
      <IconButton variant="text" className="rounded-full"><i className="fas fa-heart" /></IconButton>
    </div>
  );
}

export function IconButtonCustomStyles() {
  return (
    <div className="flex gap-4">
      <IconButton className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
        <i className="fab fa-google text-lg" />
      </IconButton>
      <IconButton className="rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
        <i className="fab fa-twitter text-lg" />
      </IconButton>
      <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
        <i className="fab fa-github text-lg" />
      </IconButton>
    </div>
  );
}
