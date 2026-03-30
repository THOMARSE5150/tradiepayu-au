export const STATES = [
  {
    slug: 'nsw',
    name: 'New South Wales',
    abbr: 'NSW',
    cities: ['Sydney', 'Newcastle', 'Wollongong', 'Central Coast', 'Canberra region'],
    regulator: 'NSW Fair Trading',
    notes: 'Highest tradie density in Australia. Strong Optus SIM coverage across greater Sydney and coastal corridors.',
  },
  {
    slug: 'vic',
    name: 'Victoria',
    abbr: 'VIC',
    cities: ['Melbourne', 'Geelong', 'Ballarat', 'Bendigo', 'Mornington Peninsula'],
    regulator: 'Consumer Affairs Victoria',
    notes: 'Active residential and commercial construction market. Optus SIM covers metro Melbourne and major regional centres.',
  },
  {
    slug: 'qld',
    name: 'Queensland',
    abbr: 'QLD',
    cities: ['Brisbane', 'Gold Coast', 'Sunshine Coast', 'Cairns', 'Townsville'],
    regulator: 'QBCC (Queensland Building and Construction Commission)',
    notes: 'Large geographic coverage with rural and remote sites. Optus SIM recommended; Square offline mode useful for remote Far North Queensland.',
  },
  {
    slug: 'wa',
    name: 'Western Australia',
    abbr: 'WA',
    cities: ['Perth', 'Fremantle', 'Mandurah', 'Bunbury', 'Rockingham'],
    regulator: 'Building and Energy WA',
    notes: 'Large distances between sites. Perth metro well-covered by Optus SIM. Remote and mining-adjacent sites may require Square offline mode as backup.',
  },
  {
    slug: 'sa',
    name: 'South Australia',
    abbr: 'SA',
    cities: ['Adelaide', 'Mount Gambier', 'Whyalla', 'Murray Bridge', 'Port Augusta'],
    regulator: 'Consumer and Business Services SA',
    notes: 'Strong metro coverage in Adelaide. Regional SA well-served by Optus. Rural fringe sites benefit from offline backup.',
  },
  {
    slug: 'tas',
    name: 'Tasmania',
    abbr: 'TAS',
    cities: ['Hobart', 'Launceston', 'Devonport', 'Burnie', 'Ulverstone'],
    regulator: 'Consumer, Building and Occupational Services (CBOS)',
    notes: 'Smaller market with strong demand from renovation and new build activity. Optus SIM covers Hobart, Launceston, and major towns. Rural west TAS benefits from Square offline backup.',
  },
]

export const STATE_MAP = Object.fromEntries(STATES.map(s => [s.slug, s]))
