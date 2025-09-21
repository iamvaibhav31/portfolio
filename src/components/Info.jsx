import React from 'react';
import { basicPortfolioInfo } from '../constant';
// import { TextType, CurvedLoop } from 'react-bits'; // TextType for typing, CurvedLoop for logo animation
import { Linkedin, Github, Globe, Code, Mail, Phone, MapPin } from 'lucide-react';
import {TextType ,LogoLoop} from './custom';



const Info = () => {
  const { name, title, contact, location, profiles } = basicPortfolioInfo;

  // State for TextType sequencing



  // Helper to get icon based on platform
  const getPlatformIcon = (platform) => {
    switch (platform?.toLowerCase()) {
      case 'linkedin':
        return <Linkedin className="h-4 w-4 group-hover:translate-x-1 transition-transform" />;
      case 'github':
        return <Github className="h-4 w-4 group-hover:translate-x-1 transition-transform" />;
      case 'leetcode':
        return <Code className="h-4 w-4 group-hover:translate-x-1 transition-transform" />;
      default:
        return <Globe className="h-4 w-4 group-hover:translate-x-1 transition-transform" />; // For portfolio/custom
    }
  };

  return (
    <div className='w-full lg:w-1/3 h-full border-b lg:border-b-0 lg:border-r border-border bg-card text-foreground font-monospace-body flex flex-col justify-center items-center p-4 sm:p-6 text-center space-y-4 '>
    <div className="relative mb-4 group w-24 h-24 sm:w-32 sm:h-32">
        <img
          src="/src/assets/unname.jpg" 
          alt={`${name}'s profile photo`}
          className="w-full h-full rounded-full object-cover border-4 border-primary shadow-md"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Text Type for Name */}
      <TextType
            text={name}
            speed={100} 
            className="inline text-2xl sm:text-3xl md:text-4xl font-bold text-primary select-none"
          />

        <h2 className="text-base sm:text-lg md:text-xl text-muted-foreground select-none">{title}</h2>


      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4 text-muted-foreground" />
        <span>{location}</span>
      </div>

      {/* Contact */}
      <div className="space-y-2 text-sm text-foreground">
        <div className="flex items-center justify-center space-x-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <span>{contact.phone}</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">
            {contact.email}
          </a>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 pt-4">
        {profiles.map((profile, index) => (
          <a
            key={index}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            aria-label={`View ${profile.platform || 'profile'} on ${profile.username}`}
          >
            {getPlatformIcon(profile.platform)}
            <span>{profile.platform}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Info;