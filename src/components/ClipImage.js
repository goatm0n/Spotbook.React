import './ClipImage.css'

export default function ClipImage(props) {
    if (!props.src) {
        return (
            <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="placeholder" className="clip-image"/>
        )
    } 

    return (
        <img src={props.src} alt="placeholder" className="clip-image"/>
    )
    
}