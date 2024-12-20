import s from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
    onLoadMore: () => void;
}

const LoadMoreBtn: React.FC <LoadMoreBtnProps> = ({onLoadMore}) => {
  return (
    <div>
        <button className={s.LoadMoreBtn} onClick={onLoadMore}>Load more</button>
    </div>
  )
}

export default LoadMoreBtn;