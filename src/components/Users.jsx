import { useState } from "react";
import usersData from "../usersData.json";
import UsersCard from "./UsersCard";
import SearchBar from "./SearchBar";

const Users = () => {
    const [users] = useState(usersData);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredUsers = users.filter((user) =>
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container py-4">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="row g-4 py-5 cols-1 cols-sm-2 cols-md-3 cols-lg-4">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <div className="col" key={user.id}>
                            <UsersCard usersItem={user} />
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p className="text-muted">No users found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Users;
