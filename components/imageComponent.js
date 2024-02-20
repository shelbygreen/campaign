import Image from 'next/image'
import path from 'path'

export default function EmbedImage(props) {
    const imagePath = path.join(process.cwd(), "/images", props.name)
    return (
        <Image
        src={imagePath}
        width={props.width}
        height={props.height}
        />
    )
}