import React from 'react'

const Stats = () => {

    const statData = [
        {
           number: '50k+',
           label: 'Properties Sold',
        },
        {
            number: '30k+',
            label: 'Happy Clients',

        },
        {
            number: '500+',
            label: 'Awards Won',

        },
        {
            number: '100+',
            label: 'Locations',
        }
    ]
    return (
        <div className={"grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto z-50"}>

                {statData.map((stat, index) => (

                        <div key={index} className={"animate-pulse ease-in-out"} style={{ animationDelay: `${index * 0.1}s` }}>
                        <h1 className="text-6xl text-white font-bold mb-2">{stat.number}</h1>
                            <h2 className={"text-lg text-gray-300 font-bold"}>{stat.label}</h2>
                        </div>

                ))}

        </div>
    )
}
export default Stats
