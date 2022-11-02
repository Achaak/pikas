import { Title } from '../../Components/Title/Title.js'

export interface SelectImageDialogHeaderProps {
  title?: string
}

export const SelectImageDialogHeader: React.FC<
  SelectImageDialogHeaderProps
> = ({ title }) => {
  return <Title>{title}</Title>
}
