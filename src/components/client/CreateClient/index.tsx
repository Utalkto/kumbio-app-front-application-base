"use client";

import { FC, useState } from "react";
import { Form, Formik } from "formik";
import { createLocationSchema } from "@/models";
import { useCreateLocation } from "@/hooks";
import { ColorlibStepIconLocation } from "@/components/location/ColorlibStepIconLocation";
import {
  IconButton,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { ClientForm } from "@/components/client/CreateClientForm";
import { Button } from "@/components/ui";
import { Modal } from "@/components/ui";
import { useRouter } from "next/navigation";
import { Props } from "./interfaces";
import CloseIcon from "@mui/icons-material/Close";

import { useCreateClient } from "@/hooks/client";

export const CreateClient: FC<Props> = ({ open, handleClose }) => {
  const router = useRouter();

  const { initialValues, onSubmit } = useCreateClient();

  return (
    <Modal open={open} onClose={handleClose}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        // validationSchema={createLocationSchema}
      >
        {({ values, setFieldValue }) => (
          <Form
            style={{
              width: "100%",
            }}
          >
            <Stack
              direction="row"
              alignItems={"center"}
              mb={2}
              justifyContent={"space-between"}
            >
              <Typography variant="body1">Crear cliente</Typography>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Stack>
            <ClientForm />
            <Stack
              width="100%"
              direction="row"
              gap={1}
              justifyContent={"end"}
              mb={2}
            >
              <Button variant="contained" type="submit">
                Crear
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};
