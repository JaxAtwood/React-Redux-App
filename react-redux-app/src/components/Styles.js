import styled from "styled-components";

// const Title = styled.h1 `
//     border: magenta;
// `

const Image = styled.img `
    max-width: 80%;
    margin: 0 auto;
`
const Card = styled.div `
    border: darkcyan 20px solid;
    // background: hotpink;
    background: darkturquoise;
    width: 70%;
    height: 70%;
    margin: 0 auto;
    // padding: 5%;
`

const Grid = styled.div `
    border: yellow 3px solid;
    padding-bottom: 20px;
    margin: 50px;
    height: 75%;
`

export { Image, Card, Grid };