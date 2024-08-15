import { Accordion } from '@/components/ui/Accordion/Accordion.jsx';
import { Avatar } from '@/components/ui/Avatar/Avatar';
import { Divider } from '@/components/ui/Divider/Divider';
import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { Textarea } from '@/components/ui/Textarea/Textarea';
import { Chip } from '@/components/ui/Chip/Chip';
import { Badge } from '@/components/ui/Badge/Badge';
import { Tabs } from '@/components/ui/Tabs/Tabs';
import { Tooltip } from '@/components/ui/Tooltip/Tooltip';

export default function Home() {
  return (
    <div className="mx-auto flex max-w-[500px] select-none flex-col justify-center gap-10 py-20">
      <div className="flex w-full flex-col gap-4">
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
          <Chip size="sm">CHIP SM</Chip>
          <Chip
            size="sm"
            isActive={true}>
            CHIP SM
          </Chip>
        </div>
        <div className="mb-2 flex items-center gap-4">
          <Chip size="md">CHIP MD</Chip>
          <Chip
            size="md"
            isActive={true}>
            CHIP MD
          </Chip>
        </div>
        <div className="mb-2 flex items-center gap-4">
          <Chip size="lg">CHIP LG</Chip>
          <Chip
            size="lg"
            isActive={true}>
            CHIP LG
          </Chip>
        </div>
        <div className="mb-2 flex items-center gap-4">
          <Chip size="xl">CHIP XL</Chip>
          <Chip
            size="xl"
            isActive={true}>
            CHIP XL
          </Chip>
        </div>
        <div className="mb-2 flex items-center gap-4">
          <Badge>Label</Badge>
        </div>
        <div className="mb-2 flex items-center gap-4">
          <Badge size="md">Label</Badge>
          <Badge size="md">Label</Badge>
        </div>
        <div className="mb-2 flex items-center gap-4">
          <Badge size="lg">Label</Badge>
          <Badge size="lg">Label</Badge>
        </div>
        <div className="mb-2 flex items-center gap-4">
          <Badge size="xl">Label</Badge>
          <Badge size="xl">Label</Badge>
        </div>
        <div className="mb-2 flex items-center gap-4">
          <Badge
            size="sm"
            variant="warning">
            Label
          </Badge>
          <Badge
            size="sm"
            variant="warning">
            Label
          </Badge>
        </div>
        <div className="mb-2 flex items-center gap-4">
          <Badge variant="success">Label</Badge>
          <Badge variant="success">Label</Badge>
        </div>
        <div className="mb-2 flex items-center gap-4">
          <Badge variant="warning">Label</Badge>
          <Badge
            type="ghost"
            variant="warning">
            Label
          </Badge>
          <Badge
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
            type="ghost"
            variant="success">
            Label
          </Badge>
        </div>
        <div className="mb-20 flex flex-col items-center gap-3">
          <Tabs
            tabs={[
              'Label',
              'LabelLabel',
              'Label2For',
              'Label3',
              'Label4TabBtn',
            ]}
            activeTab={4}
          />
          <Tabs
            tabs={[
              'Label',
              'LabelLabel',
              'Label2For',
              'Label3',
              'Label4TabBtn',
            ]}
            size="sm"
          />
          <Tabs
            tabs={['Featured', 'Latest']}
            size="md"
          />
          <Tabs
            tabs={[
              'Label',
              'LabelLabel',
              'Label2For',
              'Label3',
              'Label4TabBtn',
            ]}
            size="lg"
            activeTab={1}
          />
        </div>
        <div className="mb-10 flex flex-col gap-4">
          <Tooltip
            content="🔥 Top Text 🔥"
            showArrow={true}
            position="top">
            <span className="text-xl font-bold text-alpha-dark-900">
              Top Tooltip Text on hover
            </span>
          </Tooltip>
          <Tooltip
            content="🔥 Top Left Text 🔥"
            showArrow={true}
            position="topLeft">
            <span className="text-xl font-bold text-alpha-dark-900">
              Top Left Tooltip Text on hover
            </span>
          </Tooltip>
          <Tooltip
            content="🔥 Top Right Text 🔥"
            showArrow={true}
            position="topRight">
            <span className="text-xl font-bold text-alpha-dark-900">
              Top Right Tooltip Text on hover
            </span>
          </Tooltip>
          <Tooltip
            content="🔥 Bottom Text 🔥"
            showArrow={true}
            position="bottom">
            <span className="text-xl font-bold text-alpha-dark-900">
              Bottom Tooltip Text on hover
            </span>
          </Tooltip>
          <Tooltip
            content="🔥 Bottom Left Text 🔥"
            showArrow={true}
            position="bottomLeft">
            <span className="text-xl font-bold text-alpha-dark-900">
              Bottom Left Tooltip Text on hover
            </span>
          </Tooltip>
          <Tooltip
            content="🔥 Bottom Right Text 🔥"
            showArrow={true}
            position="bottomRight">
            <span className="text-xl font-bold text-alpha-dark-900">
              Bottom Right Tooltip Text on hover
            </span>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
