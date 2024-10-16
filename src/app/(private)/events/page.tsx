import { CalendarPlus } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const EventsPage = () => {
  return (
    <div className='flex gap-4 items-baseline'>
      <h1 className='text-3xl lg:text-4xl xl:text-5xl font-semibold mb-6'>
        Events
      </h1>
      <Button asChild>
        <Link href='events/new'>
          <CalendarPlus className='mr-4 size-6' /> New Event
        </Link>
      </Button>
    </div>
  );
};

export default EventsPage;
