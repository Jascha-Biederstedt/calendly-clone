import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import EventForm from '@/components/forms/EventForm';

const NewEventPage = () => {
  return (
    <Card className='max-w-md max-auto'>
      <CardHeader>
        <CardTitle>New Event</CardTitle>
      </CardHeader>
      <CardContent>
        <EventForm />
      </CardContent>
    </Card>
  );
};

export default NewEventPage;
