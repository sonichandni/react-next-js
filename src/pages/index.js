import React, { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <div>
          <img src={this.props.imageUrl} alt={this.props.title} />
        </div>
      </div>
    );
  }
}

export async function getStaticProps() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/photos/1';

  const res = await fetch(apiUrl);
  const data = await res.json();
  
  return {
    props: {
      title: data.title,
      imageUrl: data.url,
    },
  };
}
