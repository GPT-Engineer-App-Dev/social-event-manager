import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { DatePickerDemo } from "@/components/ui/date-picker";

const formSchema = z.object({
  eventName: z.string().min(1, { message: "Event name is required" }),
  date: z.date().refine((date) => date >= new Date(), {
    message: "Date must be in the future",
  }),
  location: z.string().min(1, { message: "Location is required" }),
  description: z.string().min(1, { message: "Description is required" }),
});

const CreateEvent = () => {
  const [date, setDate] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    toast("Event has been created", {
      description: `${data.eventName} on ${date}`,
    });
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Create New Event</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="eventName">Event Name</Label>
          <Input id="eventName" {...register("eventName")} />
          {errors.eventName && (
            <p className="text-red-500">{errors.eventName.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="date">Date</Label>
          <DatePickerDemo selected={date} onSelect={setDate} />
          {errors.date && <p className="text-red-500">{errors.date.message}</p>}
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input id="location" {...register("location")} />
          {errors.location && (
            <p className="text-red-500">{errors.location.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" {...register("description")} />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>
        <Button type="submit">Create Event</Button>
      </form>
    </div>
  );
};

export default CreateEvent;