import {
  Typography, Card, CardHeader, CardBody, CardFooter, Button,
} from "@material-tailwind/react";

export function DefaultSkeleton() {
  return (
    <div className="max-w-full animate-pulse">
      <Typography as="div" variant="h1" className="mb-4 h-3 w-56 rounded-full bg-gray-300">&nbsp;</Typography>
      <Typography as="div" variant="paragraph" className="mb-2 h-2 w-72 rounded-full bg-gray-300">&nbsp;</Typography>
      <Typography as="div" variant="paragraph" className="mb-2 h-2 w-72 rounded-full bg-gray-300">&nbsp;</Typography>
      <Typography as="div" variant="paragraph" className="mb-2 h-2 w-72 rounded-full bg-gray-300">&nbsp;</Typography>
      <Typography as="div" variant="paragraph" className="mb-2 h-2 w-72 rounded-full bg-gray-300">&nbsp;</Typography>
    </div>
  );
}

export function ImagePlaceholderSkeleton() {
  return (
    <div className="flex animate-pulse flex-wrap items-center gap-8">
      <div className="grid h-36 w-36 place-items-center rounded-lg bg-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-12 w-12 text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
      </div>
      <div className="w-max">
        <Typography as="div" variant="h1" className="mb-4 h-3 w-56 rounded-full bg-gray-300">&nbsp;</Typography>
        {Array.from({ length: 6 }).map((_, i) => (
          <Typography key={i} as="div" variant="paragraph" className="mb-2 h-2 w-72 rounded-full bg-gray-300">&nbsp;</Typography>
        ))}
      </div>
    </div>
  );
}

export function VideoPlaceholderSkeleton() {
  return (
    <div className="grid h-full max-h-[300px] min-h-[160px] w-full max-w-xs animate-pulse place-items-center rounded-lg bg-gray-300">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-12 w-12 text-gray-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    </div>
  );
}

export function CardPlaceholderSkeleton() {
  return (
    <Card className="mt-6 w-96 animate-pulse">
      <CardHeader shadow={false} floated={false} className="relative grid h-56 place-items-center bg-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-12 w-12 text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
      </CardHeader>
      <CardBody>
        <Typography as="div" variant="h1" className="mb-4 h-3 w-56 rounded-full bg-gray-300">&nbsp;</Typography>
        {Array.from({ length: 4 }).map((_, i) => (
          <Typography key={i} as="div" variant="paragraph" className="mb-2 h-2 w-full rounded-full bg-gray-300">&nbsp;</Typography>
        ))}
      </CardBody>
      <CardFooter className="pt-0">
        <Button disabled tabIndex={-1} className="h-8 w-20 bg-gray-300 shadow-none hover:shadow-none">&nbsp;</Button>
      </CardFooter>
    </Card>
  );
}
