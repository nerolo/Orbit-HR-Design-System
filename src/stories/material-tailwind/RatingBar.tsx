import React from "react";
import { Rating, Typography, Avatar } from "@material-tailwind/react";

export function DefaultRating() {
  return <Rating value={4} />;
}

export function RatingColors() {
  return (
    <div className="flex flex-col gap-4">
      <Rating unratedColor="amber" ratedColor="amber" />
      <Rating unratedColor="blue" ratedColor="blue" />
      <Rating unratedColor="green" ratedColor="green" />
      <Rating unratedColor="red" ratedColor="red" />
    </div>
  );
}

export function ReadonlyRating() {
  return <Rating value={4} readonly />;
}

function RatedIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  );
}

function UnratedIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

export function CustomRatingIcon() {
  return (
    <Rating ratedColor="red" ratedIcon={<RatedIcon />} unratedIcon={<UnratedIcon />} />
  );
}

export function RatingWithText() {
  const [rated, setRated] = React.useState(4);

  return (
    <div className="flex items-center gap-2 font-bold text-blue-gray-500">
      {rated}.7
      <Rating value={4} onChange={(value) => setRated(value)} />
      <Typography color="blue-gray" className="font-medium text-blue-gray-500">
        Based on 134 Reviews
      </Typography>
    </div>
  );
}

export function RatingWithComment() {
  return (
    <div className="px-8 text-center">
      <Typography variant="h2" color="blue-gray" className="mb-6 font-medium">
        "This is an excellent product, the documentation is excellent and helped me get things done more efficiently."
      </Typography>
      <Avatar
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image"
        size="lg"
      />
      <Typography variant="h6" className="mt-4">Tania Andrew</Typography>
      <Typography color="gray" className="mb-4 font-normal">Lead Frontend Developer</Typography>
      <Rating value={5} readonly />
    </div>
  );
}
