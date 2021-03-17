import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineFolder, AiFillFolderAdd } from 'react-icons/ai';

const Folders = (props) => {
  const [folderName, setName] = useState('');
  const folder = useRef(null);

  // Makes a new folder. Sends it to App.js
  const makeNewFolder = (e) => {
    if (folder.current.value === '') {
      alert('Name must not be empty');
    } else {
      props.getNewFolder(folder.current.value);
    }
  };

  // Handle change
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const show_folders = props.folders.map((folder) => (
    <li key={folder.id}>
      <AiOutlineFolder />
      <Link to={folder.name} key={folder.id}>
        {folder.name}
      </Link>
    </li>
  ));

  return (
    <div className="folders">
      <div id="create-folder">
        <input
          ref={folder}
          id="newFolder"
          value={folderName}
          required
          onChange={handleChange}
        ></input>
        <AiFillFolderAdd onClick={makeNewFolder} />
      </div>
      <ul>{show_folders}</ul>
    </div>
  );
};

export default Folders;
