const entertainmentData = [
    {
        name: 'Father Hennepin Bluff Park',
        type: 'Park',
        rating: '4.7',
        image: 'https://lh3.googleusercontent.com/p/AF1QipNdi9TFChghzz4dHTt2WaO3HcFG7sRYmjdoEKB7=s1600-w1600-h1600',
    },
    {
        name: 'Minnesota Ballpark Authority',
        type: 'Stadium',
        rating: '3.0',
        image: 'https://lh3.googleusercontent.com/p/AF1QipM-AJ4KFnMNnA6u43Uc5bho0HZqQ0IuaXkE73x4=s1600-w1600-h1600'
    },
    {
        name: 'State Theater',
        type: 'Movie Theater',
        rating: '3.0',
        image: 'https://lh3.googleusercontent.com/p/AF1QipMNI3Qlu5_QJELdvpN4zKizb2nkk_TYgesmrczD=s1600-w1600-h1600'
    }
]

export function Entertainment()
{
    return entertainmentData.map((location, index) => {
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