import React, {Component} from 'react';
import {NavLink, Card, CardTitle, CardBody, CardText, Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask} from 'mdbreact';

class TtrlHome extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="container-fluid">
                        <h1 className="deep-orange-text">Trinidad Tent Rentals</h1>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row">
                                    <NavLink to="/ttrl/products">
                                        <Card>
                                            <CardTitle className="deep-orange white-text p-lg-3 z-depth-2">Products</CardTitle>
                                            <CardBody>
                                                <Carousel activeItem={1} length={3} showControls={false} showIndicators={false} interval={1500} className="z-depth-1">
                                                    <CarouselInner>
                                                        <CarouselItem itemId="1">
                                                            <View>
                                                                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(92).jpg" alt="Second slide" />
                                                                <Mask overlay="black-strong" />
                                                            </View>
                                                            <CarouselCaption>
                                                                <h3 className="h3-responsive">Strong mask</h3>
                                                                <p>Second text</p>
                                                            </CarouselCaption>
                                                        </CarouselItem>
                                                        <CarouselItem itemId="2">
                                                            <View>
                                                                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg" alt="Second slide" />
                                                                <Mask overlay="black-strong" />
                                                            </View>
                                                            <CarouselCaption>
                                                                <h3 className="h3-responsive">Strong mask</h3>
                                                                <p>Second text</p>
                                                            </CarouselCaption>
                                                        </CarouselItem>
                                                        <CarouselItem itemId="3">
                                                            <View>
                                                                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" alt="Third slide" />
                                                                <Mask overlay="black-slight" />
                                                            </View>
                                                            <CarouselCaption>
                                                                <h3 className="h3-responsive">Slight mask</h3>
                                                                <p>Third text</p>
                                                            </CarouselCaption>
                                                        </CarouselItem>
                                                    </CarouselInner>
                                                </Carousel>
                                            </CardBody>
                                        </Card>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-lg-4 align-self-center">
                                <div className="row">
                                    <NavLink to="#">
                                        <Card>
                                            <CardTitle className="deep-orange-text pt-3">About Us</CardTitle>
                                            <CardBody>
                                                <CardText>
                                                    <span>
                                                        Trinidad Tent Rentals Limited was established in 1996 by Mr. Clint Arjoon, the Managing Director. At the inception the core business was the rental of toilets, tents and other party items. Soon thereafter the company became a household name and in the year 2000 Mr. Clint Arjoon was awarded the Republic Bank Best Business Service Award. Within a short period of time the company was able to expand obtaining over 200 different items for rental ranging from stages to cutlery. Thereafter by the year 2003 the tent rental market had become very competitive and which prompted the diversification of the operations of the company and investments were made in light construction equipment. At present the company has a stock of over 400 toilets with 5 trucks servicing/pumping units.
                                                    </span>
                                                    <br/>
                                                    <br/>
                                                    <span className="font-weight-bold">Trinidad Tent Rentals Ltd - "Pleasing People One Toilet at a Time"</span>
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TtrlHome;