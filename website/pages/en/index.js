/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class ClickableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: 'I was not clicked'}
  }

  render() {
    return (
      <a onClick={() => {
        console.log("I was clicked");
        this.setState({content: 'I was clicked'});
      }}>
        {this.state.content}
      </a>
    );
  }
}


class Index extends React.Component {
  render() {
    return <div><ClickableComponent /></div>;
  }
}

module.exports = Index;
