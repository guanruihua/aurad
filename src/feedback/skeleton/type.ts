import { ClassNameType } from 'harpe'

export interface SkeletonItemProps    extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: ClassNameType
	type?: 'square' | 'round' | 'circle' | 'round-circle'
}

export interface SkeletonProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: ClassNameType
  size?: 'small' | 'default' | 'large'
  active?: boolean
}