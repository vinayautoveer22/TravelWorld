export const destinations = [
 {name:'Amalfi Coast',country:'Italy',region:'Europe',tag:'Coastal days, Italian nights',days:'7 days',price:1890,image:'photo-1533105079780-92b9be482077'},
 {name:'Kyoto',country:'Japan',region:'Asia',tag:'A quieter kind of wonder',days:'6 days',price:2240,image:'photo-1493976040374-85c8e12f0c0e'},
 {name:'Marrakech',country:'Morocco',region:'Africa',tag:'Colour around every corner',days:'5 days',price:1280,image:'photo-1539020140153-e479b8c22e70'},
 {name:'Patagonia',country:'Chile',region:'Americas',tag:'Go where the map gets wild',days:'9 days',price:3190,image:'photo-1464822759023-fed622ff2c3b'},
 {name:'Bali',country:'Indonesia',region:'Asia',tag:'Find your own island rhythm',days:'8 days',price:1760,image:'photo-1537996194471-e657df975ab4'},
 {name:'Lisbon',country:'Portugal',region:'Europe',tag:'Slow mornings, golden hours',days:'4 days',price:980,image:'photo-1555881400-74d7acaacd8b'},
 {name:'Banff',country:'Canada',region:'Americas',tag:'A little closer to the wild',days:'6 days',price:2100,image:'photo-1503614472-8c93d56cd8b0'},
 {name:'The Dolomites',country:'Italy',region:'Europe',tag:'Alpine air, long lunches',days:'7 days',price:2460,image:'photo-1519681393784-d120267933ba'}
]
export const packages = [
 {id:'amalfi-slow',title:'The slow side of Amalfi',place:'Amalfi Coast, Italy',duration:7,price:1890,category:'Coast',rating:4.9,image:'photo-1533105079780-92b9be482077',description:'A week of cliffside villages, lemon groves, and long lunches by the sea. Thoughtfully paced with time to wander.'},
 {id:'kyoto-seasons',title:'Kyoto, in the moment',place:'Kyoto, Japan',duration:6,price:2240,category:'Culture',rating:5.0,image:'photo-1493976040374-85c8e12f0c0e',description:'Stay in a quiet machiya, meet local makers, and see Kyoto beyond the guidebook.'},
 {id:'atlas-table',title:'A table in the Atlas',place:'Marrakech, Morocco',duration:5,price:1280,category:'Culture',rating:4.8,image:'photo-1539020140153-e479b8c22e70',description:'Markets, mountain air, and a private cooking afternoon in a garden riad.'},
 {id:'patagonia-trail',title:'At the edge of Patagonia',place:'Patagonia, Chile',duration:9,price:3190,category:'Adventure',rating:4.9,image:'photo-1464822759023-fed622ff2c3b',description:'A small-group journey through big landscapes, guided by people who call this place home.'},
 {id:'bali-reset',title:'Bali, beyond the beach',place:'Bali, Indonesia',duration:8,price:1760,category:'Wellness',rating:4.8,image:'photo-1537996194471-e657df975ab4',description:'Rice field walks, a family-run guesthouse, and enough unplanned hours to exhale.'},
 {id:'lisbon-longweekend',title:'A long weekend in Lisbon',place:'Lisbon, Portugal',duration:4,price:980,category:'City break',rating:4.7,image:'photo-1555881400-74d7acaacd8b',description:'Ride the old trams, find your favourite pastelaria, and settle into the city like a local.'}
]
export const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1500&q=85`
