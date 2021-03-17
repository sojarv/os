import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Word = (props) => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [selection, setSelect] = useState('');

  // Last thing in your url
  const getLastItem = (thePath) =>
    thePath.substring(thePath.lastIndexOf('/') + 1);

  useEffect(() => {
    // If you access it through an exsisting file
    if (window.location.pathname !== '/word/') {
      var folderFromPath = window.location.pathname.split('/')[2]; // folder

      const wordElement = getLastItem(window.location.href); // name of file

      const rightFolder = props.folders.filter(
        (item) => item.name === folderFromPath
      );

      const rightElement = rightFolder[0].documents.filter(
        (item) => item.name === wordElement
      );

      // set values from state
      var element = rightElement[0];
      setName(element.name);
      setValue(element.value);
      setSelect(folderFromPath);
    } else {
      // default values
      setName('');
      setValue('');
      setSelect('');
    }
  }, [props.folders]);

  // options of folders to save file into
  var allFolders = props.folders.map((folder) => (
    <option key={folder.id} value={folder.name}>
      {folder.name}
    </option>
  ));

  const handleChange = (e) => {
    if (e.target.tagName === 'INPUT') {
      setName(e.target.value);
    } else if (e.target.tagName === 'TEXTAREA') {
      setValue(e.target.value);
    } else {
      setSelect(e.target.value);
    }
  };

  const saveFile = (e) => {
    props.getDataFromWord([name, value, selection]);
  };

  return (
    <div id="word">
      <div id="word-inptus">
        <input onChange={handleChange} value={name}></input>
        <select onChange={handleChange} name="folder">
          {allFolders}
        </select>
        <Link to="/">
          <button onClick={saveFile}>Save</button>
        </Link>
      </div>
      <textarea onChange={handleChange} value={value} />
    </div>
  );
};

export default Word;
