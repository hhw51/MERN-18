import axios from "axios";
import  { useEffect, useState } from "react";

const Index = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/user/getAllUsers",
        {
          withCredentials: true,
        }
      );
      setUsers(data.response); // Update state with fetched users
      console.log(data.response); // Confirm data is fetched
    } catch (error) {
      console.error("Error fetching users:", error);
      // Handle error if necessary
    }
  };

  const User = ({ userName, firstName, lastName }) => {
    return (
      <div className="w-full h-full bg-white m-2 rounded flex flex-col items-center">
        <p>{userName}</p>
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
    );
  };

  useEffect(() => {
    getAllUsers();
  }, []); // Empty dependency array means this runs once on component mount

  return (
    <div className="bg-gray-500 w-screen h-screen ">
      <div className=" pt-4 font-semibold text-4xl text-center">All Users</div>
      {users.length ? (
        <div className=" flex gap-2 m-2">
          {users.map((user, index) => (
            <User
              key={index}
              userName={user.userName}
              firstName={user.firstName}
              lastName={user.lastName}
            />
          ))}
        </div>
      ) : (
        <p>No User Exist</p>
      )}
    </div>
  );
};

export default Index;
