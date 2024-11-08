"use client";
import React, { ChangeEvent, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Documents from './components/Documents';
import Profileinfo from './components/Profileinfo';
import Personalinfo from './components/Personalinfo';
import { createProfile } from '@/api/user';
import { useAppSelector } from '@/app/lib/hooks';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const steps = ['Step-1', 'Step-2', 'Step-3'];

type FormDataType = {
  headline?: string;
  about?: string;
  bio?: string;
  profilephoto?: File;
  cover_photos?: File;
  top_cuisine?: File;
  [key: string]: any;
};

const Page: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const [formData, setFormData] = useState<FormDataType>({});
  console.log("form data==>",formData);

  const token = useAppSelector((state) => state.auth.accessToken);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData((prevFormData) => {
      const selectedValues = prevFormData[name] || [];
      if (checked) {
        return { ...prevFormData, [name]: [...selectedValues, value] };
      } else {
        return { ...prevFormData, [name]: selectedValues.filter((item: string) => item !== value) };
      }
    });
  };

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      setFormData({ ...formData, [event.target.name]: file });
    }
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const router = useRouter()
  const handleSubmit = async () => {
    try {
      const res = await createProfile(formData, token); // Fixed variable name here
      console.log("Api response =>", res);
      if(res?.status === 201){
        toast.success("Profile created!")
        router.push("/provider/cook-for-Monthly-basis")
      }else{
        toast.error(res?.data.error);
        router.push("/coustomers/login")
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const isStepOptional = (step: number) => step === 1;

  const isStepSkipped = (step: number) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }} className="px-8">
      <Stepper activeStep={activeStep} className="p-8">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ mt: 2, mb: 1 }}>
            <form>
              <div className="space-y-12 space-x-12">
                {(() => {
                  switch (activeStep) {
                    case 0:
                      return <Profileinfo handleTextChange={handleTextChange} handleCheckboxChange={handleCheckboxChange} handleSelectChange={handleSelectChange} />;
                    case 1:
                      return <Documents handleFileChange={handleFileChange} formData={formData} />;
                    case 2:
                      return <Personalinfo handleTextChange={handleTextChange} />;
                    default:
                      return null;
                  }
                })()}
              </div>
            </form>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button
              onClick={async () => {
                if (activeStep === steps.length - 1) {
                  await handleSubmit();
                } else {
                  handleNext();
                }
              }}
            >
              {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Page;
