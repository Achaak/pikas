import {
  RGBToHex,
  hexToRGB,
  nameToRGB,
  RGBAStringToRGBA,
  RGBStringToRGB,
  RGBAToRGBAString,
  RGBToRGBString,
} from './utils.js';

export class Color {
  public r = 0;

  public g = 0;

  public b = 0;

  public a = 1;

  constructor(color: string | { r: number; g: number; b: number; a?: number }) {
    if (typeof color === 'string') {
      const rgb =
        nameToRGB(color) ??
        hexToRGB(color) ??
        RGBAStringToRGBA(color) ??
        RGBStringToRGB(color);

      if (rgb) {
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
      }
    } else {
      this.r = color.r;
      this.g = color.g;
      this.b = color.b;
      this.a = color.a ?? 1;
    }
  }

  public toRGBString(): string {
    return RGBToRGBString(this.r, this.g, this.b);
  }

  public toRGBAString(): string {
    return RGBAToRGBAString(this.r, this.g, this.b, this.a);
  }

  public toHex(): string {
    return RGBToHex(this.r, this.g, this.b);
  }

  public toRGB(): { r: number; g: number; b: number } {
    return { r: this.r, g: this.g, b: this.b };
  }

  public toRGBA(): { r: number; g: number; b: number; a: number } {
    return { r: this.r, g: this.g, b: this.b, a: this.a };
  }

  public red = (): number => this.r;

  public green = (): number => this.g;

  public blue = (): number => this.b;

  public getContrast(tolerance = 0.7): '#000' | '#fff' {
    const { r, g, b } = this;
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    const percent = luma / 255;
    return percent > tolerance ? '#000' : '#fff';
  }
}
