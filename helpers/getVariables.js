// @flow

export default function getVariables({
  path,
  query,
  params,
}: {
  path: string,
  query: *,
  params: *,
}) {
  if (path.startsWith('/nha-dat-cho-thue')) {
    return {
      type: 'rent',
      ...query,
      ...params,
      q: query.q && `"${query.q}"`,
    }
  }
  if (path.startsWith('/nha-dat-ban')) {
    return {
      type: 'sold',
      ...query,
      ...params,
      q: query.q && `"${query.q}"`,
    }
  }
  return {
    ...query,
    ...params,
    q: query.q && `"${query.q}"`,
  }
}
