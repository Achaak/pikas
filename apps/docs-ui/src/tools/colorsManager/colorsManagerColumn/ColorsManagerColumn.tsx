import { Label } from '@pikas-ui/text';
import { Textfield } from '@pikas-ui/textfield';
import { Title } from '@pikas-ui/title';
import { styled, useTernaryDarkMode } from '@pikas/docs-ui';
import { createRef, FC, useEffect, useState } from 'react';
import { normal } from 'color-blend';
import Color from 'color';
import fontColorContrast from 'font-color-contrast';
import { Toast, useToast } from '@pikas-ui/toast';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minWidth: 200,
  customRowGap: 8,
  padding: '16px 0px',
});

const ColorInputWrapper = styled('div', {
  display: 'flex',
  height: 32,
  width: 32,
  br: 'sm',
  cursor: 'pointer',
});

const ColorInput = styled('input', {
  visibility: 'hidden',
  pointerEvents: 'none',
});

const InputsContent = styled('div', {
  display: 'flex',
  customColumnGap: 8,
});

const DefaultColorContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  customRowGap: 4,
});

const ColorResultContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  customRowGap: 4,
});

const ColorResultContent = styled('div', {
  height: 32,
  br: 'sm',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$EM-SMALL',
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
  const colorInputRef = createRef<HTMLInputElement>();
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
    const color1Parsed = Color(color1);
    const color2Parsed = Color(color2);

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

    return Color.rgb(result.r, result.g, result.b, result.a).hex();
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

      <DefaultColorContainer>
        <Label>Default color</Label>
        <InputsContent>
          <ColorInputWrapper
            css={{
              backgroundColor: color,
            }}
            onClick={() => {
              colorInputRef.current?.click();
            }}
          >
            <ColorInput
              ref={colorInputRef}
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </ColorInputWrapper>

          <Textfield
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="Color"
          />
        </InputsContent>
      </DefaultColorContainer>

      <ColorResultContainer>
        <Label>Darker</Label>
        <ColorResultContent
          css={{
            backgroundColor: darkerColor,
            color: fontColorContrast(darkerColor, 0.7),
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
            color: fontColorContrast(darkColor, 0.7),
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
            color: fontColorContrast(color, 0.7),
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
            color: fontColorContrast(lightColor, 0.7),
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
            color: fontColorContrast(lighterColor, 0.7),
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
            color: fontColorContrast(lightest2Color, 0.7),
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
            color: fontColorContrast(lightest1Color, 0.7),
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
