import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
import logo from '../../assets/logo.svg';
 
const Footer = () => {
    return (
        <Box>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>
                            <img src={logo} alt="Kindly Logo" style={{width: "150px"}}/> 
                        </Heading>
                    </Column>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">
                            Welcome
                        </FooterLink>
                        <FooterLink href="#">
                            Vision
                        </FooterLink>
                        <FooterLink href="#">
                            Aim
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="/services">
                            Find care
                        </FooterLink>
                        <FooterLink href="#">
                            Jobs
                        </FooterLink>
                        <FooterLink href="#">
                            Technical information
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Email
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;