import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function upperCaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
export function removeSlash(string) {
  return string.replace(/-/g, '')
}
