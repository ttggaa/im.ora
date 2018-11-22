import React from 'react';

const ThemeOne = ({mentorImage, alt, title, des01, des02, para}) => (
  <div className="page03-theme page03-theme_one">
    <img src={mentorImage} alt={alt} />
    <div className="page03-theme-content">
      <h4>{title}</h4>
      <div><i></i>{des01}</div>
      <div><i></i>{des02}</div>
      <p className="text-justify">{para}</p>
    </div>
  </div>
);

const ThemeTwo = ({mentorImage, alt, title, des01, des02, para}) => (
  <div className="page03-theme page03-theme_two">
    <div className="page03-theme-content">
      <h4>{title}</h4>
      <div><i></i>{des01}</div>
      <div><i></i>{des02}</div>
      <p className="text-justify">{para}</p>
    </div>
    <img src={mentorImage} alt={alt} />
  </div>
);

const MentorTheme = ({themeType, mentorImage, alt, title, des01, des02, para}) => {
  if (themeType === "themeOne") {
    return <ThemeOne
      mentorImage={mentorImage}
      alt={alt} 
      title={title}
      des01={des01}
      des02={des02}
      para={para}
    />;
  }

  if (themeType === "themeTwo") {
    return <ThemeTwo
      mentorImage={mentorImage}
      alt={alt}
      title={title}
      des01={des01}
      des02={des02}
      para={para}
    />;
  }
};

export default MentorTheme;
