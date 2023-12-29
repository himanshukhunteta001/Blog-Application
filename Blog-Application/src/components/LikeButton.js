import React, { useState } from 'react';
import './LikeButton.css';

export const LikeButton = () => {
  const [likes, setLikes] = useState(10);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <>
    <div className={`like-container ${isClicked && 'liked'}`} onClick={handleClick}>
      <i className="fas fa-heart"></i>
    </div>
    <span>{`  ${likes}`}</span>
    </>
  );
};


