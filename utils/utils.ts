export const randomItem = <T>(items: T[]): T =>
  items[Math.floor(Math.random() * items.length)] as T
