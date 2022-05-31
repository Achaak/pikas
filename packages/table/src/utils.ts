import type { AllColumns } from './Table'

export const findInColumn = <T>(
  id: string,
  column: AllColumns<T>
): AllColumns<T> | null => {
  if (column.id === id) {
    return column
  }

  if (column.type === 'group') {
    for (const groupElement of column.group) {
      const found = findInColumn(id, groupElement)
      if (found) {
        return found
      }
    }
  }

  return null
}

export const findInColumns = <T>(
  id: string,
  columns: AllColumns<T>[]
): AllColumns<T> | null => {
  for (const column of columns) {
    const found = findInColumn(id, column)
    if (found) {
      return found
    }
  }

  return null
}
