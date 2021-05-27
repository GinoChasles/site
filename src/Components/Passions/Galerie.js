import React from "react";

export default class Galerie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slide: 1,
            previousSlide: 0,
            nextSlide: 2
        };
        this.previousSlide = this.previousSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {

    }

    previousSlide() {
        const lastIndex = this.props.passion.images.length - 1;
        const {slide} = this.state;
        const resetIndex = slide === 0;
        const index = resetIndex ? lastIndex : slide - 1;
        this.setState({
            slide: index,
            previousSlide: index - 1,
            nextSlide: index + 1
        });
        if(index==0){
            this.setState({previousSlide:lastIndex})
        }
        if(index==lastIndex){
            this.setState({nextSlide:0})
        }
    }

    nextSlide() {
        const lastIndex = this.props.passion.images.length - 1;
        const {slide} = this.state;
        const resetIndex = slide === lastIndex;
        const index = resetIndex ? 0 : slide + 1;
        this.setState({
            slide: index,
            previousSlide: index - 1,
            nextSlide: index + 1
        });
        if(index==0){
            this.setState({previousSlide:lastIndex})
        }
        if(index==lastIndex){
            this.setState({nextSlide:0})
        }
    }


    render() {
        return (
            <article>
                <figure>
                    <img id={"slide"} src={this.props.passion.images[this.state.previousSlide]}
                         onClick={this.previousSlide} alt="dessin" width="64px"
                         height="64px"/>
                </figure>
                <figure>
                    <img id={"slide"} src={this.props.passion.images[this.state.slide]} alt="dessin" width="64px"
                         height="64px"/>
                </figure>
                <figure>
                    <img id={"slide"} src={this.props.passion.images[this.state.nextSlide]} onClick={this.nextSlide}
                         alt="dessin" width="64px"
                         height="64px"/>
                </figure>
                {/*<button type={"button"} onClick={this.previousSlide}>&#9664;</button>*/}
                {/*<button type={"button"} onClick={this.nextSlide}>+1</button>*/}
            </article>
        )
    }
}


// return(
//     <article>
//         {this.props.passion.images.map((el)=>{
//             return (
//                 <figure>
//                     <img src={el} alt="dessin" width="64px" height="64px"/>
//                 </figure>
//             )})}
//     </article>
// )
