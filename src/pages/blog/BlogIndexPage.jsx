import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Meta from '../../components/Meta'
import Breadcrumb from '../../components/Breadcrumb'

const SITE = 'https://tradiepayau.directory'

const posts = [
  {
    slug: 'zeller-terminal-1-review-2026',
    title: 'Zeller Terminal 1 Review (2026) — The Best EFTPOS for Australian Tradies?',
    description: 'Independent review of the Zeller Terminal 1. Rate: 1.4%. Hardware: $99. SIM plan: $15/mo. Is it the best EFTPOS terminal in Australia?',
    date: '10 Feb 2026',
    readTime: '7 min read',
    category: 'providers',
    image: 'photo-1556742049-0cfed4f6a45d',
  },
  {
    slug: 'square-terminal-review-2026',
    title: 'Square Terminal Review (2026) — Is It Worth It for Australian Tradies?',
    description: 'Independent review of the Square Terminal. Rate: 1.6%. Hardware: $329. Best-in-class offline mode. Is it worth the premium over Zeller?',
    date: '17 Feb 2026',
    readTime: '6 min read',
    category: 'providers',
    image: 'photo-1556742031-c6961e8560b0',
  },
  {
    slug: 'best-eftpos-sole-traders-australia-2026',
    title: 'Best EFTPOS for Sole Traders in Australia (2026)',
    description: 'The best EFTPOS options for Australian sole traders — compared by rate, cost, and setup time. No contracts, no lock-in.',
    date: '24 Feb 2026',
    readTime: '7 min read',
    category: 'guides',
    image: 'photo-1521791136064-7986c2920216',
  },
  {
    slug: 'eftpos-fees-tradies-australia-2026',
    title: 'EFTPOS Fees for Tradies in Australia (2026) — Full Breakdown',
    description: 'Zeller 1.4%, Square 1.6%, Stripe 1.7%. What those percentages actually cost a tradie per month — and which provider wins at every volume.',
    date: '15 Jan 2026',
    readTime: '6 min read',
    category: 'guides',
    image: 'photo-1554224155-6726b3ff858f',
  },
  {
    slug: 'zeller-vs-square-eftpos-tradies',
    title: 'Zeller vs Square: Which EFTPOS Terminal is Better for Tradies?',
    description: 'Rate, SIM card, offline mode, settlement speed. A straight head-to-head for Australian tradies who need to pick one terminal.',
    date: '22 Jan 2026',
    readTime: '7 min read',
    category: 'providers',
    image: 'photo-1556742031-c6961e8560b0',
  },
  {
    slug: 'accept-card-payments-sole-trader-australia',
    title: 'How to Accept Card Payments as a Sole Trader in Australia (2026)',
    description: 'Everything a sole-trader tradie needs to know: ABN setup, choosing a provider, hardware costs, and what the fees actually mean for your take-home pay.',
    date: '1 Feb 2026',
    readTime: '8 min read',
    category: 'guides',
    image: 'photo-1607472586893-edb57bdc0e39',
  },
  {
    slug: 'stripe-terminal-review-2026',
    title: 'Stripe Terminal Review (2026) — Is Stripe Worth It for Australian Tradies?',
    description: 'Stripe Terminal: 1.7% + $0.10 in-person, 24/7 support, best API. How it compares to Zeller and Square for Australian tradies.',
    date: '2 Apr 2026',
    readTime: '7 min read',
    category: 'providers',
    image: 'photo-1601597111158-2fceff292cdc',
  },
  {
    slug: 'tyro-eftpos-review-2026',
    title: 'Tyro EFTPOS Review (2026) — Is Tyro Good for Tradies?',
    description: 'Tyro is a fully licensed Australian bank with competitive payment links (1.4% incl. GST). But the in-person rate requires a quote. Full review for tradies.',
    date: '2 Apr 2026',
    readTime: '7 min read',
    category: 'providers',
    image: 'photo-1563013544-824ae1b704d3',
  },
  {
    slug: 'shift4-eftpos-review-2026',
    title: 'Shift4 EFTPOS Review (2026) — Is Shift4 Worth It for Australian Tradies?',
    description: 'Shift4 offers surcharging that passes fees to customers. No monthly fee. Is it right for your trade business? Full independent review.',
    date: '2 Apr 2026',
    readTime: '6 min read',
    category: 'providers',
    image: 'photo-1559526324-4b87b5e36e44',
  },
  {
    slug: 'zeller-vs-tyro-eftpos-tradies',
    title: 'Zeller vs Tyro: Which EFTPOS is Better for Tradies? (2026)',
    description: 'Transparent pricing vs negotiated rates. SIM connectivity vs WiFi-only. Same-day vs next-day settlement. A head-to-head for Australian tradies.',
    date: '2 Apr 2026',
    readTime: '6 min read',
    category: 'providers',
    image: 'photo-1556742031-c6961e8560b0',
  },
  {
    slug: 'surcharging-eftpos-tradies-australia-2026',
    title: 'Surcharging for Tradies: How to Pass EFTPOS Fees to Customers (2026)',
    description: 'What surcharging is, how to set it up on Zeller and Square, what the RBA rules say, and when it makes sense for Australian tradies.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'guides',
    image: 'photo-1554224155-6726b3ff858f',
  },
  {
    slug: 'zeller-vs-square-vs-stripe-eftpos-tradies-2026',
    title: 'Zeller vs Square vs Stripe: Best EFTPOS for Australian Tradies (2026)',
    description: 'A full 3-way comparison. Rates, hardware, SIM connectivity, offline mode, and settlement speed — plus real monthly cost at every volume.',
    date: '2 Apr 2026',
    readTime: '8 min read',
    category: 'providers',
    image: 'photo-1556742049-0cfed4f6a45d',
  },
  {
    slug: 'best-eftpos-builders-australia-2026',
    title: 'Best EFTPOS for Builders in Australia (2026)',
    description: 'Builders need deposits, progress payments, multi-worker sites, and connectivity on early-stage builds. Here is the best EFTPOS setup for Australian builders.',
    date: '2 Apr 2026',
    readTime: '7 min read',
    category: 'trades',
    image: 'photo-1621905252507-b35492cc74b4',
  },
  {
    slug: 'best-eftpos-plumbers-australia-2026',
    title: 'Best EFTPOS for Plumbers in Australia (2026)',
    description: 'Plumbers work in basements, plant rooms, new estates, and emergency call-outs at any hour. Here is the EFTPOS setup that works without customer WiFi.',
    date: '2 Apr 2026',
    readTime: '6 min read',
    category: 'trades',
    image: 'photo-1585771724684-38269d6639fd',
  },
  {
    slug: 'stripe-vs-square-eftpos-australia-2026',
    title: 'Stripe vs Square: Which Is Better for Australian Tradies? (2026)',
    description: 'Stripe and Square are both available in Australia. We compare in-person rates, hardware, connectivity, and the one area where each wins.',
    date: '2 Apr 2026',
    readTime: '7 min read',
    category: 'providers',
    image: 'photo-1556742049-0cfed4f6a45d',
  },
  {
    slug: 'how-to-get-paid-faster-sole-trader-australia',
    title: 'How to Get Paid Faster as a Sole Trader in Australia',
    description: 'Same-day settlement, payment links at job completion, and on-site EFTPOS. The five changes that cut debtor days from weeks to hours.',
    date: '2 Apr 2026',
    readTime: '6 min read',
    category: 'guides',
    image: 'photo-1563013544-824ae1b704d3',
  },
  {
    slug: 'best-eftpos-electricians-australia-2026',
    title: 'Best EFTPOS for Electricians in Australia (2026)',
    description: 'Switchboard rooms, roof voids, and new estates without WiFi. Here is the EFTPOS setup that works where electricians actually work.',
    date: '2 Apr 2026',
    readTime: '6 min read',
    category: 'trades',
    image: 'photo-1621905252507-b35492cc74b4',
  },
  {
    slug: 'best-eftpos-glaziers-australia-2026',
    title: 'Best EFTPOS for Glaziers in Australia (2026)',
    description: 'Emergency glazing is 24/7, in high-rise buildings, and on sites without WiFi. The EFTPOS setup that works at any hour.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'trades',
    image: 'photo-1504307651254-35680f356dfd',
  },
  {
    slug: 'best-eftpos-roofers-australia-2026',
    title: 'Best EFTPOS for Roofers in Australia (2026)',
    description: 'Storm-damage call-outs, rooftop work, and large residential jobs. The best EFTPOS for Australian roofers in 2026.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'trades',
    image: 'photo-1558618666-fcd25c85cd64',
  },
  {
    slug: 'best-eftpos-hvac-australia-2026',
    title: 'Best EFTPOS for HVAC Technicians in Australia (2026)',
    description: 'Plant rooms, rooftop units, and commercial buildings after hours. The EFTPOS that works where HVAC technicians actually work.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'trades',
    image: 'photo-1558618047-3c8c76ca7d13',
  },
  {
    slug: 'best-eftpos-painters-australia-2026',
    title: 'Best EFTPOS for Painters in Australia (2026)',
    description: 'Painters work in empty buildings under renovation with no WiFi. The best EFTPOS for Australian painters in 2026.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'trades',
    image: 'photo-1589939705384-5185137a7f0f',
  },
  {
    slug: 'best-eftpos-tilers-australia-2026',
    title: 'Best EFTPOS for Tilers in Australia (2026)',
    description: 'Tilers work in bathrooms and kitchens under renovation with no WiFi. The best EFTPOS for Australian tilers in 2026.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'trades',
    image: 'photo-1558618666-fcd25c85cd64',
  },
  {
    slug: 'best-eftpos-concreters-australia-2026',
    title: 'Best EFTPOS for Concreters in Australia (2026)',
    description: 'Concreters work on driveways and slabs without WiFi. Large job amounts mean getting deposits right matters.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'trades',
    image: 'photo-1504307651254-35680f356dfd',
  },
  {
    slug: 'best-eftpos-carpenters-australia-2026',
    title: 'Best EFTPOS for Carpenters in Australia (2026)',
    description: 'Carpenters work on new builds, renovations, and remote sites. The best EFTPOS for Australian carpenters in 2026.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'trades',
    image: 'photo-1621905252507-b35492cc74b4',
  },
  {
    slug: 'best-eftpos-gas-fitters-australia-2026',
    title: 'Best EFTPOS for Gas Fitters in Australia (2026)',
    description: 'Gas fitters handle emergency call-outs in plant rooms and underground infrastructure. The best EFTPOS for Australian gas fitters in 2026.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'trades',
    image: 'photo-1585771724684-38269d6639fd',
  },
  {
    slug: 'best-eftpos-fencers-australia-2026',
    title: 'Best EFTPOS for Fencers in Australia (2026)',
    description: 'Fencers work on new estates, rural properties, and construction sites without WiFi. The best EFTPOS for Australian fencers in 2026.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'trades',
    image: 'photo-1558618047-3c8c76ca7d13',
  },
  {
    slug: 'best-eftpos-plasterers-australia-2026',
    title: 'Best EFTPOS for Plasterers in Australia (2026)',
    description: 'Plasterers work in new builds and renovation sites with no WiFi during construction. The best EFTPOS for Australian plasterers in 2026.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'trades',
    image: 'photo-1621905252507-b35492cc74b4',
  },
  {
    slug: 'best-eftpos-pool-builders-australia-2026',
    title: 'Best EFTPOS for Pool Builders in Australia (2026)',
    description: 'Pool builders manage large staged payments on residential sites without WiFi. The best EFTPOS for Australian pool builders in 2026.',
    date: '2 Apr 2026',
    readTime: '6 min read',
    category: 'trades',
    image: 'photo-1504307651254-35680f356dfd',
  },
  {
    slug: 'best-eftpos-pest-controllers-australia-2026',
    title: 'Best EFTPOS for Pest Controllers in Australia (2026)',
    description: 'Pest controllers access roof voids, subfloors, and commercial buildings without WiFi. The best EFTPOS for Australian pest controllers in 2026.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'trades',
    image: 'photo-1558618666-fcd25c85cd64',
  },
  {
    slug: 'best-eftpos-welders-australia-2026',
    title: 'Best EFTPOS for Welders in Australia (2026)',
    description: 'Welders work on industrial sites, remote locations, and in workshops. The best EFTPOS for Australian welders in 2026.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'trades',
    image: 'photo-1504307651254-35680f356dfd',
  },
  {
    slug: 'best-eftpos-cleaners-australia-2026',
    title: 'Best EFTPOS for Cleaners in Australia (2026)',
    description: 'Cleaners work in occupied and unoccupied premises with recurring clients. The best EFTPOS for Australian cleaning businesses in 2026.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'trades',
    image: 'photo-1558618047-3c8c76ca7d13',
  },
  {
    slug: 'best-eftpos-landscapers-australia-2026',
    title: 'Best EFTPOS for Landscapers in Australia (2026)',
    description: 'Landscapers work on new estates, rural properties, and large residential sites without WiFi. The best EFTPOS for Australian landscapers in 2026.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'trades',
    image: 'photo-1558618666-fcd25c85cd64',
  },
  {
    slug: 'best-eftpos-electricians-nsw-2026',
    title: 'Best EFTPOS for Electricians in NSW (2026)',
    description: 'Best EFTPOS for NSW electricians — Western Sydney estates, Sydney CBD switchboard rooms, and regional NSW. Lowest rate, SIM connectivity.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'states',
    image: 'photo-1621905252507-b35492cc74b4',
  },
  {
    slug: 'best-eftpos-electricians-vic-2026',
    title: 'Best EFTPOS for Electricians in Victoria (2026)',
    description: 'Best EFTPOS for Victorian electricians — Melbourne growth corridors, CBD fit-outs, and regional Victoria. Lowest rate, SIM connectivity.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'states',
    image: 'photo-1621905252507-b35492cc74b4',
  },
  {
    slug: 'best-eftpos-electricians-qld-2026',
    title: 'Best EFTPOS for Electricians in Queensland (2026)',
    description: 'Best EFTPOS for Queensland electricians — SEQ estates, Cairns tropical work, and outback QLD. SIM connectivity and lowest rate for 2026.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'states',
    image: 'photo-1621905252507-b35492cc74b4',
  },
  {
    slug: 'best-eftpos-plumbers-nsw-2026',
    title: 'Best EFTPOS for Plumbers in NSW (2026)',
    description: 'Best EFTPOS for NSW plumbers — same-day settlement for material runs, SIM connectivity for emergency call-outs across Western Sydney and regional NSW.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'states',
    image: 'photo-1585771724684-38269d6639fd',
  },
  {
    slug: 'best-eftpos-plumbers-vic-2026',
    title: 'Best EFTPOS for Plumbers in Victoria (2026)',
    description: 'Best EFTPOS for Victorian plumbers — Melbourne growth corridors, inner-city high-rise work, and regional Victoria. Same-day settlement and SIM connectivity.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'states',
    image: 'photo-1585771724684-38269d6639fd',
  },
  {
    slug: 'best-eftpos-plumbers-qld-2026',
    title: 'Best EFTPOS for Plumbers in Queensland (2026)',
    description: 'Best EFTPOS for Queensland plumbers — SEQ growth areas, North Queensland, and outback QLD emergency call-outs. Same-day settlement and SIM connectivity.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'states',
    image: 'photo-1585771724684-38269d6639fd',
  },
  {
    slug: 'best-eftpos-builders-nsw-2026',
    title: 'Best EFTPOS for Builders in NSW (2026)',
    description: 'Best EFTPOS for NSW builders — payment links for deposits, same-day settlement for material runs, and SIM connectivity across Western Sydney estates.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'states',
    image: 'photo-1504307651254-35680f356dfd',
  },
  {
    slug: 'best-eftpos-builders-vic-2026',
    title: 'Best EFTPOS for Builders in Victoria (2026)',
    description: 'Best EFTPOS for Victorian builders — Melbourne growth corridors, inner-city apartment builds, and payment solutions for large progress invoices.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'states',
    image: 'photo-1504307651254-35680f356dfd',
  },
  {
    slug: 'best-eftpos-builders-qld-2026',
    title: 'Best EFTPOS for Builders in Queensland (2026)',
    description: 'Best EFTPOS for Queensland builders — SEQ housing boom, North Queensland cyclone work, and payment solutions for large project invoices.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'states',
    image: 'photo-1504307651254-35680f356dfd',
  },
  // City guides
  {
    slug: 'best-eftpos-electricians-sydney-2026',
    title: 'Best EFTPOS for Electricians in Sydney (2026)',
    description: 'Best EFTPOS for Sydney electricians — Western Sydney estates, CBD switchboard rooms, and suburban call-outs. Lowest rate and SIM connectivity.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'cities',
    image: 'photo-1621905252507-b35492cc74b4',
  },
  {
    slug: 'best-eftpos-electricians-melbourne-2026',
    title: 'Best EFTPOS for Electricians in Melbourne (2026)',
    description: 'Best EFTPOS for Melbourne electricians — outer growth corridors, CBD fit-outs, and suburban call-outs. Lowest rate and SIM connectivity.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'cities',
    image: 'photo-1621905252507-b35492cc74b4',
  },
  {
    slug: 'best-eftpos-electricians-brisbane-2026',
    title: 'Best EFTPOS for Electricians in Brisbane (2026)',
    description: 'Best EFTPOS for Brisbane electricians — SEQ estates, inner-city high-rise, and subtropical call-outs. Lowest rate and SIM connectivity.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'cities',
    image: 'photo-1621905252507-b35492cc74b4',
  },
  {
    slug: 'best-eftpos-plumbers-sydney-2026',
    title: 'Best EFTPOS for Plumbers in Sydney (2026)',
    description: 'Best EFTPOS for Sydney plumbers — emergency call-outs across Western Sydney, high-rise strata, and new estate builds. Same-day settlement.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'cities',
    image: 'photo-1585771724684-38269d6639fd',
  },
  {
    slug: 'best-eftpos-plumbers-melbourne-2026',
    title: 'Best EFTPOS for Plumbers in Melbourne (2026)',
    description: 'Best EFTPOS for Melbourne plumbers — emergency call-outs, growth corridor builds, and CBD high-rise. Same-day settlement.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'cities',
    image: 'photo-1585771724684-38269d6639fd',
  },
  {
    slug: 'best-eftpos-plumbers-brisbane-2026',
    title: 'Best EFTPOS for Plumbers in Brisbane (2026)',
    description: 'Best EFTPOS for Brisbane plumbers — SEQ growth areas, flood-damage call-outs, and new estate builds. Same-day settlement.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'cities',
    image: 'photo-1585771724684-38269d6639fd',
  },
  {
    slug: 'best-eftpos-builders-sydney-2026',
    title: 'Best EFTPOS for Builders in Sydney (2026)',
    description: 'Best EFTPOS for Sydney builders — Western Sydney estates, inner-city apartment blocks, and payment solutions for large progress invoices.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'cities',
    image: 'photo-1504307651254-35680f356dfd',
  },
  {
    slug: 'best-eftpos-builders-melbourne-2026',
    title: 'Best EFTPOS for Builders in Melbourne (2026)',
    description: 'Best EFTPOS for Melbourne builders — outer growth corridors, inner-city apartment builds, and payment solutions for large progress invoices.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'cities',
    image: 'photo-1504307651254-35680f356dfd',
  },
  {
    slug: 'best-eftpos-builders-brisbane-2026',
    title: 'Best EFTPOS for Builders in Brisbane (2026)',
    description: 'Best EFTPOS for Brisbane builders — SEQ housing boom, Sunshine Coast growth, and payment solutions for large project invoices.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'cities',
    image: 'photo-1504307651254-35680f356dfd',
  },
  // WA / SA state posts
  {
    slug: 'best-eftpos-electricians-wa-2026',
    title: 'Best EFTPOS for Electricians in Western Australia (2026)',
    description: 'Best EFTPOS for WA electricians — Perth metro estates, remote mining regions, and regional WA. SIM connectivity and lowest rate.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'states',
    image: 'photo-1621905252507-b35492cc74b4',
  },
  {
    slug: 'best-eftpos-plumbers-wa-2026',
    title: 'Best EFTPOS for Plumbers in Western Australia (2026)',
    description: 'Best EFTPOS for WA plumbers — Perth metro, remote mining sites, and regional WA emergency call-outs. Same-day settlement and SIM connectivity.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'states',
    image: 'photo-1585771724684-38269d6639fd',
  },
  {
    slug: 'best-eftpos-builders-wa-2026',
    title: 'Best EFTPOS for Builders in Western Australia (2026)',
    description: 'Best EFTPOS for WA builders — Perth growth corridors, remote construction sites, and payment solutions for large project invoices.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'states',
    image: 'photo-1504307651254-35680f356dfd',
  },
  {
    slug: 'best-eftpos-electricians-sa-2026',
    title: 'Best EFTPOS for Electricians in South Australia (2026)',
    description: 'Best EFTPOS for SA electricians — Adelaide metro, regional SA, and remote outback sites. SIM connectivity and lowest rate.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'states',
    image: 'photo-1621905252507-b35492cc74b4',
  },
  {
    slug: 'best-eftpos-plumbers-sa-2026',
    title: 'Best EFTPOS for Plumbers in South Australia (2026)',
    description: 'Best EFTPOS for SA plumbers — Adelaide metro and regional SA emergency call-outs. Same-day settlement and SIM connectivity.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'states',
    image: 'photo-1585771724684-38269d6639fd',
  },
  {
    slug: 'best-eftpos-builders-sa-2026',
    title: 'Best EFTPOS for Builders in South Australia (2026)',
    description: 'Best EFTPOS for SA builders — Adelaide growth suburbs and regional SA. Payment solutions for large progress invoices.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'states',
    image: 'photo-1504307651254-35680f356dfd',
  },
  // Painters × NSW/VIC/QLD
  {
    slug: 'best-eftpos-painters-nsw-2026',
    title: 'Best EFTPOS for Painters in NSW (2026)',
    description: 'Best EFTPOS for NSW painters — deposit collection before starting, empty house WiFi challenges, and same-day settlement for materials.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'states',
    image: 'photo-1589939705384-5185137a7f0f',
  },
  {
    slug: 'best-eftpos-painters-vic-2026',
    title: 'Best EFTPOS for Painters in Victoria (2026)',
    description: 'Best EFTPOS for Victorian painters — deposits, empty-building WiFi issues, and same-day settlement across Melbourne and regional VIC.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'states',
    image: 'photo-1589939705384-5185137a7f0f',
  },
  {
    slug: 'best-eftpos-painters-qld-2026',
    title: 'Best EFTPOS for Painters in Queensland (2026)',
    description: 'Best EFTPOS for Queensland painters — deposits, insurance work, and same-day settlement across SEQ and regional QLD.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'states',
    image: 'photo-1589939705384-5185137a7f0f',
  },
  // Concreters × NSW/VIC/QLD
  {
    slug: 'best-eftpos-concreters-nsw-2026',
    title: 'Best EFTPOS for Concreters in NSW (2026)',
    description: 'Best EFTPOS for NSW concreters — large deposits before the pour, new estate sites, and same-day settlement for material purchasing.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'states',
    image: 'photo-1504307651254-35680f356dfd',
  },
  {
    slug: 'best-eftpos-concreters-vic-2026',
    title: 'Best EFTPOS for Concreters in Victoria (2026)',
    description: 'Best EFTPOS for Victorian concreters — large deposits, Melbourne growth estates, and same-day settlement for material purchasing.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'states',
    image: 'photo-1504307651254-35680f356dfd',
  },
  // Painters city guides
  { slug: 'best-eftpos-painters-sydney-2026', title: 'Best EFTPOS for Painters in Sydney (2026)', description: 'Best EFTPOS for Sydney painters — inner-west renovations, empty-house WiFi issues, and same-day settlement for materials.', date: '2 Apr 2026', readTime: '5 min read', category: 'cities', image: 'photo-1589939705384-5185137a7f0f' },
  { slug: 'best-eftpos-painters-melbourne-2026', title: 'Best EFTPOS for Painters in Melbourne (2026)', description: 'Best EFTPOS for Melbourne painters — inner-suburb renovations, outer growth corridor builds, and same-day settlement.', date: '2 Apr 2026', readTime: '5 min read', category: 'cities', image: 'photo-1589939705384-5185137a7f0f' },
  { slug: 'best-eftpos-painters-brisbane-2026', title: 'Best EFTPOS for Painters in Brisbane (2026)', description: 'Best EFTPOS for Brisbane painters — SEQ new builds, insurance repaint work, and same-day settlement for materials.', date: '2 Apr 2026', readTime: '5 min read', category: 'cities', image: 'photo-1589939705384-5185137a7f0f' },
  // Concreters city guides
  { slug: 'best-eftpos-concreters-sydney-2026', title: 'Best EFTPOS for Concreters in Sydney (2026)', description: 'Best EFTPOS for Sydney concreters — large deposits before the pour, Western Sydney estate slabs, and same-day settlement.', date: '2 Apr 2026', readTime: '5 min read', category: 'cities', image: 'photo-1504307651254-35680f356dfd' },
  { slug: 'best-eftpos-concreters-melbourne-2026', title: 'Best EFTPOS for Concreters in Melbourne (2026)', description: 'Best EFTPOS for Melbourne concreters — large deposits, outer growth estate slabs, and same-day settlement for materials.', date: '2 Apr 2026', readTime: '5 min read', category: 'cities', image: 'photo-1504307651254-35680f356dfd' },
  { slug: 'best-eftpos-concreters-brisbane-2026', title: 'Best EFTPOS for Concreters in Brisbane (2026)', description: 'Best EFTPOS for Brisbane concreters — SEQ new estate slabs, large deposits before the pour, and same-day settlement.', date: '2 Apr 2026', readTime: '5 min read', category: 'cities', image: 'photo-1504307651254-35680f356dfd' },
  // Perth city guides
  { slug: 'best-eftpos-electricians-perth-2026', title: 'Best EFTPOS for Electricians in Perth (2026)', description: 'Best EFTPOS for Perth electricians — outer growth estate builds, mining sector commercial work, and same-day settlement.', date: '2 Apr 2026', readTime: '5 min read', category: 'cities', image: 'photo-1621905252507-b35492cc74b4' },
  { slug: 'best-eftpos-plumbers-perth-2026', title: 'Best EFTPOS for Plumbers in Perth (2026)', description: 'Best EFTPOS for Perth plumbers — outer estate builds, after-hours emergency call-outs, and same-day settlement.', date: '2 Apr 2026', readTime: '5 min read', category: 'cities', image: 'photo-1585771724684-38269d6639fd' },
  { slug: 'best-eftpos-builders-perth-2026', title: 'Best EFTPOS for Builders in Perth (2026)', description: 'Best EFTPOS for Perth builders — growth estate house-and-land builds, progress payments, and same-day settlement.', date: '2 Apr 2026', readTime: '5 min read', category: 'cities', image: 'photo-1504307651254-35680f356dfd' },
  // Adelaide city guides
  { slug: 'best-eftpos-electricians-adelaide-2026', title: 'Best EFTPOS for Electricians in Adelaide (2026)', description: 'Best EFTPOS for Adelaide electricians — northern suburbs estate builds, commercial fit-outs, and same-day settlement.', date: '2 Apr 2026', readTime: '5 min read', category: 'cities', image: 'photo-1621905252507-b35492cc74b4' },
  { slug: 'best-eftpos-plumbers-adelaide-2026', title: 'Best EFTPOS for Plumbers in Adelaide (2026)', description: 'Best EFTPOS for Adelaide plumbers — growth estate plumbing, after-hours call-outs, and same-day settlement.', date: '2 Apr 2026', readTime: '5 min read', category: 'cities', image: 'photo-1585771724684-38269d6639fd' },
  { slug: 'best-eftpos-builders-adelaide-2026', title: 'Best EFTPOS for Builders in Adelaide (2026)', description: 'Best EFTPOS for Adelaide builders — northern suburbs estate builds, progress payments, and same-day settlement.', date: '2 Apr 2026', readTime: '5 min read', category: 'cities', image: 'photo-1504307651254-35680f356dfd' },
  // Roofers state guides
  { slug: 'best-eftpos-roofers-nsw-2026', title: 'Best EFTPOS for Roofers in NSW (2026)', description: 'Best EFTPOS for NSW roofers — storm-damage insurance work, large job values, and same-day settlement across Sydney and regional NSW.', date: '2 Apr 2026', readTime: '5 min read', category: 'states', image: 'photo-1558618666-fcd25c85cd64' },
  { slug: 'best-eftpos-roofers-vic-2026', title: 'Best EFTPOS for Roofers in Victoria (2026)', description: 'Best EFTPOS for Victorian roofers — hailstorm insurance claims, SIM connectivity at roof level, and same-day settlement.', date: '2 Apr 2026', readTime: '5 min read', category: 'states', image: 'photo-1558618666-fcd25c85cd64' },
  { slug: 'best-eftpos-roofers-qld-2026', title: 'Best EFTPOS for Roofers in Queensland (2026)', description: 'Best EFTPOS for QLD roofers — cyclone and storm season insurance work, large job values, and rapid payment collection.', date: '2 Apr 2026', readTime: '5 min read', category: 'states', image: 'photo-1558618666-fcd25c85cd64' },
  // Painters & Concreters × WA/SA
  { slug: 'best-eftpos-painters-wa-2026', title: 'Best EFTPOS for Painters in Western Australia (2026)', description: 'Best EFTPOS for WA painters — Perth new estates, remote mining town work, and deposit collection before starting multi-day jobs.', date: '2 Apr 2026', readTime: '5 min read', category: 'states', image: 'photo-1562259929-b4e1fd3aef09' },
  { slug: 'best-eftpos-painters-sa-2026', title: 'Best EFTPOS for Painters in South Australia (2026)', description: 'Best EFTPOS for SA painters — Adelaide Hills heritage work, outer suburb new builds, and deposit collection before starting.', date: '2 Apr 2026', readTime: '5 min read', category: 'states', image: 'photo-1562259929-b4e1fd3aef09' },
  { slug: 'best-eftpos-concreters-wa-2026', title: 'Best EFTPOS for Concreters in Western Australia (2026)', description: 'Best EFTPOS for WA concreters — Perth new estate slabs, large deposits before the pour, and SIM connectivity on development sites.', date: '2 Apr 2026', readTime: '5 min read', category: 'states', image: 'photo-1504307651254-35680f356dfd' },
  { slug: 'best-eftpos-concreters-sa-2026', title: 'Best EFTPOS for Concreters in South Australia (2026)', description: 'Best EFTPOS for SA concreters — Adelaide new estate slabs, large deposits before the pour, and same-day settlement.', date: '2 Apr 2026', readTime: '5 min read', category: 'states', image: 'photo-1504307651254-35680f356dfd' },
  // Roofers city guides
  { slug: 'best-eftpos-roofers-sydney-2026', title: 'Best EFTPOS for Roofers in Sydney (2026)', description: 'Best EFTPOS for Sydney roofers — storm-damage insurance claims, terrace reroofing in the inner west, and new estate tile work.', date: '2 Apr 2026', readTime: '5 min read', category: 'cities', image: 'photo-1558618666-fcd25c85cd64' },
  { slug: 'best-eftpos-roofers-melbourne-2026', title: 'Best EFTPOS for Roofers in Melbourne (2026)', description: 'Best EFTPOS for Melbourne roofers — Victorian-era tile reroofing, southeast storm damage, and new estate roofing in outer suburbs.', date: '2 Apr 2026', readTime: '5 min read', category: 'cities', image: 'photo-1558618666-fcd25c85cd64' },
  { slug: 'best-eftpos-roofers-brisbane-2026', title: 'Best EFTPOS for Roofers in Brisbane (2026)', description: 'Best EFTPOS for Brisbane roofers — Queenslander tin roof restoration, cyclone-prep reroofing, and storm-damage insurance work.', date: '2 Apr 2026', readTime: '5 min read', category: 'cities', image: 'photo-1558618666-fcd25c85cd64' },
  // Painters & Concreters × Perth/Adelaide
  { slug: 'best-eftpos-painters-perth-2026', title: 'Best EFTPOS for Painters in Perth (2026)', description: 'Best EFTPOS for Perth painters — new estate painting in outer suburbs, deposit collection before starting, and SIM connectivity on site.', date: '2 Apr 2026', readTime: '5 min read', category: 'cities', image: 'photo-1562259929-b4e1fd3aef09' },
  { slug: 'best-eftpos-painters-adelaide-2026', title: 'Best EFTPOS for Painters in Adelaide (2026)', description: 'Best EFTPOS for Adelaide painters — Hills heritage painting, outer suburb new builds, and deposit collection before starting.', date: '2 Apr 2026', readTime: '5 min read', category: 'cities', image: 'photo-1562259929-b4e1fd3aef09' },
  { slug: 'best-eftpos-concreters-perth-2026', title: 'Best EFTPOS for Concreters in Perth (2026)', description: 'Best EFTPOS for Perth concreters — new estate slabs in outer suburbs, large deposits before the pour, and SIM connectivity.', date: '2 Apr 2026', readTime: '5 min read', category: 'cities', image: 'photo-1504307651254-35680f356dfd' },
  { slug: 'best-eftpos-concreters-adelaide-2026', title: 'Best EFTPOS for Concreters in Adelaide (2026)', description: 'Best EFTPOS for Adelaide concreters — new estate slabs in northern and southern growth corridors, large deposits before the pour.', date: '2 Apr 2026', readTime: '5 min read', category: 'cities', image: 'photo-1504307651254-35680f356dfd' },
  {
    slug: 'best-eftpos-concreters-qld-2026',
    title: 'Best EFTPOS for Concreters in Queensland (2026)',
    description: 'Best EFTPOS for Queensland concreters — SEQ housing boom, large deposits, and same-day settlement for material purchasing.',
    date: '2 Apr 2026',
    readTime: '5 min read',
    category: 'states',
    image: 'photo-1504307651254-35680f356dfd',
  },
]

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog' },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'TradiePay AU Blog',
    description: 'In-depth guides on EFTPOS terminals, payment fees, and card payment setup for Australian tradies.',
    url: `${SITE}/blog`,
    publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    blogPost: posts.map(p => ({
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.description,
      url: `${SITE}/blog/${p.slug}`,
      image: `https://images.unsplash.com/${p.image}?w=1200&h=630&fit=crop&crop=center&q=80`,
      author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
      publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'EFTPOS Guides for Australian Tradies',
    description: 'All blog posts from TradiePay AU — reviews, comparisons, and setup guides for tradie payment systems.',
    url: `${SITE}/blog`,
    numberOfItems: posts.length,
    itemListElement: posts.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.title,
      url: `${SITE}/blog/${p.slug}`,
      description: p.description,
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
    ],
  },
]

const CATEGORY = {
  providers: { label: 'Provider review', color: 'bg-blue-600',   text: 'text-blue-700',   border: 'border-t-blue-500',   pill: 'bg-blue-600/90' },
  trades:    { label: 'Trade guide',     color: 'bg-amber-500',  text: 'text-amber-700',  border: 'border-t-amber-400',  pill: 'bg-amber-500/90' },
  guides:    { label: 'Setup & fees',    color: 'bg-emerald-600',text: 'text-emerald-700',border: 'border-t-emerald-500',pill: 'bg-emerald-600/90' },
  states:    { label: 'State guide',     color: 'bg-violet-600', text: 'text-violet-700', border: 'border-t-violet-500',  pill: 'bg-violet-600/90' },
  cities:    { label: 'City guide',      color: 'bg-rose-500',   text: 'text-rose-700',   border: 'border-t-rose-500',    pill: 'bg-rose-500/90' },
}

const FEATURED = new Set([
  'zeller-terminal-1-review-2026',
  'zeller-vs-square-eftpos-tradies',
  'zeller-vs-square-vs-stripe-eftpos-tradies-2026',
])

const FILTERS = [
  { id: 'all',       label: 'All guides' },
  { id: 'providers', label: 'Provider reviews' },
  { id: 'trades',    label: 'By trade' },
  { id: 'states',    label: 'By state' },
  { id: 'cities',    label: 'By city' },
  { id: 'guides',    label: 'Setup & fees' },
]

export default function BlogIndexPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const filtered = activeFilter === 'all' ? posts : posts.filter(p => p.category === activeFilter)

  return (
    <>
      <Meta
        title="TradiePay AU Blog — EFTPOS Guides for Australian Tradies"
        description="In-depth guides on EFTPOS terminals, payment fees, and card payment setup for Australian tradies. Updated 2026."
        canonical="/blog"
        ogType="website"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-slate-900" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="hero-meta">
              <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Blog</span>
              <span>·</span>
              <span>Updated 2026</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">
              EFTPOS Guides for Australian Tradies
            </h1>
            <p className="hero-sub">
              Straight-talking breakdowns of fees, hardware, and setup — written for tradies, not accountants.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="section container-page">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map(f => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveFilter(f.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeFilter === f.id
                  ? 'bg-brand-blue text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-brand-blue hover:text-brand-blue'
              }`}
            >
              {f.label}
              {f.id !== 'all' && (
                <span className="ml-1.5 opacity-60">
                  {posts.filter(p => p.category === f.id).length}
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => {
            const cat = CATEGORY[post.category] ?? CATEGORY.guides
            const featured = FEATURED.has(post.slug)
            return (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(i, 5) * 0.06 }}
                className={`bg-white rounded-2xl overflow-hidden flex flex-col border border-slate-100 border-t-4 shadow-sm hover:shadow-md transition-shadow ${cat.border}`}
              >
                {/* Image with overlays */}
                <Link to={`/blog/${post.slug}`} className="block relative overflow-hidden aspect-[16/9] bg-slate-100 group">
                  <img
                    src={`https://images.unsplash.com/${post.image}?w=800&h=450&fit=crop&crop=center&q=80`}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  {/* Category pill */}
                  <span className={`absolute top-2.5 left-2.5 ${cat.pill} text-white text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full backdrop-blur-sm`}>
                    {cat.label}
                  </span>
                  {/* Featured badge */}
                  {featured && (
                    <span className="absolute top-2.5 right-2.5 bg-amber-400 text-amber-900 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full">
                      ★ Featured
                    </span>
                  )}
                </Link>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2.5">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-sm font-bold text-brand-dark leading-snug mb-2">
                    <Link to={`/blog/${post.slug}`} className="hover:text-brand-blue transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-xs text-slate-500 leading-relaxed flex-1 mb-4">
                    {post.description}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className={`inline-flex items-center gap-1 text-xs font-semibold ${cat.text} hover:underline`}
                  >
                    Read guide →
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>
    </>
  )
}
