import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'ejijmntw',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skeC7bEQyVvcxSYgFNMlH2hhunileZKbrEuFlaifZBgFIUQfqRUcc2vujImquYBIW6cbLPVCcu4T2aI5IHzUhCgbqd4hIx5gpyPX9SidPlKtAJAC6ajFGiumJoIIdn071KMaMiQZ8mh2LHyQszT3PdSDW8ZpP8jsHj7baRL4qeiMbFnKp2WH',
  useCdn: false,
})
