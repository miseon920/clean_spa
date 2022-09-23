import React from "react";

const Article = ({ content, num }) => {
  return (
    <article>
      <div className="tit">
        {content[num].tit} / {content[0].tit}
      </div>
      <figure>
        <div className="case">
          <h2>{content[num].tit}</h2>
          <p>{content[num].con}</p>
        </div>
        <div className="img">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/slogan.png`}
            alt=""
          />
        </div>
      </figure>

      <div className="sub__tit">{content[num].tit}</div>
      <p className="sub__des">{content[num].des}</p>
    </article>
  );
};

export default Article;
