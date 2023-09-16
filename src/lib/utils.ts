import { twMerge } from '../../../ChatBot/node_modules/tailwind-merge/dist'
import { ClassValue, clsx } from '../../../ChatBot/node_modules/clsx/clsx'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
