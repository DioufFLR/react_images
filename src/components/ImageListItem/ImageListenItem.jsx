import './imageListItem.css'

const ImageListenItem = ({img}) =>
{
    return (
        <div className='card'>
            <a href={img.url}>
                <img src={img.download_url} alt={img.author} className='img'/>
            </a>
            <div className="card_banner">
                <img src={img.download_url} className='card_thumb'/>
                <div className='card_text'>
                    <h3 className='card_title'>{img.author}</h3>
                    <div className='card_status'>
                        Original size: {img.height}x{img.width}
                    </div>
                    <button>Download</button>
                </div>
            </div>
        </div>
    );
};

export default ImageListenItem;