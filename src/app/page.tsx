import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className='text-center container my-4 mx-auto'>
      <h1 className='text-3xl mb-4'>Calendly Clone</h1>
      <div className='flex gap-2 justify-center'>
        <Button>Sign In</Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
}
