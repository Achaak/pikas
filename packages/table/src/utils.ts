import type { AllColumns } from './Table'

export const findInColumn = (
  id: string,
  column: AllColumns
): AllColumns | null => {
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

export const findInColumns = (
  id: string,
  columns: AllColumns[]
): AllColumns | null => {
  for (const column of columns) {
    const found = findInColumn(id, column)
    if (found) {
      return found
    }
  }

  return null
}
