import { Button, ButtonProps } from '@mui/material'

export const ButtonBase = <C extends React.ElementType>({
  hasArrow,
  iconBase,
  children,
  to,
  endIcon,
  variant = 'contained',
  color = 'primary',
  ...props
}: ButtonProps<C, { component?: C }>) => {
  const childContainsMultipleWords =
    typeof children === 'string' && children.trim().split(' ').length > 1

  return (
    <Button
      {...props}
      hasMultipleWords={childContainsMultipleWords}
      endIcon={endIcon}
      variant={variant}
      color={color}
      role={to && 'link'}
      to={to}
      disableElevation
      disableRipple
    >
      {children}
    </Button>
  )
}

export default ButtonBase
