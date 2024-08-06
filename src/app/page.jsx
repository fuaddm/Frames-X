import { Accordion } from '@/components/ui/Accordion/Accordion.jsx';
import { Avatar } from '@/components/ui/Avatar/Avatar';
import { Divider } from '@/components/ui/Divider/Divider';
import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { Textarea } from '@/components/ui/Textarea/Textarea';
import { Chip } from '@/components/ui/Chip/Chip';
import { Badge } from '@/components/ui/Badge/Badge';
import { Tabs } from '@/components/ui/Tabs/Tabs';

export default function Home() {
  return (
    <div className="mx-auto flex max-w-[500px] select-none flex-col justify-center gap-10 py-20">
      <div className="flex w-full flex-col items-center gap-4">
        <div className="flex flex-col gap-4">
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
        <div className="flex gap-2">
          <Button
            variant="primary"
            size="sm">
            Button
          </Button>
          <Button
            variant="secondary"
            size="sm">
            Button
          </Button>
          <Button
            variant="ghost"
            size="sm">
            Button
          </Button>
          <Button
            variant="destructive"
            size="sm">
            Button
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            variant="primary"
            size="md">
            Button
          </Button>
          <Button
            variant="secondary"
            size="md">
            Button
          </Button>
          <Button
            variant="ghost"
            size="md">
            Button
          </Button>
          <Button
            variant="destructive"
            size="md">
            Button
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            variant="primary"
            size="lg">
            Button
          </Button>
          <Button
            variant="secondary"
            size="lg">
            Button
          </Button>
          <Button
            variant="ghost"
            size="lg">
            Button
          </Button>
          <Button
            variant="destructive"
            size="lg">
            Button
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            variant="primary"
            size="xl">
            Button
          </Button>
          <Button
            variant="secondary"
            size="xl">
            Button
          </Button>
          <Button
            variant="ghost"
            size="xl">
            Button
          </Button>
          <Button
            variant="destructive"
            size="xl">
            Button
          </Button>
        </div>
        <div className="flex flex-col gap-2">
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
          <Textarea
            placeholder="Write Text"
            classNames="w-full"
          />
          <Textarea
            isDisabled
            placeholder="Write Text"
            classNames="w-full"
          />
          <Textarea
            size="lg"
            placeholder="Write Text"
            classNames="w-full"
          />
        </div>
        <div className="mb-2 flex items-center gap-4">
          <Chip size="sm" />
          <Chip
            size="sm"
            isActive={true}
          />
        </div>
        <div className="mb-2 flex items-center gap-4">
          <Chip size="md" />
          <Chip
            size="md"
            isActive={true}
          />
        </div>
        <div className="mb-2 flex items-center gap-4">
          <Chip size="lg" />
          <Chip
            size="lg"
            isActive={true}
          />
        </div>
        <div className="mb-2 flex items-center gap-4">
          <Chip size="xl" />
          <Chip
            size="xl"
            isActive={true}>
            Label
          </Chip>
        </div>
        <div className="mb-2 flex items-center gap-4">
          <Badge>Label</Badge>
          <Badge isActive={true}>Label</Badge>
        </div>
        <div className="mb-2 flex items-center gap-4">
          <Badge size="md">Label</Badge>
          <Badge
            size="md"
            isActive={true}>
            Label
          </Badge>
        </div>
        <div className="mb-2 flex items-center gap-4">
          <Badge size="lg">Label</Badge>
          <Badge
            size="lg"
            isActive={true}>
            Label
          </Badge>
        </div>
        <div className="mb-2 flex items-center gap-4">
          <Badge size="xl">Label</Badge>
          <Badge
            size="xl"
            isActive={true}>
            Label
          </Badge>
        </div>
        <div className="mb-2 flex items-center gap-4">
          <Badge
            size="sm"
            variant="warning">
            Label
          </Badge>
          <Badge
            size="sm"
            isActive={true}
            variant="warning">
            Label
          </Badge>
        </div>
        <div className="mb-2 flex items-center gap-4">
          <Badge variant="success">Label</Badge>
          <Badge
            isActive={true}
            variant="success">
            Label
          </Badge>
        </div>
        <div className="mb-2 flex items-center gap-4">
          <Badge variant="warning">Label</Badge>
          <Badge
            type="ghost"
            variant="warning">
            Label
          </Badge>
          <Badge
            isActive={true}
            type="ghost"
            variant="warning">
            Label
          </Badge>
        </div>
        <div className="mb-2 flex items-center gap-4">
          <Badge variant="error">Label</Badge>
          <Badge
            type="ghost"
            variant="error">
            Label
          </Badge>
          <Badge
            isActive={true}
            type="ghost"
            variant="error">
            Label
          </Badge>
        </div>
        <div className="mb-2 flex items-center gap-4">
          <Badge variant="success">Label</Badge>
          <Badge
            type="ghost"
            variant="success">
            Label
          </Badge>
          <Badge
            isActive={true}
            type="ghost"
            variant="success">
            Label
          </Badge>
        </div>
        <Tabs
          tabs={['Label', 'LabelLabel', 'Label2For', 'Label3', 'Label4TabBtn']}
        />
        <Tabs
          tabs={['Label', 'LabelLabel', 'Label2For', 'Label3', 'Label4TabBtn']}
          size="sm"
        />
        <Tabs
          tabs={['Label', 'LabelLabel', 'Label2For', 'Label3', 'Label4TabBtn']}
          size="md"
        />
        <Tabs
          tabs={['Label', 'LabelLabel', 'Label2For', 'Label3', 'Label4TabBtn']}
          size="lg"
        />
      </div>
    </div>
  );
}
