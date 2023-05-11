import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://media.istockphoto.com/id/1283481772/pl/zdj%C4%99cie/panorama-gdyni-wyj%C4%99ta-z-powietrza-jesieni%C4%85.jpg?s=612x612&w=0&k=20&c=ODLBdF1GxRr2nCS-b4P8mJyvihmJsT757wfOEZzKWYY="
      title="A First Meetup"
      address="Some address 5, Some City"
      description="This is a first meetup!"
    />
  );
}

export async function getStaticPaths(){
  return {
    // if you set to false it means this paths conatins all supported meetupId values, true - next.js try to generate a page for meetupId dynamically on the server for the incoming request
    fallback: false,
    paths:[
      {
        params:{
          meetupId: 'm1',
        },
      },
      {
        params:{
          meetupId: 'm2',
        },
      },
    ]
  }
}

export async function getStaticProps(context){
  // fetch data for a single meetup

  // we need getStaticPaths because here (before generating page) next.js doesn't know which params has to be used, getStaticPaths displays all dynamic segment values here all [meetupId]
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props:{
      meetupData:{
        image:"https://media.istockphoto.com/id/1283481772/pl/zdj%C4%99cie/panorama-gdyni-wyj%C4%99ta-z-powietrza-jesieni%C4%85.jpg?s=612x612&w=0&k=20&c=ODLBdF1GxRr2nCS-b4P8mJyvihmJsT757wfOEZzKWYY=",
        id:meetupId,
        title:"A First Meetup",
        address:"Some address 5, Some City",
        description:"This is a first meetup!"
      }
    }
  }
}

export default MeetupDetails;
