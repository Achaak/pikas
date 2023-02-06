import { Label } from '@pikas-ui/text';
import { Title } from '@pikas-ui/title';
import { styled, useTernaryDarkMode } from '@pikas/docs-ui';
import { FC, useEffect, useState } from 'react';
import { normal } from 'color-blend';
import { Color } from '@pikas-utils/color';
import { Toast, useToast } from '@pikas-ui/toast';
import { ColorPicker } from '@pikas-ui/color-picker';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minWidth: 200,
  rowGap: 8,
  padding: '16px 0px',
});

const ColorResultContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  rowGap: 4,
});

const ColorResultContent = styled('div', {
  height: 32,
  borderRadius: '$sm',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$em-small',
  cursor: 'pointer',
});

type ColorsManagerColumnProps = {
  title: string;
  defaultColor: string;
  darkerOpacity: number;
  darkOpacity: number;
  lightOpacity: number;
  lighterOpacity: number;
  lightest2Opacity: number;
  lightestOpacity: number;
};

export const ColorsManagerColumn: FC<ColorsManagerColumnProps> = ({
  title,
  defaultColor,
  darkerOpacity,
  darkOpacity,
  lightOpacity,
  lighterOpacity,
  lightest2Opacity,
  lightestOpacity,
}) => {
  const [color, setColor] = useState(defaultColor);
  const [isDarkModeState, setIsDarkModeState] = useState(false);
  const { isDarkMode } = useTernaryDarkMode();
  const { publish } = useToast();

  useEffect(() => {
    setIsDarkModeState(isDarkMode);
  }, [isDarkMode]);

  const mergeColor = (
    color1: string,
    color2: string,
    color2Opacity: number
  ) => {
    const color1Parsed = new Color(color1);
    const color2Parsed = new Color(color2);

    const result = normal(
      {
        r: color1Parsed.red(),
        g: color1Parsed.green(),
        b: color1Parsed.blue(),
        a: 1,
      },
      {
        r: color2Parsed.red(),
        g: color2Parsed.green(),
        b: color2Parsed.blue(),
        a: color2Opacity,
      }
    );

    return new Color({
      r: result.r,
      g: result.g,
      b: result.b,
      a: result.a,
    }).toHex();
  };

  const darkModeMergeDark = isDarkModeState ? '#FFFFFF' : '#000000';
  const darkModeMergeLight = isDarkModeState ? '#000000' : '#FFFFFF';

  const darkerColor = mergeColor(
    color,
    darkerOpacity > 0 ? darkModeMergeDark : darkModeMergeLight,
    darkerOpacity > 0 ? darkerOpacity : -darkerOpacity
  );

  const darkColor = mergeColor(
    color,
    darkOpacity > 0 ? darkModeMergeDark : darkModeMergeLight,
    darkOpacity > 0 ? darkOpacity : -darkOpacity
  );
  const lightColor = mergeColor(
    color,
    lightOpacity > 0 ? darkModeMergeDark : darkModeMergeLight,
    lightOpacity > 0 ? lightOpacity : -lightOpacity
  );
  const lighterColor = mergeColor(
    color,
    lighterOpacity > 0 ? darkModeMergeDark : darkModeMergeLight,
    lighterOpacity > 0 ? lighterOpacity : -lighterOpacity
  );
  const lightest2Color = mergeColor(
    color,
    lightest2Opacity > 0 ? darkModeMergeDark : darkModeMergeLight,
    lightest2Opacity > 0 ? lightest2Opacity : -lightest2Opacity
  );
  const lightest1Color = mergeColor(
    color,
    lightestOpacity > 0 ? darkModeMergeDark : darkModeMergeLight,
    lightestOpacity > 0 ? lightestOpacity : -lightestOpacity
  );

  const handleCopy = async (colorCopied: string): Promise<void> => {
    await navigator.clipboard.writeText(colorCopied);
    publish(<Toast variant="success" title="Copied!" />);
  };

  return (
    <Container>
      <Title as="h2">{title}</Title>

      <ColorPicker
        label="Color picker"
        onChange={(value) => setColor(value)}
        defaultValue={defaultColor}
      />

      <ColorResultContainer>
        <Label>Darker</Label>
        <ColorResultContent
          css={{
            backgroundColor: darkerColor,
            color: new Color(darkerColor).getContrast(),
          }}
          onClick={() => {
            void handleCopy(darkerColor);
          }}
        >
          {darkerColor}
        </ColorResultContent>
      </ColorResultContainer>

      <ColorResultContainer>
        <Label>Dark</Label>
        <ColorResultContent
          css={{
            backgroundColor: darkColor,
            color: new Color(darkColor).getContrast(),
          }}
          onClick={() => {
            void handleCopy(darkColor);
          }}
        >
          {darkColor}
        </ColorResultContent>
      </ColorResultContainer>

      <ColorResultContainer>
        <Label>Default</Label>
        <ColorResultContent
          css={{
            backgroundColor: color,
            color: new Color(color).getContrast(),
          }}
          onClick={() => {
            void handleCopy(color);
          }}
        >
          {color}
        </ColorResultContent>
      </ColorResultContainer>

      <ColorResultContainer>
        <Label>Light</Label>
        <ColorResultContent
          css={{
            backgroundColor: lightColor,
            color: new Color(lightColor).getContrast(),
          }}
          onClick={() => {
            void handleCopy(lightColor);
          }}
        >
          {lightColor}
        </ColorResultContent>
      </ColorResultContainer>

      <ColorResultContainer>
        <Label>Lighter</Label>
        <ColorResultContent
          css={{
            backgroundColor: lighterColor,
            color: new Color(lighterColor).getContrast(),
          }}
          onClick={() => {
            void handleCopy(lighterColor);
          }}
        >
          {lighterColor}
        </ColorResultContent>
      </ColorResultContainer>

      <ColorResultContainer>
        <Label>Lightest 2</Label>
        <ColorResultContent
          css={{
            backgroundColor: lightest2Color,
            color: new Color(lightest2Color).getContrast(),
          }}
          onClick={() => {
            void handleCopy(lightest2Color);
          }}
        >
          {lightest2Color}
        </ColorResultContent>
      </ColorResultContainer>

      <ColorResultContainer>
        <Label>Lightest 1</Label>
        <ColorResultContent
          css={{
            backgroundColor: lightest1Color,
            color: new Color(lightest1Color).getContrast(),
          }}
          onClick={() => {
            void handleCopy(lightest1Color);
          }}
        >
          {lightest1Color}
        </ColorResultContent>
      </ColorResultContainer>
    </Container>
  );
};
