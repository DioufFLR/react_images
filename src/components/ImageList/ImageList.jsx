import s from './imageList.css';
import ImageListenItem from "../ImageListItem/ImageListenItem";

const ImageList = ({imgList}) =>
{
    return (
        <div>
            {imgList.map(img => {
                return (
                    <div key={img.id}>
                        <ImageListenItem img={img}/>
                    </div>
                )
            })}
        </div>
    );
};

export default ImageList;