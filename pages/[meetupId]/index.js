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

export default MeetupDetails;
