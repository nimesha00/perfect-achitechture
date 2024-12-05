"use client";
import React, { useEffect, useRef } from "react";
import { ErrorMessage, Field, useField } from "formik";
import { cn } from "@/lib/utils";

function Input(props: any) {
  const { name, label, charactersLength, className, ...rest } = props;
  const [, meta] = useField(props);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (
        document.activeElement === event.target &&
        (event.target as HTMLInputElement).type === "number"
      ) {
        event.preventDefault();
      }
    };

    if (inputRef.current) {
      inputRef.current.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="flex-1">
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary"
        >
          {label}
        </label>
      )}

      <Field
        innerRef={inputRef}
        className={cn(
          "flex h-10 w-full border border-input bg-background px-3 py-2 mt-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-gray-400 disabled:cursor-not-allowed disabled:opacity-50",
          { "border-error": meta.error && meta.touched },
          className
        )}
        name={name}
        id={name}
        {...rest}
        initial-scale={1}
        maximum-scale={1}
      />

      <div className="w-full justify-between gap-4 flex flex-row flex-wrap-reverse">
        <p className="text-xs text-error italic font-medium">
          <ErrorMessage name={name} />
        </p>
        {charactersLength && (
          <p className="text-textGray mt-1">
            {meta.value ? meta.value?.length : "0"} / {charactersLength}
          </p>
        )}
      </div>
    </div>
  );
}
export default Input;
