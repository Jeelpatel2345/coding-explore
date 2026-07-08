import "./Members.css";
import members from "../data/members";
import { useState } from "react";

function Members() {

    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState("All");

    const filteredMembers = members.filter((member) => {

        const matchesSearch = member.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesRole =
            roleFilter === "All" ||
            member.role === roleFilter;

        return matchesSearch && matchesRole;
    });

    return (

        <section className="members-section">

            <div className="members-container">

                <span className="members-tag">
                    👥 Club Members
                </span>

                <h2 className="members-title">
                    Meet Our Club Members
                </h2>

                <p className="members-description">
                    Our Coding Club is powered by passionate students who
                    collaborate, organize events, build projects and create
                    innovative solutions together.
                </p>

                {/* Search & Filter */}

                <div className="members-toolbar">

                    <input
                        type="text"
                        placeholder="Search Member..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <select
                        value={roleFilter}
                        onChange={(e) => setRoleFilter(e.target.value)}
                    >

                        <option value="All">
                            All Members
                        </option>

                        <option value="Student Representative">
                            Student Representative
                        </option>

                        <option value="Committee Member">
                            Committee Member
                        </option>

                        <option value="Student Coordinator">
                            Student Coordinator
                        </option>

                        <option value="Student Co-Coordinator">
                            Student Co-Coordinator
                        </option>

                    </select>

                </div>

                {/* Total Members */}

                <div className="members-count">

                    Total Members :
                    <span> {filteredMembers.length}</span>

                </div>

                {/* Members Table */}

                <div className="members-table">

                    <div className="table-header">

                        <div>Name</div>

                        <div>Role</div>

                    </div>

                    {

                        filteredMembers.length > 0 ? (

                            filteredMembers.map((member, index) => (

                                <div
                                    className="table-row"
                                    key={index}
                                >

                                    <div className="member-name">

                                        {member.name}

                                    </div>

                                    <div className="member-role">

                                        {member.role}

                                    </div>

                                </div>

                            ))

                        ) : (

                            <div className="no-member">

                                No member found.

                            </div>

                        )

                    }

                </div>

            </div>

        </section>

    );
}

export default Members;