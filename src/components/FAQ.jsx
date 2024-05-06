import React from 'react';

const faqData = [
    {
        question: 'How much does it cost to stay at our hostels?',
        answer: 'The prices for student accommodations vary depending on the facilities, ranging from Rs. 11,000 to Rs. 15,000.'
    },
    {
        question: 'What does the rent include?',
        answer: 'The rent includes a fully-furnished room, housekeeping, all meals, WiFi connection, access to laundry, the community lounge, and other facilities.'
    },
    {
        question: 'Is there option for stay of Student Parent?',
        answer: 'The option for parental stay depends on availability. (Charges applicable)'
    },
    {
        question: 'Is the help desk open 24/7?',
        answer: 'Yes, warden is available 24/7.'
    },
    {
        question: 'How can we pay the rent?',
        answer: 'You and your parents pay rent directly to the warden or owner of the hostel.'
    },
    {
        question: 'Are there balcony rooms?',
        answer: 'Yes, some rooms have balconies while others do not. However, every room is designed with excellent ventilation to provide fresh air to students.'
    }
    // Add more FAQ items as needed
    
];

export const FAQ = () => {
    return (
        <div id="faq">
            <div className="container">
                <div className='section-title text-center'>
                    <h2>FAQs and General Informations</h2>
                </div>
                <p></p>
                {faqData.map((faq, index) => (
                    <div key={index}>
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
