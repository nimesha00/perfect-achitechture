import React from "react";
import { Field, ErrorMessage, useField } from "formik";
import { cn } from "@/lib/utils";

function TextArea(props: any) {
  const { label, name, className, ...rest } = props;
  const [, meta] = useField(props);
  return (
    <div>
      <label
        htmlFor={name}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      <Field
        as="textarea"
        className={cn(
          "flex h-10 w-full border border-input bg-background px-3 py-2 mt-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-gray-400 disabled:cursor-not-allowed disabled:opacity-50",
          { "border-error": meta.error && meta.touched },
          className
        )}
        id={name}
        name={name}
        {...rest}
      />
      <p className="text-xs text-error italic font-medium">
        <ErrorMessage name={name} />
      </p>
    </div>
  );
}
export default TextArea;
