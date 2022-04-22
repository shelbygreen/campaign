import Head from 'next/head'
import Layout from '../components/layout'

export default function BikeHunt() {
    return (
        <>
            <Layout>
                <Head>
                    <title>bike scavenger hunt</title>
                </Head>
                <p><a href="https://forms.gle/UrHmHoAjKNvtxY3H7">Sign the digital waiver</a></p>
                <p><b>Start and Finish Line: Bicycle House</b></p>
                <p>Route:</p>
                <iframe src="https://ridewithgps.com/embeds?type=route&id=39159265&title=Bike%20Scavenger%20Hunt" width="100%" height="550" style={{border: '1px solid #ccc'}}></iframe>
                <p>Stops:</p>
                <p>1. Marker on South MLK Blvd</p>
                <p>2. Bus Stop on Robert & Trudie Perkins Way</p>
                <p>3. Speed-Spencer-Stephens Park</p>
                <p>4. Lake Elberta</p>
            </Layout>
        </>
    )
}