import styled from "styled-components";

const Body = styled.div`
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
   transition: 0.3ms;
   width: 20%;
   height: 500px;
   border-radius: 10px;
   margin: 20px;
   :hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
   }
`;

const Img = styled.img`
   border-radius: 10px 10px 0 0;
   width: 100%;
   height: 300px;
`;

const Container = styled.div`
   padding: 10px;
`;

const Card = ({ name, author, description, imgSrc }) => {
   return (
      <Body>
         <Img src={imgSrc} alt="img" />
         <Container>
            <h3 style={{ textAlign: "center" }}>{name}</h3>
            <h4>Author : {author}</h4>
            <p>
               {description}{" "}
               <a href="https://en.wikipedia.org/wiki/Harry_Potter">
                  {" "}
                  Read More
               </a>
            </p>
         </Container>
      </Body>
   );
};

export default Card;
