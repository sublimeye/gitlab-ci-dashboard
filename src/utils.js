import sort from 'semver-sort'

import {CREATED, MANUAL, SKIPPED} from './status'

export const getParameterByName = (name, url) => {
  if (!url) url = window.location.href
  name = name.replace(/[[]]/g, '\\$&')
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  var results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  const parameter = decodeURIComponent(results[2].replace(/\+/g, ' '))
  if (parameter === 'true') {
    return true
  }
  if (parameter === 'false') {
    return false
  }
  return parameter
}

export const getTopItem = (list) => {
  if (!Array.isArray(list) || list.length === 0) {
    return
  }

  let lastValidEntry
  return list.reverse().find((entry) => {
    if ([CREATED, MANUAL, SKIPPED].includes(entry.status)) {
      return false
    }

    if (entry.started_at && !entry.finished_at) {
      return true
    }
    lastValidEntry = entry
  }) || lastValidEntry
}

export const getTopItemByName = (list) => {
  if (!Array.isArray(list) || list.length === 0) {
    return
  }

  return list.sort(sortByCommitDate)[0]
}

function sortByCommitDate(a = {}, b = {}) {
  return a.commit && a.commit.committed_date < b.commit && b.commit.committed_date
}
