import { Accordion } from '@/components/ui/Accordion/Accordion.jsx';
import { Avatar } from '@/components/ui/Avatar/Avatar';
import { Divider } from '@/components/ui/Divider/Divider';
import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';

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
        <div className="flex gap-2">
          <Button
            type="primary"
            size="small">
            Button
          </Button>
          <Button
            type="secondary"
            size="small">
            Button
          </Button>
          <Button
            type="ghost"
            size="small">
            Button
          </Button>
          <Button
            type="destructive"
            size="small">
            Button
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            type="primary"
            size="default">
            Button
          </Button>
          <Button
            type="secondary"
            size="default">
            Button
          </Button>
          <Button
            type="ghost"
            size="default">
            Button
          </Button>
          <Button
            type="destructive"
            size="default">
            Button
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            type="primary"
            size="large">
            Button
          </Button>
          <Button
            type="secondary"
            size="large">
            Button
          </Button>
          <Button
            type="ghost"
            size="large">
            Button
          </Button>
          <Button
            type="destructive"
            size="large">
            Button
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            type="primary"
            size="xl">
            Button
          </Button>
          <Button
            type="secondary"
            size="xl">
            Button
          </Button>
          <Button
            type="ghost"
            size="xl">
            Button
          </Button>
          <Button
            type="destructive"
            size="xl">
            Button
          </Button>
        </div>
        <Input
          placeholder="Text"
          classNames="w-full"
        />
        <Input
          placeholder="Text"
          size="sm"
        />
        <Input
          placeholder="Text"
          size="md"
        />
        <Input
          placeholder="Text"
          size="lg"
        />
        <Input
          placeholder="Text"
          size="sm"
          isDisabled={true}
        />
        <Input
          placeholder="Text"
          size="md"
          isDisabled={true}
        />
        <Input
          placeholder="Text"
          size="lg"
          isDisabled={true}
        />
      </div>
    </div>
  );
}
