'use server';

import 'use-server';
import { eventFormSchema } from '@/schema/events';
import { z } from 'zod';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { db } from '@/drizzle/db';
import { EventTable } from '@/drizzle/schema';

export const createEvent = async (
  unsafeData: z.infer<typeof eventFormSchema>
) => {
  const { userId } = auth();
  const { success, data } = eventFormSchema.safeParse(unsafeData);

  if (!success || userId === null) {
    return { error: true };
  }

  await db.insert(EventTable).values({ ...data, clerkUserId: userId });

  redirect('/events');
};
