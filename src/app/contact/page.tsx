import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Mayuravel Industries | Get in Touch",
  description: "Contact Mayuravel Industries in Pathanamthitta, Kerala. Visit us at Maroor Mallassery(po), Kerala - 689646",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Mayuravel Industries"
        description="Get in touch with Mayuravel Industries located at Maroor Mallassery(po), Pathanamthitta, Kerala - 689646. We're here to assist you with your inquiries and needs."
      />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Location</h2>
          <div className="h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.041745373874!2d76.7875753153259!3d9.81487689298951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07c8c1f7f9b3a5%3A0x5b2b4c1b1b1b1b1b!2sMaroor%2C%20Kerala%20689646!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="mt-4">
            <p className="text-lg">
              <strong>Address:</strong> Mayuravel Industries, Maroor Mallassery(po), Pathanamthitta, Kerala - 689646
            </p>
          </div>
        </div>

        <Contact />
      </div>
    </>
  );
};

export default ContactPage;