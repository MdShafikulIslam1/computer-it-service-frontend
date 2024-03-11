'use client'
import TextWithUnderLine from "@/components/Divider/Divider";
import FAQPage from "@/components/HomePage/FAQ/FAQ";
import Overlay from "@/components/Overlay/Overlay";

const FAQPages = () => {
    return (
       <>
       <Overlay heading="FAQ" currentPageTitle="FAQs"/>
       <div>
         <FAQPage/>
        </div>
       </>
    );
};

export default FAQPages;



