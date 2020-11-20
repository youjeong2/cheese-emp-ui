// import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingTitle } from "../../../components/cmm/Headings.jsx";
import { ReactComponent as SvgDecoratorBlob1 } from "../../../components/images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../../components/images/svg-decorator-blob-3.svg";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded`
]);
const Category = tw.div`mt-4 text-secondary-100 font-bold text-sm`;
const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg`;
const Contents = tw.a`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default function Blogs() {
  const blogPosts = [
    {
      imageSrc:
        "https://img-cf.kurly.com/shop/data/goods/157708476458l0.jpg",
      category: "Event Tips",
      title: "[포인트레이스]오리지널 블루",
      url: "https://timerse.com"
    },
    {
      imageSrc:
        "https://img-cf.kurly.com/shop/data/goods/1563949642720l0.jpg",
      category: "Reviews",
      title: "[라퀘유]푸름 당베르",
      url: "https://reddit.com"
    },
    {
      imageSrc:
        "https://img-cf.kurly.com/shop/data/goods/155591204450l0.jpg",
      category: "Discover",
      title: "[프레지덩]쁘띠 까망베르",
      url: "https://timerse.com"
    }
  ];
  const [cheeses, setCheeses] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCheeses = async () => {
      try {
        
        setError(null);
        setCheeses(null);
        
        setLoading(true);
        const response = await axios.get(
          'http://localhost:8080/api/cheeses'
        );
        // alert(response.data[0].img)
        setCheeses(response.data); 
        console.log(response.data)

      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchCheeses();
  }, []);

  if (loading) return <div>..</div>;
  if (error) return <div>error</div>;
  if (!cheeses) return null;
  
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>NEW IN</HeadingTitle>
          <HeadingDescription>Some amazing blog posts that are written by even more amazing people.</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {cheeses.map(c => (
            <Column key={c.ranking}>
              <Card>
                {/* <Image img={cheese.img} />
                <Category>{cheese.category}</Category> */}
                <Image imageSrc={c.img}/>
                <Title>{c.name}</Title>
                <Contents>{c.brand}</Contents>
                <Category>{c.content}</Category>
                {/* <Link href={cheese.content}>Read Post</Link> */}
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};