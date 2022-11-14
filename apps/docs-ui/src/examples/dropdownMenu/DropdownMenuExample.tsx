import { DropdownMenu } from '@pikas-ui/dropdown-menu';
import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { Button } from '@pikas-ui/button';

export const DropdownMenuExample: FC = () => (
  <ExampleContainer
    css={{
      alignItems: 'center',
    }}
  >
    <DropdownMenu
      data={[
        {
          label: 'Item 1',
          items: [
            {
              label: 'Item 1-1',
              type: 'item',
              // eslint-disable-next-line no-console
              onClick: console.log,
            },
            {
              type: 'checkbox',
              checked: true,
              label: 'Item 1-2',
              // eslint-disable-next-line no-console
              onCheckedChange: console.log,
              colorName: 'PRIMARY',
            },
            {
              type: 'radio',
              // eslint-disable-next-line no-console
              onValueChange: console.log,
              value: '1',
              radios: [
                {
                  label: 'Item 1-3-1',
                  value: '1',
                },
                {
                  label: 'Item 1-3-2',
                  value: '2',
                },
              ],
            },
            {
              type: 'menu',
              label: 'Item 1-4',
              data: [
                {
                  label: 'Item 1-4-1',
                  items: [
                    {
                      label: 'Item 1-4-1-1',
                      type: 'item',
                      // eslint-disable-next-line no-console
                      onClick: console.log,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ]}
    />
    <span>or</span>
    <DropdownMenu
      triggerContent={
        <Button padding="sm" fontSize="EM-SMALL">
          With trigger content
        </Button>
      }
      data={[
        {
          label: 'Item 1',
          items: [
            {
              label: 'Item 1-1',
              type: 'item',
              // eslint-disable-next-line no-console
              onClick: console.log,
            },
            {
              type: 'checkbox',
              checked: true,
              label: 'Item 1-2',
              // eslint-disable-next-line no-console
              onCheckedChange: console.log,
              colorName: 'PRIMARY',
            },
            {
              type: 'radio',
              // eslint-disable-next-line no-console
              onValueChange: console.log,
              value: '1',
              radios: [
                {
                  label: 'Item 1-3-1',
                  value: '1',
                },
                {
                  label: 'Item 1-3-2',
                  value: '2',
                },
              ],
            },
            {
              type: 'menu',
              label: 'Item 1-4',
              data: [
                {
                  label: 'Item 1-4-1',
                  items: [
                    {
                      label: 'Item 1-4-1-1',
                      type: 'item',
                      // eslint-disable-next-line no-console
                      onClick: console.log,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ]}
    />
  </ExampleContainer>
);
