import { Footer, FooterIcon } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function FooterCom() {
    return <Footer container className="border border-t-8 border-teal-500">
        <div className="w-full mx-auto max-w-7xl">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                    <Link to='/' className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                        <span className='px-2 py-1 bg-gradient-to-r from-indigo-400 via-purple-600 to-pink-500 rounded-lg text-white' > Rupesh's</span>Blog
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                        <Footer.Title title="About" />
                        <Footer.LinkGroup col>
                            <Footer.Link>
                                My Projects
                            </Footer.Link>
                            <Footer.Link>
                                My Blog's
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="Follow Me" />
                        <Footer.LinkGroup col>
                            <Footer.Link>
                                Github
                            </Footer.Link>
                            <Footer.Link>
                                Discord
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="Legal" />
                        <Footer.LinkGroup col>
                            <Footer.Link>
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link>
                                Terms &amp; Conditions
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider />
            <div className=" flex  w-full flex-col sm:flex-row  items-center sm:justify-between">
                <Footer.Copyright href="#" by="2024 Rupesh's Blog" />
                <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center " >
                    <FooterIcon href="#" icon={FaFacebook} />
                    <FooterIcon href="#" icon={FaTwitter} />
                    <FooterIcon href="#" icon={FaLinkedin} />
                    <FooterIcon href="#" icon={FaGithub} />
                    <FooterIcon href="#" icon={FaInstagram} />
                </div>
            </div>
        </div>
    </Footer>
}