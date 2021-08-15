import Address from "../../address/Address";
import Company from "../../company/Company";

export default function User({id,name,username,email,phone,website,address,company}) {

  return (
      <div className={"user"}>
          <h3>id : {id}</h3>
          <h3>name : {name}</h3>
          <h3>username : {username}</h3>
          <h3>email : {email}</h3>
          <h3>phone : {phone}</h3>
          <h3>website : {website}</h3>
          <Address
              street={address.street}
              suite={address.suite}
              city={address.city}
              zipcode={address.zipcode}
              geo={address.geo}
          />
          <Company
              name={company.name}
              catchPhrase={company.catchPhrase}
              bs={company.bs}
          />
      </div>
  );
}