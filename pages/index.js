import Head from "next/head";
import { MongoClient } from "mongodb";
// import { useEffect, useState } from 'react';
// import Layout from '../components/layout/Layout';
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="Description" content="Test"/>
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}
// function available only in pages component, approach for data fetching for static pages
export async function getStaticProps() {
  // fetch data from an API
  // we have to return an object, value has to be named 'props'

  const client = await MongoClient.connect(
    "mongodb+srv://kontaktjangolder:y0NXwPOTFRITGFVa@cluster0.tptrjbi.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  // find() gives an access to all meetups from db
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      // this will be set as props in HomePage component!
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    // using when you need automaticly pre-generate page on the server (value in sec - period between each pre-generation)
    revalidate: 10,
  };
}

// an alternative to getStaticPage function using when you need to update your page on a fly without any delay or you need to work with incoming request (), default chioce should be getStaticProps

// export async function getServerSideProps(context){
//     const req=context.req;
//     const res = context.res;
// // fetch data from ana API

// return {
//     props:{
//         meetups: DUMMY_MEETUPS
//     }
// }
// }

export default HomePage;
