import { Button } from '@pikas-ui/button';
import { Drawer } from '@pikas-ui/drawer';
import { ExampleContainer } from '@pikas/docs-ui';
import { FC, useState } from 'react';

export const DrawerExample: FC = () => {
  const [drawerLeftIsOpen, setDrawerLeftIsOpen] = useState(false);
  const [drawerTopIsOpen, setDrawerTopIsOpen] = useState(false);
  const [drawerBottomIsOpen, setDrawerBottomIsOpen] = useState(false);
  const [drawerRightIsOpen, setDrawerRightIsOpen] = useState(false);

  return (
    <ExampleContainer>
      <Button onClick={(): void => setDrawerLeftIsOpen(true)}>Left</Button>
      <Button onClick={(): void => setDrawerTopIsOpen(true)}>Top</Button>
      <Button onClick={(): void => setDrawerBottomIsOpen(true)}>Bottom</Button>
      <Button onClick={(): void => setDrawerRightIsOpen(true)}>Right</Button>
      <Drawer
        position="left"
        title="Left drawer"
        isOpen={drawerLeftIsOpen}
        onClose={(): void => setDrawerLeftIsOpen(false)}
        width={300}
      >
        <span>Left drawer content</span>
      </Drawer>
      <Drawer
        position="top"
        title="Top drawer"
        isOpen={drawerTopIsOpen}
        onClose={(): void => setDrawerTopIsOpen(false)}
      >
        <span>Top drawer content</span>
      </Drawer>
      <Drawer
        position="bottom"
        title="Bottom drawer"
        isOpen={drawerBottomIsOpen}
        onClose={(): void => setDrawerBottomIsOpen(false)}
      >
        <span>Bottom drawer content</span>
      </Drawer>
      <Drawer
        position="right"
        title="Right drawer"
        isOpen={drawerRightIsOpen}
        onClose={(): void => setDrawerRightIsOpen(false)}
        width={300}
      >
        <span>Right drawer content</span>
      </Drawer>
    </ExampleContainer>
  );
};
