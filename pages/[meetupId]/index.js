import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>Meetup Details</title>
        <meta name="Description" content="Test" />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://kontaktjangolder:y0NXwPOTFRITGFVa@cluster0.tptrjbi.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  // find() gives an access to all meetups from db, first curly brackets is a filter config (here no settings) and the second one define which fields should be extracted (here only id) - so show all items (no filters) but only its id
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    // if you set to false it means this paths conatins all supported meetupId values, true - next.js try to generate a page for meetupId dynamically on the server for the incoming request
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // we need getStaticPaths because here (before generating page) next.js doesn't know which params has to be used, getStaticPaths displays all dynamic segment values here all [meetupId]
  const meetupId = context.params.meetupId;

  // fetch data for a single meetup
  const client = await MongoClient.connect(
    "mongodb+srv://kontaktjangolder:y0NXwPOTFRITGFVa@cluster0.tptrjbi.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  // find() gives an access to all meetups from db, first curly brackets is a filter config (here no settings) and the second one define which fields should be extracted (here only id) - so show all items (no filters) but only its id
  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
