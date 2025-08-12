// Theme toggle functionality
let currentTheme = localStorage.getItem('theme') || 'dark';

// Set initial theme
document.documentElement.setAttribute('data-theme', currentTheme);

// Set initial tooltip
const themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
    themeToggleBtn.title = currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
}

// Custom cursor functionality
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.custom-cursor');
    const cursorTrail = document.querySelector('.cursor-trail');
    
    if (cursor && cursorTrail) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            // Add delay for trail effect
            setTimeout(() => {
                cursorTrail.style.left = e.clientX + 'px';
                cursorTrail.style.top = e.clientY + 'px';
            }, 100);
        });
        
        // Hide cursor when leaving window
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
            cursorTrail.style.opacity = '0';
        });
        
        // Show cursor when entering window
        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '1';
            cursorTrail.style.opacity = '1';
        });
    }
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            // Toggle theme
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            // Update DOM
            document.documentElement.setAttribute('data-theme', currentTheme);
            
            // Update tooltip
            themeToggle.title = currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
            
            // Save to localStorage
            localStorage.setItem('theme', currentTheme);
            
            // Add click animation
            themeToggle.style.transform = 'scale(0.9)';
            setTimeout(() => {
                themeToggle.style.transform = 'scale(1)';
            }, 150);
            
            console.log('Theme changed to:', currentTheme);
        });
    }
    
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isOpen = content.classList.contains('open');
            
            // Close all other accordion items
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.classList.remove('open');
            });
            
            document.querySelectorAll('.accordion-header').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle current item
            if (!isOpen) {
                content.classList.add('open');
                header.classList.add('active');
            }
        });
    });
    
    // Copy button functionality
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const contactText = button.previousElementSibling.textContent;
            
            // Copy to clipboard
            navigator.clipboard.writeText(contactText).then(() => {
                // Visual feedback
                const originalText = button.textContent;
                button.textContent = 'Copied!';
                button.style.background = 'rgba(76, 175, 80, 0.8)';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    });
    
    // Download CV button functionality
    const downloadBtn = document.querySelector('.download-cv-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            // Add click animation
            downloadBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                downloadBtn.style.transform = 'translateY(-2px)';
            }, 150);
            
            // You can add actual download functionality here
            console.log('Download CV clicked');
        });
    }
    
    // Language selector functionality
    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('click', () => {
            // Add click effect
            languageSelector.style.transform = 'scale(0.95)';
            setTimeout(() => {
                languageSelector.style.transform = 'scale(1)';
            }, 150);
            
            console.log('Language selector clicked');
        });
    }
    
    // Smooth scrolling for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.card, .about-section, .projects-section');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = 'var(--shadow-hover)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'var(--shadow)';
        });
    });
    
    // Add loading animation
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
});

// Language Selector Functionality
const languageSelector = document.getElementById('language-selector');
const languageDropdown = document.getElementById('language-dropdown');
const currentLang = document.querySelector('.current-lang');
const currentCountry = document.querySelector('.current-country');

// Language translations
const translations = {
    en: {
        // Profile Section
        'name': 'Debolina Das',
        'profile-title': 'Web Developer',
        'download-cv': 'Download CV',
        'copy': 'Copy',
        
        // Numbers
        'number-01': '01',
        'number-02': '02',
        'number-03': '03',
        'number-04': '04',
        'proj-number-01': '01',
        'proj-number-02': '02',
        'proj-number-03': '03',
        'proj-number-04': '04',
        'proj-number-05': '05',
        
        // Dates
        'date-jul-2024-jun-2026': 'Jul 2024 – Jun 2026',
        'date-oct-2021-jul-2024': 'Oct 2021 – Jul 2024',
        'date-apr-2020-mar-2021': 'Apr 2020 – Mar 2021',
        'date-apr-2018-mar-2019': 'Apr 2018 – Mar 2019',
        'date-jun-2025': 'Jun 2025',
        'date-mar-2024': 'Mar 2024',
        'date-dec-2023': 'Dec 2023',
        'date-nov-2023': 'Nov 2023',
        'date-sep-2021': 'Sep 2021',
        
        // Credential IDs
        'cred-id-1': 'UC-168a1905-cee5-49b5-93a2-fd3b8a205c51',
        'cred-id-2': 'UC-a533d8bb-77d9-44aa-a310-24c25dad64f3',
        'cred-id-3': 'PDV H39 Y84',
        
        // Grades
        'grade-9-01': '9.01/10',
        'grade-91': '91%',
        'grade-90-4': '90.4%',
        
        // Sections
        'my-story-title': 'My Story',
        'my-story-content': "I'm a second-year MCA student at Vellore Institute of Technology (VIT), Vellore Campus, and I am passionate about exploring the ever-evolving landscape of technology. I see tech as a powerful catalyst for solving humanity's greatest challenges and driving meaningful change. With a curious mindset and a drive to learn, I'm eager to embrace new opportunities, expand my skills, and contribute to impactful solutions. Excited to grow my career and make a difference!",
        
        'about-title': 'About',
        'tech-stack': 'Tech Stack',
        'education': 'Education',
        'certifications': 'Certifications',
        'languages': 'Languages',
        
        'projects-title': 'Projects',
        
        'contacts-title': 'Contacts',
        'reach-out': 'Reach out!',
        'location': 'India 🇮🇳',
        
        // Tech Stack Items
        'prog-lang': 'Programming Languages',
        'version-control': 'Version Control',
        'web-dev': 'Web Development',
        'databases': 'Databases',
        'ai-ml': 'AI/ML',
        'design-tools': 'Design Tools',
        'devops-tools': 'DevOps & Tools',
        
        // Technical Terms
        'java': 'Java',
        'python': 'Python',
        'git': 'Git',
        'github': 'GitHub',
        'mern': 'MERN Stack',
        'mongodb': 'MongoDB',
        'express': 'Express.js',
        'react': 'React',
        'nodejs': 'Node.js',
        'html': 'HTML',
        'css': 'CSS',
        'javascript': 'JavaScript',
        'mysql': 'MySQL',
        'artificial-intelligence': 'Artificial Intelligence',
        'machine-learning': 'Machine Learning',
        'deep-learning': 'Deep Learning',
        'figma': 'Figma',
        'adobe-indesign': 'Adobe InDesign',
        'docker': 'Docker',
        
        // Education Items
        'vit': 'Vellore Institute of Technology (VIT), Vellore',
        'mca': 'Master of Computer Applications (MCA), Information Technology',
        'rgu': 'Royal Global University',
        'bca': 'Bachelor of Computer Applications (BCA), Information Technology',
        'sps': 'South Point School – India',
        'class-12': 'Class 12, Commerce',
        'class-10': 'Class 10',
        'grade': 'Grade',
        
        // Certification Items
        'docker-foundations': 'Docker Foundations Professional Certificate',
        'docker-inc': 'Docker, Inc',
        'kaggle-ml': 'Intro to Machine Learning',
        'kaggle': 'Kaggle',
        'aws-cloud': 'Cloud Computing on AWS: Ultimate Beginners Course – 2023',
        'udemy': 'Udemy',
        'pytorch-dl': 'Deep Learning with Python & PyTorch for Image Classification',
        'google-digital': 'The Fundamentals of Digital Marketing',
        'google': 'Google',
        'issued': 'Issued',
        'credential-id': 'Credential ID',
        
        // Language Items
        'assamese': 'Assamese',
        'bengali': 'Bengali',
        'english': 'English',
        'hindi': 'Hindi',
        'professional-working': 'Professional working proficiency',
        'native-bilingual': 'Native or bilingual proficiency',
        'full-professional': 'Full professional proficiency',
        
        // Project Items
        'project-1-title': 'Optimized Inception-Based Deep Learning Architecture for the Detection of Macular Degeneration',
        'project-1-domain': 'Domain: Deep Learning, Medical Imaging',
        'project-1-desc-1': 'Designed a novel deep learning architecture by fusing InceptionV3 and InceptionResNetV2, based on comparative analysis with InceptionV1, V3, and ResNetV2 across three retinal datasets.',
        'project-1-desc-2': 'Conducted model benchmarking to identify optimal performance traits.',
        'project-1-desc-3': 'Proposed a hybrid architecture leveraging global feature fusion and regularization layers for improved diagnostic precision.',
        
        'project-2-title': 'Comparative Analysis on CNN Models for Prediction of Macular Degeneration',
        'project-2-domain': 'Domain: Computer Vision, Medical Imaging',
        'project-2-desc-1': 'Performed comparative analysis of ResNet50, VGG16, and GoogLeNet for predicting macular degeneration using three datasets.',
        'project-2-desc-2': 'Applied data preprocessing and augmentation to enhance model performance.',
        'project-2-desc-3': 'Assessed models based on accuracy, precision, recall, and F1-score across datasets.',
        'project-2-desc-4': 'Utilized transfer learning with pre-trained ImageNet weights for faster training and improved results.',
        
        'project-3-title': 'RCNN-Based Breast Cancer Detection Using Histopathological Images',
        'project-3-domain': 'Domain: Deep Learning, Cancer Detection, Medical AI',
        'project-3-desc-1': 'Developed an AI-based detection system using Region-based Convolutional Neural Networks (RCNN) to classify histopathological images as benign or malignant.',
        'project-3-desc-2': 'Leveraged RCNN architecture for precise localization and classification of cancerous regions.',
        'project-3-desc-3': 'Processed and trained on real-world histopathological image datasets.',
        'project-3-desc-4': 'Built a full-stack web interface using Flask for real-time image analysis.',
        'project-3-desc-5': 'Achieved high accuracy in identifying malignancies, supporting early cancer detection.',
        
        'project-4-title': 'Full-Stack Web Application for Online Medical Consultations Using MERN',
        'project-4-domain': 'Domain: Web Development, Healthcare Tech',
        'project-4-desc-1': 'Developed a full-stack healthcare dashboard to manage appointments, diagnoses, and patient records.',
        'project-4-desc-2': 'Built using React.js, Vite, and Axios for a fast, responsive UI.',
        'project-4-desc-3': 'Designed modular components like Dashboard, Appointment Manager, Diagnosis Form, and Patient History View.',
        'project-4-desc-4': 'Created RESTful APIs with Node.js, Express.js, and MongoDB for efficient data handling.',
        'project-4-desc-5': 'Ensured clean code structure with ESLint, organized layout, and optimized development using VS Code and Chrome DevTools.',
        
        'project-5-title': 'Multi-Threaded File Search using Python',
        'project-5-domain': 'Domain: Python Programming, System Utilities',
        'project-5-desc-1': 'Developed a multi-threaded file search tool with regular expression (regex) support for efficient pattern matching across multiple files and directories.',
        'project-5-desc-2': 'Utilized Python threading for faster performance.',
        'project-5-desc-3': 'Added regex support for complex pattern searches.',
        'project-5-desc-4': 'Optimized for large-scale directory traversal.',
        
        // Footer
        'copyright': '© 2025 Debolina Das. All rights reserved.',
        
        // Project Dates
        'project-1-date': 'Oct 2024 – Apr 2025',
        'project-2-date': 'Sep 2023 – Jan 2024',
        'project-3-date': 'Mar 2025 – Apr 2025',
        'project-4-date': 'Feb 2025 – Mar 2025',
        'project-5-date': 'Mar 2025 – Mar 2025'
    },
    hi: {
        'name': 'देबोलिना दास',
        'profile-title': 'वेब डेवलपर',
        'download-cv': 'सीवी डाउनलोड करें',
        'copy': 'कॉपी करें',
        
        // Numbers
        'number-01': '०१',
        'number-02': '०२',
        'number-03': '०३',
        'number-04': '०४',
        'proj-number-01': '०१',
        'proj-number-02': '०२',
        'proj-number-03': '०३',
        'proj-number-04': '०४',
        'proj-number-05': '०५',
        
        // Dates
        'date-jul-2024-jun-2026': 'जुलाई 2024 – जून 2026',
        'date-oct-2021-jul-2024': 'अक्टूबर 2021 – जुलाई 2024',
        'date-apr-2020-mar-2021': 'अप्रैल 2020 – मार्च 2021',
        'date-apr-2018-mar-2019': 'अप्रैल 2018 – मार्च 2019',
        'date-jun-2025': 'जून 2025',
        'date-mar-2024': 'मार्च 2024',
        'date-dec-2023': 'दिसंबर 2023',
        'date-nov-2023': 'नवंबर 2023',
        'date-sep-2021': 'सितंबर 2021',
        
        // Credential IDs
        'cred-id-1': 'UC-168a1905-cee5-49b5-93a2-fd3b8a205c51',
        'cred-id-2': 'UC-a533d8bb-77d9-44aa-a310-24c25dad64f3',
        'cred-id-3': 'PDV H39 Y84',
        
        // Grades
        'grade-9-01': '9.01/10',
        'grade-91': '91%',
        'grade-90-4': '90.4%',
        
        'my-story-title': 'मेरी कहानी',
        'my-story-content': 'मैं वेल्लोर इंस्टीट्यूट ऑफ टेक्नॉलॉजी (VIT), वेल्लोर कैंपस में दूसरे वर्ष का MCA छात्र हूं, और मैं तकनीक के लगातार विकसित हो रहे परिदृश्य की खोज में रुचि रखता हूं। मैं तकनीक को मानवता की सबसे बड़ी चुनौतियों को हल करने और सार्थक परिवर्तन लाने के लिए एक शक्तिशाली उत्प्रेरक के रूप में देखता हूं। जिज्ञासु मानसिकता और सीखने की इच्छा के साथ, मैं नए अवसरों को अपनाने, अपने कौशल का विस्तार करने और प्रभावशाली समाधानों में योगदान देने के लिए उत्सुक हूं। अपने करियर को आगे बढ़ाने और फर्क पैदा करने के लिए उत्साहित हूं!',
        
        'about-title': 'के बारे में',
        'tech-stack': 'तकनीकी स्टैक',
        'education': 'शिक्षा',
        'certifications': 'प्रमाणपत्र',
        'languages': 'भाषाएं',
        
        'projects-title': 'प्रोजेक्ट्स',
        
        'contacts-title': 'संपर्क',
        'reach-out': 'संपर्क करें!',
        'location': 'भारत 🇮🇳',
        
        // Tech Stack Items
        'prog-lang': 'प्रोग्रामिंग भाषाएं',
        'version-control': 'वर्जन कंट्रोल',
        'web-dev': 'वेब डेवलपमेंट',
        'databases': 'डेटाबेस',
        'ai-ml': 'एआई/एमएल',
        'design-tools': 'डिज़ाइन टूल्स',
        'devops-tools': 'डेवऑप्स और टूल्स',
        
        // Technical Terms
        'java': 'जावा',
        'python': 'पायथन',
        'git': 'गिट',
        'github': 'गिटहब',
        'mern': 'MERN स्टैक',
        'mongodb': 'मोंगोडब',
        'express': 'एक्सप्रेस.जेएस',
        'react': 'रिएक्ट',
        'nodejs': 'नोड.जेएस',
        'html': 'एचटीएमएल',
        'css': 'सीएसएस',
        'javascript': 'जावास्क्रिप्ट',
        'mysql': 'मायस्क्यूएल',
        'artificial-intelligence': 'वैज्ञानिक बुद्धिमत्ता',
        'machine-learning': 'वैज्ञानिक अध्ययन',
        'deep-learning': 'गहरा अध्ययन',
        'figma': 'फ़िग्मा',
        'adobe-indesign': 'एडोब इनडिसेइंजन',
        'docker': 'डॉकर',
        
        // Education Items
        'vit': 'वेल्लोर इंस्टीट्यूट ऑफ टेक्नॉलॉजी (VIT), वेल्लोर',
        'mca': 'मास्टर ऑफ कंप्यूटर एप्लिकेशन्स (MCA), सूचना प्रौद्योगिकी',
        'rgu': 'रॉयल ग्लोबल यूनिवर्सिटी',
        'bca': 'बैचलर ऑफ कंप्यूटर एप्लिकेशन्स (BCA), सूचना प्रौद्योगिकी',
        'sps': 'साउथ पॉइंट स्कूल – भारत',
        'class-12': 'कक्षा 12, वाणिज्य',
        'class-10': 'कक्षा 10',
        'grade': 'ग्रेड',
        
        // Certification Items
        'docker-foundations': 'डॉकर फाउंडेशन्स प्रोफेशनल सर्टिफिकेट',
        'docker-inc': 'डॉकर, इंक',
        'kaggle-ml': 'मशीन लर्निंग का परिचय',
        'kaggle': 'कैगल',
        'aws-cloud': 'AWS पर क्लाउड कंप्यूटिंग: अल्टीमेट बिगिनर्स कोर्स – 2023',
        'udemy': 'उडेमी',
        'pytorch-dl': 'पायथन और पायटॉर्च के साथ इमेज क्लासिफिकेशन के लिए डीप लर्निंग',
        'google-digital': 'डिजिटल मार्केटिंग के मूल सिद्धांत',
        'google': 'गूगल',
        'issued': 'जारी किया गया',
        'credential-id': 'क्रेडेंशियल आईडी',
        
        // Language Items
        'assamese': 'Assamese',
        'bengali': 'Bengali',
        'english': 'English',
        'hindi': 'Hindi',
        'professional-working': 'Professional working proficiency',
        'native-bilingual': 'Native or bilingual proficiency',
        'full-professional': 'Full professional proficiency',
        
        // Project Items
        'project-1-title': 'Optimized Inception-Based Deep Learning Architecture for the Detection of Macular Degeneration',
        'project-1-domain': 'Domain: Deep Learning, Medical Imaging',
        'project-1-desc-1': 'Designed a novel deep learning architecture by fusing InceptionV3 and InceptionResNetV2, based on comparative analysis with InceptionV1, V3, and ResNetV2 across three retinal datasets.',
        'project-1-desc-2': 'Conducted model benchmarking to identify optimal performance traits.',
        'project-1-desc-3': 'Proposed a hybrid architecture leveraging global feature fusion and regularization layers for improved diagnostic precision.',
        
        'project-2-title': 'Comparative Analysis on CNN Models for Prediction of Macular Degeneration',
        'project-2-domain': 'Domain: Computer Vision, Medical Imaging',
        'project-2-desc-1': 'Performed comparative analysis of ResNet50, VGG16, and GoogLeNet for predicting macular degeneration using three datasets.',
        'project-2-desc-2': 'Applied data preprocessing and augmentation to enhance model performance.',
        'project-2-desc-3': 'Assessed models based on accuracy, precision, recall, and F1-score across datasets.',
        'project-2-desc-4': 'Utilized transfer learning with pre-trained ImageNet weights for faster training and improved results.',
        
        'project-3-title': 'RCNN-Based Breast Cancer Detection Using Histopathological Images',
        'project-3-domain': 'Domain: Deep Learning, Cancer Detection, Medical AI',
        'project-3-desc-1': 'Developed an AI-based detection system using Region-based Convolutional Neural Networks (RCNN) to classify histopathological images as benign or malignant.',
        'project-3-desc-2': 'Leveraged RCNN architecture for precise localization and classification of cancerous regions.',
        'project-3-desc-3': 'Processed and trained on real-world histopathological image datasets.',
        'project-3-desc-4': 'Built a full-stack web interface using Flask for real-time image analysis.',
        'project-3-desc-5': 'Achieved high accuracy in identifying malignancies, supporting early cancer detection.',
        
        'project-4-title': 'Full-Stack Web Application for Online Medical Consultations Using MERN',
        'project-4-domain': 'Domain: Web Development, Healthcare Tech',
        'project-4-desc-1': 'Developed a full-stack healthcare dashboard to manage appointments, diagnoses, and patient records.',
        'project-4-desc-2': 'Built using React.js, Vite, and Axios for a fast, responsive UI.',
        'project-4-desc-3': 'Designed modular components like Dashboard, Appointment Manager, Diagnosis Form, and Patient History View.',
        'project-4-desc-4': 'Created RESTful APIs with Node.js, Express.js, and MongoDB for efficient data handling.',
        'project-4-desc-5': 'Ensured clean code structure with ESLint, organized layout, and optimized development using VS Code and Chrome DevTools.',
        
        'project-5-title': 'Multi-Threaded File Search using Python',
        'project-5-domain': 'Domain: Python Programming, System Utilities',
        'project-5-desc-1': 'Developed a multi-threaded file search tool with regular expression (regex) support for efficient pattern matching across multiple files and directories.',
        'project-5-desc-2': 'Utilized Python threading for faster performance.',
        'project-5-desc-3': 'Added regex support for complex pattern searches.',
        'project-5-desc-4': 'Optimized for large-scale directory traversal.',
        
        'copyright': '© 2025 देबोलिना दास। सर्वाधिकार सुरक्षित।',
        
        // Project Dates
        'project-1-date': 'अक्टूबर 2024 – अप्रैल 2025',
        'project-2-date': 'सितंबर 2023 – जनवरी 2024',
        'project-3-date': 'मार्च 2025 – अप्रैल 2025',
        'project-4-date': 'फरवरी 2025 – मार्च 2025',
        'project-5-date': 'मार्च 2025 – मार्च 2025',
        
        // Missing Language Items
        'assamese': 'असमिया',
        'bengali': 'बंगाली',
        'english': 'अंग्रेजी',
        'hindi': 'हिंदी',
        'professional-working': 'व्यावसायिक कार्य प्रवीणता',
        'native-bilingual': 'मूल या द्विभाषी प्रवीणता',
        'full-professional': 'पूर्ण व्यावसायिक प्रवीणता',
        
        // Project Titles
        'project-1-title': 'मैक्युलर डिजेनरेशन की पहचान के लिए ऑप्टिमाइज्ड इंसेप्शन-आधारित डीप लर्निंग आर्किटेक्चर',
        'project-2-title': 'मैक्युलर डिजेनरेशन की पूर्वानुमान के लिए CNN मॉडल पर तुलनात्मक विश्लेषण',
        'project-3-title': 'हिस्टोपैथोलॉजिकल इमेज का उपयोग करके RCNN-आधारित ब्रेस्ट कैंसर डिटेक्शन',
        'project-4-title': 'MERN का उपयोग करके ऑनलाइन मेडिकल कंसल्टेशन के लिए फुल-स्टैक वेब एप्लिकेशन',
        'project-5-title': 'पाइथन का उपयोग करके मल्टी-थ्रेडेड फाइल खोज',
        'project-1-domain': 'डोमेन: डीप लर्निंग, मेडिकल इमेजिंग',
        'project-2-domain': 'डोमेन: कंप्यूटर विजन, मेडिकल इमेजिंग',
        'project-3-domain': 'डोमेन: डीप लर्निंग, कैंसर डिटेक्शन, मेडिकल AI',
        'project-4-domain': 'डोमेन: वेब डेवलपमेंट, हेल्थकेयर टेक',
        'project-5-domain': 'डोमेन: पाइथन प्रोग्रामिंग, सिस्टम यूटिलिटीज',
        
        // Project Descriptions
        'project-1-desc-1': 'तीन रेटिनल डेटासेट में InceptionV1, V3, और ResNetV2 के तुलनात्मक विश्लेषण के आधार पर InceptionV3 और InceptionResNetV2 को मिलाकर एक नवीन डीप लर्निंग आर्किटेक्चर डिजाइन किया।',
        'project-1-desc-2': 'इष्टतम प्रदर्शन विशेषताओं की पहचान के लिए मॉडल बेंचमार्किंग किया।',
        'project-1-desc-3': 'उन्नत निदान सटीकता के लिए ग्लोबल फीचर फ्यूजन और रेगुलराइजेशन लेयर्स का उपयोग करने वाला एक हाइब्रिड आर्किटेक्चर प्रस्तावित किया।',
        'project-2-desc-1': 'तीन डेटासेट का उपयोग करके मैक्युलर डिजेनरेशन की पूर्वानुमान के लिए ResNet50, VGG16, और GoogLeNet का तुलनात्मक विश्लेषण किया।',
        'project-2-desc-2': 'मॉडल प्रदर्शन बढ़ाने के लिए डेटा प्रीप्रोसेसिंग और ऑगमेंटेशन लागू किया।',
        'project-2-desc-3': 'डेटासेट में सटीकता, प्रेसिजन, रिकॉल, और F1-स्कोर के आधार पर मॉडल का मूल्यांकन किया।',
        'project-2-desc-4': 'तेज प्रशिक्षण और बेहतर परिणामों के लिए पूर्व-प्रशिक्षित ImageNet वेट्स के साथ ट्रांसफर लर्निंग का उपयोग किया।',
        'project-3-desc-1': 'हिस्टोपैथोलॉजिकल इमेज को बेनिग्न या मैलिग्नेंट के रूप में वर्गीकृत करने के लिए रीजन-बेस्ड कन्वोल्यूशनल न्यूरल नेटवर्क (RCNN) का उपयोग करके एक AI-आधारित पहचान प्रणाली विकसित की।',
        'project-3-desc-2': 'कैंसर क्षेत्रों के सटीक स्थानीयकरण और वर्गीकरण के लिए RCNN आर्किटेक्चर का लाभ उठाया।',
        'project-3-desc-3': 'वास्तविक दुनिया के हिस्टोपैथोलॉजिकल इमेज डेटासेट पर प्रोसेसिंग और प्रशिक्षण किया।',
        'project-3-desc-4': 'वास्तविक समय इमेज विश्लेषण के लिए Flask का उपयोग करके एक पूर्ण स्टैक वेब इंटरफेस बनाया।',
        'project-3-desc-5': 'मैलिग्नेंसी की पहचान में उच्च सटीकता प्राप्त की, जो शुरुआती कैंसर पहचान में सहायक है।',
        'project-4-desc-1': 'अपॉइंटमेंट, निदान, और मरीजों के रिकॉर्ड का प्रबंधन करने के लिए एक पूर्ण स्टैक हेल्थकेयर डैशबोर्ड विकसित किया।',
        'project-4-desc-2': 'एक तेज, प्रतिक्रियाशील UI के लिए React.js, Vite, और Axios का उपयोग करके बनाया गया।',
        'project-4-desc-3': 'डैशबोर्ड, अपॉइंटमेंट मैनेजर, डायग्नोसिस फॉर्म, और पेशेंट हिस्ट्री व्यू जैसे मॉड्यूलर कंपोनेंट्स डिजाइन किए।',
        'project-4-desc-4': 'कुशल डेटा हैंडलिंग के लिए Node.js, Express.js, और MongoDB के साथ RESTful APIs बनाए।',
        'project-4-desc-5': 'ESLint के साथ साफ कोड संरचना, व्यवस्थित लेआउट, और VS Code और Chrome DevTools का उपयोग करके विकास को अनुकूलित किया।',
        'project-5-desc-1': 'कई फाइलों और डायरेक्टरियों में कुशल पैटर्न मैचिंग के लिए रेगुलर एक्सप्रेशन (regex) समर्थन के साथ एक मल्टी-थ्रेडेड फाइल खोज टूल विकसित किया।',
        'project-5-desc-2': 'तेज प्रदर्शन के लिए पाइथन थ्रेडिंग का उपयोग किया।',
        'project-5-desc-3': 'जटिल पैटर्न खोज के लिए regex समर्थन जोड़ा।',
        'project-5-desc-4': 'बड़े पैमाने की डायरेक्टरी ट्रेवर्सल के लिए अनुकूलित किया।'
    },
    bn: {
        'name': 'দেবোলিনা দাস',
        'profile-title': 'ওয়েব ডেভেলপার',
        'download-cv': 'সিভি ডাউনলোড করুন',
        'copy': 'কপি করুন',
        
        // Numbers
        'number-01': '০১',
        'number-02': '০২',
        'number-03': '০৩',
        'number-04': '০৪',
        'proj-number-01': '০১',
        'proj-number-02': '০২',
        'proj-number-03': '০৩',
        'proj-number-04': '০৪',
        'proj-number-05': '০৫',
        
        // Dates
        'date-jul-2024-jun-2026': 'জুলাই 2024 – জুন 2026',
        'date-oct-2021-jul-2024': 'অক্টোবর 2021 – জুলাই 2024',
        'date-apr-2020-mar-2021': 'এপ্রিল 2020 – মার্চ 2021',
        'date-apr-2018-mar-2019': 'এপ্রিল 2018 – মার্চ 2019',
        'date-jun-2025': 'জুন 2025',
        'date-mar-2024': 'মার্চ 2024',
        'date-dec-2023': 'ডিসেম্বর 2023',
        'date-nov-2023': 'নভেম্বর 2023',
        'date-sep-2021': 'সেপ্টেম্বর 2021',
        
        // Credential IDs
        'cred-id-1': 'UC-168a1905-cee5-49b5-93a2-fd3b8a205c51',
        'cred-id-2': 'UC-a533d8bb-77d9-44aa-a310-24c25dad64f3',
        'cred-id-3': 'PDV H39 Y84',
        
        // Grades
        'grade-9-01': '9.01/10',
        'grade-91': '91%',
        'grade-90-4': '90.4%',
        
        'my-story-title': 'আমার গল্প',
        'my-story-content': 'আমি ভেল্লোর ইনস্টিটিউট অফ টেকনোলজি (VIT), ভেল্লোর ক্যাম্পাসে দ্বিতীয় বছরের MCA ছাত্র, এবং আমি প্রযুক্তির ক্রমাগত বিকাশমান জগতখন অন্বেষণে আগ্রহী। আমি প্রযুক্তিক মানৱতাৰ আটাইতকৈ ডাঙৰ প্ৰত্যাহ্বানসমূহ সমাধান কৰা আৰু অৰ্থপূৰ্ণ পৰিবৰ্তন আনিবলৈ এক শক্তিশালী অনুঘটক হিচাপে দেখোঁ। কৌতূহলী মনোভাৱ আৰু শিকাৰ তাড়না লৈ, মই নতুন সুযোগসমূহ গ্ৰহণ কৰিবলৈ, মোৰ দক্ষতা সম্প্ৰসাৰণ কৰিবলৈ আৰু প্ৰভাৱশালী সমাধানত অৱদান দিবলৈ আগ্ৰহী। মোৰ ক্যারিয়ার বাড়াতে এবং পাৰ্থক্য গঢ়িবলৈ উত্তেজিত!',
        
        'about-title': 'সম্পর্কে',
        'tech-stack': 'টেক স্ট্যাক',
        'education': 'শিক্ষা',
        'certifications': 'সনদপত্র',
        'languages': 'ভাষা',
        
        'projects-title': 'প্রকল্প',
        
        'contacts-title': 'যোগাযোগ',
        'reach-out': 'যোগাযোগ করুন!',
        'location': 'ভারত 🇮🇳',
        
        // Tech Stack Items
        'prog-lang': 'প্রোগ্রামিং ভাষা',
        'version-control': 'ভাৰ্সন কন্ট্রোল',
        'web-dev': 'ওয়েব ডেভেলপমেন্ট',
        'databases': 'ডেটাবেচ',
        'ai-ml': 'এআই/এমএল',
        'design-tools': 'ডিজাইন টুলস',
        'devops-tools': 'ডেভঅপস এবং টুলস',
        
        // Technical Terms
        'java': 'জাভা',
        'python': 'পাইথন',
        'git': 'গিট',
        'github': 'গিটহব',
        'mern': 'MERN স্ট্যাক',
        'mongodb': 'মোংগোডব',
        'express': 'এক্সপ্রেস.জেএস',
        'react': 'রিএক্ট',
        'nodejs': 'নোড.জেএস',
        'html': 'এচটিএমএল',
        'css': 'সিএসএস',
        'javascript': 'জাভাস্ক্রিপ্ট',
        'mysql': 'মায়স্কুএল',
        'artificial-intelligence': 'বিজ্ঞানিক বুদ্ধিমত্তা',
        'machine-learning': 'বিজ্ঞানিক অধ্যয়ন',
        'deep-learning': 'গহরা অধ্যয়ন',
        'figma': 'ফ়িগমা',
        'adobe-indesign': 'এডোব ইনডিসেইন',
        'docker': 'ডকার',
        
        // Education Items
        'vit': 'ভেল্লোর ইনস্টিটিউট অফ টেকনোলজি (VIT), ভেল্লোর',
        'mca': 'মাস্টার অফ কম্পিউটার এপ্লিকেশনস (MCA), ইনফরমেশন টেকনোলজি',
        'rgu': 'রয়্যাল গ্লোবাল ইউনিভার্সিটি',
        'bca': 'ব্যাচেলর অফ কম্পিউটার এপ্লিকেশনস (BCA), ইনফরমেশন টেকনোলজি',
        'sps': 'সাউথ পয়েন্ট স্কুল – ভারত',
        'class-12': 'ক্লাস 12, কমার্স',
        'class-10': 'ক্লাস 10',
        'grade': 'গ্রেড',
        
        // Certification Items
        'docker-foundations': 'ডকার ফাউন্ডেশনস প্ৰফেশনাল সার্টিফিকেট',
        'docker-inc': 'ডকার, ইংক',
        'kaggle-ml': 'মশিন লার্নিং এর পরিচয়',
        'kaggle': 'ক্যাগল',
        'aws-cloud': 'AWS এ ক্লাউড কম্পিউটিং: অলটিমেট বিগিনার্স কোর্স – 2023',
        'udemy': 'উডেমি',
        'pytorch-dl': 'পাইথন এবং পাইটর্চ দিয়ে ইমেজ ক্লাসিফিকেশন এর জন্য ডিপ লার্নিং',
        'google-digital': 'ডিজিটাল মার্কেটিং এর মৌলিক নীতি',
        'google': 'গুগল',
        'issued': 'জারি করা হয়েছে',
        'credential-id': 'ক্রেডেনশিয়াল আইডি',
        
        // Language Items
        'assamese': 'অসমীয়া',
        'bengali': 'বাংলা',
        'english': 'ইংরেজি',
        'hindi': 'হিন্দি',
        'professional-working': 'পেশাদার কাজের দক্ষতা',
        'native-bilingual': 'মূল বা দ্বিভাষিক দক্ষতা',
        'full-professional': 'সম্পূর্ণ পেশাদার দক্ষতা',
        
        // Project Items
        'project-1-title': 'অপ্ৰাইভেড ইনচেপচন-বেছড ডীপ লাৰ্নিঙ এৰ্কিটেকচাৰ যা মেকুলাৰ ডিগ্ৰেডেচন ডিটেকচনৰ বাবে অপ্টিমাইজড কৰা হয়',
        'project-1-domain': 'ডোমেইন: ডীপ লাৰ্নিঙ, মেডিকেল ইমেজ',
        'project-1-desc-1': 'ইনচেপচনভি3 আৰু ইনচেপচনৰেচেটভি2 ক ফুজ কৰি এটা নৱ ডীপ লাৰ্নিঙ এৰ্কিটেকচাৰ ডিজাইন কৰা হয় যা ইনচেপচনভি1, ভি3 আৰু ৰেচেটভি2 ৰ তুলনামূলক বিশ্লেষণৰ ওপৰত ভিত্তি কৰি।',
        'project-1-desc-2': 'মডেল বেঞ্চমাৰ্কিঙ কৰি অধিকতম প্ৰদৰ্শন বৈশিষ্ট্যসমূহ বিচাৰি পায়।',
        'project-1-desc-3': 'এটা হাইব্ৰিড এৰ্কিটেকচাৰ ব্যৱহাৰ কৰি উন্নত ডিয়াগনষ্টিক প্ৰেচিজন প্ৰস্তাৱ কৰা হয়।',
        
        'project-2-title': 'CNN মডেলসমূহৰ তুলনামূলক বিশ্লেষণ যা মেকুলাৰ ডিগ্ৰেডেচন পূৰ্বানুমানিত কৰে',
        'project-2-domain': 'ডোমেইন: কম্পিউটাৰ ভিজ্যুৱেল বিজ্ঞান, মেডিকেল ইমেজ',
        'project-2-desc-1': 'ৰেচেট50, VGG16 আৰু GoogLeNet ৰ তুলনামূলক বিশ্লেষণ যা তিনটা ডেটাছেট ব্যৱহাৰ কৰি মেকুলাৰ ডিগ্ৰেডেচন পূৰ্বানুমানিত কৰে।',
        'project-2-desc-2': 'মডেল প্ৰদৰ্শন উন্নত কৰাৰ বাবে ডেটা প্ৰিপ্ৰচেছিঙ আৰু এজেন্সমেণ্ট কৰে।',
        'project-2-desc-3': 'ডেটাছেটসমূহত এক্সেক্ট আৰু এক্সেক্ট কৰি মডেলসমূহ মূল্যায়ন কৰে।',
        'project-2-desc-4': 'ট্ৰান্সফাৰ লাৰ্নিঙ ব্যৱহাৰ কৰি পূৰ্ব-প্ৰশিক্ষিত ImageNet ৱেটসমূহর সৈতে তেজল প্ৰশিক্ষণ আৰু উন্নত ফলাফল পায়।',
        
        'project-3-title': 'RCNN ভিত্তিক ব্ৰেচ্ট কেঞ্চাৰ ডিটেকচন যা হিচ্ট\'পাথ\'লজিকেল ছবিসমূহ ব্যৱহাৰ কৰে',
        'project-3-domain': 'ডোমেইন: ডীপ লাৰ্নিঙ, কেঞ্চাৰ ডিটেকচন, মেডিকেল AI',
        'project-3-desc-1': 'এটা ডীপ লাৰ্নিঙ ভিত্তিক ডিটেকচন চিষ্টেম বিকাশ কৰে যা হিচ্ট\'পাথ\'লজিকেল ছবিসমূহক বেনিগ্ন বা অচেনা বিভাজন কৰে।',
        'project-3-desc-2': 'RCNN এৰ্কিটেকচাৰ ব্যৱহাৰ কৰি অচেনা অৱস্থান আৰু বিভাজন প্ৰস্তাৱ কৰে।',
        'project-3-desc-3': 'বাস্তৱ জীৱন হিচ্ট\'পাথ\'লজিকেল ছবি ডেটাছেটসমূহত প্ৰচেছ আৰু প্ৰশিক্ষণ কৰে।',
        'project-3-desc-4': 'এটা পূৰ্ণ ষ্টেক ওৱেব ইণ্টাৰফেচ বিকাশ কৰে যা বাস্তৱ সময় ছবি বিশ্লেষণৰ বাবে Flask ব্যৱহাৰ কৰে।',
        'project-3-desc-5': 'উন্নত অচেনা পাবলৈ উন্নত অচেনা।',
        
        'project-4-title': 'MERN ব্যৱহাৰ কৰি অনলাইন চিকিৎসা কাউন্সেলেচনৰ পূৰ্ণ ষ্টেক ওৱেব এপ্লিকেচন',
        'project-4-domain': 'ডোমেইন: ওৱেব ডেভেলপমেণ্ট, চিকিৎসা টেক',
        'project-4-desc-1': 'এটা পূৰ্ণ ষ্টেক চিকিৎসা ডাশব\'ৰ্ড বিকাশ কৰে যা নোটচ, ডিয়াগন\'চিছ আৰু ৰেকৰ্ড কৰাৰ বাবে অপ্ৰাইভেড।',
        'project-4-desc-2': 'React.js, Vite আৰু Axios ব্যৱহাৰ কৰি এটা তেজল, প্ৰতিক্ৰিয়াশীল UI সৃষ্টি কৰে।',
        'project-4-desc-3': 'ডাশব\'ৰ্ড, অপ্ৰাইভেড মেনেজাৰ, ডিয়াগন\'চিছ ফৰ্ম, আৰু ৰেকৰ্ড ভিউ কৰি অংশীদাৰ কম্পোনেণ্টসমূহ মডিউলাৰ হিচাপে ডিজাইন কৰে।',
        'project-4-desc-4': 'Node.js, Express.js আৰু MongoDB ব্যৱহাৰ কৰি কুশল ডেটা হেণ্ডলিঙৰ বাবে RESTful APIs সৃষ্টি কৰে।',
        'project-4-desc-5': 'ESLint ব্যৱহাৰ কৰি সাফ কোড সংৰক্ষণ নিশ্চিত কৰে, লেআউট সৰ্ট কৰি, আৰু VS Code আৰু Chrome DevTools ব্যৱহাৰ কৰি ডেভেলপমেণ্ট উন্নত কৰে।',
        
        'project-5-title': 'পাইথন ব্যৱহাৰ কৰি বহু-থ্ৰেড ফাইল চাৰ্চ',
        'project-5-domain': 'ডোমেইন: পাইথন প্ৰগ্ৰামিঙ, চিষ্টেম ইউটিলিটি',
        'project-5-desc-1': 'এটা বহু-থ্ৰেড ফাইল চাৰ্চ টুল বিকাশ কৰে যা বহুল অধিক ফাইল আৰু ডিৰেক্টৰিসমূহত বহুল অচেনা পেটাৰ্ন মেচিঙৰ বাবে নিম্নতম অভিব্যক্তি (regex) সমৰ্থন কৰে।',
        'project-5-desc-2': 'পাইথন থ্ৰেডিঙ ব্যৱহাৰ কৰি তেজল প্ৰদৰ্শন পায়।',
        'project-5-desc-3': 'জটিল পেটাৰ্ন চোৱাৰ বাবে regex সমৰ্থন যোগ কৰে।',
        'project-5-desc-4': 'ডাঙৰ পামানৰ ডিৰেক্টৰি ট্ৰাভাৰ্চেলৰ বাবে উন্নত কৰে।',
        
        'copyright': '© ২০২৫ দেবোলিনা দাস। সৰ্বস্বত্ব সংৰক্ষিত।',
        
        // Project Dates
        'project-1-date': 'অক্টোবর 2024 – এপ্রিল 2025',
        'project-2-date': 'সেপ্টেম্বর 2023 – জানুয়ারি 2024',
        'project-3-date': 'মার্চ 2025 – এপ্রিল 2025',
        'project-4-date': 'ফেব্রুয়ারি 2025 – মার্চ 2025',
        'project-5-date': 'মার্চ 2025 – মার্চ 2025',
        
        // Project Titles
        'project-1-title': 'ম্যাকুলার ডিজেনারেশন শনাক্তকরণের জন্য অপ্টিমাইজড ইনসেপশন-ভিত্তিক ডিপ লার্নিং আর্কিটেকচার',
        'project-2-title': 'ম্যাকুলার ডিজেনারেশন পূর্বাভাসের জন্য CNN মডেলের তুলনামূলক বিশ্লেষণ',
        'project-3-title': 'হিস্টোপ্যাথলজিক্যাল ছবি ব্যবহার করে RCNN-ভিত্তিক স্তন ক্যান্সার শনাক্তকরণ',
        'project-4-title': 'MERN ব্যবহার করে অনলাইন চিকিৎসা পরামর্শের জন্য ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন',
        'project-5-title': 'পাইথন ব্যবহার করে মাল্টি-থ্রেডেড ফাইল অনুসন্ধান',
        'project-1-domain': 'ডোমেইন: ডিপ লার্নিং, মেডিক্যাল ইমেজিং',
        'project-2-domain': 'ডোমেইন: কম্পিউটার ভিশন, মেডিক্যাল ইমেজিং',
        'project-3-domain': 'ডোমেইন: ডিপ লার্নিং, ক্যান্সার শনাক্তকরণ, মেডিক্যাল AI',
        'project-4-domain': 'ডোমেইন: ওয়েব ডেভেলপমেন্ট, হেলথকেয়ার টেক',
        'project-5-domain': 'ডোমেইন: পাইথন প্রোগ্রামিং, সিস্টেম ইউটিলিটি',
        
        // Project Descriptions
        'project-1-desc-1': 'তিনটি রেটিনাল ডেটাসেটে InceptionV1, V3, এবং ResNetV2 এর তুলনামূলক বিশ্লেষণের ভিত্তিতে InceptionV3 এবং InceptionResNetV2 এর সংমিশ্রণ করে একটি নতুন ডিপ লার্নিং আর্কিটেকচার ডিজাইন করেছেন।',
        'project-1-desc-2': 'সর্বোত্তম কার্যকারিতার বৈশিষ্ট্য চিহ্নিত করতে মডেল বেঞ্চমার্কিং পরিচালনা করেছেন।',
        'project-1-desc-3': 'উন্নত নিদান নির্ভুলতার জন্য গ্লোবাল ফিচার ফিউশন এবং রেগুলারাইজেশন লেয়ার ব্যবহার করে একটি হাইব্রিড আর্কিটেকচার প্রস্তাব করেছেন।',
        'project-2-desc-1': 'তিনটি ডেটাসেট ব্যবহার করে ম্যাকুলার ডিজেনারেশন পূর্বাভাসের জন্য ResNet50, VGG16, এবং GoogLeNet এর তুলনামূলক বিশ্লেষণ সম্পাদন করেছেন।',
        'project-2-desc-2': 'মডেল কার্যকারিতা বৃদ্ধির জন্য ডেটা প্রিপ্রোসেসিং এবং অগমেন্টেশন প্রয়োগ করেছেন।',
        'project-2-desc-3': 'ডেটাসেটে নির্ভুলতা, নির্দিষ্টতা, রিকল, এবং F1-স্কোরের ভিত্তিতে মডেলগুলি মূল্যায়ন করেছেন।',
        'project-2-desc-4': 'দ্রুত প্রশিক্ষণ এবং উন্নত ফলাফলের জন্য পূর্ব-প্রশিক্ষিত ImageNet ওয়েটের সাথে ট্রান্সফার লার্নিং ব্যবহার করেছেন।',
        'project-3-desc-1': 'হিস্টোপ্যাথলজিক্যাল ছবিগুলিকে বেনিগ্ন বা ম্যালিগ্ন্যান্ট হিসেবে শ্রেণীবদ্ধ করতে রিজিয়ন-ভিত্তিক কনভলিউশনাল নিউরাল নেটওয়ার্ক (RCNN) ব্যবহার করে একটি AI-ভিত্তিক শনাক্তকরণ সিস্টেম তৈরি করেছেন।',
        'project-3-desc-2': 'ক্যান্সার অঞ্চলের নির্দিষ্ট স্থাননির্ণয় এবং শ্রেণীবিভাগের জন্য RCNN আর্কিটেকচারের সুবিধা গ্রহণ করেছেন।',
        'project-3-desc-3': 'বাস্তব জগতের হিস্টোপ্যাথলজিক্যাল ছবি ডেটাসেটে প্রক্রিয়াজাতকরণ এবং প্রশিক্ষণ দিয়েছেন।',
        'project-3-desc-4': 'রিয়েল-টাইম ছবি বিশ্লেষণের জন্য Flask ব্যবহার করে একটি পূর্ণ-স্ট্যাক ওয়েব ইন্টারফেস তৈরি করেছেন।',
        'project-3-desc-5': 'ম্যালিগ্ন্যান্সি শনাক্তকরণে উচ্চ নির্ভুলতা অর্জন করেছেন, যা প্রারম্ভিক ক্যান্সার শনাক্তকরণে সহায়ক।',
        'project-4-desc-1': 'অ্যাপয়েন্টমেন্ট, নিদান, এবং রোগীর রেকর্ড পরিচালনার জন্য একটি পূর্ণ-স্ট্যাক হেলথকেয়ার ড্যাশবোর্ড তৈরি করেছেন।',
        'project-4-desc-2': 'একটি দ্রুত, প্রতিক্রিয়াশীল UI এর জন্য React.js, Vite, এবং Axios ব্যবহার করে তৈরি করেছেন।',
        'project-4-desc-3': 'ড্যাশবোর্ড, অ্যাপয়েন্টমেন্ট ম্যানেজার, ডায়াগনোসিস ফর্ম, এবং পেশেন্ট হিস্টরি ভিউ এর মতো মডিউলার কম্পোনেন্ট ডিজাইন করেছেন।',
        'project-4-desc-4': 'কার্যকর ডেটা হ্যান্ডলিংএর জন্য Node.js, Express.js, এবং MongoDB দিয়ে RESTful APIs তৈরি করেছেন।',
        'project-4-desc-5': 'ESLint দিয়ে পরিচ্ছন্ন কোড কাঠামো, সুসংগঠিত লেআউট, এবং VS Code এবং Chrome DevTools ব্যবহার করে উন্নয়নকে অনুকূলিত করেছেন।',
        'project-5-desc-1': 'একাধিক ফাইল এবং ডিরেক্টরিতে কার্যকর প্যাটার্ন ম্যাচিংএর জন্য রেগুলার এক্সপ্রেশন (regex) সাপোর্ট সহ একটি মাল্টি-থ্রেডেড ফাইল অনুসন্ধান টুল তৈরি করেছেন।',
        'project-5-desc-2': 'দ্রুত কার্যকারিতার জন্য পাইথন থ্রেডিং ব্যবহার করেছেন।',
        'project-5-desc-3': 'জটিল প্যাটার্ন অনুসন্ধানের জন্য regex সাপোর্ট যোগ করেছেন।',
        'project-5-desc-4': 'বৃহৎ পরিসরের ডিরেক্টরি ট্রাভার্সালের জন্য অনুকূলিত করেছেন।'
    },
    as: {
        'name': 'দেবোলিনা দাস',
        'profile-title': 'ৱেব ডেভেলপাৰ',
        'download-cv': 'চিভি ডাউনল\'ড কৰক',
        'copy': 'কপি কৰক',
        
        // Numbers
        'number-01': '০১',
        'number-02': '০২',
        'number-03': '০৩',
        'number-04': '০৪',
        'proj-number-01': '০১',
        'proj-number-02': '০২',
        'proj-number-03': '০৩',
        'proj-number-04': '০৪',
        'proj-number-05': '০৫',
        
        // Dates
        'date-jul-2024-jun-2026': 'জুলাই 2024 – জুন 2026',
        'date-oct-2021-jul-2024': 'অক্টোবৰ 2021 – জুলাই 2024',
        'date-apr-2020-mar-2021': 'এপ্ৰিল 2020 – মাৰ্চ 2021',
        'date-apr-2018-mar-2019': 'এপ্ৰিল 2018 – মাৰ্চ 2019',
        'date-jun-2025': 'জুন 2025',
        'date-mar-2024': 'মাৰ্চ 2024',
        'date-dec-2023': 'ডিচেম্বৰ 2023',
        'date-nov-2023': 'নভেম্বৰ 2023',
        'date-sep-2021': 'চেপ্টেম্বৰ 2021',
        
        // Credential IDs
        'cred-id-1': 'UC-168a1905-cee5-49b5-93a2-fd3b8a205c51',
        'cred-id-2': 'UC-a533d8bb-77d9-44aa-a310-24c25dad64f3',
        'cred-id-3': 'PDV H39 Y84',
        
        // Grades
        'grade-9-01': '9.01/10',
        'grade-91': '91%',
        'grade-90-4': '90.4%',
        
        'my-story-title': 'মোৰ কাহিনী',
        'my-story-content': 'মই ভেল্লৰ ইনষ্টিটিউট অফ টেকন\'লজি (VIT), ভেল্লৰ কেম্পাছত দ্বিতীয় বছৰৰ MCA ছাত্ৰ, আৰু মই প্ৰযুক্তিৰ সদায় বিকাশমান জগতখন অন্বেষণ কৰাত আগ্ৰহী। মই প্ৰযুক্তিক মানৱতাৰ আটাইতকৈ ডাঙৰ প্ৰত্যাহ্বানসমূহ সমাধান কৰা আৰু অৰ্থপূৰ্ণ পৰিবৰ্তন আনিবলৈ এক শক্তিশালী অনুঘটক হিচাপে দেখোঁ। কৌতূহলী মনোভাৱ আৰু শিকাৰ তাড়না লৈ, মই নতুন সুযোগসমূহ গ্ৰহণ কৰিবলৈ, মোৰ দক্ষতা সম্প্ৰসাৰণ কৰিবলৈ আৰু প্ৰভাৱশালী সমাধানত অৱদান দিবলৈ আগ্ৰহী। মোৰ ক্যারিয়ার বাড়াতে এবং পাৰ্থক্য গঢ়িবলৈ উত্তেজিত!',
        
        'about-title': 'সম্পৰ্কে',
        'tech-stack': 'টেক ষ্টেক',
        'education': 'শিক্ষা',
        'certifications': 'সনদপত্ৰ',
        'languages': 'ভাষা',
        
        'projects-title': 'প্ৰকল্প',
        
        'contacts-title': 'যোগাযোগ',
        'reach-out': 'যোগাযোগ কৰক!',
        'location': 'ভাৰত 🇮🇳',
        
        // Tech Stack Items
        'prog-lang': 'প্ৰগ্ৰামিং ভাষা',
        'version-control': 'ভাৰ্শন কন্ট্ৰোল',
        'web-dev': 'ৱেব ডেভেলপমেণ্ট',
        'databases': 'ডাটাবেচ',
        'ai-ml': 'এআই/এমএল',
        'design-tools': 'ডিজাইন টুলছ',
        'devops-tools': 'ডেভঅপছ আৰু টুলছ',
        
        // Technical Terms
        'java': 'জাভা',
        'python': 'পাইথন',
        'git': 'গিট',
        'github': 'গিটহব',
        'mern': 'MERN স্ট্যাক',
        'mongodb': 'মোংগোডব',
        'express': 'এক্সপ্রেস.জেএস',
        'react': 'রিএক্ট',
        'nodejs': 'নোড.জেএস',
        'html': 'এচটিএমএল',
        'css': 'সিএসএস',
        'javascript': 'জাভাস্ক্রিপ্ট',
        'mysql': 'মায়স্কুএল',
        'artificial-intelligence': 'বিজ্ঞানিক বুদ্ধিমত্তা',
        'machine-learning': 'বিজ্ঞানিক অধ্যয়ন',
        'deep-learning': 'গহরা অধ্যয়ন',
        'figma': 'ফ়িগমা',
        'adobe-indesign': 'এডোব ইনডিসেইন',
        'docker': 'ডকার',
        
        // Education Items
        'vit': 'ভেল্লোর ইনস্টিটিউট অফ টেকনোলজি (VIT), ভেল্লোর',
        'mca': 'মাস্টার অফ কম্পিউটার এপ্লিকেশনস (MCA), ইনফরমেশন টেকনোলজি',
        'rgu': 'রয়্যাল গ্লোবাল ইউনিভার্সিটি',
        'bca': 'ব্যাচেলর অফ কম্পিউটার এপ্লিকেশনস (BCA), ইনফরমেশন টেকনোলজি',
        'sps': 'সাউথ পয়েন্ট স্কুল – ভারত',
        'class-12': 'ক্লাস 12, কমার্স',
        'class-10': 'ক্লাস 10',
        'grade': 'গ্রেড',
        
        // Certification Items
        'docker-foundations': 'ডকার ফাউন্ডেশনস প্ৰফেশনাল সার্টিফিকেট',
        'docker-inc': 'ডকার, ইংক',
        'kaggle-ml': 'মশিন লার্নিং এর পরিচয়',
        'kaggle': 'ক্যাগল',
        'aws-cloud': 'AWS এ ক্লাউড কম্পিউটিং: অলটিমেট বিগিনার্স কোর্স – 2023',
        'udemy': 'উডেমি',
        'pytorch-dl': 'পাইথন এবং পাইটর্চ দিয়ে ইমেজ ক্লাসিফিকেশন এর জন্য ডিপ লার্নিং',
        'google-digital': 'ডিজিটাল মার্কেটিং এর মৌলিক নীতি',
        'google': 'গুগল',
        'issued': 'জারি করা হয়েছে',
        'credential-id': 'ক্রেডেনশিয়াল আইডি',
        
        // Language Items
        'assamese': 'অসমীয়া',
        'bengali': 'বঙালী',
        'english': 'ইংৰাজী',
        'hindi': 'হিন্দি',
        'professional-working': 'পেছাদাৰী কামৰ দক্ষতা',
        'native-bilingual': 'মূল বা দ্বিভাষিক দক্ষতা',
        'full-professional': 'সম্পূৰ্ণ পেছাদাৰী দক্ষতা',
        
        // Project Items
        'project-1-title': 'অপ্ৰাইভেড ইনচেপচন-বেছড ডীপ লাৰ্নিঙ এৰ্কিটেকচাৰ যা মেকুলাৰ ডিগ্ৰেডেচন ডিটেকচনৰ বাবে অপ্টিমাইজড কৰা হয়',
        'project-1-domain': 'ডোমেইন: ডীপ লাৰ্নিঙ, মেডিকেল ইমেজ',
        'project-1-desc-1': 'ইনচেপচনভি3 আৰু ইনচেপচনৰেচেটভি2 ক ফুজ কৰি এটা নৱ ডীপ লাৰ্নিঙ এৰ্কিটেকচাৰ ডিজাইন কৰা হয় যা ইনচেপচনভি1, ভি3 আৰু ৰেচেটভি2 ৰ তুলনামূলক বিশ্লেষণৰ ওপৰত ভিত্তি কৰি।',
        'project-1-desc-2': 'মডেল বেঞ্চমাৰ্কিঙ কৰি অধিকতম প্ৰদৰ্শন বৈশিষ্ট্যসমূহ বিচাৰি পায়।',
        'project-1-desc-3': 'এটা হাইব্ৰিড এৰ্কিটেকচাৰ ব্যৱহাৰ কৰি উন্নত ডিয়াগনষ্টিক প্ৰেচিজন প্ৰস্তাৱ কৰা হয়।',
        
        'project-2-title': 'CNN মডেলসমূহৰ তুলনামূলক বিশ্লেষণ যা মেকুলাৰ ডিগ্ৰেডেচন পূৰ্বানুমানিত কৰে',
        'project-2-domain': 'ডোমেইন: কম্পিউটাৰ ভিজ্যুৱেল বিজ্ঞান, মেডিকেল ইমেজ',
        'project-2-desc-1': 'ৰেচেট50, VGG16 আৰু GoogLeNet ৰ তুলনামূলক বিশ্লেষণ যা তিনটা ডেটাছেট ব্যৱহাৰ কৰি মেকুলাৰ ডিগ্ৰেডেচন পূৰ্বানুমানিত কৰে।',
        'project-2-desc-2': 'মডেল প্ৰদৰ্শন উন্নত কৰাৰ বাবে ডেটা প্ৰিপ্ৰচেছিঙ আৰু এজেন্সমেণ্ট কৰে।',
        'project-2-desc-3': 'ডেটাছেটসমূহত এক্সেক্ট আৰু এক্সেক্ট কৰি মডেলসমূহ মূল্যায়ন কৰে।',
        'project-2-desc-4': 'ট্ৰান্সফাৰ লাৰ্নিঙ ব্যৱহাৰ কৰি পূৰ্ব-প্ৰশিক্ষিত ImageNet ৱেটসমূহৰ সৈতে তেজল প্ৰশিক্ষণ আৰু উন্নত ফলাফল পায়।',
        
        'project-3-title': 'RCNN ভিত্তিক ব্ৰেচ্ট কেঞ্চাৰ ডিটেকচন যা হিচ্ট\'পাথ\'লজিকেল ছবিসমূহ ব্যৱহাৰ কৰে',
        'project-3-domain': 'ডোমেইন: ডীপ লাৰ্নিঙ, কেঞ্চাৰ ডিটেকচন, মেডিকেল AI',
        'project-3-desc-1': 'এটা ডীপ লাৰ্নিঙ ভিত্তিক ডিটেকচন চিষ্টেম বিকাশ কৰে যা হিচ্ট\'পাথ\'লজিকেল ছবিসমূহক বেনিগ্ন বা অচেনা বিভাজন কৰে।',
        'project-3-desc-2': 'RCNN এৰ্কিটেকচাৰ ব্যৱহাৰ কৰি অচেনা অৱস্থান আৰু বিভাজন প্ৰস্তাৱ কৰে।',
        'project-3-desc-3': 'বাস্তৱ জীৱন হিচ্ট\'পাথ\'লজিকেল ছবি ডেটাছেটসমূহত প্ৰচেছ আৰু প্ৰশিক্ষণ কৰে।',
        'project-3-desc-4': 'এটা পূৰ্ণ ষ্টেক ওৱেব ইণ্টাৰফেচ বিকাশ কৰে যা বাস্তৱ সময় ছবি বিশ্লেষণৰ বাবে Flask ব্যৱহাৰ কৰে।',
        'project-3-desc-5': 'উন্নত অচেনা পাবলৈ উন্নত অচেনা।',
        
        'project-4-title': 'MERN ব্যৱহাৰ কৰি অনলাইন চিকিৎসা কাউন্সেলেচনৰ পূৰ্ণ ষ্টেক ওৱেব এপ্লিকেচন',
        'project-4-domain': 'ডোমেইন: ওৱেব ডেভেলপমেণ্ট, চিকিৎসা টেক',
        'project-4-desc-1': 'এটা পূৰ্ণ ষ্টেক চিকিৎসা ডাশব\'ৰ্ড বিকাশ কৰে যা নোটচ, ডিয়াগন\'চিছ আৰু ৰেকৰ্ড কৰাৰ বাবে অপ্ৰাইভেড।',
        'project-4-desc-2': 'React.js, Vite আৰু Axios ব্যৱহাৰ কৰি এটা তেজল, প্ৰতিক্ৰিয়াশীল UI সৃষ্টি কৰে।',
        'project-4-desc-3': 'ডাশব\'ৰ্ড, অপ্ৰাইভেড মেনেজাৰ, ডিয়াগন\'চিছ ফৰ্ম, আৰু ৰেকৰ্ড ভিউ কৰি অংশীদাৰ কম্পোনেণ্টসমূহ মডিউলাৰ হিচাপে ডিজাইন কৰে।',
        'project-4-desc-4': 'Node.js, Express.js আৰু MongoDB ব্যৱহাৰ কৰি কুশল ডেটা হেণ্ডলিঙৰ বাবে RESTful APIs সৃষ্টি কৰে।',
        'project-4-desc-5': 'ESLint ব্যৱহাৰ কৰি সাফ কোড সংৰক্ষণ নিশ্চিত কৰে, লেআউট সৰ্ট কৰি, আৰু VS Code আৰু Chrome DevTools ব্যৱহাৰ কৰি ডেভেলপমেণ্ট উন্নত কৰে।',
        
        'project-5-title': 'পাইথন ব্যৱহাৰ কৰি বহু-থ্ৰেড ফাইল চাৰ্চ',
        'project-5-domain': 'ডোমেইন: পাইথন প্ৰগ্ৰামিঙ, চিষ্টেম ইউটিলিটি',
        'project-5-desc-1': 'এটা বহু-থ্ৰেড ফাইল চাৰ্চ টুল বিকাশ কৰে যা বহুল অধিক ফাইল আৰু ডিৰেক্টৰিসমূহত বহুল অচেনা পেটাৰ্ন মেচিঙৰ বাবে নিম্নতম অভিব্যক্তি (regex) সমৰ্থন কৰে।',
        'project-5-desc-2': 'পাইথন থ্ৰেডিঙ ব্যৱহাৰ কৰি তেজল প্ৰদৰ্শন পায়।',
        'project-5-desc-3': 'জটিল পেটাৰ্ন চোৱাৰ বাবে regex সমৰ্থন যোগ কৰে।',
        'project-5-desc-4': 'ডাঙৰ পামানৰ ডিৰেক্টৰি ট্ৰাভাৰ্চেলৰ বাবে উন্নত কৰে।',
        
        'copyright': '© ২০২৫ দেবোলিনা দাস। সৰ্বস্বত্ব সংৰক্ষিত।',
        
        // Project Dates
        'project-1-date': 'অক্টোবৰ 2024 – এপ্ৰিল 2025',
        'project-2-date': 'চেপ্টেম্বৰ 2023 – জানুয়াৰি 2024',
        'project-3-date': 'মাৰ্চ 2025 – এপ্ৰিল 2025',
        'project-4-date': 'ফেব্ৰুয়াৰি 2025 – মাৰ্চ 2025',
        'project-5-date': 'মাৰ্চ 2025 – মাৰ্চ 2025',
        
        // Project Titles
        'project-1-title': 'মেকুলাৰ ডিজেনাৰেশন চিনাক্তকৰণৰ বাবে অপ্টিমাইজড ইনচেপচন-ভিত্তিক ডীপ লাৰ্নিং আৰ্কিটেকচাৰ',
        'project-2-title': 'মেকুলাৰ ডিজেনাৰেশন পূৰ্বাভাসৰ বাবে CNN মডেলৰ তুলনামূলক বিশ্লেষণ',
        'project-3-title': 'হিস্টোপ্যাথলজিক্যাল ছবি ব্যবহাৰ কৰি RCNN-ভিত্তিক স্তন ক্যান্সাৰ চিনাক্তকৰণ',
        'project-4-title': 'MERN ব্যবহাৰ কৰি অনলাইন চিকিৎসা পৰামৰ্শৰ বাবে ফুল-স্ট্যাক ওয়েব এপ্লিকেশন',
        'project-5-title': 'পাইথন ব্যবহাৰ কৰি মাল্টি-থ্ৰেডেড ফাইল অনুসন্ধান',
        'project-1-domain': 'ডোমেইন: ডীপ লাৰ্নিং, মেডিক্যাল ইমেজিং',
        'project-2-domain': 'ডোমেইন: কম্পিউটাৰ ভিশন, মেডিক্যাল ইমেজিং',
        'project-3-domain': 'ডোমেইন: ডীপ লাৰ্নিং, ক্যান্সাৰ চিনাক্তকৰণ, মেডিক্যাল AI',
        'project-4-domain': 'ডোমেইন: ওয়েব ডেভেলপমেন্ট, হেলথকেয়াৰ টেক',
        'project-5-domain': 'ডোমেইন: পাইথন প্ৰোগ্ৰামিং, সিস্টেম ইউটিলিটি',
        
        // Project Descriptions
        'project-1-desc-1': 'তিনটা ৰেটিনাল ডেটাছেটত InceptionV1, V3, আৰু ResNetV2 ৰ তুলনামূলক বিশ্লেষণৰ ওপৰত ভিত্তি কৰি InceptionV3 আৰু InceptionResNetV2 ক ফুজ কৰি এটা নৱ ডীপ লাৰ্নিং এৰ্কিটেকচাৰ ডিজাইন কৰা হয়।',
        'project-1-desc-2': 'অধিকতম প্ৰদৰ্শন বৈশিষ্ট্যসমূহ বিচাৰি পায় মডেল বেঞ্চমাৰ্কিং কৰি।',
        'project-1-desc-3': 'উন্নত ডিয়াগনষ্টিক প্ৰেচিজনৰ বাবে গ্লোবাল ফিচাৰ ফিউজন আৰু ৰেগুলাৰাইজেশন লেয়াৰ ব্যৱহাৰ কৰি এটা হাইব্ৰিড এৰ্কিটেকচাৰ প্ৰস্তাৱ কৰা হয়।',
        'project-2-desc-1': 'তিনটা ডেটাছেট ব্যৱহাৰ কৰি মেকুলাৰ ডিগ্ৰেডেচন পূৰ্বানুমানিত কৰে ResNet50, VGG16, আৰু GoogLeNet ৰ তুলনামূলক বিশ্লেষণ কৰে।',
        'project-2-desc-2': 'মডেল প্ৰদৰ্শন উন্নত কৰাৰ বাবে ডেটা প্ৰিপ্ৰচেছিং আৰু এজেন্সমেণ্ট কৰে।',
        'project-2-desc-3': 'ডেটাছেটসমূহত এক্সেক্ট আৰু এক্সেক্ট কৰি মডেলসমূহ মূল্যায়ন কৰে।',
        'project-2-desc-4': 'ট্রান্সফাৰ লাৰ্নিং ব্যৱহাৰ কৰি পূৰ্ব-প্ৰশিক্ষিত ImageNet ৱেটসমূহৰ সৈতে তেজল প্ৰশিক্ষণ আৰু উন্নত ফলাফল পায়।',
        'project-3-desc-1': 'এটা ডীপ লাৰ্নিং ভিত্তিক ডিটেকচন চিষ্টেম বিকাশ কৰে যা হিচ্ট\'\'পাথ\'\'লজিকেল ছবিসমূহক বেনিগ্ন বা অচেনা বিভাজন কৰে।',
        'project-3-desc-2': 'RCNN এৰ্কিটেকচাৰ ব্যৱহাৰ কৰি অচেনা অৱস্থান আৰু বিভাজন প্ৰস্তাৱ কৰে।',
        'project-3-desc-3': 'বাস্তৱ জীৱন হিচ্ট\'\'পাথ\'\'লজিকেল ছবি ডেটাছেটসমূহত প্ৰচেছ আৰু প্ৰশিক্ষণ কৰে।',
        'project-3-desc-4': 'এটা পূৰ্ণ ষ্টেক ওৱেব ইণ্টাৰফেচ বিকাশ কৰে যা বাস্তৱ সময় ছবি বিশ্লেষণৰ বাবে Flask ব্যৱহাৰ কৰে।',
        'project-3-desc-5': 'উন্নত অচেনা পাবলৈ উন্নত অচেনা।',
        'project-4-desc-1': 'এটা পূৰ্ণ ষ্টেক চিকিৎসা ডাশব\'\'ৰ্ড বিকাশ কৰে যা নোটচ, ডিয়াগন\'\'চিছ আৰু ৰেকৰ্ড কৰাৰ বাবে অপ্ৰাইভেড।',
        'project-4-desc-2': 'React.js, Vite আৰু Axios ব্যৱহাৰ কৰি এটা তেজল, প্ৰতিক্ৰিয়াশীল UI সৃষ্টি কৰে।',
        'project-4-desc-3': 'ডাশব\'\'ৰ্ড, অপ্ৰাইভেড মেনেজাৰ, ডিয়াগন\'\'চিছ ফৰ্ম, আৰু ৰেকৰ্ড ভিউ কৰি অংশীদাৰ কম্পোনেণ্টসমূহ মডিউলাৰ হিচাপে ডিজাইন কৰে।',
        'project-4-desc-4': 'Node.js, Express.js আৰু MongoDB ব্যৱহাৰ কৰি কুশল ডেটা হেণ্ডলিংৰ বাবে RESTful APIs সৃষ্টি কৰে।',
        'project-4-desc-5': 'ESLint ব্যৱহাৰ কৰি সাফ কোড সংৰক্ষণ নিশ্চিত কৰে, লেআউট সৰ্ট কৰি, আৰু VS Code আৰু Chrome DevTools ব্যৱহাৰ কৰি ডেভেলপমেণ্ট উন্নত কৰে।',
        'project-5-desc-1': 'এটা বহু-থ্ৰেড ফাইল চাৰ্চ টুল বিকাশ কৰে যা বহুল অধিক ফাইল আৰু ডিৰেক্টৰিসমূহত বহুল অচেনা পেটাৰ্ন মেচিংৰ বাবে নিম্নতম অভিব্যক্তি (regex) সমৰ্থন কৰে।',
        'project-5-desc-2': 'পাইথন থ্ৰেডিং ব্যৱহাৰ কৰি তেজল প্ৰদৰ্শন পায়।',
        'project-5-desc-3': 'জটিল পেটাৰ্ন চোৱাৰ বাবে regex সমৰ্থন যোগ কৰে।',
        'project-5-desc-4': 'ডাঙৰ পামানৰ ডিৰেক্টৰি ট্রাভাৰ্চেলৰ বাবে উন্নত কৰে।'
    }
};

// Function to translate the website
function translateWebsite(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update current language display
    const langNames = {
        'en': { name: 'English', country: 'UK' },
        'hi': { name: 'हिंदी', country: 'IN' },
        'bn': { name: 'বাংলা', country: 'IN' },
        'as': { name: 'অসমীয়া', country: 'IN' }
    };
    
    if (langNames[lang]) {
        currentLang.textContent = langNames[lang].name;
        currentCountry.textContent = langNames[lang].country;
    }
    
    // Store selected language
    localStorage.setItem('selectedLanguage', lang);
}

// Toggle language dropdown
languageSelector.addEventListener('click', function(e) {
    e.stopPropagation();
    languageDropdown.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    if (!languageSelector.contains(e.target)) {
        languageDropdown.classList.remove('active');
    }
});

// Handle language selection
document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        
        // Translate the website
        translateWebsite(lang);
        
        // Close dropdown
        languageDropdown.classList.remove('active');
        
        console.log(`Language changed to: ${lang}`);
    });
});

// Load saved language preference or default to English
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = 'en'; // Always default to English on first load
    translateWebsite(savedLang);
});
