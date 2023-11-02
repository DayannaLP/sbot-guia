import * as React from 'react';

const CommunityAuthor = ({ name, imageUrl}) => {
  return (
    <>
      <h2 className="communitySection">About the community author</h2>
      <div className="authorSection">
        <div className="authorImg">
          <img src={imageUrl} alt={name} />
        </div>
      </div>
    </>
  );
};

export default CommunityAuthor;
