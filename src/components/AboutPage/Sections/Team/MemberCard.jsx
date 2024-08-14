/* eslint-disable react/prop-types */
import SocialLinks from "./SocialLinks";

const MemberCard = ({
  imgSrc,
  name,
  position,
  twitter,
  instagram,
  linkedin,
}) => {
  return (
    <div className="w-full md:w-1/3 px-4 py-6">
      <div className="overflow-hidden rounded-md shadow-md">
        <img src={imgSrc} alt={name} className="w-full h-auto object-cover" />
      </div>
      <h3 className="text-3xl font-medium mt-8 mb-2">{name}</h3>
      <p className="text-gray-700">{position}</p>
      <SocialLinks
        twitter={twitter}
        instagram={instagram}
        linkedin={linkedin}
      />
    </div>
  );
};

export default MemberCard;
