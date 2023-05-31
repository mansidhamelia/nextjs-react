import MeetupList from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb'


function Home(props) {

    return (
        <MeetupList meetups={props.meetups} />
    )
}


// export async function getServerSideProps() {
// const req = context.req
// const res = context.res
//     // fetch data from api
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps() {
    // fetch data from Api
    // fetch('/api/meetups')
    const client = await MongoClient.connect('') //add connection link and write username/password of the user without bracket
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.find().toArray()

    client.close()
    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    }


}

export default Home