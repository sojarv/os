import axios from 'axios';
import { useEffect, useState } from 'react';

const Feed = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/comments'
      );
      setData(result.data);
    };
    getData();
  }, []);

  const showData = data.map((item) => (
    <div className="feed-item" key={item.id}>
      <p className="title">{item.name}</p>
      <p className="body">{item.body}</p>
    </div>
  ));

  return <div id="feed">{showData}</div>;
};

export default Feed;
