// const AllLocations = [
//     {
//         name: 'Town Hall Brewery',
//         type: 'Restaurant',
//         rating: '4.5',
//         image: 'https://lh3.googleusercontent.com/p/AF1QipP3Fu58CUNGRE8E47gxGp8lAvUwsLRZK10kkwS5=s1600-w1600-h1152',
//     },
    
// ];

const restaurantsData = [
    {
        name: 'Town Hall Brewery',
        type: 'Restaurant',
        rating: '4.5',
        image: 'https://lh3.googleusercontent.com/p/AF1QipP3Fu58CUNGRE8E47gxGp8lAvUwsLRZK10kkwS5=s1600-w1600-h1152',
    },
    {
        name: 'Cookies & More',
        type: 'Bakery',
        rating: '3.0',
        image: 'https://lh3.googleusercontent.com/p/AF1QipPiocOTuyFRqJTlXAiO1I5nCAL7MFwB4o7iyCL0=s1600-w1498-h1000'
    },
    {
        name: 'Cafe Patteen',
        type: 'Cafe',
        rating: '4.3',
        image: 'https://lh3.googleusercontent.com/p/AF1QipOVdDUEjQRyHHBk2JUfyTrpAP-4pw0IWIsPywRS=s1600-w1600-h1600'
    }
];

export function Restaurants()
{
    return restaurantsData.map((location, index) => {
        return(
            <div className="resultscolumn" key={index}>
                <h2>{location.name}</h2>
                <p className='resultstype'>{location.type}</p>
                <p className='rating'>Rating: {location.rating} &#11088</p>
                <img className='resultsimg' src={location.image} alt="locationImage"/>
            </div>
        )
    })
}