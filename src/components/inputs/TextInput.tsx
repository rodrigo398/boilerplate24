import TextField, { StandardTextFieldProps } from '@mui/material/TextField'

export interface TextInputProps extends StandardTextFieldProps {
  id: string
  name?: string
  label: string
  hiddenLabel?: boolean
  hasPlaceholder?: boolean
  onInputChange?: (value: string) => void
  maxLength?: number
  autoComplete?: string
  isNumericOnly?: boolean
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  name,
  label,
  error,
  hasPlaceholder = true,
  placeholder,
  hiddenLabel = false,
  onInputChange,
  maxLength,
  value,
  helperText,
  autoComplete,
  InputLabelProps,
  inputProps,
  isNumericOnly,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: move this logic to a util fn
    const currentValue = isNumericOnly
      ? event.target.value.replace(/[^0-9]/g, '')
      : event.target.value

    onInputChange && onInputChange(currentValue)
  }

  return (
    <TextField
      fullWidth
      id={id}
      label={label}
      placeholder={hasPlaceholder ? placeholder : ''}
      name={name}
      variant="filled"
      value={value}
      error={error}
      hiddenLabel={hiddenLabel}
      onChange={handleChange}
      inputProps={{
        ...inputProps,
        maxLength: maxLength || null,
        'aria-label': label,
        'aria-describedby': id && `${id}-helper-text`,
      }}
      autoComplete={autoComplete}
      InputLabelProps={{ ...InputLabelProps, shrink: true }}
      {...props}
    />
  )
}

export default TextInput
