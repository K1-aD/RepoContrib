import {useState} from 'react';

const Home = () => {
//let name='mario'
const[name, setName]=useState('mario');
const[age, setAge]=useState(25);

const [blogs, setBlogs] = useState([
    { title: 'Diet Plan', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Workout Plan', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Progress', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

    return (
        <div className="Home">
             <div className="home">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
    </div>
        </div> 
    );
}
 
export default Home;

