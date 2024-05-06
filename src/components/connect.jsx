import React from 'react';

const faqData = [
    {
        question: 'Phone No.:',
        answer: '+91 8003291237'
    },
    {
        question: 'Alternative Phone No.:',
        answer: '+91 9660766784'
    }
    // Add more FAQ items as needed

];

export const Connect = () => {
    return (
        <div>
            <div id="contact">
                <div className="container">
                    <div className='section-title'>
                        <h2>Get In Touch</h2>
                    </div>
                    <h5>The below contact information is of Mr. Pradeep Sir. (Works in ALLEN Career Institute)</h5>
                    {faqData.map((faq, index) => (
                        <div key={index}>
                            <br />
                            <h3>{faq.question}</h3>
                            <p>{faq.answer}</p><br />
                        </div>
                    ))}
                </div>
            </div>
            <div id="footer">
                <div className="container text-center">
                    <p>
                        &copy; 2024 Kota Hostels
                        {/* Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              Shivang Vijay
            </a> */}
                    </p>
                </div>
            </div>
        </div>
    );
};
