import React from "react";
import Image from "next/image"; 
import { Rating } from "@mui/material";
import Link from "next/link";

let moviesData = [
    {
        id: Math.random(),
        image:
            "https://i.pinimg.com/originals/4d/ea/be/4deabeb03554cacdba17995886789005.jpg",
        rating: 4,
        name: "Devil's Mile",
        date: "2014",
        type: "Action | Crime",
        description:
            "A relentlessly-paced hybrid of gritty crime thriller and Lovecraftian supernatural horror, The Devil's Mile follows a trio of kidnappers who take an ill-advised detour en route to deliver...",
    },
    {
        id: Math.random(),
        image:
            "https://static.cinemagia.ro/img/db/movie/00/69/88/once-upon-a-time-in-the-west-549264l.jpg",
        rating: 5,
        name: "Once Upon A Time In The west",
        date: "1968",
        type: "Western",
        description:
            "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
    },
    {
        id: Math.random(),
        image:
            "https://i.pinimg.com/564x/37/bd/f8/37bdf8f405a30977959e112d6f48aec0.jpg",
        rating: 4,
        name: "Taxi Driver",
        date: "1976",
        type: "Crime | Drama",
        description:
            "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute.",
    },
    {
        id: Math.random(),
        image:
            "https://i.pinimg.com/564x/78/55/ac/7855acc7002b1ae619b1edaa4b595df3.jpg",
        rating: 4,
        name: "Mad Max",
        date: "1979",
        type: "Action | Adventure",
        description:
            "In a self-destructing world, a vengeful Australian policeman sets out to stop a violent motorcycle gang.",
    },
    {
        id: Math.random(),
        image:
            "https://mir-s3-cdn-cf.behance.net/project_modules/disp/b1330b14202071.5627f4dc23472.jpg",
        rating: 3,
        name: "Little Miss Sunshine",
        date: "2006",
        type: "Comedy | Drama",
        description:
            "A family determined to get their young daughter into the finals of a beauty pageant take a cross-country trip in their VW bus.",
    },
    {
        id: Math.random(),
        image:
            "https://i.pinimg.com/564x/32/49/1c/32491ccd2f4ce577dea8871988c5828c.jpg",
        rating: 5,
        name: "KILL BILL",
        date: "2003",
        type: "Action",
        description:
            "The lead character, called 'The Bride,' was a member of the Deadly Viper Assassination Squad, led by her lover 'Bill.'The Bride' decided to escape her life as a killer.",
        details:
            "https://www.imdb.com/title/tt0266697/plotsummary?ref_=tt_stry_pl",
    },
    {
        id: Math.random(),
        image:
            "https://i.pinimg.com/originals/3e/f1/ba/3ef1baaaceb5a95c4f57a7cb2393b39d.jpg",
        rating: 5,
        name: "The Wolf Of Wall Street",
        date: "2013",
        type: " Biography | Crime | Drama  ",
        description:
            "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
    },
];

const Card = ({ item }) => {
    const notification = () => alert("abcd==>");
    return (
        <div onClick={notification} className="w-full md:w-4/5 lg:w-2/3 mx-auto mt-24 hover:scale-105 transition-transform duration-400">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
                <div className="relative z-10 bg-gradient-to-r from-black to-transparent rounded-lg p-6 flex flex-col md:flex-row">
                    <Image
                        className="h-28 w-20 md:h-32 md:w-24 lg:h-36 lg:w-28 object-cover shadow-md"
                        src={item.image}
                        width={50}
                        height={50}
                        alt={item.name}
                    />
                    <div className="ml-4">
                        <h1 className="text-white text-2xl font-semibold">{item.name}</h1>
                        <h4 className="text-blue-300 font-light">{item.date}</h4>
                        <p className="text-gray-200 mt-2">{item.type}</p>
                    </div>
                </div>
                <div className="p-6">
                    <p className="text-gray-400">{item.description}</p>
                    <div className="mt-4">
                        <Rating name="read-only" value={item.rating} readOnly />
                    </div>
                </div>
            </div>
            <Link href={`/profile/${item.id}`}>
                <button type="button" className="px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:ring focus:border-blue-300">
                    View Profile
                </button>
            </Link>
        </div>
    );
};

const MoviesList = () => {
    return (
        <div>
            {moviesData.map((item) => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    );
};

export default MoviesList;
