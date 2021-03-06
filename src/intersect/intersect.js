import { findIndex } from "../find-index/find-index"
import { curry } from "../curry/curry"

const _intersect = (predicateFn, unionFn, aList, bList) => {
  if (aList.length === 0) {
    return bList
  }

  if (bList.length === 0) {
    return aList
  }

  const result = [...aList]

  for (const b of bList) {
    const aIndex = findIndex(item => predicateFn(item, b))(result)

    if (aIndex === -1) {
      result.push(b)
    } else {
      result[aIndex] = unionFn(result[aIndex], b)
    }
  }

  return result
}

export const intersect = curry(_intersect)
