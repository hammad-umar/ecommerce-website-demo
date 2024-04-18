import { type NextPage } from 'next';

import { Button } from '@/components/ui/button';

const HomePage: NextPage = () => {
  return (
    <div>
      <h1 className="text-red-500">Hello World</h1>
      <Button variant="destructive">Hello</Button>
    </div>
  );
};

export default HomePage;
