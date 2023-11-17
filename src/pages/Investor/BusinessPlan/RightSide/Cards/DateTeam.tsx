import { useNavigate } from "react-router-dom";
import LineContainer from "src/components/LineContainer";
import SmallUserCard from "src/components/SmallUserCard";
import { users } from "src/services/api-examples/user";

const DateTeam = () => {
  const navigate = useNavigate();

  return (
    <LineContainer>
      <section className="flex flex-col gap-3">
        <div className="my-2">
          <span className="text-[14pt] text-gray-900 font-bold">Team</span>

          <div className="flex flex-row gap-1 items-start pt-3">
            {users.slice(1, 5).map((user) => (
              <SmallUserCard
                onClick={() => navigate(`/profile/${user.userId}`)}
                img={user.img}
                name={user.firstName}
                role={user.role}
              />
            ))}
          </div>
        </div>
      </section>
    </LineContainer>
  );
};

export default DateTeam;
