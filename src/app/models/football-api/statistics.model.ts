import { Goals } from "./goals.model"

export interface Statistics {
  played: number
  win: number
  draw: number
  lose: number
  goals: Goals
}