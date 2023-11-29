import s from './imageListItem.css';

const ImageListenItem = ({img}) =>
{
    return (
        <img src={img.download_url} alt={img.author} className='img'/>
    );
};

export default ImageListenItem;