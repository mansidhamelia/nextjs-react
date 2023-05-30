import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1477959858617-67f85cf4f1df%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%253D%253D%26w%3D1000%26q%3D80&tbnid=zDvPn-Qf6AIOuM&vet=12ahUKEwjA1IK26J3_AhUyAjQIHTu_AlMQMygAegUIARDgAQ..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcity&docid=IgPdAdX_6UbCuM&w=1000&h=615&q=city%20image&ved=2ahUKEwjA1IK26J3_AhUyAjQIHTu_AlMQMygAegUIARDgAQ',
        address: '115 st, city',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F05%2FView_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg%2F800px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg&tbnid=qicuxsW4JTFlaM&vet=12ahUKEwjA1IK26J3_AhUyAjQIHTu_AlMQMygBegUIARDiAQ..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGlobal_city&docid=DhEeZdmvrQ5l1M&w=800&h=601&q=city%20image&ved=2ahUKEwjA1IK26J3_AhUyAjQIHTu_AlMQMygBegUIARDiAQ',
        address: '116 st, 258 147 city',
        description: 'This is a second meetup!'

    }
]

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
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 1
    }
}

export default Home