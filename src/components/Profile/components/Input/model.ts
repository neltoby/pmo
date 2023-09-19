import { ChangeEvent, ReactNode } from "react"

export type MediaBoxType = {
  children: ReactNode
}

export type EditInputType = {
  label: string;
  id: string;
  error?: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

export enum ToggleType {
  OPEN = 'open',
  CLOSED = 'closed',
}