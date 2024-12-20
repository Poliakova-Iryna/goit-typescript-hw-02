import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { fetchImages } from "../../services/api";

export interface Image {
    id: string;
    alt_description: string;
    description: string;
    urls: {
        small: string;
        regular: string;
    };
}

interface SelectedImage {
    largeImage: string;
    description: string;
}


const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [perPage] = useState<number>(12);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      if(!query) {
        return
      }
      try {
        setIsLoading(true);
        setIsError(false);
        const {results, total_pages} = await fetchImages (query, page, perPage);
        setImages(prev => (page === 1 ? results : [...prev, ...results]));
        setTotalPages(total_pages);
      } catch {
        setIsError(true);
        toast.error('Something went wrong!')
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query,page, perPage]);

  const handleChangeQuery = (query: string): void => {
    setImages([]);
    setQuery(query);
    setPage(1);
  };

  const handleLoadMore = (): void => {
    setPage(prev => prev + 1);
  };

  const onImageClick = (largeImage: string, description: string): void => {
    if (!isModalOpen) {
      setSelectedImage({ largeImage, description });
      setIsModalOpen(true);
    }
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  }


  return (
    <div>
      {isLoading && <Loader />}
      <SearchBar onSubmit={handleChangeQuery} />
      <ImageGallery images={images} onImageClick={onImageClick} />
      {isError && <ErrorMessage />}
      {images.length > 0 && page < totalPages && <LoadMoreBtn onLoadMore={handleLoadMore} />}
      {selectedImage && <ImageModal isOpen={isModalOpen} onRequestClose={closeModal} 
      largeImage={selectedImage.largeImage} description={selectedImage.description} /> }
    </div>
  )
};

export default App;