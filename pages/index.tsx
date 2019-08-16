import Link from "next/link";
import axios from "axios";
import {Component, useState} from "react";
import StarRatings from "react-star-ratings";
import Layout from "../layouts/Header.layout";

interface Props {
  shows: Array<any>;
}

interface State {
  rate: number;
  username: string;
}

const PostLink = (props: any) => (
  <li key={props.id}>
    <Link href="/post/[id]" as={`/post/${props.id}`}>
      <a>
        {props.name}
        <img src={props.thumbnail} />
      </a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

class Index extends Component<Props, State> {
  static async getInitialProps() {
    const res = await axios.get<any>(
      "https://api.tvmaze.com/search/shows?q=epace"
    );

    return {
      shows: res.data.map((entry: any) => entry.show)
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      rate: 2,
      username: "asdads"
    };
  }

  private changeRating = newRating =>
    this.setState({
      rate: newRating
    });

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <Layout>
        <h1>My Blog</h1>
        <StarRatings
          rating={this.state.rate}
          starRatedColor="blue"
          changeRating={this.changeRating}
          numberOfStars={5}
          name="rating"
        />
        <ul>
          {this.props.shows.map((show: any) => (
            <PostLink
              name={show.name}
              id={show.id}
              key={show.id}
              thumbnail={show.image.medium}
            />
          ))}
        </ul>
        <style jsx>{`
          h1,
          a {
            font-family: "Arial";
          }

          ul {
            padding: 0;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Index;
