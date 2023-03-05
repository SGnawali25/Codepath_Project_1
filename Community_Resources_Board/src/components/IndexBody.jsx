import React from "react";
import Card from "./Card";
const IndexBody = () => {
    const placesData = [
        {name: "Country Music Hall of Fame", description: "The Country Music Hall of Fame and Museum, located in downtown Nashville, Tennessee, is a cultural landmark that showcases the history and evolution of country music. The museum features an extensive collection of artifacts, exhibits, and interactive displays that highlight the careers of country music's most influential performers, songwriters, and producers.", image: 'images/CountryMusicHallOfFame.jpeg' },
        {name: "Grand Ole Opry", description: "The Grand Ole Opry is a legendary country music radio show that has been broadcasting live from Nashville, Tennessee since 1925. The show, which was originally called the \"WSM Barn Dance,\" has become an iconic institution in the world of country music, showcasing the genre's most popular and influential performers.", image: 'images/GrandOleOpry.jpg' },
        {name: "Ryman Auditorium", description: "The Ryman Auditorium is a historic concert venue located in downtown Nashville, Tennessee. Built in 1892 as the Union Gospel Tabernacle, the Ryman Auditorium was originally designed as a place of worship for the Union Gospel Tabernacle Church.", image: 'images/RymanAuditorium.jpg' },
        {name: "Assembly Food Hall", description: "Assembly Food Hall is a popular food and entertainment destination located in downtown Nashville, Tennessee. The hall is a multi-level space that features a wide variety of food and beverage options from local and regional vendors.", image: 'images/AssemblyFoodHall.jpeg' },
        {name: "Parthenon", description: "The Parthenon is a full-scale replica of the original Parthenon in Athens, Greece, located in Centennial Park in Nashville, Tennessee. The structure was built in 1897 as part of the Tennessee Centennial Exposition, and was intended to showcase the city's artistic and cultural achievements.", image: 'images/Parthenon.jpg' },
        {name: "Shelby Park", description: "Shelby Park is a large urban park located in the East Nashville neighborhood of Nashville, Tennessee. The park covers over 350 acres and features a wide range of recreational facilities and natural amenities.", image: 'images/ShelbyPark.jpg' },
        {name: "Bridgestone Arena", description: "Bridgestone Arena is a multi-purpose sports and entertainment venue located in downtown Nashville, Tennessee. The arena is home to the Nashville Predators of the National Hockey League (NHL) and hosts a variety of other sporting events, concerts, and live performances throughout the year.", image: 'images/BridgestoneArena.jpeg' },
        {name: "Nissan Stadium", description: "Nissan Stadium is a multi-purpose stadium located in Nashville, Tennessee. The stadium is primarily used for football, serving as the home field for the Tennessee Titans of the National Football League (NFL).", image: 'images/NissanStadium.jfif' },
        {name: "The Gulch", description: "The Gulch is a trendy and vibrant neighborhood located just south of downtown Nashville, Tennessee. Once an industrial area, the neighborhood has undergone a major transformation over the past few decades, and is now known for its upscale restaurants, boutique shops, and luxury high-rise apartments.", image: 'images/TheGulch.jpeg' },
        {name: "Lower Broadway", description: "Lower Broadway is a bustling district located in downtown Nashville, Tennessee, and is one of the most popular tourist destinations in the city. The area is known for its honky-tonk bars, live music venues, and lively street performances, making it a favorite among both locals and visitors alike.", image: 'images/LowerBroadway.jpg' },
        
    ]
    return (
            <div className="container">
                {placesData.map((placesData) => {
                    return (<Card placeName={placesData.name} placeInfo={placesData.description} placeImageSrc={placesData.image} />)
                })}
            </div>)
}

export default IndexBody;