import { Image } from '../App/App';
import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

interface ImageGalleryProps {
    images: Image[];
    onImageClick: (largeImage: string, description: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({images, onImageClick}) => {
    return (
        <div>
            <ul className={s.list}>
                {images.map(({id, alt_description, urls, description}) => (
                    <li className={s.item} key={id}>
                        <ImageCard smallImage={urls.small} 
                        altDescription={alt_description}
                        largeImage={urls.regular}
                        description={description}
                        onImageClick={onImageClick} />
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default ImageGallery;