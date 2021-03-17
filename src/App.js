import React, { useState } from 'react';
import './App.scss';
import Word from './components/Word';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Folders from './components/Folders';
import SingleFolder from './components/SingleFolder';
import Feed from './components/Feed';
import Browser from './components/Browser';
import Authencication from './components/Authencication';
import {
  AiOutlineFolder,
  AiOutlineHome,
  AiOutlinePicture,
  AiOutlineFileText,
} from 'react-icons/ai';
import { MdRssFeed } from 'react-icons/md';
import { GoBrowser } from 'react-icons/go';
import { v4 as uuidv4 } from 'uuid';
import Gallery from './components/Gallery';

function App() {
  const [logged, setLogged] = useState(false);
  const [folders, setFolders] = useState([
    {
      id: uuidv4(),
      name: 'folder1',
      documents: [
        { name: 'word.txt', value: 'Blablablae' },
        { name: 'example.txt', value: 'Blablablae1111' },
      ],
    },
    {
      id: uuidv4(),
      name: 'folder2',
      documents: [
        { name: 'word1.txt', value: 'Blablablae' },
        { name: 'example1.txt', value: 'Blablablae1111' },
      ],
    },
  ]);

  const makeNewFolder = (name) => {
    setFolders((prevState) => [
      ...prevState,
      {
        id: uuidv4(),
        name: name,
        documents: [],
      },
    ]);
  };

  const seeWordData = (e) => {
    const folder = e[2];
    const name = e[0];
    const value = e[1];

    const findFolder = folders.filter((item) => item.name === folder);
    const otherFolders = folders.filter((item) => item.name !== folder);

    findFolder[0].documents.push({ name: name, value: value });
    const el1 = findFolder[0];
    const el2 = otherFolders.map((item) => item);

    const test = el2.concat(el1);
    setFolders(test);
  };

  const getLastItem = (thePath) =>
    thePath.substring(thePath.lastIndexOf('/') + 1);

  return (
    <BrowserRouter>
      <div id="content">
        <nav>
          <Link className="nav-items" to="/home">
            <AiOutlineHome /> Home
          </Link>
          <Link className="nav-items" to="/folders/">
            <AiOutlineFolder /> Folders
          </Link>
          <Link className="nav-items" to="/gallery">
            <AiOutlinePicture />
            Gallery
          </Link>
          <Link className="nav-items" to="/feed">
            <MdRssFeed />
            Feed
          </Link>
          <Link to="/word/" className="nav-items">
            <AiOutlineFileText />
            Letter
          </Link>
          <Link to="/browser/" className="nav-items">
            <GoBrowser />
            Browser
          </Link>
        </nav>
        <Switch>
          <Route path="/" exact={true} component={Authencication}>
            <Authencication />
          </Route>
          <Route path="/word/" component={Word}>
            <Word folders={folders} getDataFromWord={seeWordData} />
          </Route>
          <Route path="/folders/" exact={true} component={Folders}>
            <Folders folders={folders} getNewFolder={makeNewFolder} />
          </Route>
          <Route path="/folders/:id" component={SingleFolder}>
            <SingleFolder
              folders={folders}
              name={getLastItem(window.location.href)}
            />
          </Route>
          <Route path="/feed/" component={Feed}>
            <Feed />
          </Route>
          <Route path="/gallery/" component={Gallery}>
            <Gallery />
          </Route>
          <Route path="/browser/" component={Browser}>
            <Browser />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
