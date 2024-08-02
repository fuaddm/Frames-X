import { Accordion } from '@/components/ui/Accordion/Accordion.jsx';
import Avatar from '@/components/ui/Avatar/Avatar';
import Divider from '@/components/ui/Divider/Divider';

export default function Home() {
  return (
    <div className="mx-auto flex max-w-[500px] select-none flex-col justify-center gap-10 py-20">
      <div className="flex w-full flex-col items-center gap-4">
        <Accordion
          title="Accordion title"
          description="Hook, so you can only call it at the top level of your component or your own Hooks."
          name="acc"
        />
        <Accordion
          title="Accordion title"
          description="However, hardcoding IDs like this is not a good practice in React."
          name="acc"
        />
        <Accordion
          title="Accordion title"
          name="acc">
          <div className="h-6 w-6 bg-red-400"></div>
        </Accordion>
        <Divider />
        <Avatar isOnline={true} />
        <Avatar size="xs" />
        <Avatar size="sm" />
        <Avatar size="base" />
        <Avatar size="md" />
        <Avatar
          size="lg"
          isOnline={false}
          name="Fuad Demirchiyev"
          caption="Caption"
        />
        <Avatar
          size="xl"
          isOnline={true}
          src="https://avatars.githubusercontent.com/u/113819802?v=4"
          name="Fuad Demirchiyev"
        />
      </div>
    </div>
  );
}
