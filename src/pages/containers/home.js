import React, {Component} from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories.js';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal.js';
import Modal from "../../widgets/components/modal.js";
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player.js';


class Home extends Component{
    state = {
        modalVisible: false,
    };

    handleOpenModal = (media) => {
        this.setState({
            modalVisible: true,
            media: media
        })

    };
    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false,
        })
    };
    render(){
        return(
            <HandleError>
                <HomeLayout>
                    <Related />
                    <Categories
                        categories={this.props.data.categories}
                        handleOpenModal={this.handleOpenModal}/>
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal
                                handleClick={this.handleCloseModal}
                            >
                                <VideoPlayer
                                    autoplay
                                    src={this.state.media.src}
                                    title={this.state.media.title}
                                />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

export default Home;