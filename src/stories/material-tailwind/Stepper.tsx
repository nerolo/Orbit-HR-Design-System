import React from "react";
import { Stepper, Step, Button, Typography, CardHeader } from "@material-tailwind/react";
import {
  HomeIcon, UserIcon, CogIcon, BuildingLibraryIcon,
} from "@heroicons/react/24/solid";

export function DefaultStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="w-full py-4 px-8">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>1</Step>
        <Step onClick={() => setActiveStep(1)}>2</Step>
        <Step onClick={() => setActiveStep(2)}>3</Step>
      </Stepper>
      <div className="mt-16 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>Prev</Button>
        <Button onClick={handleNext} disabled={isLastStep}>Next</Button>
      </div>
    </div>
  );
}

export function StepperWithIcon() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="w-full py-4 px-8">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}><HomeIcon className="h-5 w-5" /></Step>
        <Step onClick={() => setActiveStep(1)}><UserIcon className="h-5 w-5" /></Step>
        <Step onClick={() => setActiveStep(2)}><CogIcon className="h-5 w-5" /></Step>
      </Stepper>
      <div className="mt-16 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>Prev</Button>
        <Button onClick={handleNext} disabled={isLastStep}>Next</Button>
      </div>
    </div>
  );
}

export function StepperWithDots() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="w-full py-4 px-8">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step className="h-4 w-4" onClick={() => setActiveStep(0)} />
        <Step className="h-4 w-4" onClick={() => setActiveStep(1)} />
        <Step className="h-4 w-4" onClick={() => setActiveStep(2)} />
      </Stepper>
      <div className="mt-16 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>Prev</Button>
        <Button onClick={handleNext} disabled={isLastStep}>Next</Button>
      </div>
    </div>
  );
}

export function StepperWithContent() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="w-full px-24 py-4">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>
          <UserIcon className="h-5 w-5" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <Typography variant="h6" color={activeStep === 0 ? "blue-gray" : "gray"}>Step 1</Typography>
            <Typography color={activeStep === 0 ? "blue-gray" : "gray"} className="font-normal">Details about your account.</Typography>
          </div>
        </Step>
        <Step onClick={() => setActiveStep(1)}>
          <CogIcon className="h-5 w-5" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <Typography variant="h6" color={activeStep === 1 ? "blue-gray" : "gray"}>Step 2</Typography>
            <Typography color={activeStep === 1 ? "blue-gray" : "gray"} className="font-normal">Details about your account.</Typography>
          </div>
        </Step>
        <Step onClick={() => setActiveStep(2)}>
          <BuildingLibraryIcon className="h-5 w-5" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <Typography variant="h6" color={activeStep === 2 ? "blue-gray" : "gray"}>Step 3</Typography>
            <Typography color={activeStep === 2 ? "blue-gray" : "gray"} className="font-normal">Details about your account.</Typography>
          </div>
        </Step>
      </Stepper>
      <div className="mt-32 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>Prev</Button>
        <Button onClick={handleNext} disabled={isLastStep}>Next</Button>
      </div>
    </div>
  );
}

export function CustomStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className="w-full py-4 px-8">
      <CardHeader floated={false} variant="gradient" color="gray" className="grid h-24 m-0 place-items-center">
        <div className="w-full px-20 pt-4 pb-8">
          <Stepper activeStep={activeStep} lineClassName="bg-white/50" activeLineClassName="bg-white">
            {["HTML", "React", "Vue", "Svelte"].map((label, i) => (
              <Step
                key={label}
                className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                activeClassName="ring-0 !bg-white text-white"
                completedClassName="!bg-white text-white"
                onClick={() => setActiveStep(i)}
              >
                <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                  <Typography variant="h6" color="inherit">{label}</Typography>
                </div>
              </Step>
            ))}
          </Stepper>
        </div>
      </CardHeader>
    </div>
  );
}
