/* eslint-disable react/prop-types */
const SocialLinks = ({ twitter, instagram, linkedin }) => {
  return (
    <div className="flex space-x-4 mt-4">
      <a href={twitter} target="_blank" rel="noopener noreferrer">
        <img src="/src/assets/x.png" alt="Twitter" className="w-6 h-6" />
      </a>
      <a href={instagram} target="_blank" rel="noopener noreferrer">
        <img src="/src/assets/ig.png" alt="Instagram" className="w-6 h-6" />
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <img src="/src/assets/in.png" alt="LinkedIn" className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialLinks;
