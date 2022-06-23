import React from "react";
import '../CSS/Galerie.css'

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
        if (index === 0) {
            this.setState({previousSlide: lastIndex})
        }
        if (index === lastIndex) {
            this.setState({nextSlide: 0})
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
        if (index === 0) {
            this.setState({previousSlide: lastIndex})
        }
        if (index === lastIndex) {
            this.setState({nextSlide: 0})
        }
    }


    render() {
        return (
            <article className="slide-container">


                    <figure id="slide-central">
                        <img  src={this.props.passion.images[this.state.slide]} alt="dessin"/>
                    </figure>
                    <p>{this.props.passion.images[0]}</p>
                    <p>{this.props.passion.images.length}</p>
                    <p>{this.props.passion.images}</p>
                <div id="buttons-nav">
                <button className="button-nav" type="button" onClick={this.previousSlide} >&#9204;</button>
                <button className="button-nav" type="button" onClick={this.nextSlide} >&#9205;</button>
                </div>

                {/*<figure id="slide-gauche">*/}
                {/*    <img src={this.props.passion.images[this.state.previousSlide]}*/}
                {/*         onClick={this.previousSlide} alt="dessin"/>*/}
                {/*</figure>*/}
                    {/*<figure id="slide-droit">*/}
                    {/*    <img src={this.props.passion.images[this.state.nextSlide]}*/}
                    {/*         onClick={this.nextSlide}*/}
                    {/*         alt="dessin"/>*/}
                    {/*</figure>*/}

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
