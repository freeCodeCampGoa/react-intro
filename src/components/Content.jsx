import React, { Component } from "react";
import './Content.css';

class Content extends Component {
  render() {
    const { video } = this.props;

    const imageUrl = video.snippet.thumbnails.medium.url,
    heading = video.snippet.localized
      ? video.snippet.localized.title
      : video.snippet.title,
    date = video.snippet.publishedAt,
    channel = video.snippet.channelId,
    description = video.snippet.localized
      ? video.snippet.localized.description
      : video.snippet.description,
      videoUrl=`https://www.youtube.com/watch?v=${video.id.videoId}`;


    return (
      <div className="video-content">
        <a href={videoUrl} target="_blank">
          {" "}
          <div className="video-img">
            <img src={imageUrl} alt="" />
          </div>
        </a>

        <div className="video-description">
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Content;
