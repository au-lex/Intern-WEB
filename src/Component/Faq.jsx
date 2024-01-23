import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


const FAQAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    
    const handleAccordionClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    const [visibleFAQs, setVisibleFAQs] = useState(5); 
    const handleShowMore = () => {
        setVisibleFAQs((prevCount) => prevCount + 2);
      };

  const faqItems = [
    {
      question: 'How can I apply for an internship position at Taacodeep Technologies?',
      answer: 'Apply through the Taacodeep Technologies Careers portal, create your profile, and submit your application with supporting documents online.',
    },
    {
      question: 'Who is eligible for an internship at Taacodeep Technologies?',
      answer: 'Applicants from any part of the world, especially English-speaking countries, including anyone familiar with development tools, frameworks, and technologies commonly used in the industry.',
    },
    {
      question: 'How will I know that my application was successfully submitted?',
      answer: 'Receipt of online applications will be confirmed via the email address you have provided. The email is an official confirmation of your application.',
    },
    {
      question: 'Will I hear about the status of my application?',
      answer: 'You can monitor the progress of your application status through the Taacodeep Technologies career portal. Recruiters will contact you if your profile matches internship positions that are available in the organization.',
    },
    {
      question: 'Should I contact Taacodeep Technologies to arrange an interview?',
      answer: 'No, if Taacodeep Technologies wants to interview you, either in person or by phone, we will contact you, based on the contact details you provide on your application.',
    },
    {
      question: 'Will I be hired by Taacodeep Technologies after my internship?',
      answer: 'There should be no expectation of employment at the end of an internship. However, interns may be eligible to apply for certain positions within Taacodeep Technologies. A Taacodeep Technologies internship is a valuable and well-regarded asset in any resume/CV and can serve as the foundation for one’s career.',
    },
    {
      question: 'If I am accepted, what kind of work will I be doing?',
      answer: 'This will depend on the needs of the host Department/Division/Unit to which you are assigned.',
    },
    {
      question: 'How long is the Taacodeep Technologies Internship Program?',
      answer: 'For the internship to be worthwhile and effective, interns will be accepted for a minimum of 3-4 months, with the possibility of extension for another 3 months depending on the applicant’s performance and the willingness of the host Department/Division/Unit.',
    },
    {
      question: 'Can I get financial support from Taacodeep Technologies?',
      answer: 'Taacodeep Technologies does not provide any financial support or cover any costs for living expenses during the assignment for interns. All successful applicants are expected to make their arrangements for travel, lodging, and living expenses during the internship period.',
    },
    {
      question: 'Do I need to be at the Taacodeep Technologies Office full-time?',
      answer: 'Internships at Taacodeep Technologies are both remote and full-time. However, interns are expected to be available during the work days, Monday to Friday, 08:00 am to 5:00 pm for the duration of the internship.',
    },
    {
      question: 'Is an intern entitled to sick leave?',
      answer: 'An intern is not expected to work if he/she is unwell but the supervisor must be informed of any absences. Any expense relating to illness is the responsibility of the intern. Especially long periods of absence, through illness or for other reasons, should be recorded in the written performance evaluation prepared by the supervisor at the end of the assignment.',
    },
    {
      question: 'Is an intern entitled to leave?',
      answer: 'The minimum duration of an internship is 3 months and ideally should be uninterrupted. Leave may be exceptionally granted by the supervisor as long as the assignment is not adversely affected.',
    },
    {
      question: 'Will travel expenses to and from the duty station be reimbursed by Taacodeep Technologies?',
      answer: 'No, travel expenses are the responsibility of the intern.',
    },
    {
      question: 'Is the intern entitled to a per Diem payment to cover expenses incurred during the internship?',
      answer: 'No, interns are not entitled to a per Diem.',
    },
    {
      question: 'Am I able to follow up by telephone to find out the status of my application?',
      answer: 'Due to the high volume of online applications, it is not possible for us to discuss your internship application status by telephone. You can monitor the progress of your application status through the Taacodeep Technologies career portal.',
    },
    {
      question: 'What should I do if I have technical problems completing my application?',
      answer: 'Use the contact email information below to let us know about your problem. Be specific by telling us exactly what issue you have encountered.',
    },
    {
      question: 'What if I have questions or challenges completing my application?',
      answer: 'If you have questions or face any challenges, use the contact email information below to let us know about your challenges. Be specific about the challenges you might have encountered.',
    },
  ];

  return (
    <div id='faq' className="lg:px-[2rem] mt-8 lg:w-full" data-aos="fade-up" data-aos-duration="1000">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      {faqItems.slice(0, visibleFAQs).map((item, index) => (
        <div key={index} className="mb-4 bg-white rounded-md overflow-hidden" data-aos="fade-up" data-aos-duration="1200">
          <div
            className={`p-4 cursor-pointer flex justify-between items-center hover:bg-gray-100 ${
              activeIndex === index ? 'bg-gray-100' : ''
            }`}
            onClick={() => handleAccordionClick(index)}
          >
            <p className="text-lg font-semibold">{item.question}</p>
            {activeIndex === index ? <FaChevronUp className='text-orange-500' size={20} /> : <FaChevronDown className='text-orange-500' size={20} />}
          </div>
          {activeIndex === index && (
            <div className="p-4">
              <p className="text-gray-700">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
      {visibleFAQs < faqItems.length && (
        <div className='text-center my-[1rem]' data-aos="fade-up" data-aos-duration="1400">
          <button
            className="bg-orange-500 text-white py-2 px-4 rounded-md"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default FAQAccordion;
