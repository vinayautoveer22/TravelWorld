// Curated demo content. Prices and itineraries are illustrative, not live inventory.
export const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1500&q=85`

const indiaRows = [
 ['Kashmir','North India','7 days','Nature','A valley of still water, cedar forests, and mountain air.','photo-1595815771614-ade9d652a65d'],
 ['Srinagar','North India','4 days','Culture','Houseboats, old-city lanes, and unhurried mornings by Dal Lake.','photo-1566837497312-7be4b5c7c14d'],
 ['Gulmarg','North India','4 days','Adventure','Open meadows and high mountain scenery in every direction.','photo-1598091383021-15ddea10925d'],
 ['Pahalgam','North India','4 days','Nature','A riverside retreat framed by pine forests and the Lidder valley.','photo-1593181629936-11c609b8db9b'],
 ['Manali','North India','5 days','Adventure','Mountain-town energy, cedar trails, and time beside the Beas.','photo-1626621341517-bbf3d9990a23'],
 ['Shimla','North India','3 days','Weekend','Colonial-era streets, hillside walks, and cool evenings.','photo-1597074866923-dc0589150358'],
 ['Spiti Valley','North India','8 days','Adventure','A high-altitude road journey through stark and beautiful landscapes.','photo-1527489377706-5bf97e608852'],
 ['Dharamshala','North India','4 days','Culture','A Himalayan foothill escape shaped by mountain paths and Tibetan culture.','photo-1605649487212-47bdab064df7'],
 ['Leh','North India','6 days','Adventure','A high desert of monasteries, mountain passes, and clear skies.','photo-1581793745862-99fde7fa73d2'],
 ['Pangong Lake','North India','2 days','Nature','A remarkable high-altitude lake best approached at a gentle pace.','photo-1501785888041-af3ef285b470'],
 ['Rishikesh','North India','3 days','Wellness','River walks, yoga, and foothill adventure along the Ganges.','photo-1470770841072-f978cf4d019e'],
 ['Mussoorie','North India','3 days','Weekend','A classic hill town with forest trails and far-reaching valley views.','photo-1500530855697-b586d89ba3ee'],
 ['Nainital','North India','3 days','Family','A lake town made for boat rides and slow hillside afternoons.','photo-1523712999610-f77fbcfc3843'],
 ['Auli','North India','4 days','Adventure','Alpine slopes and Himalayan panoramas in Uttarakhand.','photo-1519681393784-d120267933ba'],
 ['Agra','North India','2 days','Culture','Mughal architecture, artisan traditions, and the Taj Mahal.','photo-1564507592333-c60657eea523'],
 ['Jaipur','West India','3 days','Culture','Pink facades, lively bazaars, and a rich culinary scene.','photo-1599661046827-dacff0c0f09a'],
 ['Udaipur','West India','3 days','Romance','Lake palaces, old-city courtyards, and golden-hour boat rides.','photo-1595658658481-d53d3f999875'],
 ['Jaisalmer','West India','4 days','Culture','Golden sandstone lanes and desert nights under wide skies.','photo-1477587458883-47145ed94245'],
 ['Jodhpur','West India','3 days','Culture','Blue-washed streets beneath the monumental Mehrangarh Fort.','photo-1512343879784-a960bf40e7f2'],
 ['Mount Abu','West India','3 days','Nature','A cool, green pause among Rajasthan’s Aravalli hills.','photo-1464822759023-fed622ff2c3b'],
 ['Goa','West India','5 days','Coast','Choose your coast: quiet mornings, local kitchens, and sunset swims.','photo-1507525428034-b723cf961d3e'],
 ['Mumbai','West India','3 days','City break','Art deco landmarks, local trains, and a city that never sits still.','photo-1570168007204-dfb528c6958f'],
 ['Lonavala','West India','2 days','Weekend','Monsoon-green hills and easy escapes from the city.','photo-1500534623283-312aade485b7'],
 ['Mahabaleshwar','West India','3 days','Nature','Forest roads, strawberry farms, and cool plateau air.','photo-1472396961693-142e6e269027'],
 ['Rann of Kutch','West India','4 days','Culture','A vast salt landscape and craft traditions of Kutch.','photo-1473448912268-2022ce9509d8'],
 ['Munnar','South India','4 days','Nature','Tea-covered hills, misty mornings, and winding mountain roads.','photo-1602216056096-3b40cc0c9944'],
 ['Alleppey','South India','2 days','Wellness','Drift through Kerala’s backwaters and settle into waterside life.','photo-1602309520423-7b65d314a70b'],
 ['Wayanad','South India','4 days','Nature','Rainforest trails, spice gardens, and quiet stays in the hills.','photo-1544735716-392fe2489ffa'],
 ['Kochi','South India','3 days','Culture','A port city of layered histories, contemporary art, and seafood.','photo-1593693397690-362cb9666fc2'],
 ['Varkala','South India','3 days','Coast','Clifftop paths, an easy beach rhythm, and Arabian Sea sunsets.','photo-1500375592092-40eb2168fd21'],
 ['Ooty','South India','3 days','Family','A Nilgiri hill-station escape of gardens, tea, and mountain rail.','photo-1518837695005-2083093ee35b'],
 ['Coorg','South India','4 days','Nature','Coffee country, forest walks, and a slower kind of morning.','photo-1448375240586-882707db888b'],
 ['Hampi','South India','3 days','Culture','Ancient stone landscapes and a remarkable riverside setting.','photo-1606293926075-69a00dbfde81'],
 ['Mysuru','South India','2 days','Culture','Palace architecture, sandalwood heritage, and a gentle city pace.','photo-1600100397608-f010dfd7ebce'],
 ['Pondicherry','South India','3 days','Coast','Seaside promenades, Tamil heritage, and café-lined streets.','photo-1582510003544-4d00b7f74220'],
 ['Varanasi','East & Northeast','3 days','Culture','A deeply storied river city best explored with a local guide.','photo-1561361513-2d000a50f0dc'],
 ['Darjeeling','East & Northeast','4 days','Nature','Tea gardens and Himalayan views above the clouds.','photo-1528127269322-539801943592'],
 ['Gangtok','East & Northeast','4 days','Culture','A welcoming mountain capital and gateway to Sikkim.','photo-1500534623283-312aade485b7'],
 ['Shillong','East & Northeast','4 days','Nature','Music, pine hills, and Khasi culture in Meghalaya.','photo-1511497584788-876760111969'],
 ['Cherrapunji','East & Northeast','3 days','Adventure','Waterfall country, living-root bridges, and lush escarpments.','photo-1433086966358-54859d0ed716'],
 ['Tawang','East & Northeast','6 days','Culture','A remote Himalayan journey through monasteries and mountain passes.','photo-1530789253388-582c481c54b0'],
 ['Kaziranga','East & Northeast','3 days','Nature','Grasslands and wildlife habitats in Assam.','photo-1473448912268-2022ce9509d8'],
 ['Puri','East & Northeast','3 days','Coast','A historic coastal town with temple traditions and sea air.','photo-1497436072909-60f36ff1e4b1'],
 ['Andaman Islands','Islands','6 days','Coast','Clear-water coves, forested islands, and time out on the water.','photo-1519046904884-53103b34b206'],
 ['Lakshadweep','Islands','6 days','Coast','A remote island escape shaped by reefs, lagoons, and local life.','photo-1500375592092-40eb2168fd21']
]
const internationalRows = [
 ['Bali','Asia','8 days','Wellness','Temple mornings, green landscapes, and a welcoming island rhythm.','photo-1537996194471-e657df975ab4'],
 ['Bangkok','Asia','4 days','City break','Street-food discoveries and neighbourhoods full of contrast.','photo-1508009603885-50cf7c579365'],
 ['Phuket','Asia','6 days','Coast','Island-hopping days balanced with a quieter inland stay.','photo-1589394815804-964ed0be2eb5'],
 ['Vietnam','Asia','9 days','Culture','A north-to-south sampler of food, history, and changing landscapes.','photo-1528127269322-539801943592'],
 ['Dubai','Middle East','4 days','City break','Modern architecture, old creekside quarters, and desert horizons.','photo-1512453979798-5ea266f8880c'],
 ['Singapore','Asia','4 days','City break','Garden-city design, hawker stalls, and diverse neighbourhoods.','photo-1525625293386-3f8f99389edd'],
 ['Maldives','Asia','6 days','Coast','A water-focused island stay with space to slow right down.','photo-1514282401047-d79a71a590e8'],
 ['Switzerland','Europe','8 days','Nature','Rail journeys, alpine villages, and big mountain scenery.','photo-1531366936337-7c912a4589a7'],
 ['Japan','Asia','9 days','Culture','A thoughtful route between energetic cities and quiet traditions.','photo-1493976040374-85c8e12f0c0e'],
 ['Nepal','Asia','8 days','Adventure','Mountain culture, Kathmandu heritage, and gentle Himalayan walks.','photo-1544735716-392fe2489ffa'],
 ['Sri Lanka','Asia','8 days','Nature','Tea country, historic coast, and a compact island journey.','photo-1588598198321-9735fd52434b'],
 ['Italy','Europe','8 days','Culture','Long lunches, layered cities, and room to follow your curiosity.','photo-1533105079780-92b9be482077'],
 ['Paris','Europe','4 days','City break','A neighbourhood-first stay of galleries, markets, and cafés.','photo-1502602898657-3e91760cbb34']
]
const makeDest = ([name,region,duration,style,intro,image], international=false) => ({name, country:international?name:'India', region, duration, days:duration, style, tag:intro, intro, image, international, price:1200, bestTime:'Timing varies by region and travel style. Ask a planner for general seasonal guidance.', highlights:[`Explore ${name} with a local perspective`,'Leave time for unplanned discoveries','Choose a pace that suits your group']})
export const destinations = [...indiaRows.map(row=>makeDest(row)),...internationalRows.map(row=>makeDest(row,true))]

export const packages = [
 {id:'kashmir-slow',title:'Kashmir, at a gentler pace',place:'Srinagar & Pahalgam, India',duration:7,price:68900,category:'Nature',region:'North India',rating:4.9,image:'photo-1595815771614-ade9d652a65d',description:'Houseboat mornings, valley walks, and time to settle into Kashmir’s remarkable scenery.'},
 {id:'spiti-road',title:'The long road through Spiti',place:'Spiti Valley, India',duration:8,price:82900,category:'Adventure',region:'North India',rating:4.9,image:'photo-1626621341517-bbf3d9990a23',description:'A considered high-altitude road trip with local hosts, meaningful pauses, and flexible days.'},
 {id:'kerala-backwaters',title:'Kerala, slowly',place:'Munnar & Alleppey, India',duration:6,price:54900,category:'Wellness',region:'South India',rating:4.8,image:'photo-1602216056096-3b40cc0c9944',description:'Tea-country mornings give way to backwater afternoons and an easy coastal finish.'},
 {id:'rajasthan-colours',title:'Beyond Rajasthan’s palaces',place:'Jaipur & Udaipur, India',duration:6,price:62900,category:'Culture',region:'West India',rating:4.8,image:'photo-1599661046827-dacff0c0f09a',description:'A thoughtful route through craft, food, and old-city neighbourhoods.'},
 {id:'meghalaya-clouds',title:'Meghalaya, above the clouds',place:'Shillong & Cherrapunji, India',duration:6,price:71900,category:'Adventure',region:'East & Northeast',rating:4.8,image:'photo-1433086966358-54859d0ed716',description:'Waterfall paths, living-root bridges, and Khasi perspectives in the northeast.'},
 {id:'goa-coast',title:'A quieter Goan coast',place:'South Goa, India',duration:5,price:42900,category:'Coast',region:'West India',rating:4.7,image:'photo-1512343879784-a960bf40e7f2',description:'A restful coast stay with local kitchens, long beach walks, and a free day.'},
 {id:'hampi-stones',title:'Hampi, in the golden light',place:'Hampi, India',duration:4,price:38900,category:'Culture',region:'South India',rating:4.8,image:'photo-1606293926075-69a00dbfde81',description:'Temple architecture and boulder-strewn landscapes, explored at a human pace.'},
 {id:'andaman-island',title:'Island time in the Andamans',place:'Andaman Islands, India',duration:6,price:74900,category:'Coast',region:'Islands',rating:4.8,image:'photo-1519046904884-53103b34b206',description:'A relaxed island itinerary with water time and locally guided nature experiences.'},
 {id:'bali-reset',title:'Bali, beyond the beach',place:'Bali, Indonesia',duration:8,price:139000,category:'Wellness',region:'International',rating:4.8,image:'photo-1537996194471-e657df975ab4',description:'Rice field walks, a family-run guesthouse, and enough unplanned hours to exhale.'},
 {id:'kyoto-seasons',title:'Kyoto, in the moment',place:'Kyoto, Japan',duration:6,price:189000,category:'Culture',region:'International',rating:5.0,image:'photo-1493976040374-85c8e12f0c0e',description:'Stay in a quiet machiya, meet local makers, and see Kyoto beyond the guidebook.'},
 {id:'amalfi-slow',title:'The slow side of Amalfi',place:'Amalfi Coast, Italy',duration:7,price:229000,category:'Coast',region:'International',rating:4.9,image:'photo-1533105079780-92b9be482077',description:'Cliffside villages, lemon groves, and long lunches by the sea.'},
 {id:'nepal-trails',title:'A softer Himalayan trail',place:'Nepal',duration:8,price:119000,category:'Adventure',region:'International',rating:4.9,image:'photo-1544735716-392fe2489ffa',description:'Mountain walks with local guides, cultural stops, and an acclimatised pace.'}
]

export const experiences = [
 {id:'food',name:'A seat at the local table',type:'Food & culture',place:'Across India',description:'Meet cooks, growers, and makers through small-group food experiences.',image:'photo-1555939594-58d7cb561ad1'},
 {id:'wild',name:'Into the wild, thoughtfully',type:'Nature & wildlife',place:'India',description:'Explore remarkable habitats alongside guides who know them well.',image:'photo-1472396961693-142e6e269027'},
 {id:'road',name:'Take the scenic route',type:'Road trips',place:'Himalayas & beyond',description:'Flexible self-drive and driver-led journeys with room for detours.',image:'photo-1464822759023-fed622ff2c3b'},
 {id:'wellness',name:'Find your slower rhythm',type:'Wellness',place:'India & Asia',description:'Restorative stays and gentle rituals, shaped around how you want to feel.',image:'photo-1545389336-cf090694435e'},
 {id:'craft',name:'Learn from local hands',type:'Art & craft',place:'Rajasthan & beyond',description:'Spend time with artisans and discover the stories behind everyday objects.',image:'photo-1455390582262-044c5707a38b'},
 {id:'water',name:'Follow the water',type:'Coastal escapes',place:'India & islands',description:'Slow days by rivers, lakes, and coastlines with local context.',image:'photo-1500375592092-40eb2168fd21'}
]

export const stories = [
 {id:'kashmir-season',title:'The best time to explore Kashmir',category:'Field notes',image:'photo-1595815771614-ade9d652a65d',excerpt:'A season-by-season way to think about a valley that changes its character through the year.',body:'Kashmir rewards a slower plan. Think about what you want from the journey—lake mornings, mountain walks, gardens, or snow—and build your dates around that feeling. Conditions vary, so use this as inspiration and check current local guidance before travelling.'},
 {id:'kerala-slow',title:'A slow travel guide to Kerala',category:'Local rhythm',image:'photo-1602216056096-3b40cc0c9944',excerpt:'Let the backwaters, tea hills, and conversations set the pace.',body:'Kerala is best experienced with a little breathing room. Give the hills and backwaters their own time instead of rushing between them. A locally run stay, a market visit, and a free afternoon can become the details you remember.'},
 {id:'spiti-road',title:'Road-tripping through Spiti',category:'Road journal',image:'photo-1626621341517-bbf3d9990a23',excerpt:'A high-altitude journey where the pauses matter as much as the miles.',body:'Spiti is a place for thoughtful preparation and flexible expectations. Plan shorter driving days, listen to local advice, and leave room for weather and road conditions to shape the route. The landscape asks you to slow down.'},
 {id:'rajasthan-beyond',title:'Rajasthan beyond the palaces',category:'Culture',image:'photo-1477587458883-47145ed94245',excerpt:'Meet the markets, kitchens, and everyday craft that give the region its texture.',body:'The grand architecture is only one part of Rajasthan. Set aside time for a neighbourhood walk, a craft studio visit, or a meal with a local host. Those small encounters help place the history in everyday life.'},
 {id:'meghalaya-first',title:'A first-timer’s guide to Meghalaya',category:'Field notes',image:'photo-1433086966358-54859d0ed716',excerpt:'Waterfalls and living-root bridges are a beginning, not the whole story.',body:'Meghalaya’s scenery is extraordinary, but the journey is richer when guided by local Khasi knowledge. Allow enough time between places, ask before photographing people, and be ready for conditions to vary.'},
 {id:'delhi-weekends',title:'Weekend escapes near Delhi NCR',category:'Close to home',image:'photo-1500530855697-b586d89ba3ee',excerpt:'A few ideas for swapping the city pace for fresh air and a change of scene.',body:'A good short break starts with choosing one base and resisting the urge to fit everything in. Find a walk, a local meal, and a quiet morning. Check current travel conditions and opening details before setting out.'}
]
