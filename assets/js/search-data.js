// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Books, Journal and conference papers",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Source code associated with my research projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Both success and failure will come into your life, no matter whether you make a mistake, just give yourself permission to be human",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses, Projects, Lectures, Talks, and Presentations",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-people",
          title: "People",
          description: "Members colloborated with me",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-has-been-selected-to-be-highligted-in-the-miccai-2022-special-issue-in-medical-image-analysis-wonderful-our-conference-paper-joint-modeling-of-image-and-label-statistics-for-enhancing-model-generalizability-of-medical-image-segmentation-has-been-selected-as-one-of-the-best-papers-of-miccai-2022-to-be-highligted-in-the-miccai-2022-special-issue-in-medical-image-analysis-thanks-to-the-contributions-of-hangqi-zhou-and-yibo-gao",
          title: 'Our paper has been selected to be highligted in the MICCAI 2022 Special...',
          description: "",
          section: "News",},{id: "news-i-got-a-postdoctoral-research-assistant-position-in-university-of-oxford-thanks-to-prof-clare-verrill-i-got-an-offer-on-postdoctoral-research-assistant-in-computational-pathology-i-look-forward-to-joining-university-of-oxford-and-doing-a-project-on-urological-cancer-pathology-ai-beyond-prostate",
          title: 'I got a Postdoctoral Research Assistant position in University of Oxford Thanks to...',
          description: "",
          section: "News",},{id: "news-i-got-a-research-associate-position-in-univeersity-of-cambridge-thanks-to-dr-mireia-crispin-ortuzar-i-got-an-offer-on-postdoctoral-research-associate-in-cancer-imaging-i-look-forward-to-joining-university-of-cambridge-and-doing-projects-on-the-integration-of-machine-learning-and-multi-omics-data-analysis-for-pan-cancer",
          title: 'I got a Research Associate position in Univeersity of Cambridge ❗❗❗ Thanks to...',
          description: "",
          section: "News",},{id: "news-we-got-media-miccai-best-paper-award-2023",
          title: 'We got MedIA MICCAI Best Paper Award 2023',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_6/";
            },},{id: "news-we-founded-miccai-sig-xmedia-thrilled-to-announce-we-establish-the-mccai-special-interest-group-on-explainable-ai-for-medical-image-analysis-sig-xmedia-i-am-serving-as-the-president-of-sig-xmedia-if-you-have-any-interest-in-xmedia-welcome-to-join-our-group",
          title: 'We founded MICCAI SIG-xMedIA 🚀🚀🚀 Thrilled to announce we establish the MCCAI Special...',
          description: "",
          section: "News",},{id: "news-flash-talk-on-bayesian-modeling-for-medical-image-segmentation-thanks-to-the-organizers-of-robust-cancer-early-detection-systems-under-distribution-shifts-and-uncertainty-workshop-it-was-a-wonderful-opportunity-to-give-a-talk-on-bayesian-modeling-for-medical-image-segmentation",
          title: 'Flash talk on Bayesian Modeling for Medical Image Segmentation 🌈🌈🌈 Thanks to the...',
          description: "",
          section: "News",},{id: "news-guest-lecture-on-image-processing-and-analysis",
          title: 'Guest lecture on Image Processing and Analysis',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-join-sig-xmedia-for-advancing-explainable-ai-in-medical-imaging",
          title: 'Join SIG-xMedIA for Advancing Explainable AI in Medical Imaging',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4/";
            },},{id: "news-join-us-the-miccai-2025-care-challenge-is-live-welcome-to-participate-our-miccai-2025-care-challenge-toward-real-world-medical-image-analysis-we-provide-1300-cases-from-18-centers",
          title: 'Join us—The MICCAI 2025 CARE Challenge is live! 🌈🌈🌈 Welcome to participate our...',
          description: "",
          section: "News",},{id: "news-our-miccai-sig-xmedia-online-seminar-is-taking-place",
          title: 'Our MICCAI SIG-xMedIA Online Seminar is taking place!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_9/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/shangqigao", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/shangqi-gao-a93459290", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-4567-1636", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=D-jg5rUAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
