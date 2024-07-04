import { Button } from "@/components/ui/button";

const Attendees = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Attendees</h1>
      <Button className="mb-4">Add New Attendee</Button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Event</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Placeholder for attendee rows */}
        </tbody>
      </table>
    </div>
  );
};

export default Attendees;