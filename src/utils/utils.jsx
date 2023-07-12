/* eslint-disable no-unused-vars */
import TermsConditions from "../components/Terms and Conditions/TermsConditions";
import { AboutUsPage } from "../pages/AboutUsPage";
import { BookNowPage } from "../pages/BookNowPage";
import { CarsPage } from "../pages/CarsPage";
import { CategoryPage } from "../pages/CategoryPage";
import { CompanyPage } from "../pages/CompanyPage";
import { FaqPage } from "../pages/FaqPage";
import { HomePage } from "../pages/HomePage";
import { MoreCarsPage } from "../pages/MoreCarsPage";
import { PrivacyPolicyPage } from "../pages/PrivacyPolicyPage";
import { ProductPage } from "../pages/ProductPage";
import { SportCarsPage } from "../pages/SportCarsPage";
import { SuperCarsPage } from "../pages/SuperCarsPage";
import { SupportPage } from "../pages/SupportPage";
import { TermsOfServicesPage } from "../pages/TermsOfServices";
import { TestimonialPage } from "../pages/TestimonialPage";

export const navbar = [
    {
        path: '/home',
        element: <HomePage/>,
        name: "Home",
        id: 1
    },
    {
        path: '/cars',
        element: <CarsPage/>,
        name: "Cars",
        id: 2
    },
    {
        path: '/book',
        element: <BookNowPage/>,
        name: "Book now",
        id: 3
    },
    {
        path: '/terms',
        element: <TermsConditions/>,
        name: "Terms and Conditions",
        id: 4
    },
]

export const footer = [
    {
        path: '/company',
        element: <CompanyPage/>,
        name: "Company",
        id: 1
    },
    {
        path: '/aboutus',
        element: <AboutUsPage/>,
        name: "About Us",
        id: 2
    },
    {
        path: '/product',
        element: <ProductPage/>,
        name: "Product",
        id: 3
    },
    {
        path: '/testimonial',
        element: <TestimonialPage/>,
        name: "Testimonial",
        id: 4
    },
]

export const footertwo = [
    {
        path: '/support',
        element: <SupportPage/>,
        name: "Support",
        id: 1
    },
    {
        path: '/faq',
        element: <FaqPage/>,
        name: "FAQ",
        id: 2
    },
    {
        path: '/privacypolicy',
        element: <PrivacyPolicyPage/>,
        name: "Privacy Policy",
        id: 3
    },
    {
        path: '/termsofservices',
        element: <TermsOfServicesPage/>,
        name: "Terms of Services",
        id: 4
    },
]

export const footerthree = [
    {
        path: '/category',
        element: <CategoryPage/>,
        name: "Category",
        id: 1
    },
    {
        path: '/supercars',
        element: <SuperCarsPage/>,
        name: "Super Cars",
        id: 2
    },
    {
        path: '/sportcars',
        element: <SportCarsPage/>,
        name: "Sport Cars",
        id: 3
    },
    {
        path: '/morecars',
        element: <MoreCarsPage/>,
        name: "More Cars",
        id: 4
    },
]