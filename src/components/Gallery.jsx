import axios from 'axios';
import { useEffect, useState } from 'react';

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/photos');
      setData(result.data);
    };
    getData();
  }, []);

  // gets only 100 elements
  const slicedData = data.slice(0, 100);

  const showData = slicedData.map((item) => (
    <img key={item.id} alt={item.title} src={item.thumbnailUrl} />
  ));

  return <div id="gallery">{showData}</div>;
};

export default Gallery;
