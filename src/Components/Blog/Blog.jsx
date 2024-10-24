import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({blog, handleAddToBookmark}) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full rounded-xl' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className="flex justify-between">
                <div className='flex mb-5 mt-5'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button 
                        onClick={handleAddToBookmark}
                        className='ml-2 mt-1 text-lg text-red-600'
                    ><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-3xl'>Title: {title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;