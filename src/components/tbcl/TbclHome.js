import React, {Component} from 'react';
import {NavLink, Card, CardTitle, CardBody, CardText, Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask} from 'mdbreact';

class TbclHome extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="container-fluid">
                        <h1 className="deep-orange-text">Trinidad Blocks Company</h1>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row">
                                    <NavLink to="/tbcl/products">
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
                                                        Established over 10 years at South Oropouche, Trinidad Blocks Company Ltd are manufacturers and suppliers of landscaping and concrete products for residential, commercial and industrial use. Our products are beautifully detailed and artfully crafted to compliment any house type and landscape design. Some of these products include Concrete Pavers, Retaining Wall Blocks, Veneer Wall Stones, Stepping Stones, Balusters, Concrete Table & Bench, Parking Blocks, to name but a few. We also provide nationwide delivery of our products saving you time costs in respect of labour and access. Take a look at our inspiration gallery for some helpful ideas to get you started. If you’d prefer, simply head to our office and talk over your plans with a friendly member of our team today.
                                                    </span>
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </NavLink>
                                </div>
                                <div className="row">
                                    <NavLink to="#">
                                        <Card>
                                            <CardTitle className="deep-orange-text pt-3">Our Goals and Products</CardTitle>
                                            <CardBody>
                                                <CardText>
                                                    <span>
                                                        Our goal is to provide customers with a wide variety of landscaping products that comes in different sizes, shapes and colours along with quick and easy ways to make selections and install. These products are fully pigmented throughout and are manufactured locally with 100% concrete. They range from 1" - 2" thickness and some are optional to use on both walls and floors! the versatility of our landscaping products and the assortment of colours will enhance the exterior and interior of your home, business facility or public area.
                                                    </span>
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

export default TbclHome;