import decore from '../../shared/assets/decore.png';
import gift from '../../shared/assets/gift.png';
import idea from '../../shared/assets/idea.png';

const Blog = () => {
 
  return (
    <div className='blog_container'>
      <div className='information_block'>
        <h2>Latest blog posts</h2>
        <p>Evidence also reveals that plants are telling us how to achieve health and wholeness for humanity and the earth herself.</p>
        <a>View all</a>
      </div>
      <div className='blog_item_container'>
        <div className='blog_item'>
          <div className="image">
            <img src={decore} alt='plant' />
          </div>
          <h5>Decorative touches for your design</h5>
          <p>Sem magna ut pharetra vitae duis eu senectus sem risus. Morbi non, semper vestibulum euismod accumsan...</p>
        </div>
        <div className='blog_item'>
          <div className="image">
            <img src={gift} alt='plant' />
          </div>
          <h5>Giftable scents which warms the heart</h5>
          <p>Sem magna ut pharetra vitae duis eu senectus sem risus. Morbi non, semper vestibulum euismod accumsan...</p>
        </div>
        <div className='blog_item'>
          <div className="image">
            <img src={idea} alt='plant' />
          </div>
          <h5>Creative ideas to make this holiday special</h5>
          <p>Sem magna ut pharetra vitae duis eu senectus sem risus. Morbi non, semper vestibulum euismod accumsan...</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
