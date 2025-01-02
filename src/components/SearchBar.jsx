/* eslint-disable react/prop-types */
export default function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className="row justify-content-center mb-4">
            <div className="col-md-6">
                <input
                    type="text"
                    name="users"
                    className="form-control"
                    placeholder="Search by email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    );
}
