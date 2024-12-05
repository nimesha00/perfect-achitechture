"use client";

import Input from "@/components/inputs/formik-inputs/input";
import TextArea from "@/components/inputs/formik-inputs/textArea";

function FormikController(props: any) {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textArea":
      return <TextArea {...rest} />;
    default:
      return null;
  }
}

export default FormikController;
