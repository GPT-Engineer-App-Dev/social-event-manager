import { Button } from "@/components/ui/button";

const Events = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Events</h1>
      <Button className="mb-4">Add New Event</Button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Event Name</th>
            <th className="py-2">Date</th>
            <th className="py-2">Location</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Placeholder for event rows */}
        </tbody>
      </table>
    </div>
  );
};

export default Events;