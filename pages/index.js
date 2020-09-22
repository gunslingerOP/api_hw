import { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { Card } from "antd";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const { Meta } = Card;
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((resp) =>resp.json()).then((rez)=>setData(rez))}, [])
      console.log(data)
    return (
    <div className="container">
      <Row gutter={20} >
      {data.map( (item, index)=> (
      <Col key={index} xs={24} sm={12} md={8} >
        <a key={index} target="#" href={item.download_url}>
        <Card
        key={index}
        hoverable
        cover={
        <LazyLoadImage
          alt="example"
          src={item.download_url} />}
          >
            <Meta title={item.author} description={item.url} />
          </Card>
          </a>
      </Col>
      ))}
      </Row>
    </div>
  );
};

export default Home;
