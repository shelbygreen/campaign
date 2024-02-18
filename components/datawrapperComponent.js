export default function DataWrapper(props) {
    return <iframe src={props.link} style={{border:'none', width:'100%', height:'80vh', overflowY:'auto'}}></iframe>
}