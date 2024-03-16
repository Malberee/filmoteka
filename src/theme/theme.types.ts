type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface IColors {
  background: string
  accent: string
  secondaryBlack: string
  grey: string
  white: string
  secondaryText: string
}

export interface ITheme {
  colors: IColors
  text: {
    desktop: Record<Size, number>
    tablet: Record<Size, number>
    mobile: Record<Size, number>
  }
  gradients: {
    linearGradientUp: string
    linearGradientDown: string
  }
  toggleTheme: () => void
}
