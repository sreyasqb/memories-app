import image from '../skydive.jpg';
const Card = (props)=>{
    return (
        <div className = 'bg-white w-[20vw] h-[40vh] rounded-lg mt-[2vh]'>
            <img src = {image} className = 'w-full h-[20vh] rounded-lg' />
            <p className = 'text-black font-medium text-xl text-center'>
                {props.title}
            </p>
            <p className = 'text-black px-[1vw] text-center text-sm mt-[3vh]'>
                {props.description}
            </p>
        </div>
    );
}

export default Card;