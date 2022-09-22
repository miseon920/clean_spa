import { Link, Route, Routes } from "react-router-dom";

const MainContent = ({ word }) => {
  //const {word} = props;
  return (
    <section className="MainContent">
      <div className="inner">
        {word.map((con, idx) => (
          <Link key={con.id} to={con.link}>
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/main_s01${con.id}.jpg`}
                alt=""
              />
            </figure>
            <strong>{con.tit}</strong>
            <p>{con.des}</p>
          </Link>
        ))}
      </div>
    </section>
    // <div>

    //     {
    //         !user
    //             ? "로딩중입니다. ... "
    //             : <ul>
    //                 {
    //                     user.map(u => {
    //                         return (
    //                             <li key={u.id}>
    //                                 <Link to={'/detail/' + u.id}>
    //                                     <img src={u.avatar_url} alt="" />
    //                                     {u.login}
    //                                 </Link>

    //                             </li>
    //                         )
    //                     }).slice(0, 10)
    //                 }
    //             </ul>
    //     }

    // </div>
  );
};

export default MainContent;
