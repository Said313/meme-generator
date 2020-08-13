import React, {Component} from 'react'


class MemeGenerator extends Component{
    constructor(props){
        super(props)
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "https://i.imgflip.com/1bij.jpg",
            allMemeImages: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    allMemeImages: response.data.memes
                })
            })
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        const randIndex = Math.floor(Math.random()*this.state.allMemeImages.length)
        this.setState({
            randomImage: this.state.allMemeImages[randIndex].url
        })
    }


    render(){
        return(
            <div className="memeGenerator">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="topText" 
                        placeholder="Top Text"
                        value={this.state.topText} 
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text" 
                        name="bottomText" 
                        placeholder="Bottom Text"
                        value={this.state.bottomText} 
                        onChange={this.handleChange}
                    />

                    <button>Generate</button>
                </form>

                <div className="meme">
                    <img src={this.state.randomImage} alt="meme"/>
                    <h2 id="topText">{this.state.topText}</h2>
                    <h2 id="bottomText">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator
