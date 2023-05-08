import classes from './MeetupDetail.module.css'

function MeetupDetail (props){
    return (
        <section className={classes.detail}>
            <img src="https://media.istockphoto.com/id/1283481772/pl/zdj%C4%99cie/panorama-gdyni-wyj%C4%99ta-z-powietrza-jesieni%C4%85.jpg?s=612x612&w=0&k=20&c=ODLBdF1GxRr2nCS-b4P8mJyvihmJsT757wfOEZzKWYY=" alt="A first Meetup"/>
            <h1>A First Meetup</h1>
            <address>Some Street 5, Some City</address>
            <p>The meetup description</p>
        </section>
    )
}

export default MeetupDetail;