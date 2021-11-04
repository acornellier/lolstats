export interface PicksWins {
  picks: number
  wins: number
}

export interface IdPicksWins extends PicksWins {
  id: number
}

export const statToPercentage = (a: number, b: number) =>
  Math.round((a / b) * 10000) / 100

export const picksWinsToPercentage = ({ picks, wins }: PicksWins) =>
  statToPercentage(wins, picks)
