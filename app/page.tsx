'use client';

import React, {  useEffect, useState } from 'react'  
type AccordionId = 'insurance' | 'rates' | 'openings' | 'education' | 'licensure' | 'certifications';

const page = () => {
   const [activeAccordion, setActiveAccordion] = useState<AccordionId | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -50px 0px'
        }
      );
  
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el: Element) => observer.observe(el));
  
      return () => observer.disconnect();
    }, []);
  
    const toggleAccordion = (id: AccordionId): void => {
      setActiveAccordion(activeAccordion === id ? null : id);
    };
  
    const toggleMobileMenu = (): void => {
      setMobileMenuOpen(!mobileMenuOpen);
    };
  
    return (
      <div className="bg-[#EBE5DD] min-h-screen">
        <style jsx global>{`
          .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>
  
        
        <header className="fixed top-0 left-0 right-0 bg-[#EBE5DD]/95 backdrop-blur-sm z-50 bg-[#fbf6f1]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[50px] py-4 sm:py-5 md:py-[28px] flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl md:text-[28px] font-normal text-[#2A3E28] tracking-[-0.02em]">
              Lilac Template
            </h1>
            
            
            <nav className="hidden md:flex gap-8 lg:gap-[40px]">
              <a
                href="#blog"
                className="text-[#2A3E28] text-base lg:text-[17px] font-normal hover:opacity-60 transition-opacity duration-300"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-[#2A3E28] text-base lg:text-[17px] font-normal hover:opacity-60 transition-opacity duration-300"
              >
                Contact
              </a>
            </nav>
  
           
            <button
              onClick={toggleMobileMenu}
              className="md:hidden w-10 h-10 flex items-center justify-center z-[60]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2A3E28" strokeWidth="1.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2A3E28" strokeWidth="1.5">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </header>
  
        
        <div 
          className={`md:hidden fixed inset-0 bg-[#EBE5DD] z-40 transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col items-center justify-center gap-12 h-full">
            <a
              href="#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#2A3E28] text-3xl font-normal hover:opacity-60 transition-opacity duration-300"
            >
              Blog
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#2A3E28] text-3xl font-normal hover:opacity-60 transition-opacity duration-300"
            >
              Contact
            </a>
          </nav>
        </div>
  
        
        <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-[140px] pb-12 sm:pb-16 md:pb-20 lg:pb-[120px] bg-[#fbf6f1]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[60px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-[80px] items-center">
             
              <div className="fade-in order-2 md:order-1">
                <div className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[540px] mx-auto">
                  <div className="relative aspect-[3/4] rounded-t-[50%] overflow-hidden bg-[#CED9E0] h-full">
                    <img
                      src="./hero_image.webp"
                      alt="Lilac flowers bouquet"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
  
              
              <div className="order-1 md:order-2 text-center md:text-left">
                <h2 className="fade-in text-[clamp(36px,8vw,90px)] leading-[1.1] font-normal text-[#2A3E28] mb-4 sm:mb-6 md:mb-[24px] tracking-[-0.03em]">
                  Live your life<br />in full bloom
                </h2>
                <p className="fade-in text-base sm:text-lg md:text-[18px] leading-[1.6] text-[#2A3E28] mb-6 sm:mb-8 md:mb-[40px] font-normal">
                  Therapy for Adults in Minneapolis, MN.
                </p>
                <button className="fade-in border-[1.5px] border-[#2A3E28] text-[#2A3E28] px-6 sm:px-8 md:px-[32px] py-3 sm:py-[14px] text-xs sm:text-[13px] tracking-[0.08em] uppercase font-medium hover:bg-[#2A3E28] hover:text-[#EBE5DD] transition-all duration-400">
                  CONNECT WITH ME →
                </button>
              </div>
            </div>
          </div>
        </section>
  
        
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[60px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-[80px] items-start">
             
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="fade-in text-[clamp(32px,6vw,56px)] leading-[1.2] font-normal text-[#2A3E28] mb-5 sm:mb-6 md:mb-[28px] tracking-[-0.02em]">
                    Live a fulfilling life.
                  </h2>
                  <p className="fade-in text-base sm:text-[17px] leading-[1.7] text-[#2A3E28] mb-4 sm:mb-5 md:mb-[20px]">
                    Life can be challenging—especially when you're trying to balance your personal and professional life.
                  </p>
                  <p className="fade-in text-base sm:text-[17px] leading-[1.7] text-[#2A3E28]">
                    It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
                  </p>
                </div>
  
                <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-[60px]">
                  <button className="fade-in border-[1.5px] border-[#2A3E28] text-[#2A3E28] px-6 sm:px-8 md:px-[32px] py-3 sm:py-[14px] text-xs sm:text-[13px] tracking-[0.08em] uppercase font-medium hover:bg-[#2A3E28] hover:text-[#EBE5DD] transition-all duration-400 w-full sm:w-auto">
                    GET IN TOUCH →
                  </button>
                </div>
              </div>
  
              
              <div className="fade-in">
                <img
                  src="./image1.webp"
                  alt="Coffee and journal flatlay"
                  className="w-full rounded-[8px]"
                />
              </div>
            </div>
          </div>
        </section>
  
        
        <section className="py-12 sm:py-16 md:py-20 lg:py-[100px] bg-[#fbf6f1]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[60px]">
            <h2 className="fade-in text-[clamp(32px,6vw,56px)] leading-[1.2] font-normal text-[#2A3E28] text-center mb-12 sm:mb-16 md:mb-20 lg:mb-[80px] tracking-[-0.02em]">
              My Specialties
            </h2>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-[40px]">
              
              <div className="fade-in border-[1.5px] border-[#2A3E28] p-8 sm:p-10 md:p-12 lg:p-[48px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow duration-400 bg-[#EBE5DD]">
                <h3 className="text-2xl sm:text-[28px] font-normal text-[#2A3E28] mb-4 sm:mb-5 md:mb-[20px] tracking-[-0.01em]">
                  Self-Esteem
                </h3>
                <p className="text-sm sm:text-[15px] leading-[1.7] text-[#2A3E28] mb-8 sm:mb-10 md:mb-[40px]">
                  Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.
                </p>
                <div className="w-full aspect-square rounded-full overflow-hidden bg-[#CED9E0]">
                  <img
                    src="./image_2.1.webp"
                    alt="Person with coffee"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
  
              
              <div className="fade-in border-[1.5px] border-[#2A3E28] p-8 sm:p-10 md:p-12 lg:p-[48px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow duration-400 bg-[#EBE5DD]">
                <h3 className="text-2xl sm:text-[28px] font-normal text-[#2A3E28] mb-4 sm:mb-5 md:mb-[20px] tracking-[-0.01em]">
                  Relationships
                </h3>
                <p className="text-sm sm:text-[15px] leading-[1.7] text-[#2A3E28] mb-8 sm:mb-10 md:mb-[40px]">
                  Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.
                </p>
                <div className="w-full aspect-square rounded-full overflow-hidden bg-[#CED9E0]">
                  <img
                    src="./image_2.2.webp"
                    alt="Person sitting outdoors"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
  
             
              <div className="fade-in border-[1.5px] border-[#2A3E28] p-8 sm:p-10 md:p-12 lg:p-[48px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow duration-400 bg-[#EBE5DD] sm:col-span-2 md:col-span-1">
                <h3 className="text-2xl sm:text-[28px] font-normal text-[#2A3E28] mb-4 sm:mb-5 md:mb-[20px] tracking-[-0.01em]">
                  Burnout
                </h3>
                <p className="text-sm sm:text-[15px] leading-[1.7] text-[#2A3E28] mb-8 sm:mb-10 md:mb-[40px]">
                  Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.
                </p>
                <div className="w-full aspect-square rounded-full overflow-hidden bg-[#CED9E0]">
                  <img
                    src="./image_2.3.webp"
                    alt="Person reading"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
  
      
        <section className="py-12 sm:py-16 md:py-20 lg:py-[100px]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            
              <div className="fade-in">
                <img
                  src="./image_3.webp"
                  alt="Person in contemplation"
                  className="w-full h-full object-cover min-h-[400px] sm:min-h-[500px] md:min-h-[600px]"
                />
              </div>
  
              
              <div className="bg-[#D3C8D3] p-6 sm:p-10 md:p-16 lg:p-[80px] flex flex-col justify-center">
                <h2 className="fade-in text-[clamp(28px,5vw,48px)] leading-[1.2] font-normal text-[#2A3E28] mb-6 sm:mb-8 md:mb-[32px] tracking-[-0.02em]">
                  You don't have to do this all <em className="italic font-normal">alone</em>.
                </h2>
  
                <p className="fade-in text-base sm:text-[17px] leading-[1.7] text-[#2A3E28] mb-5 sm:mb-6 md:mb-[28px]">
                  If you are facing any of these, there's hope:
                </p>
  
                <ul className="space-y-3 sm:space-y-4 md:space-y-[16px] text-[#2A3E28] mb-6 sm:mb-8 md:mb-[32px]">
                  <li className="fade-in flex items-start text-sm sm:text-[15px] leading-[1.7]">
                    <span className="mr-3 mt-1">•</span>
                    <span>Persistent feelings of sadness or hopelessness</span>
                  </li>
                  <li className="fade-in flex items-start text-sm sm:text-[15px] leading-[1.7]">
                    <span className="mr-3 mt-1">•</span>
                    <span>Trouble focusing or making decisions</span>
                  </li>
                  <li className="fade-in flex items-start text-sm sm:text-[15px] leading-[1.7]">
                    <span className="mr-3 mt-1">•</span>
                    <span>Difficulty maintaining relationships</span>
                  </li>
                  <li className="fade-in flex items-start text-sm sm:text-[15px] leading-[1.7]">
                    <span className="mr-3 mt-1">•</span>
                    <span>Feeling constantly exhausted or unmotivated</span>
                  </li>
                  <li className="fade-in flex items-start text-sm sm:text-[15px] leading-[1.7]">
                    <span className="mr-3 mt-1">•</span>
                    <span>A pervasive sense of being overwhelmed</span>
                  </li>
                </ul>
  
                <p className="fade-in text-base sm:text-[17px] leading-[1.7] text-[#2A3E28] mb-8 sm:mb-10 md:mb-12 lg:mb-[60px]">
                  With empathy and guidance, we'll work together to navigate the challenges life throws your way.
                </p>
                
                <button className="fade-in border-[1.5px] border-[#2A3E28] text-[#2A3E28] px-6 sm:px-8 md:px-[32px] py-3 sm:py-[14px] text-xs sm:text-[13px] tracking-[0.08em] uppercase font-medium hover:bg-[#2A3E28] hover:text-[#EBE5DD] transition-all duration-400 w-full sm:w-auto">
                  WORK WITH ME →
                </button>
              </div>
            </div>
          </div>
        </section>
  
       
        <section className="py-12 sm:py-16 md:py-20 lg:py-[120px]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[60px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-[80px] items-center">
             
              <div className="text-center md:text-left">
                <h2 className="fade-in text-[clamp(32px,6vw,56px)] leading-[1.2] font-normal text-[#2A3E28] mb-5 sm:mb-6 md:mb-[28px] tracking-[-0.02em]">
                  Hi, I'm Lilac.
                </h2>
                <p className="fade-in text-base sm:text-[17px] leading-[1.7] text-[#2A3E28] mb-6 sm:mb-8 md:mb-10 lg:mb-[40px]">
                  I'm committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we'll work together to navigate the challenges life throws your way.
                </p>
                <div className="flex justify-center md:justify-start">
                  <button className="fade-in border-[1.5px] border-[#2A3E28] text-[#2A3E28] px-6 sm:px-8 md:px-[32px] py-3 sm:py-[14px] text-xs sm:text-[13px] tracking-[0.08em] uppercase font-medium hover:bg-[#2A3E28] hover:text-[#EBE5DD] transition-all duration-400">
                    LET'S CHAT →
                  </button>
                </div>
              </div>
  
              
              <div className="fade-in">
                <div className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[540px] mx-auto">
                  <div className="relative aspect-[3/4] rounded-t-[50%] overflow-hidden bg-[#CED9E0]">
                    <img
                      src="./image_4.webp"
                      alt="Person with lilac flowers"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        
        <section className="py-12 sm:py-16 md:py-20 lg:py-[100px] bg-[#fbf6f1]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[60px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-[80px]">
              
              <div className="fade-in order-2 md:order-1">
                <div className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[540px] mx-auto">
                  <div className="relative aspect-[3/4] rounded-t-[50%] overflow-hidden bg-[#CED9E0]">
                    <img
                      src="./image_6.webp"
                      alt="Soft focus flowers"
                      className="w-full h-full object-cover opacity-60"
                    />
                  </div>
                </div>
              </div>
  
              
              <div className="order-1 md:order-2">
                <h2 className="fade-in text-[clamp(32px,6vw,56px)] leading-[1.2] font-normal text-[#2A3E28] mb-10 sm:mb-12 md:mb-[60px] tracking-[-0.02em]">
                  FAQs
                </h2>
  
                <div className="space-y-6 sm:space-y-8 md:space-y-[32px]">
                  <div className="fade-in border-t-[1.5px] border-[#2A3E28] pt-5 sm:pt-6 md:pt-[24px]">
                    <button
                      onClick={() => toggleAccordion('insurance')}
                      className="w-full flex items-center justify-between text-left group"
                    >
                      <span className="text-xl sm:text-2xl md:text-[24px] font-normal text-[#2A3E28] tracking-[-0.01em] group-hover:opacity-60 transition-opacity duration-300 pr-4">
                        Do you take insurance?
                      </span>
                      <span className="text-2xl sm:text-3xl md:text-[32px] font-light text-[#2A3E28] flex-shrink-0">
                        {activeAccordion === 'insurance' ? '−' : '+'}
                      </span>
                    </button>
                    {activeAccordion === 'insurance' && (
                      <div className="pt-4 sm:pt-5 md:pt-[20px] text-sm sm:text-[15px] leading-[1.7] text-[#2A3E28]">
                        <p>Yes, I accept most major insurance plans. Please contact me to verify your specific coverage.</p>
                      </div>
                    )}
                  </div>
  
                  <div className="fade-in border-t-[1.5px] border-[#2A3E28] pt-5 sm:pt-6 md:pt-[24px]">
                    <button
                      onClick={() => toggleAccordion('rates')}
                      className="w-full flex items-center justify-between text-left group"
                    >
                      <span className="text-xl sm:text-2xl md:text-[24px] font-normal text-[#2A3E28] tracking-[-0.01em] group-hover:opacity-60 transition-opacity duration-300 pr-4">
                        What are your rates?
                      </span>
                      <span className="text-2xl sm:text-3xl md:text-[32px] font-light text-[#2A3E28] flex-shrink-0">
                        {activeAccordion === 'rates' ? '−' : '+'}
                      </span>
                    </button>
                    {activeAccordion === 'rates' && (
                      <div className="pt-4 sm:pt-5 md:pt-[20px] text-sm sm:text-[15px] leading-[1.7] text-[#2A3E28]">
                        <p>My standard session rate is $150 for 50 minutes. I also offer sliding scale options for those in need.</p>
                      </div>
                    )}
                  </div>
  
                  <div className="fade-in border-t-[1.5px] border-[#2A3E28] pt-5 sm:pt-6 md:pt-[24px]">
                    <button
                      onClick={() => toggleAccordion('openings')}
                      className="w-full flex items-center justify-between text-left group"
                    >
                      <span className="text-xl sm:text-2xl md:text-[24px] font-normal text-[#2A3E28] tracking-[-0.01em] group-hover:opacity-60 transition-opacity duration-300 pr-4">
                        Do you have any openings?
                      </span>
                      <span className="text-2xl sm:text-3xl md:text-[32px] font-light text-[#2A3E28] flex-shrink-0">
                        {activeAccordion === 'openings' ? '−' : '+'}
                      </span>
                    </button>
                    {activeAccordion === 'openings' && (
                      <div className="pt-4 sm:pt-5 md:pt-[20px] text-sm sm:text-[15px] leading-[1.7] text-[#2A3E28]">
                        <p>Yes, I currently have limited openings for new clients. Please reach out to schedule a consultation.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        
        <section className="py-12 sm:py-16 md:py-20 lg:py-[100px]">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[60px]">
            <h2 className="fade-in text-[clamp(32px,6vw,56px)] leading-[1.2] font-normal text-[#2A3E28] text-center mb-10 sm:mb-12 md:mb-[60px] tracking-[-0.02em]">
              My Professional Background
            </h2>
  
            <div className="space-y-6 sm:space-y-8 md:space-y-[32px]">
              <div className="fade-in border-t-[1.5px] border-[#2A3E28] pt-5 sm:pt-6 md:pt-[24px]">
                <button
                  onClick={() => toggleAccordion('education')}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <span className="text-xl sm:text-2xl md:text-[24px] font-normal text-[#2A3E28] tracking-[-0.01em] group-hover:opacity-60 transition-opacity duration-300 pr-4">
                    Education
                  </span>
                  <span className="text-2xl sm:text-3xl md:text-[32px] font-light text-[#2A3E28] flex-shrink-0">
                    {activeAccordion === 'education' ? '−' : '+'}
                  </span>
                </button>
                {activeAccordion === 'education' && (
                  <div className="pt-4 sm:pt-5 md:pt-[20px] text-sm sm:text-[15px] leading-[1.7] text-[#2A3E28]">
                    <p>Master of Arts in Clinical Psychology, University of Minnesota</p>
                    <p className="mt-2">Bachelor of Science in Psychology, University of Wisconsin</p>
                  </div>
                )}
              </div>
  
              <div className="fade-in border-t-[1.5px] border-[#2A3E28] pt-5 sm:pt-6 md:pt-[24px]">
                <button
                  onClick={() => toggleAccordion('licensure')}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <span className="text-xl sm:text-2xl md:text-[24px] font-normal text-[#2A3E28] tracking-[-0.01em] group-hover:opacity-60 transition-opacity duration-300 pr-4">
                    Licensure
                  </span>
                  <span className="text-2xl sm:text-3xl md:text-[32px] font-light text-[#2A3E28] flex-shrink-0">
                    {activeAccordion === 'licensure' ? '−' : '+'}
                  </span>
                </button>
                {activeAccordion === 'licensure' && (
                  <div className="pt-4 sm:pt-5 md:pt-[20px] text-sm sm:text-[15px] leading-[1.7] text-[#2A3E28]">
                    <p>Licensed Professional Clinical Counselor (LPCC), State of Minnesota</p>
                    <p className="mt-2">License #: 12345</p>
                  </div>
                )}
              </div>
  
              <div className="fade-in border-t-[1.5px] border-[#2A3E28] pt-5 sm:pt-6 md:pt-[24px]">
                <button
                  onClick={() => toggleAccordion('certifications')}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <span className="text-xl sm:text-2xl md:text-[24px] font-normal text-[#2A3E28] tracking-[-0.01em] group-hover:opacity-60 transition-opacity duration-300 pr-4">
                    Certifications
                  </span>
                  <span className="text-2xl sm:text-3xl md:text-[32px] font-light text-[#2A3E28] flex-shrink-0">
                    {activeAccordion === 'certifications' ? '−' : '+'}
                  </span>
                </button>
                {activeAccordion === 'certifications' && (
                  <div className="pt-4 sm:pt-5 md:pt-[20px] text-sm sm:text-[15px] leading-[1.7] text-[#2A3E28]">
                    <p>Certified in Cognitive Behavioral Therapy (CBT)</p>
                    <p className="mt-2">Trauma-Informed Care Certification</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
  
        
        <section className="py-12 sm:py-16 md:py-20 lg:py-[120px] bg-[#8B9074]">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[60px] text-center">
            <h2 className="fade-in text-[clamp(32px,6vw,56px)] leading-[1.2] font-normal text-white mb-4 sm:mb-6 md:mb-[24px] tracking-[-0.02em]">
              Get started today.
            </h2>
            <p className="fade-in text-base sm:text-[17px] leading-[1.7] text-white mb-3 sm:mb-4 md:mb-[16px]">
              Ready to take the first step towards a happier, healthier you?
            </p>
            <p className="fade-in text-base sm:text-[17px] leading-[1.7] text-white mb-8 sm:mb-10 md:mb-12 lg:mb-[48px]">
              Contact me to book your first session. I look forward to starting this therapeutic journey with you.
            </p>
            <button className="fade-in border-[1.5px] border-white text-white px-6 sm:px-8 md:px-[32px] py-3 sm:py-[14px] text-xs sm:text-[13px] tracking-[0.08em] uppercase font-medium hover:bg-white hover:text-[#8B9074] transition-all duration-400">
              GET IN TOUCH →
            </button>
          </div>
        </section>
  
        
        <footer className="py-12 sm:py-16 md:py-20 lg:py-[80px] bg-[#EBE5DD]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[60px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-[60px]">
             
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl md:text-[24px] font-normal text-[#2A3E28] mb-4 sm:mb-5 md:mb-[20px] tracking-[-0.01em]">
                  Lilac Template
                </h3>
                <p className="text-sm sm:text-[15px] text-[#2A3E28] mb-2">123 Example Road</p>
                <p className="text-sm sm:text-[15px] text-[#2A3E28]">Minneapolis, MN</p>
              </div>
  
             
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl md:text-[24px] font-normal text-[#2A3E28] mb-4 sm:mb-5 md:mb-[20px] tracking-[-0.01em]">
                  Hours
                </h3>
                <p className="text-sm sm:text-[15px] text-[#2A3E28] mb-2">Monday – Friday</p>
                <p className="text-sm sm:text-[15px] text-[#2A3E28]">10am – 6pm</p>
              </div>
  
             
              <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
                <h3 className="text-xl sm:text-2xl md:text-[24px] font-normal text-[#2A3E28] mb-4 sm:mb-5 md:mb-[20px] tracking-[-0.01em]">
                  Find
                </h3>
                <nav className="flex flex-col gap-3 md:gap-[12px]">
                  <a href="#home" className="text-sm sm:text-[15px] text-[#2A3E28] hover:opacity-60 transition-opacity duration-300">
                    Home
                  </a>
                  <a href="#contact" className="text-sm sm:text-[15px] text-[#2A3E28] underline hover:opacity-60 transition-opacity duration-300">
                    Contact
                  </a>
                  <a href="#blog" className="text-sm sm:text-[15px] text-[#2A3E28] underline hover:opacity-60 transition-opacity duration-300">
                    Blog
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
}

export default page