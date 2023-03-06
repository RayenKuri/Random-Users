interface Users {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  gender: string;
  email: string;
  location: {
    street: {
      number: string;
      name: string;
    };
  };
  phone: string;
  login:{
    uuid: string}
}

export default Users;
