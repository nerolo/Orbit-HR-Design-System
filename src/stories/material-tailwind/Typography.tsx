import { Typography } from "@material-tailwind/react";

export function TypographyDefault() {
  return (
    <Typography>
      Material Tailwind is an easy to use components library for Tailwind CSS
      and Material Design. It provides a simple way to customize your
      components, you can change the colors, fonts, breakpoints and everything
      you need.
    </Typography>
  );
}

export function TypographyVariants() {
  return (
    <>
      <Typography variant="h1">Material Tailwind</Typography>
      <Typography variant="h2">Material Tailwind</Typography>
      <Typography variant="h3">Material Tailwind</Typography>
      <Typography variant="h4">Material Tailwind</Typography>
      <Typography variant="h5">Material Tailwind</Typography>
      <Typography variant="h6">Material Tailwind</Typography>
      <Typography variant="lead">
        Material Tailwind is an easy to use components library for Tailwind CSS
        and Material Design. It provides a simple way to customize your
        components, you can change the colors, fonts, breakpoints and everything
        you need.
      </Typography>
      <Typography variant="paragraph">
        Material Tailwind is an easy to use components library for Tailwind CSS
        and Material Design. It provides a simple way to customize your
        components, you can change the colors, fonts, breakpoints and everything
        you need.
      </Typography>
      <Typography variant="small">
        Material Tailwind is an easy to use components library for Tailwind CSS
        and Material Design. It provides a simple way to customize your
        components, you can change the colors, fonts, breakpoints and everything
        you need.
      </Typography>
    </>
  );
}

export function TypographyColors() {
  return (
    <>
      <Typography variant="h1" color="blue-gray">
        Material Tailwind
      </Typography>
      <Typography variant="h1" color="blue">
        Material Tailwind
      </Typography>
      <Typography variant="h1" color="red">
        Material Tailwind
      </Typography>
      <Typography variant="h1" color="green">
        Material Tailwind
      </Typography>
    </>
  );
}

export function TypographyGradientColor() {
  return (
    <Typography variant="h1" color="blue" textGradient>
      Material Tailwind
    </Typography>
  );
}
