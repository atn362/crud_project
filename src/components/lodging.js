const lodgingData = [
    {
        name: 'The Marquette Hotel',
        type: 'Hotel',
        rating: '4.4',
        image: 'https://lh3.googleusercontent.com/p/AF1QipNLaHSvBtUEzMaEh5s2wLuKlWupyE0D1k7GaB1K=s1600-w960-h540'
    },
    {
        name: 'Hyatt Centric Downtown',
        type: 'Hotel',
        rating: '4.4',
        image: 'https://lh3.googleusercontent.com/p/AF1QipNEPzfbV45p-JqbsCNnTvTINXcatWajdQvt7gqv=s1600-w1600-h1600'
    }
]

export function Lodging()
{
    return lodgingData.map((location, index) => {
        return(
            <div className="resultscolumn" key={index}>
                <h2>{location.name}</h2>
                <p className='resultstype' >{location.type}</p>
                <p className='rating'>Rating: {location.rating}</p>
                <img className='resultsimg' src={location.image} alt="locationImage"/>
            </div>
        )
    })
}