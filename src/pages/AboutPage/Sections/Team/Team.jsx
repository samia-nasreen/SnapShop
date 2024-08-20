import { useState } from "react";
import { teamMembers } from "../../../../data/teamMembers";
import MemberCard from "./MemberCard";

const Team = () => {
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
            <MemberCard
              key={index}
              imgSrc={member.imgSrc}
              name={member.name}
              position={member.position}
              twitter={member.twitter}
              instagram={member.instagram}
              linkedin={member.linkedin}
            />
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
