import { Link } from 'react-router-dom';
import { AiOutlineFileWord } from 'react-icons/ai';

const SingleFolder = (props) => {
  // last thing in your url
  const getLastItem = (thePath) =>
    thePath.substring(thePath.lastIndexOf('/') + 1);

  // see in which folder you are and then filter in through
  const name = getLastItem(window.location.href);
  const items = props.folders.filter((item) => item.name === name);
  const datoteke = items[0].documents.map((item) => (
    <li key={item.name}>
      <AiOutlineFileWord />
      <Link
        to={{
          pathname: '/word/' + name + '/' + item.name,
        }}
      >
        {item.name}
      </Link>
    </li>
  ));

  return (
    <div className="folders">
      <ul>{datoteke}</ul>
    </div>
  );
};

export default SingleFolder;
