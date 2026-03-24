import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";

export function CardDefault() {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=800&q=80" alt="card-image" className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">UI/UX Review Check</Typography>
        <Typography>The place is close to Barceloneta Beach and bus stop just 2 min away.</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}

export function SimpleCard() {
  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">UI/UX Review Check</Typography>
        <Typography>The place is close to Barceloneta Beach and bus stop just 2 min away.</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}

export function ProfileCard() {
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src="https://docs.material-tailwind.com/img/face-2.jpg" alt="profile-picture" className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">Natalie Paisley</Typography>
        <Typography color="blue-gray" className="font-medium">Frontend Developer</Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7">
        <Typography as="a" href="#" className="font-normal">Twitter</Typography>
        <Typography as="a" href="#" className="font-normal">LinkedIn</Typography>
        <Typography as="a" href="#" className="font-normal">GitHub</Typography>
      </CardFooter>
    </Card>
  );
}

export function LoginCard() {
  return (
    <Card className="w-96">
      <CardHeader variant="gradient" color="gray" className="mb-4 grid h-28 place-items-center">
        <Typography variant="h3" color="white">Sign In</Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input label="Email" size="lg" />
        <Input label="Password" size="lg" />
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>Sign In</Button>
      </CardFooter>
    </Card>
  );
}

export function EcommerceCard() {
  return (
    <Card className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="product"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">Apple AirPods</Typography>
          <Typography color="blue-gray" className="font-medium">$95.00</Typography>
        </div>
        <Typography variant="small" color="gray" className="font-normal opacity-75">
          With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button fullWidth>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}

export function PricingCard() {
  return (
    <Card color="gray" variant="gradient" className="w-full max-w-[20rem] p-8">
      <CardHeader className="m-0 mb-8 border-b border-white/10 pb-8 text-center">
        <Typography variant="small" color="white" className="font-normal uppercase opacity-70">standard</Typography>
        <Typography variant="h1" color="white" className="mt-6 flex justify-center gap-1 text-7xl font-normal">
          <span className="mt-2 text-4xl">$</span>29 <span className="self-end text-4xl">/mo</span>
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
          {["5 team members", "200+ components", "40+ built-in pages"].map((item) => (
            <li key={item} className="flex items-center gap-4 text-white">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3 w-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              <Typography className="font-normal">{item}</Typography>
            </li>
          ))}
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button size="lg" color="white" fullWidth>Buy Now</Button>
      </CardFooter>
    </Card>
  );
}
