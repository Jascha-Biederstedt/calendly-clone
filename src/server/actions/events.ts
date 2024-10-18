'use server';

import 'use-server';
import { eventFormSchema } from '@/schema/events';
import { z } from 'zod';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { db } from '@/drizzle/db';
import { EventTable } from '@/drizzle/schema';
import { and, eq } from 'drizzle-orm';

export const createEvent = async (
  unsafeData: z.infer<typeof eventFormSchema>
): Promise<{ error: boolean | undefined }> => {
  const { userId } = auth();
  const { success, data } = eventFormSchema.safeParse(unsafeData);

  if (!success || userId === null) {
    return { error: true };
  }

  await db.insert(EventTable).values({ ...data, clerkUserId: userId });

  redirect('/events');
};

export const updateEvent = async (
  id: string,
  unsafeData: z.infer<typeof eventFormSchema>
): Promise<{ error: boolean | undefined }> => {
  const { userId } = auth();
  const { success, data } = eventFormSchema.safeParse(unsafeData);

  if (!success || userId === null) {
    return { error: true };
  }

  const { rowCount } = await db
    .update(EventTable)
    .set({ ...data })
    .where(and(eq(EventTable.id, id), eq(EventTable.clerkUserId, userId)));

  if (rowCount === 0) return { error: true };

  redirect('/events');
};
