# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

LocalArt.create([
{
  name: "MICKALENE THOMAS",
  image_url:"https://thenypost.files.wordpress.com/2015/05/portrait_of_sidra_2.jpg?quality=90&strip=all&w=647",
  bio:"Her portrait of Michelle Obama (left) was displayed in the National Portrait Gallery — a first-ever for a first lady — and a short film she made about her mother made its HBO debut last year.",
  location:"Brooklyn"
},
{
  name: "XAVIERA SIMMONS",
  image_url:"https://thenypost.files.wordpress.com/2015/05/composition_one_for_score_a_-1.jpg?quality=90&strip=all&w=1152",
  bio:"Since completing her studies at Bard College and the Whitney, Simmons has shown her multimedia work across the globe, including major institutions like the Guggenheim and the Studio Museum in Harlem. Simmons was awarded the Foundation for Contemporary Arts (Robert Rauschenberg) grant in January of 2015.",
  location:"NYC"
},
{
  name:"HANK WILLIS THOMAS",
  image_url:"https://thenypost.files.wordpress.com/2015/05/hwt05-001_branded_head_hr.jpg?quality=90&strip=all&w=686" ,
  bio:" It’s already been a banner year for conceptual artist Thomas, who nabbed a prestigious International Center of Photography award and was appointed by Mayor Bill de Blasio to the NYC Public Design Commission. Thomas’ electrifying work, the latest of which is on view at Jack Shainman Gallery in Chelsea, has been acquired by dozens of institutions, including the Museum of Modern Art, the Guggenheim and the Whitney.",
  location:"NYC"
},

{
  name:"JAMAL BLAIR",
  image_url:"https://i.postimg.cc/BQz1fRDt/lannadwg.jpg",
  bio:"A real nice artist I met at Kings Plaza. He specializes in drawing faces.",
  location: "NYC"
},

{
  name:"DUSTIN YELLIN",
  image_url:"https://thenypost.files.wordpress.com/2015/05/psychogeography_detail_0031.jpg?quality=90&strip=all&w=1286",
  bio:"Already one of Brooklyn’s art-world scene-makers, Yellin’s name recognition hit new levels in 2013 during his rumored yearlong romance with Michelle Williams. His annual spring Pioneer Works gala lures young art, fashion and media luminaries. But Yellin says he views social and commercial success as more opportunity than accomplishment. “Selling art helped me establish Pioneer Works, which is now a thriving nonprofit,” he notes.",
  location:"NYC"
},

{
  name:"ZERLINA DEVI",
  image_url:"https://s3.amazonaws.com/webassets.ticketmob.com/TS/images/ShowPosters/536309D4-A18B-4E88-13CCC5E87FE27AFD.png",
  bio:"Originally from Bali, Indonesia, pianist and composer Zerlina Devi is quickly emerging as a star in the music scene today.Zerlina has now released her first album consisting of her compositions as well as unique piano playing, where she had the pleasure to have Darren Barrett on her record. She continues to be an active artistic force in the Boston music scene, giving audiences a glimpse of a new voice that they are seeking.",
  location:"NYC"
}

])


LocalEvent.create([

{
  title:"NYE Ball Drop",
  image_url:"https://media.cntraveler.com/photos/5c1aaf23a546ef283d21735d/master/pass/NYC_NYE_GettyImages-900177638.jpg",
  description:"Celebrate the New Year's Eve Ball Drop in Times Square and ring in the New Year with thousands of your closest friends.",
  is_event: true,
  date:"12/31/2019",
  address:"Times Square"
},
{
  title:"NYC Hip Hop vs Reggae™ Katra Lounge Remix Fridays Everyone FREE (Gametight)",
  image_url:"https://www.katranyc.com/images/7b.jpg",
  description:"Ladies FREE til 1 onlist with this pass or on the Gametight Guestlist!
  Guys FREE til 12 onlist with this pass or on the Gametight Guestlist!
  Dresscode or Guys dark sneakers okay with collar shirt or button up and ladies shoes with heels.
  For more information on Hip Hop vs Reggae™ party at Katra Lounge birthday or guestlist call 3479854412",
  is_event: true,
  date: "01/13/2019",
  address:"217 Bowery
  New York, NY 10002"
},
{
  title:"Santacon 2019 : New York City ✦OFFICIAL✦
  by Santa",
  image_url:"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F81538109%2F240047042758%2F1%2Foriginal.20191117-190515?w=800&auto=compress&rect=0%2C0%2C2500%2C1250&s=ddb28514f9d40b482d689eb05c329b1f",
  description:"Santacon Is A Charitable, Non-commercial, Non-political, Nonsensical Santa Claus Convention That Happens Once A Year To Spread Absurdist Joy.
  THE 5 F’S OF SANTACON
  1.Don’t F*** with Kids
  2.Don’t F*** with Cops
  3.Don’t F*** with Bar Staff
  4.Don’t F*** with NYC
  5.Don’t F*** with Santa’s Charity Mission",
  is_event: true,
  date:"12/14/2019",
  address:"New York City
  Start Point will be revealed a week before
  New York, NY 10003",
},

{
  title:"Cesar (@flipping_nj) and DJ Envy Real Estate Seminar NYC by Cesar and DJ Envy",
  image_url:"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F79011729%2F263607565980%2F1%2Foriginal.20191101-050920?w=800&auto=compress&rect=0%2C96%2C1920%2C960&s=d4b7f5fd397c3c1768fcc3f808f77cfa",
  description:"JOIN US, for a life changing experience, get the knowledge and industry secrets straight from the source.Get ready to take notes in order to prepare yourself for a great investment! Space is limited.",
  is_event: true,
  date: "12/15/2019",
  address:"Javits Center
  429 11th Avenue
  New York, NY 10001"
},
{
  title: "CITY OF SCIENCE 2019: Brooklyn
  by World Science Festival",
  image_url:"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F74314833%2F172285009786%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C0%2C2160%2C1080&s=1097064eff23c7131ea527fef53a7e97",
  description:"Join the World Science Festival and Con Edison for this larger-than-life touring event where the wondrous properties of science, technology, engineering, and math collide. Filled with interactive demonstrations and hands-on activities, this family-friendly program unleashes everyone’s inner scientist.",
  is_event: true,
  date: "12/15/2019",
  address:"Park Slope Armory YMCA
  361 15th Street
  Brooklyn, NY 11215"

},
{
  title:"Kwanzaa Crawl 2019 || A One Day Celebration of Black-Owned Bars by Operation Mobilize",
  image_url:"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F82940807%2F97657404885%2F1%2Foriginal.20191128-151815?w=800&auto=compress&rect=0%2C0%2C2160%2C1080&s=eb4d0df31b4710fd8160621fee212480",
  description:"A one-day event where people of the African diaspora join together to support the Black-owned bars in their neighborhood. Crawlers will be dressed in whatever makes them feel Black and beautiful, for a day of unity, fellowship, and fun!",
  is_event: true,
  date: "12/25/2019",
  address:"Brooklyn & Harlem
  Brooklyn || Black Lady Theater & Brooklyn Masonic Temple
  Harlem || MIST Harlem
  NY 11249"
},

{
  title:"Eric Prydz Presents: HOLO NYC",
  image_url:"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F72358147%2F310978094660%2F1%2Foriginal.20190911-010855?w=800&auto=compress&rect=0%2C68%2C1600%2C800&s=86b7bd4ec15540d05804a77a26dbc88e",
  description:"HOLO is an outgrowth of Prydz’s original EPIC concert series, which have centered around a pioneering use of holograms. The Verge called these shows ‘the ambitious future of concert tech’ this summer, when the sixth installment of EPIC, HOLOSPHERE, debuted at Tomorrowland. HOLO NYC is a very different show than HOLOSPHERE, which centered Prydz inside a transparent LED physical sphere.",
  is_event: true,
  date: "12/27/2019",
  address:"New York Expo Center
  1108 Oakpoint Avenue
  The Bronx, NY 10474"
}

])