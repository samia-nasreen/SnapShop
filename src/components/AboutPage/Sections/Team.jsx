import { useState } from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Tom Cruise",
      position: "Founder & Chairman",
      imgSrc: "/src/assets/team1.jpg",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
    {
      name: "Emma Watson",
      position: "Managing Director",
      imgSrc: "/src/assets/team2.jpg",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
    {
      name: "Will Smith",
      position: "Product Designer",
      imgSrc: "/src/assets/team3.jpg",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
    {
      name: "Scarlett Johansson",
      position: "Marketing Head",
      imgSrc: "/src/assets/team2.jpg",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
    {
      name: "Chris Hemsworth",
      position: "Lead Developer",
      imgSrc: "/src/assets/team3.jpg",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
    {
      name: "Robert Downey Jr.",
      position: "CEO",
      imgSrc: "/src/assets/team1.jpg",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
    {
      name: "Zac Effron",
      position: "Brand Ambassador",
      imgSrc: "/src/assets/team3.jpg",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
    {
      name: "Leonardo DiCaprio",
      position: "Environmental Advisor",
      imgSrc: "/src/assets/team1.jpg",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
    {
      name: "Jennifer Lawrence",
      position: "Creative Director",
      imgSrc: "/src/assets/team2.jpg",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  ];

  const membersPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(teamMembers.length / membersPerPage);

  const getCurrentMembers = () => {
    const startIndex = currentPage * membersPerPage;
    return teamMembers.slice(startIndex, startIndex + membersPerPage);
  };

  const handlePageChange = (index) => {
    setCurrentPage(index);
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap">
          {getCurrentMembers().map((member, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 py-6">
              <div className="overflow-hidden rounded-md shadow-md">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="text-3xl font-medium mt-8 mb-2">{member.name}</h3>
              <p className="text-gray-700">{member.position}</p>
              <div className="flex space-x-4 mt-4">
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/src/assets/x.png"
                    alt="Twitter"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/src/assets/ig.png"
                    alt="Instagram"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/src/assets/in.png"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              className={`w-3 h-3 rounded-full ${
                currentPage === index
                  ? "bg-red-500 border-2 border-gray-300"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
