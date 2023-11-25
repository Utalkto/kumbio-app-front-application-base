'use client';
import { useState } from "react";
import { 
    Box,
    Dialog, 
    DialogContent, 
    DialogTitle, 
    IconButton, 
    Step, 
    StepButton, 
    Stepper
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { OrganizationForm } from "./OrganizationForm";

const steps = ['Negocio', 'Horario', 'Servicios'];

export const OnBoardingModal = () => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const [completed, setCompleted] = useState<{
        [k: number]: boolean;
      }>({});

    return (
        <Dialog
            fullWidth
            maxWidth='md'
            open={true}
            onClose={() => { } }
            sx={{
                "& .MuiDialog-container": {
                    alignItems: "flex-start"
                }
            }}
        >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                Bienvenido a Kumbio
            </DialogTitle>
            <IconButton
            aria-label="close"
            onClick={() => {} }
            sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
            }}
            >
            <CloseIcon />
            </IconButton>
            <DialogContent dividers>
                <Box mb={2} paddingY={3}>
                    <Stepper alternativeLabel activeStep={activeStep}>
                        {steps.map((label, index) => (
                            <Step key={label} completed={completed[index]}>
                                <StepButton color="inherit" onClick={() => setActiveStep((prevActiveStep) => prevActiveStep - 1)}>
                                 {label}
                                </StepButton>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
                {
                  activeStep == 0 && <OrganizationForm />
                }
            </DialogContent>
        </Dialog>
    )
}


  