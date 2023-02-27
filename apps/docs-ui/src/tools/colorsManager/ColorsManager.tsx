import { Grid } from '@pikas-ui/grid';
import { IconByName, IconProps } from '@pikas-ui/icons';
import { ToastProvider } from '@pikas-ui/toast';
import { Switch } from '@pikas-ui/switch';
import { FC, ReactNode, useEffect, useState } from 'react';
import { ColorsManagerColumn } from './colorsManagerColumn';
import { Slider } from '@pikas-ui/slider';
import { Title } from '@pikas-ui/title';
import { styled, useTernaryDarkMode, useTheme } from '@pikas-ui/styles';

const BxsSun: FC<IconProps> = (props) => (
  <IconByName name="bxs:sun" {...props} />
);

const BxsMoon: FC<IconProps> = (props) => (
  <IconByName name="bxs:moon" {...props} />
);

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  rowGap: 16,
});

export const ColorsManager: FC = () => {
  const theme = useTheme();
  const { setTernaryDarkMode, isDarkMode } = useTernaryDarkMode();
  const [darkerOpacity, setDarkerOpacity] = useState(0.5);
  const [darkOpacity, setDarkOpacity] = useState(0.25);
  const [lightOpacity, setLightOpacity] = useState(-0.5);
  const [lighterOpacity, setLighterOpacity] = useState(-0.75);
  const [lightest2Opacity, setLightest2Opacity] = useState(-0.9);
  const [lightestOpacity, setLightestOpacity] = useState(-0.95);
  const [switchComponent, setSwitchComponent] = useState<ReactNode>(undefined);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSwitchComponent(
        <Switch
          label="Dark mode"
          onCheckedChange={(bool): void =>
            setTernaryDarkMode(bool ? 'dark' : 'light')
          }
          checked={isDarkMode}
          Icons={{
            checked: BxsMoon,
            unchecked: BxsSun,
          }}
          aria-label={isDarkMode ? 'dark mode' : 'light mode'}
          id="dark-mode-switch"
        />
      );
    }
  }, [isDarkMode, setTernaryDarkMode]);

  if (!theme) {
    return null;
  }

  return (
    <ToastProvider>
      <Container>
        {switchComponent}

        <Title as="h2">Opacity</Title>
        <Grid
          type="container"
          cols={{
            default: 1,
            sm: 2,
            xl: 3,
          }}
          columnGap={{
            default: 8,
          }}
          rowGap={{
            default: 8,
          }}
        >
          <Slider
            defaultValue={[darkerOpacity]}
            min={-1}
            max={1}
            step={0.01}
            onChange={(value) => setDarkerOpacity(value[0])}
            label="Darker"
          />

          <Slider
            defaultValue={[darkOpacity]}
            min={-1}
            max={1}
            step={0.01}
            onChange={(value) => setDarkOpacity(value[0])}
            label="Dark"
          />

          <Slider
            defaultValue={[lightOpacity]}
            min={-1}
            max={1}
            step={0.01}
            onChange={(value) => setLightOpacity(value[0])}
            label="Light"
          />

          <Slider
            defaultValue={[lighterOpacity]}
            min={-1}
            max={1}
            step={0.01}
            onChange={(value) => setLighterOpacity(value[0])}
            label="Lighter"
          />

          <Slider
            defaultValue={[lightest2Opacity]}
            min={-1}
            max={1}
            step={0.01}
            onChange={(value) => setLightest2Opacity(value[0])}
            label="Lightest 2"
          />

          <Slider
            defaultValue={[lightestOpacity]}
            min={-1}
            max={1}
            step={0.01}
            onChange={(value) => setLightestOpacity(value[0])}
            label="Lightest 1"
          />
        </Grid>

        <Grid
          type="container"
          cols={{
            default: 1,
            sm: 2,
            xl: 3,
          }}
          columnGap={{
            default: 16,
          }}
          rowGap={{
            default: 16,
          }}
        >
          <ColorsManagerColumn
            title="Primary"
            defaultColor={theme.colors.primary.value}
            darkerOpacity={darkerOpacity}
            darkOpacity={darkOpacity}
            lightOpacity={lightOpacity}
            lighterOpacity={lighterOpacity}
            lightest2Opacity={lightest2Opacity}
            lightestOpacity={lightestOpacity}
          />
          <ColorsManagerColumn
            title="Secondary"
            defaultColor={theme.colors.secondary.value}
            darkerOpacity={darkerOpacity}
            darkOpacity={darkOpacity}
            lightOpacity={lightOpacity}
            lighterOpacity={lighterOpacity}
            lightest2Opacity={lightest2Opacity}
            lightestOpacity={lightestOpacity}
          />
          <ColorsManagerColumn
            title="Tertiary"
            defaultColor={theme.colors.tertiary.value}
            darkerOpacity={darkerOpacity}
            darkOpacity={darkOpacity}
            lightOpacity={lightOpacity}
            lighterOpacity={lighterOpacity}
            lightest2Opacity={lightest2Opacity}
            lightestOpacity={lightestOpacity}
          />
          <ColorsManagerColumn
            title="Gray"
            defaultColor={theme.colors.gray.value}
            darkerOpacity={darkerOpacity}
            darkOpacity={darkOpacity}
            lightOpacity={lightOpacity}
            lighterOpacity={lighterOpacity}
            lightest2Opacity={lightest2Opacity}
            lightestOpacity={lightestOpacity}
          />
          <ColorsManagerColumn
            title="Success"
            defaultColor={theme.colors.success.value}
            darkerOpacity={darkerOpacity}
            darkOpacity={darkOpacity}
            lightOpacity={lightOpacity}
            lighterOpacity={lighterOpacity}
            lightest2Opacity={lightest2Opacity}
            lightestOpacity={lightestOpacity}
          />
          <ColorsManagerColumn
            title="Warning"
            defaultColor={theme.colors.warning.value}
            darkerOpacity={darkerOpacity}
            darkOpacity={darkOpacity}
            lightOpacity={lightOpacity}
            lighterOpacity={lighterOpacity}
            lightest2Opacity={lightest2Opacity}
            lightestOpacity={lightestOpacity}
          />
          <ColorsManagerColumn
            title="Danger"
            defaultColor={theme.colors.danger.value}
            darkerOpacity={darkerOpacity}
            darkOpacity={darkOpacity}
            lightOpacity={lightOpacity}
            lighterOpacity={lighterOpacity}
            lightest2Opacity={lightest2Opacity}
            lightestOpacity={lightestOpacity}
          />
          <ColorsManagerColumn
            title="Info"
            defaultColor={theme.colors.info.value}
            darkerOpacity={darkerOpacity}
            darkOpacity={darkOpacity}
            lightOpacity={lightOpacity}
            lighterOpacity={lighterOpacity}
            lightest2Opacity={lightest2Opacity}
            lightestOpacity={lightestOpacity}
          />
        </Grid>
      </Container>
    </ToastProvider>
  );
};
