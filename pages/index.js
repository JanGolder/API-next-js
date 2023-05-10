import { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://media.istockphoto.com/id/1283481772/pl/zdj%C4%99cie/panorama-gdyni-wyj%C4%99ta-z-powietrza-jesieni%C4%85.jpg?s=612x612&w=0&k=20&c=ODLBdF1GxRr2nCS-b4P8mJyvihmJsT757wfOEZzKWYY=',
        address: 'Some address 5, Some City',
        description: "This is a first meetup!"
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://www.polska.travel/images/pl-PL/glowne-miasta/gdansk/gdansk_motlawa_1170.jpg',
        address: 'Some address 5, Some City',
        description: "This is a first meetup!"
    }
]

function HomePage(props){


    return (
        <MeetupList meetups={props.meetups}/>
    )
}
// function available only in pages component, approach for data fetching for static pages
export async function getStaticProps(){
    // fetch data from an API
    // we have to return an object, value has to be named 'props'
    return {
        props:{
            // this will be set as props in HomePage component!
            meetups: DUMMY_MEETUPS
        }
    }
}

export default HomePage;