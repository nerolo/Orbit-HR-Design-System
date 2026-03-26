import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DefaultStepper, StepperWithIcon, StepperWithDots, StepperWithContent, CustomStepper,
} from './Stepper';

const meta = {
  title: 'Material Tailwind/Stepper',
  component: DefaultStepper,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof DefaultStepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";

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
}`,
      },
    },
  },
};
export const WithIcon: Story = { render: () => <StepperWithIcon /> };
export const WithDots: Story = { render: () => <StepperWithDots /> };
export const WithContent: Story = { render: () => <StepperWithContent /> };
export const Custom: Story = { render: () => <CustomStepper /> };
