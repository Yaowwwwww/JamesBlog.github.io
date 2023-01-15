import * as React from "react";

const Icons = () => {
  const icons = [
    {
      name: "Github",
      link: "https://github.com/acsoto",
      svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
        <path
          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
        </path>
      </svg>
    },
    {
      id: "mail",
      link: "mailto:me@zzhgo.com",
      svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21" fill="none" stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    },
    {
      id: "ins",
      link: "https://www.instagram.com/atksoto/",
      svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
      </svg>
    },
    {
      id: "bilibili",
      link: "https://space.bilibili.com/85122707/",
      svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                xmlns="http://www.w3.org/2000/svg">
        <rect x="1.3333" y="6" width="21.333" height="15.333" rx="4" ry="4" />
        <path d="m8 12.4v1.2" />
        <path d="m16 12.4v1.2" />
        <path d="m5.8853 2.6667 2.6667 2.6667" />
        <path d="m18.115 2.6667-2.6667 2.6667" />
      </svg>
    },
    {
      id: "rss",
      link: "/rss.xml",
      svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 11a9 9 0 0 1 9 9" />
        <path d="M4 4a16 16 0 0 1 16 16" />
        <circle cx="5" cy="19" r="1" />
      </svg>
    }
  ];

  return (
    <div className="grid grid-flow-col auto-cols-max justify-center gap-2 my-3">
      {icons.map(icon => (
        <a href={icon.link} className={"w-6 h-6"}>
          {icon.svg}
        </a>
      ))}
    </div>
  );
};

export default Icons;