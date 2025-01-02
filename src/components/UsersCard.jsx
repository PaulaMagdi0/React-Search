/* eslint-disable react/prop-types */
export default function UsersCard(props) {
  const { usersItem } = props;
  return (
      <div className="card h-100 shadow-sm">
          <img src={usersItem.image} className="card-img-top" alt="User" />
          <div className="card-body">
              <h5 className="card-title text-primary">{usersItem.firstName} {usersItem.lastName}</h5>
              <p className="card-text text-muted">{usersItem.email}</p>
          </div>
      </div>
  );
}
