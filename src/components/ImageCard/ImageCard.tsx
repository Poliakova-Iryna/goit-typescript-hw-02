import s from './ImageCard.module.css';

interface ImageCardProps {
    smallImage: string;
    altDescription: string;
    description: string;
    largeImage: string;
    onImageClick: (largeImage: string, description: string) => void;
}


const ImageCard: React.FC<ImageCardProps> = ({smallImage, altDescription, description, largeImage, onImageClick}) => {
    return (
        <div>
            <img className={s.image} src={smallImage} 
            alt={altDescription}
            onClick={() => onImageClick(largeImage, description)}
            style={{cursor: 'pointer'}} />
        </div>
    )
};

export default ImageCard;