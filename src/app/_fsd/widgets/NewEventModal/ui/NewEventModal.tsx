"use client";
import { DevTool } from "@hookform/devtools";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import React, { useRef } from "react";

import { Controller, useForm } from "react-hook-form";
import { NEW_EVENT_MODAL_QUERY } from "~/features/Event/constants";
import { useQueryModal } from "~/shared/hooks/useQueryModal";
import { Dropzone, RightModalLayout } from "~/shared/ui";

/**
 * Renders a modal for creating a new event.
 *
 * @returns {JSX.Element} The modal component.
 */
export const NewEventModal = () => {
  const overlay = useRef(null);
  const { isOpen, onDismiss } = useQueryModal({
    overlay,
    modalQuery: NEW_EVENT_MODAL_QUERY,
  });
  const langs = useTranslations("NewEvent");

  const { control, handleSubmit, register } = useForm({});

  const onSubmit = (data) => console.log(data);

  return (
    <RightModalLayout isOpen={isOpen} onClick={onDismiss} ref={overlay}>
      <div className="flex w-full flex-1 flex-col items-center">
        <h2 className="text-lg">{langs("Title")}</h2>

        <form
          className="mt-12 flex w-9/12 flex-col gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="name"
            placeholder="Enter your description"
            {...register("name")}
          />
          <Textarea
            label="Description"
            placeholder="Enter your description"
            {...register("description")}
          />

          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <Dropzone
                multiple={false}
                {...field}
                accept={{ "image/*": [".jpeg", ".png"] }}
              />
            )}
          />

          <Button type="submit">Submit</Button>
          <DevTool control={control} />
        </form>
      </div>
    </RightModalLayout>
  );
};
