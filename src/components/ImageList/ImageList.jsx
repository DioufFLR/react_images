import './imageList.css'
import ImageListenItem from "../ImageListItem/ImageListenItem";

const ImageList = ({imgList}) =>
{
    return (
        <div>
            {imgList.map(img => {
                return (
                    <div key={img.id} className='card_item'>
                        <ImageListenItem img={img}/>
                    </div>
                )
            })}
        </div>
    );
};

export default ImageList;