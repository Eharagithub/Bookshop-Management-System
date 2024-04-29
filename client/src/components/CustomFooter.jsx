import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";


const CustomFooter = () => {
    return (
        <Footer container>
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <Footer.Brand

                        src="https://assets.localretailconnect.com/rw-assets/northlandbookstore.com/17703/logo.png"
                        alt="Flowbite Logo"
                        style={{ display: 'inline-block ', width: '150px', height: 'auto' }}

                    />

                    <Footer.LinkGroup>
                        <Footer.Link href="#">Home</Footer.Link>
                        <Footer.Link href="#">About</Footer.Link>
                        <Footer.Link href="#">Shop</Footer.Link>
                        <Footer.Link href="#">Sell Your Book</Footer.Link>
                        <Footer.Link href="#">Blog</Footer.Link>
                    </Footer.LinkGroup>

                    <Footer.LinkGroup>
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon href="#" icon={BsFacebook} />
                            <Footer.Icon href="#" icon={BsInstagram} />
                            <Footer.Icon href="#" icon={BsTwitter} />
                            <Footer.Icon href="#" icon={BsGithub} />
                            <Footer.Icon href="#" icon={BsDribbble} />
                        </div>
                    </Footer.LinkGroup>


                </div>
                <Footer.Divider />
                <Footer.Copyright href="#" by="BookStore™" year={2024} />
            </div>
        </Footer>
    )
}

export default CustomFooter