import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { db } from '@/drizzle/db';
import { auth } from '@clerk/nextjs/server';

const SchedulePage = async () => {
  const { userId, redirectToSignIn } = auth();

  if (userId == null) return redirectToSignIn();

  const schedule = await db.query.ScheduleTable.findFirst({
    where: ({ clerkUserId }, { eq }) => eq(clerkUserId, userId),
    with: {
      availabilities: {
        orderBy: ({ startTime }, { desc }) => desc(startTime),
      },
    },
  });

  return (
    <Card className='max-w-md max-auto'>
      <CardHeader>
        <CardTitle>Schedule</CardTitle>
      </CardHeader>
      <CardContent>
        <ScheduleForm schedule={schedule} />
      </CardContent>
    </Card>
  );
};

export default SchedulePage;