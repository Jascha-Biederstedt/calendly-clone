'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormField,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import Link from 'next/link';
import { Button } from '../ui/button';

import { eventFormSchema } from '@/schema/events';

const EventForm = () => {
  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      isActive: true,
      durationInMinutes: 30,
    },
  });

  const onSubmit = (values: z.infer<typeof eventFormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex gap-6 flex-col'
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                The name users will see when booking
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex gap-2 justify-end'>
          <Button type='button' asChild variant='outline'>
            <Link href='/events'>Cancel</Link>
          </Button>
          <Button type='submit'>Save</Button>
        </div>
      </form>
    </Form>
  );
};

export default EventForm;
